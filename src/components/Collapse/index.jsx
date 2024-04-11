import React, { useState } from "react";
import styled from "styled-components";

// styles

const CollapseComponent = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  width: 100%;
`;

const CollapseDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  color: white;
  background-color: #ff6060;
  max-width: 100%;
  height: 54px;
  padding-left: 10px;
  padding-right: 10px;
  z-index: 1;
  position: relative;
  @media (max-width: 768px) {
    max-height: 30px;
  }
`;

const CollapseContentBase = ({ IsOpen, children, ...rest }) => (
  <div {...rest}>{children}</div>
);

const CollapseContent = styled(CollapseContentBase)`
  background-color: #f6f6f6;
  color: black;
  border-radius: 0 0 5px 5px;
  padding: ${(props) => (props.IsOpen ? "15px 10px 15px" : "0 10px")};
  max-height: ${(props) => (props.IsOpen ? "max-content" : "0px")};
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  transition: max-height 0.5s ease-out, padding 0.5s ease-in-out;
  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const CollapseIcone = styled.i`
  font-size: 30px;
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const CollapseTitle = styled.h3`
  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

function Collapse({ title, children }) {
  const [IsOpen, setIsOpen] = useState(false);
  const toggleCollapse = () => {
    setIsOpen(!IsOpen);
  };

  return (
    <CollapseComponent>
      <CollapseDiv>
        <CollapseTitle>{title}</CollapseTitle>
        <CollapseIcone
          className={`fa-solid ${IsOpen ? "fa-angle-up" : "fa-angle-down"}`}
          onClick={toggleCollapse}
        ></CollapseIcone>
      </CollapseDiv>
      <CollapseContent IsOpen={IsOpen}>{children}</CollapseContent>{" "}
    </CollapseComponent>
  );
}

export default Collapse;
