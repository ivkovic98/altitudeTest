import styled from 'styled-components';

/* Home - Responsive container */
export const PageWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #FFFFFF;
  overflow: hidden;
  
  @media (max-width: 768px) {
    overflow-y: auto;
  }
`;

/* Decorative SVG Vector */
export const DecorativeVector = styled.div`
  position: absolute;
  width: 100%;
  max-width: 840px;
  height: 119px;
  right: 0;
  top: 0;
  z-index: 1;
  pointer-events: none;
  
  svg {
    width: 100%;
    height: 100%;
  }
  
  @media (max-width: 768px) {
    height: 80px;
  }
  
  @media (max-width: 480px) {
    height: 60px;
  }
`;

/* Second Decorative SVG Vector */
export const DecorativeVector2 = styled.div`
  position: absolute;
  width: 247px;
  height: 305px;
  left: -100px;
  bottom: 50px;
  z-index: 1;
  pointer-events: none;
  
  svg {
    width: 100%;
    height: 100%;
  }
  
  @media (max-width: 768px) {
    width: 180px;
    height: 220px;
    left: -70px;
    bottom: 30px;
  }
  
  @media (max-width: 480px) {
    width: 120px;
    height: 150px;
    left: -50px;
    bottom: 20px;
  }
`;

/* Group 1000011072 - Main form container */
export const FormGroupContainer = styled.div`
  position: absolute;
  width: min(417px, 90vw);
  height: auto;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  
  @media (max-width: 768px) {
    width: min(350px, 95vw);
    top: 45%;
  }
  
  @media (max-width: 480px) {
    width: min(300px, 95vw);
    top: 40%;
  }
`;

/* Hello */
export const HelloText = styled.h1`
  position: absolute;
  width: min(282px, 80vw);
  height: auto;
  left: 50%;
  top: -120px;
  transform: translateX(-50%);
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: clamp(32px, 5vw, 64px);
  line-height: 1.2;
  text-align: center;
  background: linear-gradient(135deg, #EECE13 0%, #B210FF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  margin: 0;
  
  @media (max-width: 768px) {
    top: -100px;
    font-size: clamp(28px, 4.5vw, 48px);
  }
  
  @media (max-width: 480px) {
    top: -80px;
    font-size: clamp(24px, 4vw, 36px);
  }
`;

/* Sign in to your account */
export const SignInText = styled.p`
  position: absolute;
  width: min(282px, 80vw);
  height: auto;
  left: 50%;
  top: -50px;
  transform: translateX(-50%);
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: clamp(16px, 2.5vw, 24px);
  line-height: 1.2;
  text-align: center;
  color: #262626;
  margin: 0;
  
  @media (max-width: 768px) {
    top: -40px;
    font-size: clamp(14px, 2.2vw, 20px);
  }
  
  @media (max-width: 480px) {
    top: -30px;
    font-size: clamp(13px, 2vw, 18px);
  }
`;

/* Group 1 - Username input */
export const InputGroup1 = styled.div`
  position: absolute;
  width: 100%;
  height: 70px;
  left: 0px;
  top: 0px;
  
  @media (max-width: 768px) {
    height: 60px;
  }
  
  @media (max-width: 480px) {
    height: 55px;
  }
`;

/* Rectangle 1 */
export const InputRect1 = styled.div`
  position: absolute;
  width: 100%;
  height: 70px;
  left: 0px;
  top: 0px;
  background: #FFFFFF;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
  border-radius: 40px;
  
  @media (max-width: 768px) {
    height: 60px;
    border-radius: 30px;
  }
  
  @media (max-width: 480px) {
    height: 55px;
    border-radius: 28px;
  }
`;

/* Frame 1 */
export const InputFrame1 = styled.div`
  position: absolute;
  width: auto;
  height: 33px;
  left: 20px;
  top: 18px;
  display: flex;
  align-items: center;
  gap: 10px;
  pointer-events: none;
  
  @media (max-width: 768px) {
    left: 18px;
    top: 15px;
    height: 30px;
  }
  
  @media (max-width: 480px) {
    left: 16px;
    top: 13px;
    height: 28px;
    gap: 8px;
  }
`;

/* profile */
export const ProfileIcon = styled.div`
  width: 24px;
  height: 24px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 27.6%;
    right: 35.12%;
    top: 10.42%;
    bottom: 52.3%;
    background: #9A9A9A;
    border-radius: 50%;
  }
  
  &::after {
    content: '';
    position: absolute;
    left: 16.67%;
    right: 24.23%;
    top: 61.86%;
    bottom: 14.58%;
    background: #9A9A9A;
    border-radius: 0 0 50% 50%;
  }
  
  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
  
  @media (max-width: 480px) {
    width: 18px;
    height: 18px;
  }
