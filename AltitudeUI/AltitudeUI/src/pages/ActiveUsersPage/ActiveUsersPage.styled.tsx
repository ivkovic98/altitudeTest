import styled from 'styled-components';

export const SectionTitle = styled.h2`
  font-family: 'Dubai', sans-serif;
  font-weight: 700;
  font-size: 2rem;
  color: #2d3748;
  margin: 0 0 1.5rem 0;
  
  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;



export const UsersList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  
  @media (max-width: 768px) {
    padding: 1rem;
    gap: 0.75rem;
  }
`;

export const UserItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: #f7fafc;
  border-radius: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    background: #edf2f7;
    transform: translateY(-1px);
  }
  
  @media (max-width: 768px) {
    padding: 0.75rem;
    gap: 0.75rem;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

interface UserCheckboxProps {
  $isVisible: boolean;
}

export const UserCheckbox = styled.div<UserCheckboxProps>`
  opacity: ${props => props.$isVisible ? 1 : 0};
  visibility: ${props => props.$isVisible ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
  
  input[type="checkbox"] {
    width: 18px;
    height: 18px;
    cursor: pointer;
  }
`;

export const UserAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 1rem;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 0.9rem;
  }
`;

export const UserInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  
  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const UserName = styled.div`
  font-family: 'Dubai', sans-serif;
  font-weight: 600;
  font-size: 1.1rem;
  color: #2d3748;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const UserDate = styled.div`
  font-family: 'Dubai', sans-serif;
  font-size: 0.875rem;
  color: #718096;
`;

export const UserEmail = styled.div`
  font-family: 'Dubai', sans-serif;
  font-size: 0.9rem;
  color: #4a5568;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
  
  @media (max-width: 480px) {
    width: 100%;
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
    max-width: 200px;
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    max-width: none;
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

export const DeleteUsersCard = styled.div`
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(255, 107, 107, 0.3);
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(255, 107, 107, 0.4);
  }
  
  @media (max-width: 1024px) {
    flex: 1;
    max-width: 200px;
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    max-width: none;
  }
`;

export const DeleteIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

export const DeleteLabel = styled.div`
  font-family: 'Dubai', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  color: white;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

interface BulkDeleteButtonProps {
  $isVisible: boolean;
}

export const BulkDeleteButton = styled.button<BulkDeleteButtonProps>`
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 25px;
  font-family: 'Dubai', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: center;
  
  opacity: ${props => props.$isVisible ? 1 : 0};
  visibility: ${props => props.$isVisible ? 'visible' : 'hidden'};
  transform: ${props => props.$isVisible ? 'translateY(0)' : 'translateY(20px)'};
  
  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 107, 107, 0.4);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  @media (max-width: 768px) {
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
  }
`;

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
  padding: 1rem;
`;

export const ConfirmDialog = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    margin: 1rem;
  }
`;

export const ConfirmTitle = styled.h3`
  font-family: 'Dubai', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  color: #2d3748;
  margin: 0 0 1rem 0;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const ConfirmMessage = styled.p`
  font-family: 'Dubai', sans-serif;
  font-size: 1rem;
  color: #4a5568;
  line-height: 1.6;
  margin: 0 0 2rem 0;
  text-align: center;
  
  strong {
    color: #2d3748;
    font-weight: 600;
  }
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
  }
`;

export const ConfirmButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const ConfirmButton = styled.button`
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-family: 'Dubai', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(255, 107, 107, 0.4);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  @media (max-width: 768px) {
    padding: 0.625rem 1.25rem;
    font-size: 0.9rem;
  }
`;

export const CancelButton = styled.button`
  background: transparent;
  color: #4a5568;
  border: 2px solid #e2e8f0;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-family: 'Dubai', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #f7fafc;
    border-color: #cbd5e0;
    transform: translateY(-1px);
  }
  
  @media (max-width: 768px) {
    padding: 0.625rem 1.25rem;
    font-size: 0.9rem;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

export const FormRow = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`;

export const FormButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`;

export const SubmitButton = styled.button`
  background: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-family: 'Dubai', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  @media (max-width: 768px) {
    padding: 0.625rem 1.25rem;
    font-size: 0.9rem;
  }
`; 