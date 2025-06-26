import styled from 'styled-components';

export const CardContainer = styled.div`
  background: #FFFFFF;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

export const CardHeader = styled.div`
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

export const CardTitle = styled.h2`
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 0%;
  color: #2D3748;
  margin: 0 0 1rem 0;
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
  
  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const TitleLine = styled.div`
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #B210FF 0%, rgba(178, 16, 255, 0.1) 100%);
  border-radius: 1px;
`;

export const ChartWrapper = styled.div`
  width: 250px;
  height: 250px;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
  
  @media (max-width: 480px) {
    width: 150px;
    height: 150px;
  }
`;

export const LegendContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
  
  @media (max-width: 768px) {
    gap: 0.75rem;
  }
  
  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`;

export const LegendItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  background: #F8F9FA;
  border-radius: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    background: #F1F3F4;
    transform: translateY(-1px);
  }
  
  @media (max-width: 768px) {
    padding: 0.5rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

export const LegendDot = styled.div<{ $color: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => props.$color};
  flex-shrink: 0;
  
  @media (max-width: 480px) {
    width: 10px;
    height: 10px;
  }
`;

export const LegendText = styled.span`
  font-family: 'Dubai', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #2D3748;
  
  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

export const LegendStats = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.25rem;
  font-family: 'Dubai', sans-serif;
  font-size: 12px;
  
  div:first-child {
    color: #4A5568;
    font-weight: 500;
  }
  
  div:last-child {
    color: #B210FF;
    font-weight: 600;
  }
  
  @media (max-width: 768px) {
    align-items: flex-start;
  }
  
  @media (max-width: 480px) {
    font-size: 11px;
  }
`; 