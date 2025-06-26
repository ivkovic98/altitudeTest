import styled from 'styled-components';

export const UserListCardContainer = styled.div`
  background: #FFFFFF;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 24px;
  position: relative;
  z-index: 10;
  transition: all 0.3s ease;
 
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
  
  @media (max-width: 768px) {
    padding: 20px;
  }
  
  @media (max-width: 480px) {
    padding: 16px;
  }
`;

export const UserListHeader = styled.div`
  margin-bottom: 24px;
`;

export const UserListTitle = styled.h2`
    font-family: 'Lato';
  font-weight: 700;
  font-size: 32px;
  line-height: 100%;
  letter-spacing: 0%;
  color: #454B60;
  margin: 0 0 16px 0;
`;

export const TitleLine = styled.div`
    width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #B210FF 0%, #764ba2 100%);
  margin-bottom: 16px;
`;

export const UserActions = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;
    gap: 1rem;
`;

export const UserList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const UserItem = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem 0;
    gap: 1rem;
    border-bottom: 1px solid #e5e7eb;
    
    &:last-child {
        border-bottom: none;
    }
    
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.75rem;
        padding: 0.75rem 0;
    }
`;

export const UserCheckbox = styled.div<{ $isVisible: boolean }>`
    display: ${props => props.$isVisible ? 'flex' : 'none'};
    align-items: center;
    
    input[type="checkbox"] {
        width: 18px;
        height: 18px;
        cursor: pointer;
        accent-color: #B210FF;
    }
`;

export const UserInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    flex: 1;
    min-width: 0;
    
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const UserAvatar = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: #f3f4f6;
    border: 2px solid #e5e7eb;
    flex-shrink: 0;
    
    @media (max-width: 768px) {
        width: 50px;
        height: 50px;
    }
`;

export const UserDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    min-width: 0;
    flex: 1;
`;

export const UserName = styled.h3`
    font-family: 'Dubai', sans-serif;
    font-weight: 600;
    font-size: 1.1rem;
    color: #2d3748;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    
    @media (max-width: 768px) {
        font-size: 1rem;
        white-space: normal;
    }
`;

export const UserDate = styled.span`
    font-family: 'Dubai', sans-serif;
    font-weight: 400;
    font-size: 0.9rem;
    color: #718096;
    margin: 0;
`;

export const UserEmail = styled.span`
    font-family: 'Dubai', sans-serif;
    font-weight: 500;
    font-size: 1rem;
    color: #4a5568;
    flex-shrink: 0;
    
    @media (max-width: 768px) {
        font-size: 0.9rem;
        align-self: flex-start;
        margin-left: 76px; // Align with user details when avatar is 50px + 1rem gap
    }
    
    @media (max-width: 480px) {
        margin-left: 66px; // Adjust for smaller avatar
    }
`;

export const ButtonGroup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;
    margin-top: 1.5rem;
    align-items: center;
`;

export const BulkDeleteButton = styled.button<{ $isVisible: boolean }>`
    display: ${props => props.$isVisible ? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 25px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    min-width: 160px;
    
    &:hover:not(:disabled) {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(255, 107, 107, 0.4);
    }
    
    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
        transform: none;
    }
    
    @media (max-width: 768px) {
        padding: 0.6rem 1.2rem;
        font-size: 0.9rem;
        min-width: 140px;
    }
`;

export const CancelSelectionButton = styled.button`
    background: transparent;
    border: 2px solid #cbd5e0;
    color: #718096;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
        border-color: #a0aec0;
        color: #4a5568;
        background: rgba(203, 213, 224, 0.1);
    }
    
    @media (max-width: 768px) {
        padding: 0.4rem 0.8rem;
        font-size: 0.8rem;
    }
`; 