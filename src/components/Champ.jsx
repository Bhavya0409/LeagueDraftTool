import styled from "styled-components";
import { useDraggable } from "@dnd-kit/core";

const ChampImage = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 8px;
`;

const Champ = ({ champName }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: champName,
  });
  const getImageUrl = (name) => {
    return new URL(`../assets/champs/${name}.png`, import.meta.url).href;
  };
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <ChampImage
      src={getImageUrl(champName)}
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
    />
  );
};

export default Champ;
