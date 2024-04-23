import React, { useState } from "react";
import styled from "styled-components";

const CollapseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: max-content;
  margin-bottom: 30px;
  background-color: #f6f6f6;
  border-radius: 5px;
  position: relative;
  z-index: 1;
`;

const CollapseLabel = styled.h3`
  color: white;
`;

const CollapseText = styled.div`
  color: black;
  width: 100%;
  padding-top: 0px;
  margin-top: 0;
  margin-left: 10px;
  margin-right: 10px;
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  transform: ${(props) =>
    props.$isOpen ? "translateY(10%)" : "translateY(-100%)"};
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  z-index: -1;
  overflow: hidden;
`;

const CollapseDiv = styled.div`
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
  background-color: #ff6060;
  width: 100%;
  height: 52px;
  border-radius: 10px;
  align-items: center;
  z-index: 2;
`;

const CollapseContent = styled.div`
  display: flex;
  padding: 0px;
  border-radius: 5px;
  align-items: top;
  transition: height 0.3s ease;
  overflow: hidden;
  height: ${(props) => (props.$isOpen ? `${props.height}px` : "0px")};
  z-index: 2;
`;

const CollapseIcone = styled.i`
  color: white;
  font-size: 30px;
  cursor: pointer;
  transition: transform 0.5s ease-out;
  transform: ${(props) =>
    props.$isOpen ? "rotate(0.5turn)" : "rotate(0turn)"};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

function Collapse({ label, children, heightDiv }) {
  const [IsOpen, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!IsOpen);
  };
  return (
    <CollapseWrapper>
      <CollapseDiv>
        <CollapseLabel>{label}</CollapseLabel>
        <CollapseIcone
          $isOpen={IsOpen}
          className="fa-solid fa-angle-up"
          aria-expanded={IsOpen}
          onClick={toggle}
        />
      </CollapseDiv>

      <CollapseContent $isOpen={IsOpen} height={heightDiv}>
        <CollapseText $isOpen={IsOpen}>{children}</CollapseText>
      </CollapseContent>
    </CollapseWrapper>
  );
}

export default Collapse;
