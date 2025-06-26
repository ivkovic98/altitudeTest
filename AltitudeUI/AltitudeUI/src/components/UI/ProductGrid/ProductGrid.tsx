import React from 'react';
import { Product } from '../../../models/productModel';
import ProductCard from '../ProductCard';
import {
    GridContainer,
    EmptyState,
    EmptyTitle,
    EmptyMessage
} from './ProductGrid.styled';

interface ProductGridProps {
    products: Product[];
    onProductClick?: (product: Product) => void;
    emptyMessage?: string;
    emptyTitle?: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({
    products,
    onProductClick,
    emptyTitle = "No Products Found",
    emptyMessage = "There are no products available at the moment."
}) => {
    if (products.length === 0) {
        return (
            <GridContainer>
                <EmptyState>
                    <EmptyTitle>{emptyTitle}</EmptyTitle>
                    <EmptyMessage>{emptyMessage}</EmptyMessage>
                </EmptyState>
            </GridContainer>
        );
    }

    return (
        <GridContainer>
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    onClick={onProductClick}
                />
            ))}
        </GridContainer>
    );
};

export default ProductGrid; 