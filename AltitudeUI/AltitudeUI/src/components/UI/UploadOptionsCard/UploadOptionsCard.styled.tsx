import styled from 'styled-components';
import Card from '../Card';

export const UploadPhotoWrapper = styled.div`
  max-width: 920px;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
 
  
  @media (max-width: 768px) {
    max-width: 100%;
    margin: 0;
  }
`;
export const UploadCardContainer = styled(Card)`
   width: 100%;
  padding: 40px;
  background-color: white;
  box-sizing: border-box;
`;

export const UploadOption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding: 1rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  
  &:hover {
    background: #F7FAFC;
    transform: translateY(-2px);
  }
`;

export const UploadIcon = styled.div`
  width: 60px;
  height: 60px;
  border: 2px solid #E2E8F0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  margin-bottom: 0.75rem;
  color: #718096;
`;

export const UploadLabel = styled.div`
  font-family: 'Dubai', sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #2D3748;
  margin-bottom: 0.25rem;
`;

export const UploadDescription = styled.div`
  font-family: 'Dubai', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #718096;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

export const PreviewImageContainer = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 24px;
  border: 3px solid #E2E8F0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const PreviewText = styled.div`
  font-family: 'Dubai', sans-serif;
  font-weight: 600;
  font-size: 18px;
  color: #2D3748;
  text-align: center;
  margin-bottom: 24px;
`; 