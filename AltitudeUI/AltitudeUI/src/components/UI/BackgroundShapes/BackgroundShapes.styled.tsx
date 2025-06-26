import styled from 'styled-components';

export const ShapesContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 5;
  overflow: hidden;
`;

export const TopRightShape = styled.div`
  position: absolute;
  z-index: 5;
  top: 0;
  right: 0;
  width: 840px;
  height: 119px;
  transform-origin: top right;
  
  svg {
    width: 100%;
    height: 100%;
  }
  
  @media (max-width: 1024px) {
    width: 70vw;
    height: auto;
    
    svg {
      width: 100%;
      height: auto;
    }
  }
  
  @media (max-width: 768px) {
    width: 80vw;
  }
  
  @media (max-width: 480px) {
    width: 90vw;
  }
`;

export const LeftShape = styled.div`
  position: absolute;
  z-index: 5;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 247px;
  height: 383px;
  transform-origin: left center;
  
  svg {
    width: 100%;
    height: 100%;
  }
  
  @media (max-width: 1024px) {
    width: 200px;
    height: 310px;
  }
  
  @media (max-width: 768px) {
    width: 150px;
    height: 235px;
    opacity: 0.8;
  }
  
  @media (max-width: 480px) {
    width: 120px;
    height: 188px;
    opacity: 0.6;
  }
`; 