`;

/* Username */
export const UsernameLabel = styled.div`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: #C8C8C8;
  
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 16px;
  }
  
  @media (max-width: 480px) {
    font-size: 13px;
    line-height: 15px;
  }
`;

/* Group 2 - Password input */
export const InputGroup2 = styled.div`
  position: absolute;
  width: 100%;
  height: 70px;
  left: 0px;
  top: 120px;
  
  @media (max-width: 768px) {
    height: 60px;
    top: 100px;
  }
  
  @media (max-width: 480px) {
    height: 55px;
    top: 90px;
  }
`;

/* Rectangle 1 */
export const InputRect2 = styled.div`
  position: absolute;
  width: 100%;
  height: 70px;
  left: 0px;
  top: 0px;
  background: #FFFFFF;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
  border-radius: 40px;
  
  @media (max-width: 768px) {
    height: 60px;
    border-radius: 30px;
  }
  
  @media (max-width: 480px) {
    height: 55px;
    border-radius: 28px;
  }
`;

/* Group 1000011071 */
export const PasswordFrame = styled.div`
  position: absolute;
  width: auto;
  height: 25px;
  left: 20px;
  top: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  pointer-events: none;
  
  @media (max-width: 768px) {
    left: 18px;
    top: 17px;
    height: 22px;
  }
  
  @media (max-width: 480px) {
    left: 16px;
    top: 15px;
    height: 20px;
    gap: 8px;
  }
`;

/* Vector - Lock icon */
export const LockIcon = styled.div`
  width: 24px;
  height: 24px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 20%;
    right: 20%;
    top: 25%;
    bottom: 45%;
    border: 2px solid #9A9A9A;
    border-bottom: none;
    border-radius: 8px 8px 0 0;
  }
  
  &::after {
    content: '';
    position: absolute;
    left: 15%;
    right: 15%;
    top: 45%;
    bottom: 15%;
    background: #9A9A9A;
    border-radius: 3px;
  }
  
  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
  
  @media (max-width: 480px) {
    width: 18px;
    height: 18px;
  }
`;

/* Password */
export const PasswordLabel = styled.div`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: #C8C8C8;
  
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 16px;
  }
  
  @media (max-width: 480px) {
    font-size: 13px;
    line-height: 15px;
  }
`;

/* Forgot your password? */
export const ForgotPasswordText = styled.div`
  position: absolute;
  width: fit-content;
  height: auto;
  left: 0px;
  top: 240px;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  text-decoration-line: underline;
  color: #C8C8C8;
  cursor: pointer;
  transition: color 0.3s ease;
  
  &:hover {
    color: #B210FF;
  }
  
  @media (max-width: 768px) {
    top: 200px;
    font-size: 14px;
    line-height: 16px;
  }
  
  @media (max-width: 480px) {
    top: 180px;
    font-size: 13px;
    line-height: 15px;
  }
`;

/* Hidden inputs */
export const HiddenInput = styled.input`
  position: absolute;
  width: calc(100% - 40px);
  height: calc(100% - 20px);
  left: 20px;
  top: 10px;
  border: none;
  outline: none;
  background: transparent;
  font-family: 'Lato';
  font-size: 16px;
  color: #333;
  z-index: 5;
  
  &::placeholder {
    color: transparent;
  }
  
  @media (max-width: 768px) {
    width: calc(100% - 36px);
    height: calc(100% - 18px);
    left: 18px;
    top: 9px;
    font-size: 15px;
  }
  
  @media (max-width: 480px) {
    width: calc(100% - 32px);
    height: calc(100% - 16px);
    left: 16px;
    top: 8px;
    font-size: 14px;
  }
