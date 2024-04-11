import styled from "styled-components";

const StarDiv = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  @media (max-width: 768px) {
    flex-direction: row;
    gap: 5px;
    height: 100%;
  }
`;

const Star = styled.i`
  color: ${(props) => (props.Filled ? "#FF6060" : "#E3E3E3")};
  font-size: 20px;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

function Stars({ rating }) {
  const filledStars = parseInt(rating);

  return (
    <StarDiv>
      {[...Array(5)].map((star, index) => (
        <Star
          key={index}
          className="fa-solid fa-star"
          $Filled={index < filledStars}
        />
      ))}
    </StarDiv>
  );
}

export default Stars;
