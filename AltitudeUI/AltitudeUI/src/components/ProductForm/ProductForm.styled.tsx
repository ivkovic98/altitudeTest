import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    gap: 20px;
  }
  
  @media (max-width: 480px) {
    gap: 16px;
  }
`;

export const ImageUploadSection = styled.div`
  width: 100%;
`;

export const ImageUploadContainer = styled.div`
  width: 100%;
  height: 50px;
background: #FFFFFF;
  border-radius: 40px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-sizing: border-box;
  
  &:hover {
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15), 0 0 0 3px rgba(178, 16, 255, 0.1);
  }
  
  @media (max-width: 768px) {
    height: 60px;
    padding: 0 20px;
    border-radius: 30px;
  }
  
  @media (max-width: 480px) {
    height: 50px;
    padding: 0 16px;
    border-radius: 25px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
  }
`;

export const ImageUploadText = styled.span`
  font-family: 'Dubai', sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: #AEAEAE;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
  
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const ImageUploadIcon = styled.div`
  font-size: 24px;
  color: #AEAEAE;
  
  @media (max-width: 768px) {
    font-size: 22px;
  }
  
  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const ImagePreview = styled.div`
  width: 100%;
  height: 200px;
  background: #FFFFFF;
  border-radius: 20px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-bottom: 12px;
  position: relative;
  
  @media (max-width: 768px) {
    height: 180px;
    border-radius: 16px;
  }
  
  @media (max-width: 480px) {
    height: 160px;
    border-radius: 12px;
  }
`;

export const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const RemoveImageButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 32px;
  height: 32px;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 18px;
  color: #FF6B6B;
  
  &:hover {
    background: rgba(255, 255, 255, 1);
    transform: scale(1.1);
  }
`;

export const HiddenFileInput = styled.input`
  display: none;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;
  justify-content: flex-end;
  margin-top: 24px;
  
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 12px;
  }
`;

export const FormLabel = styled.label`
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  font-size: 26px;
  line-height: 100%;
  letter-spacing: 0%;
  color: #2D3748;
  margin-bottom: 12px;
  display: block;
  
  @media (max-width: 768px) {
    font-size: 22px;
    margin-bottom: 10px;
  }
  
  @media (max-width: 480px) {
    font-size: 18px;
    margin-bottom: 8px;
  }
`; 