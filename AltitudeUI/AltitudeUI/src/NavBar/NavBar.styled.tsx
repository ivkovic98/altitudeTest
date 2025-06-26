import styled from 'styled-components';

// Frame 5 - NavBar container
export const NavbarContainer = styled.div`
  height: 140px;
  width: 100%;
  max-width: 100vw;
  left: 0px;
  top: 0px;
  background: transparent;
  overflow-x: hidden;
  position: relative;
`;

// Profile image
export const ProfileImage = styled.div`
  position: absolute;
  width: 96px;
  height: 96px;
  left: 108px;
  top: 20px;
  background: url('/images/default-profile.svg') center/cover;
  border-radius: 81px;
  cursor: pointer;
`;

// Edit button for profile
export const EditButton = styled.div`
  position: absolute;
  width: 35px;
  height: 35px;
  left: 161px;
  top: 85px;
  background: #454B60;
  border-radius: 50%;
  cursor: pointer;
`;

export const EditIcon = styled.div`
  position: absolute;
  width: 14.54px;
  height: 14.52px;
  left: 171.5px;
  top: 95.5px;
  background: #FFFFFF;
  
  &::before {
    content: "✏";
    color: #FFFFFF;
    font-size: 12px;
    position: absolute;
    left: -8px;
    top: -6px;
  }
`;

// Navigation Container
export const NavMenu = styled.nav`
  position: absolute;
  left: 50%;
  top: 65px;
  transform: translateX(-50%);
  display: flex;
  gap: 40px;
  align-items: center;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

// Simplified Navigation Button
export const NavButton = styled.div`
  font-family: 'Dubai';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 34px;
  text-align: center;
  color: #454B60;
  cursor: pointer;
  transition: color 0.3s ease;
  white-space: nowrap;
  
  &:hover {
    color: #B210FF;
  }
  
  &.logout:hover {
    color: #dc2626;
  }
`;

// Legacy exports for compatibility
export const NavList = styled.div``;
export const NavItem = styled.div``;
export const GradientBar = styled.div``;

export const UploadOptionsContainer = styled.div`
  position: absolute;
  top: 120px;
  left: 50px;
  display: flex;
  gap: 15px;
  z-index: 1040;
`;

export const CameraButton = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 18px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 6px;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(102, 126, 234, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

// Mobile Navigation Components
export const MobileBurgerMenu = styled.button`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    flex-direction: column;
    width: 30px;
    height: 24px;
    cursor: pointer;
    z-index: 1100;
    
    span {
      width: 100%;
      height: 3px;
      background: #454B60;
      border-radius: 2px;
      transition: all 0.3s ease;
      margin: 2px 0;
      
      &:first-child {
        transform-origin: top left;
      }
      
      &:last-child {
        transform-origin: bottom left;
      }
    }
    
    &.open span {
      display: none;
        }
  
    
    &:hover span {
      background: #B210FF;
    }
  }
`;

interface MobileSidebarProps {
  $isOpen: boolean;
}

export const MobileSidebarOverlay = styled.div<MobileSidebarProps>`
  display: none;
  
  @media (max-width: 768px) {
    display: ${props => props.$isOpen ? 'block' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1050;
    backdrop-filter: blur(2px);
  }
`;

export const MobileSidebar = styled.div<MobileSidebarProps>`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    width: 300px;
    height: 100vh;
    background: #FFFFFF;
    box-shadow: -4px 0 20px rgba(0, 0, 0, 0.15);
    transform: translateX(${props => props.$isOpen ? '0' : '100%'});
    transition: transform 0.3s ease;
    z-index: 1060;
    overflow-y: auto;
  }
`;

export const MobileSidebarHeader = styled.div`
  padding: 20px;
  border-bottom: 1px solid #F0F0F0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #F8F9FA;
`;

export const MobileSidebarTitle = styled.h3`
  font-family: 'Dubai', sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #454B60;
  margin: 0;
`;

export const MobileSidebarClose = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #454B60;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;
  
  &:hover {
    background: #E9ECEF;
    color: #B210FF;
  }
`;

export const MobileSidebarContent = styled.div`
  padding: 20px 0;
`;

export const MobileNavItem = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 20px;
  font-family: 'Dubai', sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #454B60;
  cursor: pointer;
  transition: all 0.3s ease;
  border-left: 4px solid transparent;
  
  &:hover {
    background: #F8F9FA;
    color: #B210FF;
    border-left-color: #B210FF;
  }
  
  &:active {
    background: #E9ECEF;
  }
`;
