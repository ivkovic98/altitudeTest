import styled from 'styled-components';
import Card from '../UI/Card';

export const FormWrapper = styled.div`
  max-width: 920px;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  
  @media (max-width: 768px) {
    max-width: 100%;
    margin: 0;
  }
`;

export const FormCard = styled(Card)`
  width: 100%;
  padding: 40px;
  background-color: white;
  box-sizing: border-box;
  margin-left: 50px;
  @media (max-width: 768px) {
    padding: 24px;
    margin: 0;
    border-radius: 8px;
  }
  
  @media (max-width: 480px) {
    padding: 16px;
    border-radius: 0;
    box-shadow: none;
    border: none;
  }
`;

export const FormTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FormTitle = styled.h2`
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 58px;
  margin: 0 0 40px 0;
  background: linear-gradient(135deg, #EECE13 0%, #B210FF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 36px;
    line-height: 44px;
    margin-bottom: 32px;
  }
  
  @media (max-width: 480px) {
    font-size: 28px;
    line-height: 34px;
    margin-bottom: 24px;
  }
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  
  @media (max-width: 768px) {
    gap: 28px;
  }
  
  @media (max-width: 480px) {
    gap: 24px;
  }
`;

export const InputRow = styled.div`
  display: flex;
  gap: 24px;
  width: 100%;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
  
  @media (max-width: 480px) {
    gap: 16px;
  }
`;

export const InputGroup = styled.div`
  flex: 1;
  min-width: 0; /* Prevents flex items from overflowing */
  width: 100%;
  
  @media (max-width: 768px) {
    flex: none;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.75rem;
  }
  
  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`; 