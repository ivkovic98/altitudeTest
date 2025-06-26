import React, { useState, useRef, useEffect } from 'react';
import { Product } from '../../models/productModel';
import LabeledInput from '../UI/LabeledInput';
import LabeledSelect from '../UI/LabeledSelect';
import { ActionButton } from '../UI';
import * as Yup from 'yup';
import {
    FormContainer,
    ImageUploadSection,
    ImageUploadContainer,
    ImageUploadText,
    ImageUploadIcon,
    ImagePreview,
    PreviewImage,
    RemoveImageButton,
    HiddenFileInput,
    ButtonContainer,
    FormLabel
} from './ProductForm.styled';
import { toastService } from '../../utils/toast';

interface ProductFormData {
    name: string;
    description: string;
    category: string;
    price: string;
}

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .required('Product name is required')
        .min(2, 'Product name must be at least 2 characters')
        .max(100, 'Product name must be less than 100 characters'),
    description: Yup.string()
        .optional()
        .nullable()
        .min(10, 'Description must be at least 10 characters')
        .max(500, 'Description must be less than 500 characters'),
    category: Yup.string()
        .required('Category is required'),
    price: Yup.number()
        .required('Price is required')
        .positive('Price must be a positive number')
        .min(0.01, 'Price must be at least $0.01')
        .max(999999.99, 'Price must be less than $999,999.99')
});

interface ProductFormProps {
    product?: Product | null;
    onSubmit: (data: {
        name: string;
        description: string;
        category: string;
        price: number;
    }, imageFile?: File) => Promise<void>;
    onCancel: () => void;
    isLoading?: boolean;
}

const ProductForm: React.FC<ProductFormProps> = ({
    product,
    onSubmit,
    onCancel,
    isLoading = false
}) => {
    const [formData, setFormData] = useState<ProductFormData>({
        name: '',
        description: '',
        category: '',
        price: ''
    });
    const [productImage, setProductImage] = useState<string>('');
    const [productImageFile, setProductImageFile] = useState<File | null>(null);
    const [errors, setErrors] = useState<Partial<ProductFormData>>({});
    const fileInputRef = useRef<HTMLInputElement>(null);

    const categoryOptions = [
        { value: 'Tablets', label: 'Tablets' },
        { value: 'Smartphones', label: 'Smartphones' },
        { value: 'Laptops', label: 'Laptops' },
        { value: 'Cameras', label: 'Cameras' },
        { value: 'Gaming', label: 'Gaming' },
        { value: 'Audio', label: 'Audio' },
        { value: 'Wearables', label: 'Wearables' },
        { value: 'Accessories', label: 'Accessories' }
    ];

    useEffect(() => {
        if (product) {
            setFormData({
                name: product.name,
                description: product.description || '',
                category: product.category,
                price: product.price.toString()
            });
            setProductImage(product.productImageUrl || '');
        } else {
            setFormData({ name: '', description: '', category: '', price: '' });
            setProductImage('');
            setProductImageFile(null);
        }
    }, [product]);

    const validateForm = async (): Promise<boolean> => {
        try {
            await validationSchema.validate({
                name: formData.name,
                description: formData.description,
                category: formData.category,
                price: Number(formData.price)
            }, { abortEarly: false });

            setErrors({});
            return true;
        } catch (error) {
            if (error instanceof Yup.ValidationError) {
                const newErrors: Partial<ProductFormData> = {};
                error.inner.forEach((err) => {
                    if (err.path) {
                        newErrors[err.path as keyof ProductFormData] = err.message;
                    }
                });
                setErrors(newErrors);
            }
            return false;
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Clear error when user starts typing
        if (errors[name as keyof ProductFormData]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) {
                toastService.error('File size must be less than 5MB');
                return;
            }

            if (!file.type.startsWith('image/')) {
                toastService.error('Please select an image file');
                return;
            }

            setProductImageFile(file);

            const reader = new FileReader();
            reader.onload = (e) => {
                const imageData = e.target?.result as string;
                setProductImage(imageData);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleImageUploadClick = () => {
        fileInputRef.current?.click();
    };

    const handleRemoveImage = () => {
        setProductImage('');
        setProductImageFile(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const handleSubmit = async () => {
        const isValid = await validateForm();
        if (!isValid) {
            return;
        }

        try {
            const submitData = {
                name: formData.name,
                description: formData.description,
                category: formData.category,
                price: Number(formData.price)
            };
            await onSubmit(submitData, productImageFile || undefined);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };
    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        handleSubmit();
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <FormContainer>
                <LabeledInput
                    label="Product Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter product name"
                    required
                    error={errors.name}
                />
                <LabeledInput
                    label="Description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Enter product description"
                    required
                    error={errors.description}
                />
                <LabeledSelect
                    label="Category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    options={categoryOptions}
                    placeholder="Select Category"
                    required
                    error={errors.category}
                />

                <LabeledInput
                    label="Price"
                    name="price"
                    type="number"
                    value={formData.price}
                    onChange={handleInputChange}
                    placeholder="Enter price"
                    required
                    error={errors.price}
                />

                <ImageUploadSection>
                    <FormLabel>Add Image</FormLabel>
                    {productImage ? (
                        <ImagePreview>
                            <PreviewImage src={productImage} alt="Product preview" />
                            <RemoveImageButton type="button" onClick={handleRemoveImage}>
                                ×
                            </RemoveImageButton>
                        </ImagePreview>
                    ) : (
                        <ImageUploadContainer onClick={handleImageUploadClick}>
                            <ImageUploadText>Add Image</ImageUploadText>
                            <ImageUploadIcon>+</ImageUploadIcon>
                        </ImageUploadContainer>
                    )}

                    <HiddenFileInput
                        ref={fileInputRef}
                        type="file"
                        onChange={handleImageUpload}
                        accept="image/*"
                    />
                </ImageUploadSection>

                <ButtonContainer>
                    <ActionButton
                        type="cancel"
                        onClick={onCancel}
                        disabled={isLoading}
                    >
                        Cancel
                    </ActionButton>
                    <ActionButton
                        type="accept"
                        onClick={handleSubmit}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Saving...' : (product ? 'Update Product' : 'Add Product')}
                    </ActionButton>
                </ButtonContainer>
            </FormContainer>
        </form>
    );
};

export default ProductForm; 