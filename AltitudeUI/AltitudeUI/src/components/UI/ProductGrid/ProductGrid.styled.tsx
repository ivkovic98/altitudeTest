import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 3rem 2rem;
  max-width: 800px;
  margin: 0 auto;
  justify-items: center;
  min-height: 50vh;
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  
  @media (max-width: 768px) {
    gap: 1.5rem;
    padding: 2.5rem 1.5rem;
    max-width: 100vw;
  }
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 2rem 1.5rem;
    max-width: 100vw;
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
    gap: 1rem;
  }
`;

export const EmptyState = styled.div`
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  text-align: center;
  color: #718096;
`;

export const EmptyTitle = styled.h3`
  font-family: 'Dubai', sans-serif;
  font-weight: 600;
  font-size: 1.5rem;
  margin: 0 0 1rem 0;
  color: #4A5568;
`;

export const EmptyMessage = styled.p`
  font-family: 'Dubai', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  margin: 0;
  max-width: 400px;
`; 