import styled from "styled-components";
import ErrorImage from "../../assets/images/404.png";

const ErrorPage = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  margin-bottom: 100px;
`;

const ErrorContain = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  color: #ff6060;
`;

const ImgError = styled.img`
  width: 597px;
  height: 263px;
  margin-bottom: 100px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 768px) {
    width: 198px;
    height: 99px;
    margin-bottom: 20px;
  }
`;

const ErrorLink = styled.a`
  margin-top: 100px;
  text-decoration: none;
  color: black;
  text-align: center;
  &:hover {
    text-decoration: underline;
  }
`;

function Error() {
  return (
    <ErrorPage>
      <ErrorContain>
        <ImgError src={ErrorImage} alt="message erreur 404" />
        <h2>Oups ! La page que vous demandez n'existe pas.</h2>
        <ErrorLink href="/">retournez sur la page d'accueil</ErrorLink>
      </ErrorContain>
    </ErrorPage>
  );
}

export default Error;
