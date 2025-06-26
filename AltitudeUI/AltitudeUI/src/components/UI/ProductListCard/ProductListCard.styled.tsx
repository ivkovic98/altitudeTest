import styled from 'styled-components';

export const ProductListCardContainer = styled.div`
  background: #FFFFFF;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 24px;
  position: relative;
  z-index: 10;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
  
  @media (max-width: 768px) {
    padding: 20px;
  }
  
  @media (max-width: 480px) {
    padding: 16px;
  }
`;

export const ProductListHeader = styled.div`
  margin-bottom: 24px;
`;

export const ProductListTitle = styled.h2`
  font-family: 'Lato';
  font-weight: 700;
  font-size: 32px;
  line-height: 100%;
  letter-spacing: 0%;
  color: #454B60;
  margin: 0 0 16px 0;
`;

export const TitleLine = styled.div`
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #B210FF 0%, #764ba2 100%);
  margin-bottom: 16px;
`;

export const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

export const ProductItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  
  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex: 1;
`;

export const ProductImage = styled.div<{ $hasImage: boolean }>`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: 2px solid #E2E8F0;
  flex-shrink: 0;
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ProductName = styled.div`
  font-family: 'Dubai';
  font-weight: 600;
  font-size: 16px;
  color: #2D3748;
`;

export const ProductPrice = styled.div`
  font-family: 'Dubai';
  font-weight: 500;
  font-size: 14px;
  color: #718096;
`;

export const ProductActions = styled.div`
  display: flex;
  gap: 8px;
  
  @media (max-width: 640px) {
    width: 100%;
    justify-content: flex-end;
  }
`;

export const ProductSeparator = styled.div`
  width: 100%;
  height: 1px;
  background: #E2E8F0;
  margin: 0;
`; 