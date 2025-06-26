import React, { useState, useEffect } from 'react';
import { fetchAllUsers, deleteUser } from '../../../services/api/users';
import { User } from '../../../models/userModel';
import { ActionButton, Modal } from '../../UI';
import {
    UserListCardContainer,
    UserListHeader,
    UserListTitle,
    TitleLine,
    UserList,
    UserItem,
    UserInfo,
    UserAvatar,
    UserDetails,
    UserName,
    UserEmail,
    UserDate,
    UserCheckbox,
    UserActions,
    BulkDeleteButton,
    CancelSelectionButton,
    ButtonGroup
} from './UserListCard.styled';

// Confirmation Dialog Component
interface ConfirmDialogProps {
    isOpen: boolean;
    userNames: string;
    userCount: number;
    onConfirm: () => void;
    onCancel: () => void;
    isDeleting: boolean;
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
    isOpen,
    userNames,
    userCount,
    onConfirm,
    onCancel,
    isDeleting
}) => (
    <Modal isOpen={isOpen} onClose={onCancel} size="sm" title="Delete Users">
        <div style={{ padding: '1rem' }}>
            <p style={{ marginBottom: '1rem', color: '#718096' }}>
                Are you sure you want to delete {userCount} user(s)?
            </p>
            <p style={{ marginBottom: '1.5rem', fontWeight: 'bold', color: '#2d3748' }}>
                {userNames}
            </p>
            <p style={{ marginBottom: '1.5rem', color: '#e53e3e', fontSize: '0.9rem' }}>
                This action cannot be undone.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                <ActionButton type="cancel" onClick={onCancel} disabled={isDeleting}>
                    Cancel
                </ActionButton>
                <ActionButton type="accept" onClick={onConfirm} disabled={isDeleting}>
                    {isDeleting ? 'Deleting...' : `Delete ${userCount} User(s)`}
                </ActionButton>
            </div>
        </div>
    </Modal>
);

interface UserListCardProps {
    title: string;
    className?: string;
    maxUsers?: number;
    showActions?: boolean;
    onUserCountChange?: (count: number) => void;
    triggerDelete?: boolean;
    onDeleteTriggered?: () => void;
    refreshTrigger?: boolean;
    onRefreshTriggered?: () => void;
}

