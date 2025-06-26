import React, { useState } from 'react';
import {
  DashboardCard,
  ProductListCard
} from '../../components/UI';
import PageWrapper from '../../components/UI/PageWrapper';
import ProductForm from '../../components/ProductForm';
import { addProduct } from '../../services/api/product';
import { Modal } from '../../components/UI';
import {
  ContentContainer,
  MainContent,
  SidebarContent
} from '../ListContainer.styled';
import { toastService } from '../../utils/toast';

const ActiveProductPage: React.FC = () => {
  const [productCount, setProductCount] = useState(0);
  const [showAddModal, setShowAddModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [refreshTrigger, setRefreshTrigger] = useState(false);
  const userRole = localStorage.getItem('role');

  const handleAddProduct = () => {
    setShowAddModal(true);
  };

  const handleAddSubmit = async (formData: {
    name: string;
    description: string;
    category: string;
    price: number;
  }, imageFile?: File) => {
    setIsSubmitting(true);
    try {
      await addProduct(formData, imageFile);
      setShowAddModal(false);
      toastService.success('Product added successfully!');

      // Trigger refresh of ProductListCard
      setRefreshTrigger(true);
    } catch (error: any) {
      console.error('Error adding product:', error);
      toastService.error(`Error adding product: ${error.response?.status || 'Unknown error'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseAddModal = () => {
    setShowAddModal(false);
  };

  const handleProductCountChange = (count: number) => {
    setProductCount(count);
  };

  const handleRefreshTriggered = () => {
    setRefreshTrigger(false);
  };

  return (
    <PageWrapper>
      <ContentContainer>
        <MainContent>
          <ProductListCard
            title="Active Products"
            onProductCountChange={handleProductCountChange}
            refreshTrigger={refreshTrigger}
            onRefreshTriggered={handleRefreshTriggered}
          />
        </MainContent>

        <SidebarContent>
          <DashboardCard
            content={productCount.toString()}
            description="Total Products"
            color="#B925E4"
          />

          {userRole === 'Admin' && (
            <DashboardCard
              iconSrc="/src/assets/icons/add.png"
              description="Add Products"
              onClick={handleAddProduct}
            />
          )}
        </SidebarContent>
      </ContentContainer>

      {/* Add Product Modal */}
      <Modal
        isOpen={showAddModal}
        onClose={handleCloseAddModal}
        size="md"
        title="Add New Product"
      >
        <ProductForm
          onSubmit={handleAddSubmit}
          onCancel={handleCloseAddModal}
          isLoading={isSubmitting}
        />
      </Modal>
    </PageWrapper>
  );
};

export default ActiveProductPage;
