import { NavLink } from "react-router-dom";
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
  height: 50px;
`;

const NavHeader = styled.nav`
  text-decoration: none;
  @media (max-width: 768px) {
  }
`;

const LinkHeader = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: 600;
  font-size: 20px;
  margin-left: 10px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const activeLink = {
  textDecoration: "underline",
};

function Header() {
  return (
    <HeaderContainer>
      <LogoImage src={Logo} alt="Logo" />
      <NavHeader>
        <LinkHeader
          to="/"
          style={({ isActive }) => (isActive ? activeLink : null)}
        >
          Accueil
        </LinkHeader>
        <LinkHeader
          to="/about"
          style={({ isActive }) => (isActive ? activeLink : null)}
        >
          A propos
        </LinkHeader>
      </NavHeader>
    </HeaderContainer>
  );
}

export default Header;
