import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileImageUpload from '../components/UI/ProfileImageUpload';
import {
  NavbarContainer,
  NavMenu,
  NavButton,
  MobileBurgerMenu,
  MobileSidebarOverlay,
  MobileSidebar,
  MobileSidebarHeader,
  MobileSidebarTitle,
  MobileSidebarClose,
  MobileSidebarContent,
  MobileNavItem
} from './NavBar.styled';

const NavBar = () => {
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState<string>('');
  const userRole = localStorage.getItem('role');
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState<boolean>(false);

  useEffect(() => {
    const profileImageUrl = localStorage.getItem('profileImageUrl');
    if (profileImageUrl) {
      setProfileImage(profileImageUrl);
    }
  }, [navigate]);

  const handleHomeNavigation = () => {
    if (userRole === 'Admin') {
      navigate('/admin-dashboard');
    } else if (userRole === 'Customer') {
      navigate('/customer-dashboard');
    } else {
      navigate('/');
    }
  };



  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  const closeMobileSidebar = () => {
    setIsMobileSidebarOpen(false);
  };

  const handleMobileNavigation = (path: string) => {
    navigate(path);
    closeMobileSidebar();
  };

  return (
    <>
      <NavbarContainer>
        <div style={{ marginTop: '20px', marginLeft: '20px' }}>

          <ProfileImageUpload
            profileImage={profileImage}
            onImageClick={() => navigate('/profile')}
            showEditButton={true}
          />
        </div>

        {/* Mobile Burger Menu */}
        <MobileBurgerMenu
          onClick={toggleMobileSidebar}
          className={isMobileSidebarOpen ? 'open' : ''}
        >
          <span></span>
          <span></span>
          <span></span>
        </MobileBurgerMenu>

        {/* Desktop Navigation Menu */}
        <NavMenu>
          <NavButton onClick={handleHomeNavigation}>
            Home
          </NavButton>

          <NavButton onClick={() => navigate('/active-products')}>
            Products
          </NavButton>

          {/* Users button - Admin only */}
          {userRole === 'Admin' && (
            <NavButton onClick={() => navigate('/active-users')}>
              Users
            </NavButton>
          )}

          <NavButton onClick={() => navigate('/profile')}>
            Profile
          </NavButton>
        </NavMenu>

      </NavbarContainer>

      {/* Mobile Sidebar Overlay */}
      <MobileSidebarOverlay
        $isOpen={isMobileSidebarOpen}
        onClick={closeMobileSidebar}
      />

      {/* Mobile Sidebar */}
      <MobileSidebar $isOpen={isMobileSidebarOpen}>
        <MobileSidebarHeader>
          <MobileSidebarTitle>Menu</MobileSidebarTitle>
          <MobileSidebarClose onClick={closeMobileSidebar}>
            ×
          </MobileSidebarClose>
        </MobileSidebarHeader>

        <MobileSidebarContent>
          <MobileNavItem onClick={() => {
            handleHomeNavigation();
            closeMobileSidebar();
          }}>
            Home
          </MobileNavItem>

          <MobileNavItem onClick={() => handleMobileNavigation('/active-products')}>
            Products
          </MobileNavItem>

          {/* Users item - Admin only */}
          {userRole === 'Admin' && (
            <MobileNavItem onClick={() => handleMobileNavigation('/active-users')}>
              Users
            </MobileNavItem>
          )}

          <MobileNavItem onClick={() => handleMobileNavigation('/profile')}>
            Profile
          </MobileNavItem>
        </MobileSidebarContent>
      </MobileSidebar>
    </>
  );
};

export default NavBar; 