import React from 'react';
import { Product } from '../../../models/productModel';
import {
    Card,
    ImageContainer,
    InfoContainer,
    Title,
    Price,
    Category
} from './ProductCard.styled';

interface ProductCardProps {
    product: Product;
    onClick?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
    const getDefaultProductImage = (category: string) => {
        const imageMap: { [key: string]: string } = {
            'Electronics': '/images/default-product1.svg',
            'Clothing': '/images/default-product2.svg',
            'Books': '/images/default-product3.svg',
            'Home': '/images/default-product1.svg',
            'Sports': '/images/default-product2.svg'
        };
        return imageMap[category] || '/images/default-product1.svg';
    };

    const displayImage = product.productImageUrl || getDefaultProductImage(product.category);

    const handleClick = () => {
        if (onClick) {
            onClick(product);
        }
    };

    return (
        <Card onClick={handleClick}>
            <ImageContainer $backgroundImage={displayImage} />
            <InfoContainer>
                <Title>{product.name}</Title>
                <Category>{product.category}</Category>
                <Price>${product.price.toFixed(2)}</Price>
            </InfoContainer>
        </Card>
    );
};

export default ProductCard; 