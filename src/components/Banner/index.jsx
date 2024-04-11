import styled from "styled-components";

const HomeBack = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 70px;
  height: 223px;
  @media (max-width: 768px) {
    height: 111px;
    margin-bottom: 50px;
  }
`;

const BannerHome = styled.h1`
  display: flex;
  color: white;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 25px;
  background-image: ${({ src }) =>
    `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${src})`};
  background-size: cover;
  background-position: center;
  @media (max-width: 768px) {
    justify-content: left;
    text-align: left;
    border-radius: 10px;
    font-size: 24px;
  }
`;

const BannerText = styled.span`
  text-align: center;
  @media (max-width: 768px) {
    display: inline;
    margin-left: 15px;
    text-align: left;
    border-radius: 10px;
    font-size: 24px;
    max-width: 250px;
  }
`;

function Banner({ title, src }) {
  return (
    <HomeBack>
      <BannerHome src={src}>
        <BannerText>{title}</BannerText>
      </BannerHome>
    </HomeBack>
  );
}

export default Banner;
