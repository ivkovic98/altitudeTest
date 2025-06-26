import styled from 'styled-components';

export const AppContainer = styled.div`
  padding: 8;
  min-height: 100vh;
  display: flex;
  width: 100%;
  flex-direction: column;
  position: relative;
  overflow-x: hidden;
`;

export const AppHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 9;
  background: transparent;
`;

export const AppMain = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const AppContent = styled.div`
  flex: 1;
  width: 100%;
  position: relative;
`; 