`;

/* Sign In */
export const SubmitButton = styled.button`
  position: absolute;
  width: 100%;
  height: 70px;
  left: 0px;
  top: 290px;
  background: linear-gradient(135deg, #EECE13 0%, #B210FF 100%);
  border-radius: 40px;
  border: none;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #FFFFFF;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 30px rgba(177, 16, 255, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
  
  @media (max-width: 768px) {
    height: 60px;
    top: 240px;
    border-radius: 30px;
    font-size: 16px;
    line-height: 20px;
  }
  
  @media (max-width: 480px) {
    height: 55px;
    top: 220px;
    border-radius: 28px;
    font-size: 15px;
    line-height: 18px;
  }
`;

/* Error Text */
export const ErrorText = styled.div`
  position: absolute;
  width: 100%;
  left: 0px;
  top: 380px;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #dc2626;
  background: rgba(220, 38, 38, 0.1);
  padding: 0.5rem;
  border-radius: 8px;
  border: 1px solid rgba(220, 38, 38, 0.2);
  
  @media (max-width: 768px) {
    top: 320px;
    font-size: 13px;
    line-height: 15px;
  }
  
  @media (max-width: 480px) {
    top: 295px;
    font-size: 12px;
    line-height: 14px;
  }
`;

/* New Input Components for Yup Form */
export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`;

export const InputWrapper = styled.div<{ $hasError: boolean }>`
  position: relative;
  width: 100%;
  height: 70px;
  background: #FFFFFF;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
  border-radius: 40px;
  border: ${props => props.$hasError ? '2px solid #e53e3e' : '2px solid transparent'};
  transition: all 0.3s ease;
  
  &:focus-within {
    box-shadow: 0px 8px 25px rgba(178, 16, 255, 0.2);
    border-color: #B210FF;
  }
  
  @media (max-width: 768px) {
    height: 60px;
    border-radius: 30px;
  }
  
  @media (max-width: 480px) {
    height: 55px;
    border-radius: 28px;
  }
`;

export const InputField = styled.input`
  position: absolute;
  width: calc(100% - 80px);
  height: 100%;
  left: 70px;
  top: 0;
  background: transparent;
  border: none;
  outline: none;
  font-family: 'Dubai', sans-serif;
  font-size: 16px;
  color: #262626;
  z-index: 2;
  
  &::placeholder {
    color: transparent;
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  @media (max-width: 768px) {
    font-size: 14px;
    left: 60px;
    width: calc(100% - 70px);
  }
  
  @media (max-width: 480px) {
    font-size: 13px;
    left: 55px;
    width: calc(100% - 65px);
  }
`;

export const InputIcon = styled.img`
  position: absolute;
  width: 24px;
  height: 24px;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  
  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
    left: 18px;
  }
  
  @media (max-width: 480px) {
    width: 18px;
    height: 18px;
    left: 16px;
  }
`;

export const InputLabel = styled.label<{ $isActive: boolean }>`
  position: absolute;
  left: 70px;
  top: ${props => props.$isActive ? '8px' : '50%'};
  transform: ${props => props.$isActive ? 'translateY(0)' : 'translateY(-50%)'};
  font-family: 'Dubai', sans-serif;
  font-size: ${props => props.$isActive ? '12px' : '16px'};
  color: ${props => props.$isActive ? '#B210FF' : '#999'};
  transition: all 0.3s ease;
  pointer-events: none;
  z-index: 1;
  background: transparent;
  
  @media (max-width: 768px) {
    left: 60px;
    font-size: ${props => props.$isActive ? '11px' : '14px'};
    top: ${props => props.$isActive ? '6px' : '50%'};
  }
  
  @media (max-width: 480px) {
    left: 55px;
    font-size: ${props => props.$isActive ? '10px' : '13px'};
    top: ${props => props.$isActive ? '5px' : '50%'};
  }
`;

export const ErrorMessage = styled.div`
  position: absolute;
  left: 20px;
  top: 100%;
  margin-top: 4px;
  font-family: 'Dubai', sans-serif;
  font-size: 12px;
  color: #e53e3e;
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 11px;
    left: 18px;
  }
  
  @media (max-width: 480px) {
    font-size: 10px;
    left: 16px;
  }
`;
