import styled from 'styled-components';

export const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center;
  position: relative;
  z-index: 5;
  padding: 5;
  margin: 0;
`;

interface ContentWrapperProps {
  $hasSidebar: boolean;
}

export const ContentWrapper = styled.div<ContentWrapperProps>`
  flex: 1;
  display: grid;
  grid-template-columns: ${props => props.$hasSidebar ? '360px 1fr' : '1fr'};
  gap: ${props => props.$hasSidebar ? '40px' : '0'};
  padding: 40px;
  width: 100%;
  box-sizing: border-box;
  
  /* Responsive breakpoints */
  @media (max-width: 1024px) {
    grid-template-columns: ${props => props.$hasSidebar ? '320px 1fr' : '1fr'};
    gap: ${props => props.$hasSidebar ? '30px' : '0'};
    padding: 30px;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 20px;
  }
  
  @media (max-width: 480px) {
    padding: 16px;
    gap: 16px;
  }
`;

export const SidebarSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
`;

export const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  width: 100%;
  gap: 20px;
  min-width: 0; /* Prevents flex items from overflowing */
`;

export const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const Spinner = styled.div`
  width: 48px;
  height: 48px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #B210FF;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export const LoadingText = styled.div`
  font-family: 'Dubai', sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #4A5568;
  text-align: center;
`; 