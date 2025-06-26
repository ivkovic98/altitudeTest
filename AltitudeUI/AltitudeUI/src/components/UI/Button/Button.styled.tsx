import styled from 'styled-components';
import { theme } from '../../../styles/theme';
import { ButtonVariant, ButtonSize } from './Button.types';

const getVariantStyles = (variant: ButtonVariant) => {
  switch (variant) {
    case 'primary':
      return `
        background: linear-gradient(135deg, #EECE13 0%, #B210FF 100%);
        color: ${theme.colors.white};
        border: none;
        width: 144px !important;
        height: 44px !important;
        border-radius: 30px !important;
        padding: 0 !important;
        box-sizing: border-box;
        min-width: 144px;
        max-width: 144px;
        
        &:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(238, 206, 19, 0.4);
        }
      `;
    case 'danger':
      return `
        background: ${theme.gradients.danger};
        color: ${theme.colors.white};
        border: none;
        
        &:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(220, 38, 38, 0.4);
        }
      `;
    case 'delete':
      return `
        background: ${theme.gradients.delete};
        color: ${theme.colors.danger[600]};
        border: none;
        
        &:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(255, 154, 158, 0.4);
        }
      `;
    case 'outline':
      return `
        background: ${theme.colors.white};
        color: ${theme.colors.gray[600]};
        border: 2px solid ${theme.colors.gray[200]};
        
        &:hover {
          background: ${theme.colors.gray[50]};
          border-color: ${theme.colors.gray[300]};
        }
      `;
    case 'ghost':
      return `
        background: transparent;
        color: ${theme.colors.gray[600]};
        border: none;
        
        &:hover {
          background: ${theme.colors.gray[100]};
        }
      `;
    default:
      return `
        background: ${theme.gradients.primary};
        color: ${theme.colors.white};
        border: none;
      `;
  }
};

const getSizeStyles = (size: ButtonSize) => {
  switch (size) {
    case 'sm':
      return `
        padding: 0 !important;
        font-size: ${theme.fontSize.sm};
        border-radius: 30px !important;
        width: 144px !important;
        height: 44px !important;
        min-width: 144px;
        max-width: 144px;
        box-sizing: border-box;
      `;
    case 'lg':
      return `
        padding: ${theme.spacing.lg} ${theme.spacing['2xl']};
        font-size: ${theme.fontSize.lg};
        border-radius: ${theme.borderRadius.lg};
      `;
    default: // md
      return `
        padding: 0 !important;
        font-size: ${theme.fontSize.base};
        border-radius: 30px !important;
        width: 144px !important;
        height: 44px !important;
        min-width: 144px;
        max-width: 144px;
        box-sizing: border-box;
      `;
  }
};

export const StyledButton = styled.button<{
  $variant: ButtonVariant;
  $size: ButtonSize;
  $fullWidth: boolean;
  $isLoading: boolean;
}>`
  ${({ $variant }) => getVariantStyles($variant)}
  ${({ $size }) => getSizeStyles($size)}
  
  font-weight: ${theme.fontWeight.medium};
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.sm};
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none !important;
    box-shadow: none !important;
  }
  
  ${({ $isLoading }) =>
    $isLoading &&
    `
    pointer-events: none;
    opacity: 0.8;
  `}
  
  @media (max-width: ${theme.breakpoints.md}) {
    ${({ $size }) => $size === 'sm' && `
      padding: ${theme.spacing.xs} ${theme.spacing.md};
      font-size: ${theme.fontSize.xs};
    `}
  }
  
  @media (max-width: ${theme.breakpoints.sm}) {
    ${({ $fullWidth }) => !$fullWidth && `
      width: 100%;
      padding: ${theme.spacing.md};
    `}
  }
`;

export const LoadingSpinner = styled.div`
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`; 