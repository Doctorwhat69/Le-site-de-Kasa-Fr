import styled from "styled-components";
import { Link } from "react-router-dom";
import data from "../../utils/data/data.json";

/*

*/

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  background-color: #f6f6f6;
  border-radius: 25px;
  box-sizing: border-box;
  width: 100%;
  margin-top: 0;

  @media (max-width: 768px) {
    padding-top: 0px;
    display: flex;
    flex-direction: column;
    background-color: white;
  }
`;
const CardElement = styled.div`
  background-image: url(${(props) => props.$cover});
  background-size: cover;
  opacity: 0.9;
  width: 100%;
  padding-top: 100%;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px -110px 100px -28px inset;
  position: relative;
  margin: 0;
  @media (max-width: 768px) {
    padding-top: 76%;
  }
`;

const CardTitle = styled.h2`
  color: white;
  font-size: 18px;
  text-align: bottom;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 10px;
  width: 100%;
  height: min-content;
  position: absolute;
  bottom: 0;
`;

const CardLink = styled(Link)`
  textdecoration: none;
  width: 29%;
  padding: 0;
  margin: 2%;
  @media (max-width: 768px) {
    margin: 0px;
    margin-bottom: 20px;
    width: 100%;
  }
`;

function Card() {
  return (
    <CardContainer>
      {data.map((logement) => (
        <CardLink to={`/logement/${logement.id}`} key={logement.id}>
          <CardElement $cover={logement.cover} key={logement.id}>
            <CardTitle>{logement.title}</CardTitle>
          </CardElement>
        </CardLink>
      ))}
    </CardContainer>
  );
}

export default Card;
