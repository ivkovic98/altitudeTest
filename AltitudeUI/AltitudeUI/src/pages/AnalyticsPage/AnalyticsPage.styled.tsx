import styled from 'styled-components';


export const ContentWrapper = styled.div`
  display: flex;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  gap: 2rem;
  
  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 1.5rem;
  }
  
  @media (max-width: 768px) {
    padding: 1rem;
    gap: 1.5rem;
  }
`;

export const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  
  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

export const ChartsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  
  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

export const ChartCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

export const ChartTitle = styled.h3`
  font-family: 'Dubai', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  color: #2d3748;
  margin: 0 0 1.5rem 0;
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }
`;

export const CategoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CategoryItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #f7fafc;
  border-radius: 8px;
  transition: background-color 0.3s ease;
  
  &:hover {
    background: #edf2f7;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

export const CategoryInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

interface CategoryDotProps {
  $color: string;
}

export const CategoryDot = styled.div<CategoryDotProps>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => props.$color};
`;

export const CategoryName = styled.span`
  font-family: 'Dubai', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  color: #4a5568;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const CategoryStats = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.25rem;
  
  @media (max-width: 480px) {
    align-items: flex-start;
  }
`;

export const ProductCount = styled.span`
  font-family: 'Dubai', sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  color: #2d3748;
`;

export const Percentage = styled.span`
  font-family: 'Dubai', sans-serif;
  font-size: 0.8rem;
  color: #718096;
`;

export const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 300px;
  
  @media (max-width: 768px) {
    height: 250px;
  }
`;

interface BarProps {
  $height: number;
  $color: string;
}

export const Bar = styled.div<BarProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem;
  width: ${props => props.$height}%;
  height: 50px;
  background: ${props => props.$color};
  border-radius: 4px;
  color: white;
  font-size: 0.9rem;
  font-weight: 600;
  min-width: 100px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scaleX(1.05);
  }
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
    height: 40px;
    min-width: 80px;
  }
`;

export const BarLabel = styled.span`
  font-weight: 600;
  
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

export const BarValue = styled.span`
  font-weight: 700;
`;

export const SidebarContent = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  @media (max-width: 1024px) {
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const StatCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
  }
  
  @media (max-width: 1024px) {
    flex: 1;
    min-width: 200px;
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const StatNumber = styled.div`
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 3rem;
  color: #667eea;
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const StatLabel = styled.div`
  font-family: 'Dubai', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  color: #4a5568;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`; 