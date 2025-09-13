import styled from "styled-components";
import { useDraggable } from "@dnd-kit/core";

// cursor: ${(props) => (props.isDragging ? "grabbing" : "grab")};
const ChampImage = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Champ = ({ champName }) => {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: champName,
  });
  const getImageUrl = (name) => {
    return new URL(`../assets/champs/${name}.png`, import.meta.url).href;
  };
  const style = isDragging
    ? {
        filter: `grayscale(1)`,
        cursor: "grabbing!important",
      }
    : {
        cursor: "grab",
        background: "red",
      };

  return (
    <ChampImage
      src={getImageUrl(champName)}
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      isDragging={isDragging}
      style={style}
    />
  );
};

export default Champ;
