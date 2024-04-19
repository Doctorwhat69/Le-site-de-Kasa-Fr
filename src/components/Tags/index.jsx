import styled from "styled-components";

const TagDiv = styled.div`
  display: flex;
  gap: 5px;
  margin-bottom: 10px;
`;

const TagElement = styled.p`
  display: flex;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  vertical-align: baseline;
  justify-content: center;
  align-items: center;
  padding-left: 5px;
  padding-right: 5px;
  color: white;
  text-wrap: nowrap;
  border-radius: 10px;
  background-color: #ff6060;
  width: max-content;
  min-width: 115px;
  height: 25px;
  @media (max-width: 1200px) {
    min-width: min-content;
    font-size: 10px;
  }
`;

function Tag({ tags }) {
  return (
    <TagDiv>
      {tags.map((item, index) => (
        <TagElement key={index}>{item}</TagElement>
      ))}
    </TagDiv>
  );
}

export default Tag;
