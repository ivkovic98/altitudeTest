import React, { useState, useEffect } from 'react';
import { getAllProducts } from '../../services/api/product';
import { fetchAllUsers } from '../../services/api/users';
import {
  DashboardCard,
  CategoriesAnalyticsCard,
  PriceDistributionAnalyticsCard
} from '../../components/UI';
import PageWrapper from '../../components/UI/PageWrapper';
import {
  ContentContainer,
  MainContent,
  SidebarContent
} from '../ListContainer.styled';

const AnalyticsPage: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    const loadAnalyticsData = async () => {
      try {
        setLoading(true);

        // Load products and users count
        const [productsResponse, usersResponse] = await Promise.all([
          getAllProducts(),
          fetchAllUsers()
        ]);

        const products = productsResponse || [];
        const users = usersResponse || [];
        setTotalProducts(products.length);
        setTotalUsers(users.length);

      } catch (error) {
        console.error('Error loading analytics data:', error);
        setTotalProducts(0);
        setTotalUsers(0);
      } finally {
        setLoading(false);
      }
    };

    loadAnalyticsData();
  }, []);

  if (loading) {
    return (
      <PageWrapper>
        <div style={{ padding: '2rem', textAlign: 'center', color: '#718096' }}>
          Loading analytics...
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <ContentContainer>
        <MainContent>
          <CategoriesAnalyticsCard title="Top Categories Performance" />
          <PriceDistributionAnalyticsCard title="Price Distribution" />
        </MainContent>

        <SidebarContent>
          <DashboardCard
            content={totalProducts.toString()}
            description="Total Products"
            color="#B925E4"
          />
          <DashboardCard
            content={totalUsers.toString()}
            description="Active Users"
            color="#F59E0B"
          />
        </SidebarContent>
      </ContentContainer>
    </PageWrapper>
  );
};

export default AnalyticsPage; 