import styled from 'styled-components';

export const ProfileImageContainer = styled.div`
  position: relative;
  display: inline-block;
      z-index: 50;
      border: 3px solid #B210FF;
      border-radius: 50%;
      width: 96px;
      height: 96px;
      overflow: hidden;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #fff;
`;

export const ProfileImage = styled.div`
  width: 96px;
  height: 96px;
  
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const EditButton = styled.div`
  width: 35px;
  height: 35px;
  bottom: 10px;
  right: 10px;
  position: absolute;
  background: #454B60;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  &:hover {
    background: #B210FF;
    transform: scale(1.1);
  }
`;

export const EditIcon = styled.div`
  width: 14px;
  height: 14px;
  position: relative;
  background-image: url('/src/assets/icons/edit.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const UploadOptionsOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1050;
  backdrop-filter: blur(2px);
`;

export const LoadingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 60;
`;

export const Spinner = styled.div`
  width: 24px;
  height: 24px;
  border: 3px solid #ffffff33;
  border-top: 3px solid #B210FF;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`; 