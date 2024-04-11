import styled from "styled-components";

const LoadingDiv = styled.div`
  height: 50px;
  width: 50px;
  background: black;
`;

function loading() {
  return <LoadingDiv></LoadingDiv>;
}

export default loading;
