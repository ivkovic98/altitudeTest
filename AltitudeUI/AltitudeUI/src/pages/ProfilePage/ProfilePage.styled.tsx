import styled from 'styled-components';

export const PageWrapper = styled.div`
  position: relative;
  width: 1920px;
  height: 1048px;
  background: #FFFFFF;
  overflow: hidden;
`;

export const ProfileImageLeft = styled.div`
  position: absolute;
  width: 96px;
  height: 96px;
  left: 108px;
  top: 20px;
  background: url('https://randomuser.me/api/portraits/men/1.jpg') center/cover;
  border-radius: 81px;
`;

export const ProfileImageRight = styled.div`
  position: absolute;
  width: 96px;
  height: 96px;
  left: 1308px;
  top: 140px;
  background: url('https://randomuser.me/api/portraits/men/1.jpg') center/cover;
  border-radius: 81px;
`;

export const EditButtonLeft = styled.div`
  position: absolute;
  width: 35px;
  height: 35px;
  left: 161px;
  top: 85px;
  background: #454B60;
  border-radius: 50%;
  cursor: pointer;
`;

export const EditIconLeft = styled.div`
  position: absolute;
  width: 14.54px;
  height: 14.52px;
  left: 171.5px;
  top: 95.5px;
  background: #FFFFFF;
  
  &::before {
    content: "✏";
    color: #FFFFFF;
    font-size: 12px;
    position: absolute;
    left: -8px;
    top: -6px;
  }
`;

export const EditButtonRight = styled.div`
  position: absolute;
  width: 35px;
  height: 35px;
  left: 1361px;
  top: 205px;
  background: #454B60;
  border-radius: 50%;
  cursor: pointer;
`;

export const EditIconRight = styled.div`
  position: absolute;
  left: 71.43%;
  right: 27.81%;
  top: 20.56%;
  bottom: 78.05%;
  background: #FFFFFF;
  
  &::before {
    content: "✏";
    color: #FFFFFF;
    font-size: 12px;
    position: absolute;
    left: -2px;
    top: -2px;
  }
`;

export const EditProfileTitle = styled.div`
  position: absolute;
  width: 333px;
  height: 63px;
  left: 523px;
  top: 157px;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 58px;
  background: linear-gradient(135deg, #EECE13 0%, #B210FF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const FirstNameLabel = styled.div`
  position: absolute;
  width: 128px;
  height: 30px;
  left: 523px;
  top: 286px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 30px;
  color: #1C1C1C;
`;

export const FirstNameInput = styled.div`
  position: absolute;
  width: 373px;
  height: 50px;
  left: 523px;
  top: 330px;
  background: #FFFFFF;
  border: 2px solid #DFDFDF;
  border-radius: 4px;
`;

export const FirstNameText = styled.div`
  position: absolute;
  width: 14px;
  height: 19px;
  left: 537px;
  top: 345px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #AEAEAE;
`;

export const LastNameLabel = styled.div`
  position: absolute;
  width: 128px;
  height: 30px;
  left: 523px;
  top: 418px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 30px;
  color: #1C1C1C;
`;

export const LastNameInput = styled.div`
  position: absolute;
  width: 373px;
  height: 50px;
  left: 523px;
  top: 462px;
  background: #FFFFFF;
  border: 2px solid #DFDFDF;
  border-radius: 4px;
`;

export const LastNameText = styled.div`
  position: absolute;
  width: 14px;
  height: 19px;
  left: 537px;
  top: 477px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #AEAEAE;
`;

export const EmailLabel = styled.div`
  position: absolute;
  width: 60px;
  height: 30px;
  left: 523px;
  top: 550px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 30px;
  color: #1C1C1C;
`;

export const EmailInputContainer = styled.div`
  position: absolute;
  width: 373px;
  height: 50px;
  left: 523px;
  top: 594px;
  background: #FFFFFF;
  border: 2px solid #DFDFDF;
  border-radius: 4px;
`;

export const EmailText = styled.div`
  position: absolute;
  width: 151px;
  height: 19px;
  left: 537px;
  top: 609px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #1C1C1C;
`;

export const EmailCheckIcon = styled.div`
  position: absolute;
  width: 18px;
  height: 18px;
  left: 864px;
  top: 610px;
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

export const UsernameLabel = styled.div`
  position: absolute;
  width: 105px;
  height: 30px;
  left: 523px;
  top: 682px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 30px;
  color: #1C1C1C;
`;

