import styled from 'styled-components';
import { theme } from '../../../styles/theme';

const getSizeStyles = (size: 'sm' | 'md' | 'lg') => {
  switch (size) {
    case 'sm':
      return `
        max-width: 400px;
      `;
    case 'lg':
      return `
        max-width: 1000px;
        width: 90vw;
      `;
    default: // md
      return `
        max-width: 700px;
        width: 85vw;
      `;
  }
};

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: ${theme.spacing.lg};
  
  @media (max-width: ${theme.breakpoints.sm}) {
    padding: ${theme.spacing.sm};
  }
`;

export const ModalContent = styled.div<{ $size: 'sm' | 'md' | 'lg' }>`
  ${({ $size }) => getSizeStyles($size)}
  
  background: ${theme.colors.white};
  border-radius: ${theme.borderRadius.xl};
  padding: ${theme.spacing['3xl']};
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  box-shadow: ${theme.boxShadow['2xl']};
  box-sizing: border-box;
  
  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing['2xl']};
    border-radius: ${theme.borderRadius.lg};
    width: 95vw;
  }
  
  @media (max-width: ${theme.breakpoints.sm}) {
    padding: ${theme.spacing.lg};
    margin: ${theme.spacing.sm};
    width: calc(100vw - ${theme.spacing.lg});
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacing['3xl']};
  padding-bottom: ${theme.spacing.lg};
  border-bottom: 2px solid ${theme.colors.gray[100]};
`;

export const ModalTitle = styled.h2`
 font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  margin: 0 0 2px 0;
  background: linear-gradient(135deg, #EECE13 0%, #B210FF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 2px;
  }
  
  @media (max-width: 480px) {
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 2px;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: ${theme.fontSize['2xl']};
  color: ${theme.colors.gray[500]};
  cursor: pointer;
  padding: ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.full};
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  
  &:hover {
    background: ${theme.colors.gray[100]};
    color: ${theme.colors.gray[900]};
  }
`;

export const ModalBody = styled.div`
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  box-sizing: border-box;
  
  /* Ensure all child elements don't overflow */
  * {
    box-sizing: border-box;
  }
`; 