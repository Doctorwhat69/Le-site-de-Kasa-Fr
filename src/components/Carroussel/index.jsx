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

const ArrowLeft = styled.i`
  font-size: 50px;
  position: absolute;
  top: 45%;
  left: 1%;
  color: white;
  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

const ArrowRight = styled.i`
  font-size: 50px;
  position: absolute;
  top: 45%;
  right: 1%;
  color: white;
  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

const Carrousel = ({ pictures }) => {
  const [currentImage, setCurrentImage] = useState(0);

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

  return (
    <CarrouselDiv>
      <ArrowLeft
        className="fa-solid fa-angle-left"
        onClick={prevImage}
      ></ArrowLeft>
      <CarouselImg
        src={pictures[currentImage]}
        alt={`Carrousel ${currentImage}`}
      />
      <ArrowRight
        className="fa-solid fa-angle-right"
        onClick={nextImage}
      ></ArrowRight>
    </CarrouselDiv>
  );
};

export default Carrousel;
