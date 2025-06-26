import React, { useState, useEffect } from 'react';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { getAllProducts } from '../../../services/api/product';
import {
    CardContainer,
    CardHeader,
    CardTitle,
    TitleLine,
    ChartWrapper,
    LegendContainer,
    LegendItem,
    LegendDot,
    LegendText,
    LegendStats
} from './CategoriesAnalyticsCard.styled';

ChartJS.register(ArcElement, Tooltip, Legend);

interface CategoryDataWithColor {
    name: string;
    count: number;
    percentage: number;
    color: string;
}

interface CategoriesAnalyticsCardProps {
    title: string;
    className?: string;
}

const CategoriesAnalyticsCard: React.FC<CategoriesAnalyticsCardProps> = ({
    title,
    className
}) => {
    const [categoryData, setCategoryData] = useState<CategoryDataWithColor[]>([]);
    const [loading, setLoading] = useState(true);

    const loadCategoryData = async () => {
        try {
            setLoading(true);
            const products = await getAllProducts();

            if (products && products.length > 0) {
                const categoryMap = new Map<string, number>();
                products.forEach((product: any) => {
                    const category = product.category || 'Other';
                    categoryMap.set(category, (categoryMap.get(category) || 0) + 1);
                });

                const colors = ['#4F88FF', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#06B6D4', '#84CC16'];
                const totalProducts = products.length;
                const categoriesWithColors: CategoryDataWithColor[] = Array.from(categoryMap.entries())
                    .map(([categoryName, count], index) => ({
                        name: categoryName,
                        count,
                        percentage: Math.round((count / totalProducts) * 100),
                        color: colors[index % colors.length]
                    }))
                    .sort((a, b) => b.count - a.count)
                    .slice(0, 6);

                setCategoryData(categoriesWithColors);
            } else {
                setCategoryData([]);
            }
        } catch (error) {
            console.error('Error loading category data:', error);
            setCategoryData([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadCategoryData();
    }, []);

    const chartData = {
        labels: categoryData.map(cat => cat.name),
        datasets: [
            {
                data: categoryData.map(cat => cat.count),
                backgroundColor: categoryData.map(cat => cat.color),
                borderColor: '#FFFFFF',
                borderWidth: 2,
                hoverBorderWidth: 3,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                backgroundColor: '#2D3748',
                titleColor: '#FFFFFF',
                bodyColor: '#FFFFFF',
                borderColor: '#4F88FF',
                borderWidth: 1,
                cornerRadius: 8,
                displayColors: true,
                callbacks: {
                    label: (context: any) => {
                        const category = categoryData[context.dataIndex];
                        return `${category.name}: ${category.count} products (${category.percentage}%)`;
                    },
                },
            },
        },
        cutout: '60%',
    };

    if (loading) {
        return (
            <CardContainer className={className}>
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <TitleLine />
                </CardHeader>
                <div style={{ padding: '2rem', textAlign: 'center', color: '#718096' }}>
                    Loading categories...
                </div>
            </CardContainer>
        );
    }

    return (
        <CardContainer className={className}>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <TitleLine />
            </CardHeader>
            {categoryData.length === 0 ? (
                <div style={{ padding: '2rem', textAlign: 'center', color: '#718096' }}>
                    No categories available
                </div>
            ) : (
                <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', flex: 1 }}>
                    <ChartWrapper>
                        <Doughnut data={chartData} options={chartOptions} />
                    </ChartWrapper>
                    <LegendContainer>
                        {categoryData.map((category) => (
                            <LegendItem key={category.name}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <LegendDot $color={category.color} />
                                    <LegendText>{category.name}</LegendText>
                                </div>
                                <LegendStats>
                                    <div>{category.count} products</div>
                                    <div>{category.percentage}%</div>
                                </LegendStats>
                            </LegendItem>
                        ))}
                    </LegendContainer>
                </div>
            )}
        </CardContainer>
    );
};

export default CategoriesAnalyticsCard; 