import React from 'react';
import {
  PersonalInfoCard,
  SettingsTitle,
  ActionButton,
  ButtonIcon,
  ButtonText
} from './PersonalInfoSettings.styled';
import logoutIcon from '../../assets/icons/logout.png';
import { useNavigate } from 'react-router-dom';


const PersonalInfoSettings = ({

}) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <PersonalInfoCard>
      <SettingsTitle>Personal Information Settings</SettingsTitle>

      <ActionButton onClick={handleLogout}>
        <ButtonIcon $color="transparent">
          <img
            src={logoutIcon}
            alt="Logout"
            style={{
              width: '16px',
              height: '16px',

            }}
          />
        </ButtonIcon>
        <ButtonText>Logout</ButtonText>
      </ActionButton>
    </PersonalInfoCard>
  );
};

export default PersonalInfoSettings; 