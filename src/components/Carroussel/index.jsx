import React, { useState } from "react";
import styled from "styled-components";

const CarrouselDiv = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  width: 100%;
  max-width: 100%;
  height: 415px;
  position: relative;
  @media (max-width: 768px) {
    width: 100%;
    height: 255px;
  }
`;

const CarouselImg = styled.img`
  width: 100%;
  height: 100%;
  max-width: 100%;
  object-fit: cover;
  border-radius: 25px;
  @media (max-width: 768px) {
    border-radius: 10px;
  }
`;

const Arrow = styled.i`
  font-size: 50px;
  position: absolute;
  cursor: pointer;
  top: 45%;
  color: white;
  display: ${(props) => (props.$show ? "block" : "none")};
  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

const ArrowLeft = styled(Arrow)`
  left: 1%;
`;

const ArrowRight = styled(Arrow)`
  right: 1%;
`;

const CountDiv = styled.div`
  position: absolute;
  color: white;
  left: 50%;
  bottom: 3%;
`;

const Carrousel = ({ pictures }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const showArrows = pictures.length > 1;

  const nextImage = () => {
    setCurrentImage((nextIndex) =>
      nextIndex === pictures.length - 1 ? 0 : nextIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  const compteur = `${currentImage + 1} / ${pictures.length}`;

  return (
    <CarrouselDiv>
      <ArrowLeft
        className="fa-solid fa-angle-left"
        onClick={prevImage}
        $show={showArrows}
      ></ArrowLeft>
      <CarouselImg
        src={pictures[currentImage]}
        alt={`Carrousel ${currentImage}`}
      />
      <CountDiv>{compteur}</CountDiv>
      <ArrowRight
        className="fa-solid fa-angle-right"
        onClick={nextImage}
        $show={showArrows}
      ></ArrowRight>
    </CarrouselDiv>
  );
};

export default Carrousel;
