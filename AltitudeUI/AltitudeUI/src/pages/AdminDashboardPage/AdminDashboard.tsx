import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllProducts } from '../../services/api/product';
import { fetchAllUsers } from '../../services/api/users';

import {
  PageWrapper,
  QuickActionsTitle
} from './AdminDashboardPage.styled';
import { DashboardCard, DashboardGrid, QuickActionsGrid } from '../../components/UI';

const AdminDashboard = () => {
  const [productCount, setProductCount] = useState(0);
  const [activeUserCount, setActiveUserCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const loadData = async () => {
      try {

        const products = await getAllProducts();
        setProductCount(products.length);

        const users = await fetchAllUsers();
        setActiveUserCount(users.length);
      } catch (error: any) {
        console.error('Greška pri dohvatanju podataka:', error);

        // Ako je 401 error, token je istekao
        if (error.response?.status === 401) {
          console.error('Token je istekao ili nije valjan. Preusmeravamo na login...');
          localStorage.removeItem('token');
          localStorage.removeItem('role');
          navigate('/');
          return;
        }

      }
    };

    loadData();
  }, [navigate]);


  return (
    <PageWrapper>
      {/* Statistics Section */}
      <DashboardGrid>
        <DashboardCard
          content={productCount.toString()}
          description="Total Products"
          color="#B210FF"
          onClick={() => navigate('/active-products')}
        />

        <DashboardCard
          content={activeUserCount.toString()}
          description="Active Users"
          color="#F59E0B"
          onClick={() => navigate('/active-users')}
        />
      </DashboardGrid>

      {/* Quick Actions Section */}
      <QuickActionsTitle>Quick Actions</QuickActionsTitle>
      <QuickActionsGrid>
        <DashboardCard
          iconSrc="/src/assets/icons/add.png"
          description="Add Products"
          onClick={() => navigate('/active-products')}
        />

        <DashboardCard
          iconSrc="/src/assets/icons/analytics.png"
          description="Analytics"
          onClick={() => navigate('/analytics')}
        />
      </QuickActionsGrid>
    </PageWrapper>
  );
};

export default AdminDashboard;
