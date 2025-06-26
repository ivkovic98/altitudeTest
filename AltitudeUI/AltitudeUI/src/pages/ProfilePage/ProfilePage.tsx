import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserProfile } from '../../models/profileModel';
import PageWrapper from '../../components/UI/PageWrapper';
import PersonalInfoSettings from '../../components/PersonalInfoSettings';
import ProfileForm from '../../components/ProfileForm';
import { getCurrentUserProfile } from '../../services/api/users';
import { decodeJwtToken } from '../../utils';


const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const [userProfile, setUserProfile] = useState<UserProfile>({} as UserProfile);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const loadUserProfile = async () => {
    const token = localStorage.getItem('token');
    console.log('ProfilePage: Token found:', !!token);

    if (!token) {
      console.log('ProfilePage: No token found, redirecting to login');
      navigate('/');
      return;
    }

    try {
      setIsLoading(true);
      const jwtData = decodeJwtToken(token);
      console.log('ProfilePage: JWT decoded:', jwtData);

      if (!jwtData) {
        console.log('ProfilePage: Failed to decode JWT, redirecting to login');
        localStorage.removeItem('token');
        navigate('/');
        return;
      }

      if (jwtData.isExpired) {
        console.log('ProfilePage: Token expired, redirecting to login');
        localStorage.removeItem('token');
        navigate('/');
        return;
      }

      const currentUser = await getCurrentUserProfile();
      console.log('ProfilePage: API response:', currentUser);

      setUserProfile({
        firstName: currentUser.firstName || '',
        lastName: currentUser.lastName || '',
        email: currentUser.email || '',
        username: currentUser.username || '',
        contactNumber: currentUser.number || '',
        profileImage: currentUser.profileImageUrl || ''
      });

      console.log('ProfilePage: User profile set:', currentUser);
    } catch (error) {
      console.error('ProfilePage: Error loading profile:', error);
      setError('Failed to load profile data. Please try refreshing the page.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadUserProfile();
  }, [navigate]);

  const handleUpdateSuccess = () => {
    // Reload user profile after successful update
    loadUserProfile();
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
    <PageWrapper
      loading={isLoading}
      loadingText="Loading your profile..."
      sidebar={<PersonalInfoSettings />}
    >
      {!isLoading && (
        <ProfileForm
          initialData={{
            firstName: userProfile.firstName,
            lastName: userProfile.lastName,
            email: userProfile.email,
            username: userProfile.username,
            contactNumber: userProfile.contactNumber,
            password: userProfile.password,
            profileImage: userProfile.profileImage
          }}
          onUpdateSuccess={handleUpdateSuccess}
        />
      )}
    </PageWrapper>
  );
};

export default ProfilePage; 