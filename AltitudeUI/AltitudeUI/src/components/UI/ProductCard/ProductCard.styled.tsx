import styled from 'styled-components';

export const Card = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  width: 300px;
  max-width: 100%;
  height: 350px;
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  }
  
  @media (max-width: 768px) {
    width: 280px;
  }
  
  @media (max-width: 480px) {
    width: 100%;
    max-width: 320px;
    margin: 0 auto;
    
    &:hover {
      transform: translateY(-4px);
    }
  }
`;

interface ImageContainerProps {
  $backgroundImage: string;
}

export const ImageContainer = styled.div<ImageContainerProps>`
  width: 100%;
  height: 200px;
  background-image: url(${props => props.$backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50%;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.3));
  }
  
  @media (max-width: 768px) {
    height: 180px;
  }
  
  @media (max-width: 640px) {
    height: 160px;
  }
`;

export const InfoContainer = styled.div`
  padding: 1.5rem;
  
  @media (max-width: 768px) {
    padding: 1.2rem;
  }
  
  @media (max-width: 640px) {
    padding: 1.2rem;
  }
`;

export const Title = styled.h3`
  font-family: 'Dubai', sans-serif;
  font-weight: 600;
  font-size: 1.1rem;
  line-height: 1.4;
  color: #2D3748;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  
  @media (max-width: 640px) {
    font-size: 1.1rem;
  }
`;

export const Price = styled.span`
  font-family: 'Dubai', sans-serif;
  font-weight: 700;
  font-size: 1.2rem;
  color: #B210FF;
  display: block;
  margin-top: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
  
  @media (max-width: 640px) {
    font-size: 1.2rem;
  }
`;

export const Category = styled.span`
  font-family: 'Dubai', sans-serif;
  font-weight: 400;
  font-size: 0.9rem;
  color: #718096;
  display: block;
  margin-top: 0.25rem;
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
  
  @media (max-width: 640px) {
    font-size: 0.9rem;
  }
`; 