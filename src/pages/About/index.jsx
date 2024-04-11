import Banner from "../../components/Banner/index";
import Collapse from "../../components/Collapse/index";
import styled from "styled-components";
import background_about from "../../assets/images/background_about.png";

const AboutPage = styled.div`
  margin: 0px;
`;

function About() {
  return (
    <AboutPage>
      <Banner title="" src={background_about} />
      <Collapse title="Fiabilité">
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
        reprehenderit aliquid perferendis quas, neque consectetur non error,
        tenetur doloribus dolor omnis quisquam facere eveniet commodi recusandae
        minus quasi! Iure, est.
      </Collapse>
      <Collapse title="Respect">
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
        reprehenderit aliquid perferendis quas, neque consectetur non error,
        tenetur doloribus dolor omnis quisquam facere eveniet commodi recusandae
        minus quasi! Iure, est.
      </Collapse>
      <Collapse title="Service">
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
        reprehenderit aliquid perferendis quas, neque consectetur non error,
        tenetur doloribus dolor omnis quisquam facere eveniet commodi recusandae
        minus quasi! Iure, est.
      </Collapse>

      <Collapse title="Sécurité">
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
        reprehenderit aliquid perferendis quas, neque consectetur non error,
        tenetur doloribus dolor omnis quisquam facere eveniet commodi recusandae
        minus quasi! Iure, est.
      </Collapse>
    </AboutPage>
  );
}

export default About;
