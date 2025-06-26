import styled from 'styled-components';



export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 1.5rem;
  }
`;

export const ProductCard = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  }
  
  @media (max-width: 480px) {
    &:hover {
      transform: translateY(-4px);
    }
  }
`;

interface ProductImageContainerProps {
  $backgroundImage: string;
}

export const ProductImageContainer = styled.div<ProductImageContainerProps>`
  width: 100%;
  height: 200px;
  background-image: url(${props => props.$backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50%;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.3));
  }
  
  @media (max-width: 480px) {
    height: 160px;
  }
`;

export const ProductInfoContainer = styled.div`
  padding: 1.5rem;
  
  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

export const ProductTitle = styled.h3`
  font-family: 'Dubai', sans-serif;
  font-weight: 600;
  font-size: 1.1rem;
  line-height: 1.4;
  color: #2D3748;
  margin: 0;
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;
