import { useEffect, useState } from 'react';
import { getAllProducts } from '../../services/api/product';
import { Product } from '../../models/productModel';
import PageWrapper from '../../components/UI/PageWrapper';
import ProductGrid from '../../components/UI/ProductGrid';

const CustomerDashboard = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await getAllProducts();
        setProducts(data);
      } catch (err) {
        console.error('Error loading products:', err);
        setError('Failed to load products. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, []);

  const handleProductClick = (product: Product) => {
    console.log('Product clicked:', product);
    // TODO: Add navigation to product detail page or handle product click
  };


  if (error) {
    return (
      <PageWrapper>
        <div>
          {error}
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper loading={isLoading} loadingText="Loading products...">
      <ProductGrid
        products={products}
        onProductClick={handleProductClick}
        emptyTitle="No Products Available"
        emptyMessage="There are currently no products in our catalog. Please check back later."
      />
    </PageWrapper>
  );
};

export default CustomerDashboard;
