import React, { useState } from 'react';
import { addUser } from '../../services/api/users';
import {
  DashboardCard,
  UserListCard,
  Modal
} from '../../components/UI';
import PageWrapper from '../../components/UI/PageWrapper';
import UserForm from '../../components/UserForm';
import {
  ContentContainer,
  MainContent,
  SidebarContent
} from '../ListContainer.styled';
import { toastService } from '../../utils/toast';

const ActiveUsersPage: React.FC = () => {
  const [userCount, setUserCount] = useState(0);
  const [showAddModal, setShowAddModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [triggerDelete, setTriggerDelete] = useState(false);
  const [refreshTrigger, setRefreshTrigger] = useState(false);
  const userRole = localStorage.getItem('role');

  const handleAddUser = () => {
    setShowAddModal(true);
  };

  const handleDeleteUser = () => {
    setTriggerDelete(true);
  };

  const handleDeleteTriggered = () => {
    setTriggerDelete(false);
  };

  const handleRefreshTriggered = () => {
    setRefreshTrigger(false);
  };

  const handleAddSubmit = async (formData: {
    FirstName: string;
    LastName: string;
    Username: string;
    Email: string;
    Password: string;
    Number: string;
  }) => {
    setIsSubmitting(true);
    try {
      await addUser({
        ...formData,
        UserRole: 1 // Default to Customer role
      });
      setShowAddModal(false);
      toastService.success('User added successfully!');

      // Trigger refresh of UserListCard
      setRefreshTrigger(true);
    } catch (error: any) {
      console.error('Error adding user:', error);
      toastService.error(`Error adding user: ${error.response?.status || 'Unknown error'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseAddModal = () => {
    setShowAddModal(false);
  };

  const handleUserCountChange = (count: number) => {
    setUserCount(count);
  };

  return (
    <PageWrapper>
      <ContentContainer>
        <MainContent>
          <UserListCard
            title="Active Users"
            onUserCountChange={handleUserCountChange}
            triggerDelete={triggerDelete}
            onDeleteTriggered={handleDeleteTriggered}
            refreshTrigger={refreshTrigger}
            onRefreshTriggered={handleRefreshTriggered}
          />
        </MainContent>

        <SidebarContent>
          <DashboardCard
            content={userCount.toString()}
            description="Total Users"
            color="#F59E0B"
          />

          <DashboardCard
            iconSrc="/src/assets/icons/add.png"
            description="Add User"
            onClick={handleAddUser}
          />
          <DashboardCard
            iconSrc="/src/assets/icons/delete.png"
            description="Delete User"
            onClick={handleDeleteUser}
          />
        </SidebarContent>
      </ContentContainer>

      {/* Add User Modal */}
      <Modal
        isOpen={showAddModal}
        onClose={handleCloseAddModal}
        size="lg"
        title="Add New User"
      >
        <UserForm
          onSubmit={handleAddSubmit}
          onCancel={handleCloseAddModal}
          isLoading={isSubmitting}
        />
      </Modal>
    </PageWrapper>
  );
};

export default ActiveUsersPage; 