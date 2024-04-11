// import styled from "styled-components";
import Banner from "../../components/Banner/index";
import Card from "../../components/Card/index";
import backgroundImage from "../../assets/images/background.png";
import styled from "styled-components";

const HomeDiv = styled.div`
  min-height: 100%;
  max-width: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
`;

function Home() {
  return (
    <HomeDiv>
      <Banner title="Chez vous, partout et ailleurs" src={backgroundImage} />
      <Card />
    </HomeDiv>
  );
}

export default Home;
