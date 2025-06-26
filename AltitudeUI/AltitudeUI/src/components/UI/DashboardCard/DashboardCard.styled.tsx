import styled from 'styled-components';

export const DashboardCardContainer = styled.div`
  background: #DFDFDF;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 320px;
  height: 200px;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  z-index: 10;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    z-index: 15;
  }
  
  @media (max-width: 640px) {
    width: 280px;
    height: 180px;
    padding: 20px;
  }
  
  @media (max-width: 480px) {
    width: 260px;
    height: 160px;
    padding: 16px;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin-bottom: 16px;
`;

export const CardNumber = styled.div`
  font-family: Lato;
  font-weight: 700;
  font-size: 128px;
  line-height: 100%;
  letter-spacing: 0%;
  margin-bottom: 8px;
`;

export const CardIcon = styled.div`
  font-size: 60px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardDescription = styled.div`
  font-family: Lato;
  font-weight: 700;
  font-size: 32px;
  line-height: 100%;
  letter-spacing: 0%;
  color: #666;
  text-align: center;
  margin-top: auto;
`;

export const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
  padding: 2rem;
  justify-content: center;
  justify-items: center;
  align-items: center;
  min-height: 50vh;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  overflow-x: hidden;
  position: relative;
  z-index: 5;
  box-sizing: border-box;
  
  @media (max-width: 768px) {
    gap: 0.75rem;
    padding: 1.5rem;
    max-width: 640px;
  }
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 1.5rem;
    max-width: 320px;
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
    gap: 1rem;
    max-width: 280px;
  }
`;

export const QuickActionsGrid = styled(DashboardGrid)`
  padding-top: 0;
  min-height: auto;
  
  @media (max-width: 768px) {
    padding-top: 0;
  }
  
  @media (max-width: 640px) {
    padding-top: 0;
  }
  
  @media (max-width: 480px) {
    padding-top: 0;
  }
`; 