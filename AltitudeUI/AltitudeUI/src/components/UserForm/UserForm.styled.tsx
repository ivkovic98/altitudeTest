import styled from 'styled-components';

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    
    @media (max-width: 768px) {
        gap: 1.25rem;
    }
    
    @media (max-width: 480px) {
        gap: 1rem;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
    margin-top: 2rem;
    width: 100%;
    
    @media (max-width: 768px) {
        gap: 0.75rem;
        flex-direction: column-reverse;
    }
    
    @media (max-width: 480px) {
        gap: 0.5rem;
        margin-top: 1.5rem;
    }
`; 