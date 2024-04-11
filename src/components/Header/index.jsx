import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../assets/logo/LOGO.png";

const HeaderContainer = styled.header`
  display: flex;
  max-width: 100%;
  justify-content: space-between;
  margin-bottom: 30px;
  align-items: center;
  @media (max-width: 768px) {
    margin-left: 0px;
    margin-right: 0px;
  }
`;
const LogoImage = styled.img`
  height: 50px; // Ajustez la taille du logo selon vos besoins
`;

const NavHeader = styled.nav`
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
  }
`;

const LinkHeader = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: 600;
  font-size: 20px;
  margin-left: 10px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <LogoImage src={Logo} alt="Logo" />
      <NavHeader>
        <LinkHeader to="/">Accueil</LinkHeader>
        <LinkHeader to="/about">A propos</LinkHeader>
      </NavHeader>
    </HeaderContainer>
  );
}

export default Header;
