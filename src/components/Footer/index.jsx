import styled from "styled-components";
import Logo from "../../assets/logo/Logo_footer.png";

const LogoImage = styled.img`
  margin-left: auto;
  margin-right: auto;
  height: 39px;
  width: 122px;
`;

const FooterStyle = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  justify-content: center;
  background-color: black;
  width: 100%;
  padding-top: 50px;
  margin-top: 50px;
`;

const FooterContain = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

function Footer() {
  return (
    <FooterStyle>
      <FooterContain>
        <LogoImage src={Logo} alt="Logo" />
        <p>© 2020 KASA. All right reserved</p>
      </FooterContain>
    </FooterStyle>
  );
}

export default Footer;
