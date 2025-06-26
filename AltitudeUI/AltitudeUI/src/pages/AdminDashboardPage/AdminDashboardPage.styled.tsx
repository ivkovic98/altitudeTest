import styled from 'styled-components';

export const PageWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #FFFFFF;
  overflow: hidden;
`;

export const NavBarFrame = styled.div`
  position: absolute;
  width: 100%;
  height: 140px;
  left: 0px;
  top: 0px;
`;

export const HomeButton = styled.div`
  position: absolute;
  width: 83px;
  height: 20px;
  left: 37.34%;
  top: 65px;
  font-family: 'Dubai';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 34px;
  text-align: center;
  color: #454B60;
  cursor: pointer;
  
  &:hover {
    color: #B210FF;
  }
`;

export const ProductsButton = styled.div`
  position: absolute;
  width: 84px;
  height: 20px;
  left: 44.27%;
  top: 65px;
  font-family: 'Dubai';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 34px;
  text-align: center;
  color: #454B60;
  cursor: pointer;
  
  &:hover {
    color: #B210FF;
  }
`;

export const UsersButton = styled.div`
  position: absolute;
  width: 85px;
  height: 20px;
  left: 51.25%;
  top: 65px;
  font-family: 'Dubai';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 34px;
  text-align: center;
  color: #454B60;
  cursor: pointer;
  
  &:hover {
    color: #B210FF;
  }
`;

export const AnalyticsButton = styled.div`
  position: absolute;
  width: 85px;
  height: 20px;
  left: 58.18%;
  top: 65px;
  font-family: 'Dubai';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 34px;
  text-align: center;
  color: #454B60;
  cursor: pointer;
  
  &:hover {
    color: #B210FF;
  }
`;

export const ProfileButton = styled.div`
  position: absolute;
  width: 85px;
  height: 20px;
  left: 65.1%;
  top: 65px;
  font-family: 'Dubai';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 34px;
  text-align: center;
  color: #454B60;
  cursor: pointer;
  
  &:hover {
    color: #B210FF;
  }
`;

export const LogoutButton = styled.div`
  position: absolute;
  width: 85px;
  height: 20px;
  left: 72.03%;
  top: 65px;
  font-family: 'Dubai';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 34px;
  text-align: center;
  color: #454B60;
  cursor: pointer;
  
  &:hover {
    color: #B210FF;
  }
`;

export const ProfileImage = styled.div`
  position: absolute;
  width: 96px;
  height: 96px;
  left: 5.63%;
  top: 20px;
  background: url(man-having-video-call-with-his-family);
  border-radius: 81px;
`;

export const EditButtonBg = styled.div`
  position: absolute;
  width: 35px;
  height: 35px;
  left: 8.39%;
  top: 85px;
  background: #454B60;
  border-radius: 50%;
`;

export const EditIcon = styled.div`
  position: absolute;
  width: 14.54px;
  height: 14.52px;
  left: 8.93%;
  top: 95.5px;
  background: #FFFFFF;
`;

export const TotalProductsCard = styled.div`
  position: absolute;
  width: 394px;
  height: 247px;
  left: calc(50% - 420px);
  top: 219px;
  background: #FFFFFF;
  border-radius: 10px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

export const TotalProductsNumber = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  left: calc(50% - 273px);
  top: 290px;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 96px;
  line-height: 115px;
  text-align: center;
  color: #B925E4;
  z-index: 10;
`;

export const TotalProductsLabel = styled.div`
  position: absolute;
  width: 200px;
  height: 30px;
  left: calc(50% - 323px);
  top: 395px;
  font-family: 'Dubai';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 34px;
  text-align: center;
  color: #454B60;
  z-index: 10;
`;

export const ActiveUsersCard = styled.div`
  position: absolute;
  width: 394px;
  height: 247px;
  left: calc(50% + 26px);
  top: 219px;
  background: #FFFFFF;
  border-radius: 10px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

export const ActiveUsersNumber = styled.div`
  position: absolute;
  width: 120px;
  height: 100px;
  left: calc(50% + 163px);
  top: 290px;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 96px;
  line-height: 115px;
  text-align: center;
  color: #E6B433;
  z-index: 10;
`;

export const ActiveUsersLabel = styled.div`
  position: absolute;
  width: 200px;
  height: 30px;
  left: calc(50% + 123px);
  top: 395px;
  font-family: 'Dubai';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 34px;
  text-align: center;
  color: #454B60;
  z-index: 10;
`;

export const QuickActionsTitle = styled.div`
  font-family: Lato;
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 0%;
  color: #454B60;
  text-align: left;
  margin-bottom: 0.5rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 2rem;
  
  @media (max-width: 1240px) {
    padding-left: 20px;
  }
  
  @media (max-width: 1024px) {
    padding-left: 1.5rem;
    max-width: calc(100% - 30px);
  }
  
  @media (max-width: 768px) {
    padding-left: 1rem;
    max-width: calc(100% - 20px);
  }
  
  @media (max-width: 480px) {
    padding-left: 0.75rem;
    max-width: calc(100% - 15px);
  }
`;

export const AddProductsCard = styled.div`
  position: absolute;
  width: 390.66px;
  height: 245.12px;
  left: calc(50% - 418px);
  top: 626.88px;
  background: #FFFFFF;
  border-radius: 10px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

export const AddProductsIcon = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  background: #B925E4;
  border-radius: 50%;
  
  &::before {
    content: "+";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 30px;
    font-weight: bold;
  }
`;

export const AddProductsLabel = styled.div`
  position: absolute;
  width: 200px;
  height: 30px;
  left: calc(50% - 323px);
  top: 830px;
  font-family: 'Dubai';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  color: #454B60;
`;

export const AnalyticsCard = styled.div`
  position: absolute;
  width: 390.66px;
  height: 245.12px;
  left: calc(50% + 27px);
  top: 626.88px;
  background: #FFFFFF;
  border-radius: 10px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

export const AnalyticsIcon = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  background: #E6B433;
  border-radius: 50%;
  
  &::before {
    content: "📊";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 24px;
  }
`;


export const AnalyticsLabel = styled.div`
  position: absolute;
  width: 200px;
  height: 30px;
  left: calc(50% + 122px);
  top: 830px;
  font-family: 'Dubai';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  color: #454B60;
`;