export const UsernameInputContainer = styled.div`
  position: absolute;
  width: 373px;
  height: 50px;
  left: 523px;
  top: 726px;
  background: #FFFFFF;
  border: 2px solid #DFDFDF;
  border-radius: 4px;
`;

export const UsernameText = styled.div`
  position: absolute;
  width: 14px;
  height: 19px;
  left: 537px;
  top: 741px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #AEAEAE;
`;

export const ContactLabel = styled.div`
  position: absolute;
  width: 80px;
  height: 30px;
  left: 523px;
  top: 814px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 30px;
  color: #1C1C1C;
`;

export const ContactInputContainer = styled.div`
  position: absolute;
  width: 373px;
  height: 50px;
  left: 523px;
  top: 858px;
  background: #FFFFFF;
  border: 2px solid #DFDFDF;
  border-radius: 4px;
`;

export const ContactText = styled.div`
  position: absolute;
  width: 14px;
  height: 19px;
  left: 537px;
  top: 873px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #AEAEAE;
`;

export const PasswordLabel = styled.div`
  position: absolute;
  width: 96px;
  height: 30px;
  left: 1024px;
  top: 286px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 30px;
  color: #1C1C1C;
`;

export const PasswordInputContainer = styled.div`
  position: absolute;
  width: 373px;
  height: 50px;
  left: 1024px;
  top: 330px;
  background: #FFFFFF;
  border: 2px solid #DFDFDF;
  border-radius: 4px;
`;

export const PasswordText = styled.div`
  position: absolute;
  width: 14px;
  height: 19px;
  left: 1038px;
  top: 345px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #AEAEAE;
`;

export const PasswordCheckIcon = styled.div`
  position: absolute;
  width: 18px;
  height: 18px;
  left: 1365px;
  top: 346px;
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

export const CancelButtonContainer = styled.div`
  position: absolute;
  width: 146px;
  height: 46px;
  left: 1024px;
  top: 418px;
  background: #FFFFFF;
  border: 2px solid #FF6B6B;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  &:hover {
    background: #FF6B6B;
    
    & > div {
      color: #FFFFFF;
    }
  }
`;

export const CancelButtonText = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  color: #FF6B6B;
  transition: color 0.3s ease;
`;

export const SaveButtonContainer = styled.div`
  position: absolute;
  width: 144px;
  height: 44px;
  left: 787px;
  top: 1079.92px;
  background: linear-gradient(135deg, #EECE13 0%, #B210FF 100%);
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(238, 206, 19, 0.4);
  }
`;

export const SaveButtonText = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  color: #FFFFFF;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`;

export const SidebarContainer = styled.div`
  position: absolute;
  width: 373px;
  height: 1048px;
  left: 0px;
  top: 0px;
  background: linear-gradient(135deg, #EECE13 0%, #B210FF 100%);
`;

export const SidebarTitle = styled.div`
  position: absolute;
  width: 78px;
  height: 58px;
  left: 147px;
  top: 495px;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 58px;
  color: #FFFFFF;
`;

export const LogoutIcon = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  left: 0px;
  top: 0px;
  background: #454B60;
  border-radius: 50%;
  
  &::before {
    content: "⚪";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 12px;
  }
`;

export const LogoutText = styled.div`
  position: absolute;
  width: 60px;
  height: 19px;
  left: 30px;
  top: 5px;
  font-family: 'Dubai';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #454B60;
  cursor: pointer;
`;

export const UploadOptionsContainer = styled.div`
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 20px;
  z-index: 1500;
`;

export const CameraButton = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(102, 126, 234, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
`;


export const ProfileOptionsContainer = styled.div`
  position: absolute;
  width: 300px;
  height: 180px;
  left: 50px;
  top: 140px;
  background: #FFFFFF;
  border: 1px solid #DFDFDF;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const PersonalInfoText = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #454B60;
`;

export const LogoutButton = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 6px;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #F5F5F5;
  }
`;

export const LogoutButtonIcon = styled.div`
  width: 20px;
  height: 20px;
  background: #FF6B6B;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &::before {
    content: "↪";
    color: white;
    font-size: 12px;
    font-weight: bold;
  }
`;

export const LogoutButtonText = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #454B60;
`;

export const PhotoButton = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 6px;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #F5F5F5;
  }
`;

export const PhotoButtonIcon = styled.div`
  width: 20px;
  height: 20px;
  background: #B210FF;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &::before {
    content: "📷";
    font-size: 12px;
  }
`;

export const PhotoButtonText = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #454B60;
`; 