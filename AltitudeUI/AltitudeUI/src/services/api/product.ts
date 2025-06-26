import { Product } from "../../models/productModel";
import axiosInstance from "../networkAxios";

const PRODUCT_URL = 'Product';

export const getAllProducts = async (): Promise<Product[]> => {
    const response = await axiosInstance.get(`/${PRODUCT_URL}/get-all`);
    return response.data;
};

export const addProduct = async (productData: {
    name: string;
    description: string;
    category: string;
    price: number;
}, imageFile?: File): Promise<Product> => {
    console.log('addProduct - sending data:', productData);
    console.log('addProduct - imageFile:', imageFile);

    const formData = new FormData();
    formData.append('Name', productData.name);
    formData.append('Description', productData.description);
    formData.append('Category', productData.category);
    formData.append('Price', productData.price.toString());

    if (imageFile) {
        formData.append('ProductImage', imageFile);
    }

    console.log('Sending to URL:', `/${PRODUCT_URL}/add-product`);

    try {
        const response = await axiosInstance.post(`/${PRODUCT_URL}/add-product`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        console.log('Response successful:', response);
        return response.data;
    } catch (error: any) {
        console.error('Error details:', error);
        console.error('Response status:', error.response?.status);
        console.error('Response data:', error.response?.data);
        console.error('Validation errors:', error.response?.data?.errors);
        throw error;
    }
};

export const updateProduct = async (id: string, productData: {
    name: string;
    description: string;
    category: string;
    price: number;
}, imageFile?: File): Promise<void> => {
    console.log('updateProduct - sending data:', productData);

    const formData = new FormData();
    formData.append('Name', productData.name);
    formData.append('Description', productData.description);
    formData.append('Category', productData.category);
    formData.append('Price', productData.price.toString());

    if (imageFile) {
        formData.append('ProductImage', imageFile);
    }

    try {
        const response = await axiosInstance.put(`/${PRODUCT_URL}/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        console.log('Update response successful:', response);
    } catch (error: any) {
        console.error('Update error details:', error);
        console.error('Response status:', error.response?.status);
        console.error('Response data:', error.response?.data);
        throw error;
    }
};

export const deleteProduct = async (id: string): Promise<void> => {
    await axiosInstance.delete(`/${PRODUCT_URL}/${id}`);
};

