export interface Product {
    id: string;
    name: string;
    price: number;
    category: string;
    description?: string;
    productImageUrl?: string; // Cloud image URL from backend
}