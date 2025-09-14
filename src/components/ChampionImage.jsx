import styled from "styled-components";
import { useDraggable } from "@dnd-kit/core";

const Image = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: grab;
  filter: ${(props) => (props.isDragging ? "grayscale(1)" : "none")};
`;

/**
 * Renders a draggable champion image.
 *
 * @param {string} champName - Name of the champion
 */
const ChampionImage = ({ champName }) => {
  // === Init ===
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: champName,
  });

  // === Render ===
  return (
    <Image
      src={new URL(`../assets/champs/${champName}.png`, import.meta.url).href}
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      isDragging={isDragging}
    />
  );
};

export default ChampionImage;
