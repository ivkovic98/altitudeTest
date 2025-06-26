import React, { useEffect, useState } from 'react';
import { getAllProducts, updateProduct, deleteProduct } from '../../../services/api/product';
import { Product } from '../../../models/productModel';
import { ActionButton, Button, Modal } from '../../UI';
import ProductForm from '../../ProductForm';
import { toastService } from '../../../utils/toast';
import {
    ProductListCardContainer,
    ProductListHeader,
    ProductListTitle,
    TitleLine,
    ProductList,
    ProductItem,
    ProductInfo,
    ProductImage,
    ProductDetails,
    ProductName,
    ProductPrice,
    ProductActions,
    ProductSeparator
} from './ProductListCard.styled';

interface ConfirmDialogProps {
    isOpen: boolean;
    productName: string;
    onConfirm: () => void;
    onCancel: () => void;
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({ isOpen, productName, onConfirm, onCancel }) => (
    <Modal isOpen={isOpen} onClose={onCancel} size="sm" showCloseButton={false}>
        <div style={{ padding: '2rem', textAlign: 'center' }}>
            <h3 style={{ marginBottom: '1rem', color: '#2d3748', fontFamily: 'Dubai' }}>Delete Product</h3>
            <p style={{ marginBottom: '2rem', color: '#4a5568', fontFamily: 'Dubai' }}>
                Are you sure you want to delete "{productName}"? This action cannot be undone.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <Button variant="outline" onClick={onCancel}>Cancel</Button>
                <Button variant="danger" onClick={onConfirm}>Delete</Button>
            </div>
        </div>
    </Modal>
);

interface ProductListCardProps {
    title: string;
    className?: string;
    maxProducts?: number;
    showActions?: boolean;
    onProductCountChange?: (count: number) => void;
    refreshTrigger?: boolean;
    onRefreshTriggered?: () => void;
}

const ProductListCard: React.FC<ProductListCardProps> = ({
    title,
    className,
    maxProducts = 5,
    showActions = true,
    onProductCountChange,
    refreshTrigger = false,
    onRefreshTriggered
}) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [editingProduct, setEditingProduct] = useState<Product | null>(null);
    const [deletingProduct, setDeletingProduct] = useState<Product | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const userRole = localStorage.getItem('role');

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

    const loadProducts = async () => {
        try {
            setLoading(true);
            const productsData = await getAllProducts();
            setProducts(productsData);
            onProductCountChange?.(productsData.length);
        } catch (error) {
            console.error('Error loading products:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadProducts();
    }, []);

    // Handle refresh trigger
    useEffect(() => {
        if (refreshTrigger) {
            loadProducts();
            onRefreshTriggered?.();
        }
    }, [refreshTrigger, onRefreshTriggered]);

    const handleEdit = (product: Product) => {
        setEditingProduct(product);
        setShowEditModal(true);
    };

    const handleDelete = (product: Product) => {
        setDeletingProduct(product);
        setShowDeleteConfirm(true);
    };

    const handleEditSubmit = async (formData: {
        name: string;
        description: string;
        category: string;
        price: number;
    }, imageFile?: File) => {
        if (!editingProduct) return;

        setIsSubmitting(true);
        try {
            await updateProduct(editingProduct.id, formData, imageFile);

            setProducts(prev =>
                prev.map(p =>
                    p.id === editingProduct.id
                        ? {
                            ...p,
                            name: formData.name,
                            description: formData.description,
                            category: formData.category,
                            price: formData.price
                        }
                        : p
                )
            );

            setShowEditModal(false);
            setEditingProduct(null);
            toastService.success('Product updated successfully');
        } catch (error: any) {
            console.error('Error updating product:', error);
            toastService.error('Error updating product: ' + (error.response?.status || 'Unknown error'));
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleDeleteConfirm = async () => {
        if (!deletingProduct) return;

        try {
            await deleteProduct(deletingProduct.id);
            const newProducts = products.filter(p => p.id !== deletingProduct.id);
            setProducts(newProducts);
            onProductCountChange?.(newProducts.length);
            setShowDeleteConfirm(false);
            setDeletingProduct(null);
            toastService.success('Product deleted successfully');
        } catch (error) {
            console.error('Error deleting product:', error);
            toastService.error('Error deleting product');
        }
    };

    const handleCloseModals = () => {
        setShowEditModal(false);
        setShowDeleteConfirm(false);
        setEditingProduct(null);
        setDeletingProduct(null);
    };

    if (loading) {
        return (
            <ProductListCardContainer className={className}>
                <ProductListHeader>
                    <ProductListTitle>{title}</ProductListTitle>
                    <TitleLine />
                </ProductListHeader>
                <div style={{ padding: '2rem', textAlign: 'center', color: '#718096' }}>
                    Loading products...
                </div>
            </ProductListCardContainer>
        );
    }


    return (
        <>
            <ProductListCardContainer className={className}>
                <ProductListHeader>
                    <ProductListTitle>{title}</ProductListTitle>
                    <TitleLine />
                </ProductListHeader>
                <ProductList>
                    {products.length === 0 ? (
                        <div style={{ padding: '2rem', textAlign: 'center', color: '#718096' }}>
                            No products available
                        </div>
                    ) : (
                        products.map((product, index) => {
                            const displayImage = product.productImageUrl || getDefaultProductImage(product.category);
                            const isLast = index === products.length - 1;

                            return (
                                <React.Fragment key={product.id}>
                                    <ProductItem>
                                        <ProductInfo>
                                            <ProductImage
                                                $hasImage={true}
                                                style={{ backgroundImage: `url(${displayImage})` }}
                                            />
                                            <ProductDetails>
                                                <ProductName>{product.name}</ProductName>
                                                <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
                                            </ProductDetails>
                                        </ProductInfo>
                                        {userRole === 'Admin' && showActions && (
                                            <ProductActions>
                                                <ActionButton onClick={() => handleEdit(product)} type={'accept'}>
                                                    Edit
                                                </ActionButton>
                                                <ActionButton onClick={() => handleDelete(product)} type={'cancel'}>
                                                    Delete
                                                </ActionButton>
                                            </ProductActions>
                                        )}
                                    </ProductItem>
                                    {!isLast && <ProductSeparator />}
                                </React.Fragment>
                            );
                        })
                    )}
                </ProductList>
            </ProductListCardContainer>

            {/* Edit Product Modal */}
            <Modal
                isOpen={showEditModal}
                onClose={handleCloseModals}
                size="md"
                showCloseButton={false}
            >
                <ProductForm
                    product={editingProduct}
                    onSubmit={handleEditSubmit}
                    onCancel={handleCloseModals}
                    isLoading={isSubmitting}
                />
            </Modal>

            {/* Delete Confirmation Modal */}
            <ConfirmDialog
                isOpen={showDeleteConfirm}
                productName={deletingProduct?.name || ''}
                onConfirm={handleDeleteConfirm}
                onCancel={handleCloseModals}
            />
        </>
    );
};

export default ProductListCard;
export {
    ProductItem,
    ProductInfo,
    ProductImage,
    ProductDetails,
    ProductName,
    ProductPrice,
    ProductActions,
    ProductSeparator
}; 