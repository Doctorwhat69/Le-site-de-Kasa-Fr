import styled from "styled-components";

const HostDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 10px;
  height: 100%;
  @media (max-width: 768px) {
    margin-bottom: 0;
  }
`;

const HostName = styled.span`
  font-size: 18px;
  color: #ff6060;
  font-weight: 500;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
const HostPicture = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

function Host({ nom, src }) {
  return (
    <HostDiv>
      <HostName>{nom}</HostName>
      <HostPicture src={src} alt={nom} />
    </HostDiv>
  );
}
export default Host;
