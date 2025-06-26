import styled from 'styled-components';

export const SectionTitle = styled.h2`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #454B60;
  margin: 0;
`;

export const TitleLine = styled.div`
  width: 100%;
  height: 1px;
  background: #454B60;
  margin: 1rem 0;
`;

export const ProductSeparator = styled.div`
  width: 100%;
  height: 1px;
  background: #454B60;
  margin: 0.5rem 0;
`;

export const ProductList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  gap: 1rem;
`;

export const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
`;

export const ProductImage = styled.div<{ $hasImage: boolean }>`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  background: ${props => props.$hasImage ? 'transparent' : '#f3f4f6'};
  background-size: cover;
  background-position: center;
  border: 2px solid #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9ca3af;
  font-size: 24px;
  flex-shrink: 0;
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const ProductName = styled.h3`
  font-family: 'Dubai', sans-serif;
  font-weight: 600;
  font-size: 1.1rem;
  color: #2d3748;
  margin: 0;
`;

export const ProductPrice = styled.span`
  font-family: 'Dubai', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  color: #667eea;
  margin: 0;
`;

export const ProductActions = styled.div`
  display: flex;
  gap: 0.5rem;
  
  @media (max-width: 768px) {
    width: 100%;
    justify-content: flex-end;
  }
`;

export const EditButton = styled.button`
  width: 144px !important;
  height: 44px !important;
  background: linear-gradient(135deg, #EECE13 0%, #B210FF 100%) !important;
  border-radius: 30px !important;
  border: none !important;
  color: white !important;
  font-size: 0.9rem !important;
  font-weight: 600 !important;
  cursor: pointer;
  transition: all 0.3s ease;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  padding: 0 !important;
  min-width: 144px;
  
  &:hover {
    transform: translateY(-2px) !important;
    box-shadow: 0 5px 15px rgba(238, 206, 19, 0.4) !important;
  }
  
  @media (max-width: 768px) {
    width: 120px !important;
    height: 40px !important;
    font-size: 0.8rem !important;
  }
  
  @media (max-width: 480px) {
    width: 100% !important;
    height: 44px !important;
  }
`;

export const DeleteButton = styled.button`
  background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);
  color: #d63384;
  border: none;
  padding: 0.6rem 1.5rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(255, 154, 158, 0.4);
  }
  
  @media (max-width: 768px) {
    padding: 0.5rem 1.2rem;
    font-size: 0.8rem;
  }
  
  @media (max-width: 480px) {
    width: 100%;
    padding: 0.7rem;
  }
`;

export const StatCard = styled.div`
  position: relative;
  width: 394px;
  height: 247px;
  background: #DFDFDF;
  border-radius: 20px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
  }
`;

export const StatNumber = styled.div`
  position: absolute;
  width: 226px;
  height: 165px;
  left: 39px;
  top: 0px;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 128px;
  line-height: 154px;
  color: #B925E4;
`;

export const StatLabel = styled.div`
  position: absolute;
  left: 39px;
  top: 165px;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  color: #454B60;
`;

export const AddProductCard = styled.div`
  position: relative;
  width: 390.66px;
  height: 245.12px;
  background: #DFDFDF;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
  }
`;

export const AddIcon = styled.div`
  position: absolute;
  left: 39px;
  top: 35px;
  width: 70px;
  height: 70px;
  border: 8px solid #000000;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  color: #000000;
  font-weight: 900;
  font-family: Arial, sans-serif;
`;

export const AddLabel = styled.div`
  position: absolute;
  left: 39px;
  bottom: 20px;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 36px;
  color: #454B60;
  white-space: nowrap;
`;

export const ImageUploadContainer = styled.div`
  border: 2px dashed #cbd5e0;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 1rem;
  
  &:hover {
    border-color: #667eea;
    background: #f7fafc;
  }
`;

export const ImageUploadIcon = styled.div`
  font-size: 3rem;
  color: #a0aec0;
  margin-bottom: 1rem;
`;

export const ImageUploadText = styled.p`
  color: #4a5568;
  margin: 0;
  font-size: 1rem;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 2rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const SubmitButton = styled.button`
  flex: 1;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

export const CancelButton = styled.button`
  flex: 1;
  background: white;
  color: #666;
  border: 2px solid #e5e7eb;
  padding: 0.8rem 1.5rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #f9fafb;
    border-color: #d1d5db;
  }
`;

export const ConfirmDialog = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    margin: 1rem;
  }
`;

export const ConfirmTitle = styled.h3`
  font-family: 'Dubai', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  color: #2d3748;
  margin: 0 0 1rem 0;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const ConfirmMessage = styled.p`
  font-family: 'Dubai', sans-serif;
  font-size: 1rem;
  color: #4a5568;
  line-height: 1.6;
  margin: 0 0 2rem 0;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
  }
`;

export const ConfirmButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const ConfirmButton = styled.button`
  flex: 1;
  background: linear-gradient(135deg, #dc2626 0%, #ef4444 100%);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(220, 38, 38, 0.4);
  }
`;

export const CancelConfirmButton = styled.button`
  flex: 1;
  background: white;
  color: #666;
  border: 2px solid #e5e7eb;
  padding: 0.8rem 1.5rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #f9fafb;
    border-color: #d1d5db;
  }
`; 