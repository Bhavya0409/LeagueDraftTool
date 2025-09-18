import styled from "styled-components";

const Image = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  filter: ${(props) => (props.isDragging ? "grayscale(0)" : "grayscale(1)")};
  cursor: ${(props) => (props.isDragging ? "grabbing" : "not-allowed")};
  opacity: ${(props) => (props.isDragging ? 1 : 0.3)};
`;

const DisabledChampionImage = ({ champName, isDragging = false }) => {
  return (
    <Image
      src={new URL(`../assets/champs/${champName}.png`, import.meta.url).href}
      isDragging={isDragging}
    />
  );
};

export default DisabledChampionImage;
