import styled from 'styled-components';

export const InputLabel = styled.div<{ $left: number; $top: number }>`
  position: absolute;
  left: ${props => props.$left}px;
  top: ${props => props.$top}px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 30px;
  color: #1C1C1C;
`;

export const InputField = styled.div<{ $left: number; $top: number }>`
  position: absolute;
  width: 373px;
  height: 50px;
  left: ${props => props.$left}px;
  top: ${props => props.$top}px;
  background: #FFFFFF;
  border: 2px solid #DFDFDF;
  border-radius: 4px;
`;

export const InputText = styled.div<{ $left: number; $top: number }>`
  position: absolute;
  left: ${props => props.$left}px;
  top: ${props => props.$top}px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #1C1C1C;
  max-width: 340px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const CheckIcon = styled.div<{ $left: number; $top: number }>`
  position: absolute;
  width: 18px;
  height: 18px;
  left: ${props => props.$left}px;
  top: ${props => props.$top}px;
  background: #4CAF50;
  border-radius: 50%;
  
  &::before {
    content: "✓";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 12px;
    font-weight: bold;
  }
`; 