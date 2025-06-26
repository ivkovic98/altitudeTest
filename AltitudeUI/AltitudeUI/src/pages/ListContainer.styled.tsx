import styled from 'styled-components';

export const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  gap: 2rem;
  padding: 2rem;
  
  @media (max-width: 1240px) {
    max-width: calc(100% - 40px);
    margin: 0 20px;
  }
  
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 1.5rem;
    padding: 1.5rem;
    margin: 0 auto;
    max-width: calc(100% - 30px);
  }
  
  @media (max-width: 768px) {
    padding: 1rem;
    gap: 1rem;
    margin: 0 auto;
    max-width: calc(100% - 20px);
  }
  
  @media (max-width: 480px) {
    padding: 0.75rem;
    gap: 0.75rem;
    max-width: calc(100% - 15px);
  }
`;

export const MainContent = styled.div`
  flex: 0 0 70%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  min-width: 0; /* Prevents flex item from overflowing */
  
  @media (max-width: 1024px) {
    flex: 1;
  }
  
  @media (max-width: 768px) {
    gap: 1.5rem;
  }
  
  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

export const SidebarContent = styled.div`
  flex: 0 0 30%;
  max-width: 30%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 0; /* Prevents flex item from overflowing */
  
  @media (max-width: 1024px) {
    flex: 1;
    max-width: 100%;
  }
  
  @media (max-width: 768px) {
    gap: 0.75rem;
  }
`;
