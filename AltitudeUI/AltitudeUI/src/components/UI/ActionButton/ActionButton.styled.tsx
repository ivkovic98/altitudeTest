import styled from 'styled-components';
import { ActionButtonType } from './ActionButton';

interface StyledActionButtonProps {
  $type: ActionButtonType;
}

export const StyledActionButton = styled.button<StyledActionButtonProps>`
  padding: 12px 24px;
  border-radius: 25px;
  border: none;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: 0%;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 120px;

  ${props => props.$type === 'accept' ? `
    background: linear-gradient(135deg, #EECE13 0%, #B210FF 100%);
    color: white;
    
    &:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(178, 16, 255, 0.3);
    }
  ` : `
    background: white;
    position: relative;
    
    /* Gradient border */
    &::before {
      content: '';
      position: absolute;
      inset: 0;
      padding: 2px;
      background: linear-gradient(135deg, #EECE13 0%, #B210FF 100%);
      border-radius: inherit;
      mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      mask-composite: xor;
      -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
    }
    
    /* Gradient text */
    background: linear-gradient(135deg, #EECE13 0%, #B210FF 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    
    &:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(178, 16, 255, 0.2);
    }
  `}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }
`; 