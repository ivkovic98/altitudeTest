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
  height: 350px;
  width: 100%;
  flex: 1;
  
  @media (max-width: 768px) {
    height: 300px;
  }
  
  @media (max-width: 480px) {
    height: 250px;
  }
`;

export const Bar = styled.div<{ $height: number; $color: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60px;
  min-height: ${props => Math.max(props.$height, 10)}%;
  background: ${props => props.$color};
  border-radius: 8px 8px 0 0;
  position: relative;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    filter: brightness(1.1);
  }
  
  @media (max-width: 768px) {
    width: 50px;
  }
  
  @media (max-width: 480px) {
    width: 100%;
    height: 40px;
    min-height: auto;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    padding: 0 1rem;
    margin-bottom: 0.5rem;
  }
`;

export const BarValue = styled.span`
  position: absolute;
  top: -1.5rem;
  font-family: 'Dubai', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #2D3748;
  
  @media (max-width: 480px) {
    position: static;
    color: #FFFFFF;
    font-weight: 700;
  }
`;

export const BarLabel = styled.span`
  position: absolute;
  bottom: -2.5rem;
  font-family: 'Dubai', sans-serif;
  font-weight: 500;
  font-size: 12px;
  color: #4A5568;
  text-align: center;
  width: 80px;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 11px;
    width: 70px;
  }
  
  @media (max-width: 480px) {
    position: static;
    color: #FFFFFF;
    font-weight: 600;
    font-size: 13px;
    width: auto;
  }
`; 