const UserListCard: React.FC<UserListCardProps> = ({
    title,
    className,
    maxUsers,
    showActions = true,
    onUserCountChange,
    triggerDelete = false,
    onDeleteTriggered,
    refreshTrigger = false,
    onRefreshTriggered
}) => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(false);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [selectedUserIds, setSelectedUserIds] = useState<string[]>([]);
    const [isDeleting, setIsDeleting] = useState(false);
    const [showCheckboxes, setShowCheckboxes] = useState(false);

    const userRole = localStorage.getItem('role');

    const loadUsers = async () => {
        try {
            setLoading(true);
            const usersData = await fetchAllUsers();
            setUsers(usersData || []);
            onUserCountChange?.(usersData?.length || 0);
        } catch (error) {
            console.error('Error loading users:', error);
            setUsers([]);
            onUserCountChange?.(0);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadUsers();
    }, []);

    // Watch for external delete trigger
    useEffect(() => {
        if (triggerDelete) {
            handleDeleteUsersClick();
            onDeleteTriggered?.();
        }
    }, [triggerDelete]);

    // Watch for external refresh trigger
    useEffect(() => {
        if (refreshTrigger) {
            loadUsers();
            onRefreshTriggered?.();
        }
    }, [refreshTrigger]);

    const handleDeleteUsersClick = () => {
        setShowCheckboxes(true);
        setSelectedUserIds([]);
    };

    const handleCheckboxChange = (userId: string, isChecked: boolean) => {
        if (isChecked) {
            setSelectedUserIds([...selectedUserIds, userId]);
        } else {
            setSelectedUserIds(selectedUserIds.filter(id => id !== userId));
        }
    };

    const handleBulkDeleteClick = () => {
        if (selectedUserIds.length > 0) {
            setShowDeleteConfirm(true);
        }
    };

    const handleConfirmBulkDelete = async () => {
        try {
            setIsDeleting(true);

            // Delete all selected users
            await Promise.all(selectedUserIds.map(userId => deleteUser(userId)));

            // Remove deleted users from local state
            const newUsers = users.filter(user => !selectedUserIds.includes(user.id));
            setUsers(newUsers);
            onUserCountChange?.(newUsers.length);

            // Reset states
            setShowDeleteConfirm(false);
            setSelectedUserIds([]);
            setShowCheckboxes(false);
        } catch (error) {
            console.error('Error deleting users:', error);
            alert('Error deleting users');
        } finally {
            setIsDeleting(false);
        }
    };

    const handleCancelDelete = () => {
        setShowDeleteConfirm(false);
    };

    const handleCancelSelection = () => {
        setShowCheckboxes(false);
        setSelectedUserIds([]);
    };

    const getSelectedUsersNames = () => {
        const selectedUsers = users.filter(user => selectedUserIds.includes(user.id));
        return selectedUsers.map(user => `${user.firstName} ${user.lastName}` || 'Unknown').join(', ');
    };

    const formatDate = (dateString: string | undefined) => {
        if (!dateString) return '13.06.2025.'; // Default date
        try {
            return new Date(dateString).toLocaleDateString('sr-RS');
        } catch {
            return '13.06.2025.';
        }
    };

    if (loading) {
        return (
            <UserListCardContainer className={className}>
                <UserListHeader>
                    <UserListTitle>{title}</UserListTitle>
                    <TitleLine />
                </UserListHeader>
                <div style={{ padding: '2rem', textAlign: 'center', color: '#718096' }}>
                    Loading users...
                </div>
            </UserListCardContainer>
        );
    }

    const displayUsers = maxUsers ? users.slice(0, maxUsers) : users;

    return (
        <>
            <UserListCardContainer className={className}>
                <UserListHeader>
                    <UserListTitle>{title}</UserListTitle>
                    <TitleLine />
                </UserListHeader>


                <UserList>
                    {displayUsers.length === 0 ? (
                        <div style={{ padding: '2rem', textAlign: 'center', color: '#718096' }}>
                            No users available
                        </div>
                    ) : (
                        displayUsers.map((user) => (
                            <UserItem key={user.id}>
                                <UserCheckbox $isVisible={showCheckboxes}>
                                    <input
                                        type="checkbox"
                                        checked={selectedUserIds.includes(user.id)}
                                        onChange={(e) => handleCheckboxChange(user.id, e.target.checked)}
                                    />
                                </UserCheckbox>

                                <UserInfo>
                                    <UserAvatar
                                        style={{
                                            backgroundImage: `url(${user.profileImageUrl || '/images/circle-user.png'})`
                                        }}
                                    />
                                    <UserDetails>
                                        <UserName>{`${user.firstName} ${user.lastName}` || 'Full Name'}</UserName>
                                        <UserDate>{formatDate(user.createdAt)}</UserDate>
                                    </UserDetails>
                                </UserInfo>

                                <UserEmail>{user.email}</UserEmail>
                            </UserItem>
                        ))
                    )}
                </UserList>

                {showCheckboxes && (
                    <ButtonGroup>
                        <ActionButton type="cancel" onClick={handleCancelSelection}>
                            Cancel Selection
                        </ActionButton>
                        {selectedUserIds.length > 0 && (
                            <ActionButton
                                type="accept"
                                onClick={handleBulkDeleteClick}
                                disabled={isDeleting}
                            >
                                Delete {selectedUserIds.length}
                            </ActionButton>
                        )}
                    </ButtonGroup>
                )}
            </UserListCardContainer>

            {/* Delete Confirmation Modal */}
            <ConfirmDialog
                isOpen={showDeleteConfirm}
                userNames={getSelectedUsersNames()}
                userCount={selectedUserIds.length}
                onConfirm={handleConfirmBulkDelete}
                onCancel={handleCancelDelete}
                isDeleting={isDeleting}
            />
        </>
    );
};

export default UserListCard; 