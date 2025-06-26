import styled from 'styled-components';
import Card from '../UI/Card';

export const PersonalInfoCard = styled(Card)`
  max-width: 370px;
`;

export const SettingsTitle = styled.h4`
  font-family: 'Dubai', sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  color: #454B60;
  margin: 0 0 16px 0;
`;

export const ActionButton = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #F8F9FA;
  }
`;

export const ButtonIcon = styled.div<{ $color: string }>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`;

export const ButtonText = styled.span`
  font-family: 'Dubai', sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  color: #454B60;
`; 