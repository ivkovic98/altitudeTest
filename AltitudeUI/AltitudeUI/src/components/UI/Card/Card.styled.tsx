import styled from 'styled-components';

export const CardContainer = styled.div`
  background: #FFFFFF;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  border: 1px solid #F0F0F0;
  padding: 24px;
  transition: all 0.3s ease;
  width: 100%;
  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  }
`;

export const CardHeader = styled.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid #F5F5F5;
`;

export const CardTitle = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  font-size: 18px;
  color: #1C1C1C;
  margin: 0;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`; 