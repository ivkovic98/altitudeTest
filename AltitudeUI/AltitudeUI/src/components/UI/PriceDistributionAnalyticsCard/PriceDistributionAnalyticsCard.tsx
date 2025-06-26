import React, { useState, useEffect } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { getAllProducts } from '../../../services/api/product';
import {
    CardContainer,
    CardHeader,
    CardTitle,
    TitleLine,
    ChartWrapper
} from './PriceDistributionAnalyticsCard.styled';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

interface PriceRangeData {
    priceRange: string;
    count: number;
    color: string;
}

interface PriceDistributionAnalyticsCardProps {
    title: string;
    className?: string;
}

const PriceDistributionAnalyticsCard: React.FC<PriceDistributionAnalyticsCardProps> = ({
    title,
    className
}) => {
    const [priceRanges, setPriceRanges] = useState<PriceRangeData[]>([]);
    const [loading, setLoading] = useState(true);

    const loadPriceData = async () => {
        try {
            setLoading(true);
            const products = await getAllProducts();

            if (products && products.length > 0) {
                const priceRanges: PriceRangeData[] = [
                    { priceRange: 'Under $100', count: 0, color: '#4F88FF' },
                    { priceRange: '$100 - $500', count: 0, color: '#4F88FF' },
                    { priceRange: '$500 - $1000', count: 0, color: '#4F88FF' },
                    { priceRange: 'Over $1000', count: 0, color: '#4F88FF' }
                ];

                products.forEach((product: any) => {
                    const price = parseFloat(product.price?.toString() || '0');
                    if (price < 100) {
                        priceRanges[0].count++;
                    } else if (price >= 100 && price < 500) {
                        priceRanges[1].count++;
                    } else if (price >= 500 && price < 1000) {
                        priceRanges[2].count++;
                    } else if (price >= 1000) {
                        priceRanges[3].count++;
                    }
                });

                setPriceRanges(priceRanges);
            } else {
                setPriceRanges([]);
            }
        } catch (error) {
            console.error('Error loading price data:', error);
            setPriceRanges([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadPriceData();
    }, []);

    const chartData = {
        labels: priceRanges.map(range => range.priceRange),
        datasets: [
            {
                data: priceRanges.map(range => range.count),
                backgroundColor: '#4F88FF',
                borderColor: '#4F88FF',
                borderWidth: 0,
                borderRadius: 4,
                borderSkipped: false,
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
            title: {
                display: false,
            },
            tooltip: {
                backgroundColor: '#2D3748',
                titleColor: '#FFFFFF',
                bodyColor: '#FFFFFF',
                borderColor: '#4F88FF',
                borderWidth: 1,
                cornerRadius: 8,
                displayColors: false,
                callbacks: {
                    title: (context: any) => context[0].label,
                    label: (context: any) => `${context.parsed.y} products`,
                },
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
                border: {
                    display: false,
                },
                ticks: {
                    color: '#6B7280',
                    font: {
                        family: 'Dubai',
                        size: 12,
                    },
                },
            },
            y: {
                beginAtZero: true,
                grid: {
                    color: '#E5E7EB',
                    drawBorder: false,
                },
                border: {
                    display: false,
                },
                ticks: {
                    color: '#6B7280',
                    font: {
                        family: 'Dubai',
                        size: 12,
                    },
                    stepSize: 1,
                },
            },
        },
        elements: {
            bar: {
                borderRadius: 4,
            },
        },
    };

    if (loading) {
        return (
            <CardContainer className={className}>
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <TitleLine />
                </CardHeader>
                <div style={{ padding: '2rem', textAlign: 'center', color: '#718096' }}>
                    Loading price distribution...
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
            <ChartWrapper>
                {priceRanges.length === 0 ? (
                    <div style={{ padding: '2rem', textAlign: 'center', color: '#718096' }}>
                        No price data available
                    </div>
                ) : (
                    <Bar data={chartData} options={chartOptions} />
                )}
            </ChartWrapper>
        </CardContainer>
    );
};

export default PriceDistributionAnalyticsCard; 