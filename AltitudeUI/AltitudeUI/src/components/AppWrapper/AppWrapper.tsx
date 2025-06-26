import React from 'react';
import {
  AppContainer,
  AppHeader,
  AppMain,
  AppContent
} from './AppWrapper.styled';

interface AppWrapperProps {
  children: React.ReactNode;
  header?: React.ReactNode;
}

const AppWrapper: React.FC<AppWrapperProps> = ({ children, header }) => {
  return (
    <AppContainer>
      {header && (
        <AppHeader>
          {header}
        </AppHeader>
      )}
      <AppMain>
        <AppContent>
          {children}
        </AppContent>
      </AppMain>
    </AppContainer>
  );
};

export default AppWrapper; 