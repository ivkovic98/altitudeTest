import styled from 'styled-components';

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`;

export const Label = styled.label`
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

export const SelectField = styled.select`
  width: 100%;
  height: 50px;
  padding: 10px 24px;
  padding-right: 50px;
  background: #FFFFFF;
  border: none;
  border-radius: 40px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  font-family: 'Dubai', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 100%;
  color: #1C1C1C;
  transition: all 0.3s ease;
  appearance: none;
  cursor: pointer;
  
  &:focus {
    outline: none;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15), 0 0 0 3px rgba(178, 16, 255, 0.1);
  }
  
  &:disabled {
    background-color: #F5F5F5;
    cursor: not-allowed;
    opacity: 0.6;
  }
  
  @media (max-width: 768px) {
    height: 60px;
    padding: 16px 20px;
    padding-right: 45px;
    font-size: 16px;
    border-radius: 30px;
  }
  
  @media (max-width: 480px) {
    height: 50px;
    padding: 12px 16px;
    padding-right: 40px;
    font-size: 14px;
    border-radius: 25px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
  }
`;

export const SelectArrow = styled.div`
  position: absolute;
  right: 24px;
  top: 75%;
  transform: translateY(-50%);
  pointer-events: none;
  color: #AEAEAE;
  font-size: 20px;
  
  @media (max-width: 768px) {
    right: 20px;
    font-size: 18px;
  }
  
  @media (max-width: 480px) {
    right: 16px;
    font-size: 16px;
  }
`;

export const ErrorMessage = styled.span`
  font-family: 'Dubai', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #FF6B6B;
  margin-top: 4px;
`; 