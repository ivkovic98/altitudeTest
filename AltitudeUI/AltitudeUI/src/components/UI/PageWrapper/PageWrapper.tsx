import React from 'react';
import {
  PageContainer,
  ContentWrapper,
  SidebarSection,
  MainSection,
  LoadingOverlay,
  LoadingContainer,
  Spinner,
  LoadingText
} from './PageWrapper.styled';

interface PageWrapperProps {
  children: React.ReactNode;
  sidebar?: React.ReactNode;
  loading?: boolean;
  loadingText?: string;
}

const PageWrapper: React.FC<PageWrapperProps> = ({
  children,
  sidebar,
  loading = false,
  loadingText = "Loading..."
}) => {
  return (
    <PageContainer>
      <ContentWrapper $hasSidebar={!!sidebar}>
        {sidebar && (
          <SidebarSection>
            {sidebar}
          </SidebarSection>
        )}
        <MainSection>
          {children}
        </MainSection>
      </ContentWrapper>

      {loading && (
        <LoadingOverlay>
          <LoadingContainer>
            <Spinner />
            <LoadingText>{loadingText}</LoadingText>
          </LoadingContainer>
        </LoadingOverlay>
      )}
    </PageContainer>
  );
};

export default PageWrapper; 