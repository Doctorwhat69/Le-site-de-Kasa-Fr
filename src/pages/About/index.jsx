import Banner from "../../components/Banner/index";
import Collapse from "../../components/Collapse/index";
import styled from "styled-components";
import background_about from "../../assets/images/background_about.png";

const AboutPage = styled.div`
  margin: 0px;
`;

const AboutCollapse = styled.div`
  @media (min-width: 760px) {
    margin-left: 10%;
    margin-right: 10%;
  }
`;

function About() {
  return (
    <AboutPage>
      <Banner title="" src={background_about} />
      <AboutCollapse>
        <Collapse label="Fiabilité" heightDiv={100}>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
          reprehenderit aliquid perferendis quas, neque consectetur non error,
          tenetur doloribus dolor omnis quisquam facere eveniet commodi
          recusandae minus quasi! Iure, est.
        </Collapse>
        <Collapse label="Respect" heightDiv={100}>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
          reprehenderit aliquid perferendis quas, neque consectetur non error,
          tenetur doloribus dolor omnis quisquam facere eveniet commodi
          recusandae minus quasi! Iure, est.
        </Collapse>
        <Collapse label="Service" heightDiv={100}>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
          reprehenderit aliquid perferendis quas, neque consectetur non error,
          tenetur doloribus dolor omnis quisquam facere eveniet commodi
          recusandae minus quasi! Iure, est.
        </Collapse>

        <Collapse label="Sécurité" heightDiv={100}>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
          reprehenderit aliquid perferendis quas, neque consectetur non error,
          tenetur doloribus dolor omnis quisquam facere eveniet commodi
          recusandae minus quasi! Iure, est.
        </Collapse>
      </AboutCollapse>
    </AboutPage>
  );
}

export default About;
