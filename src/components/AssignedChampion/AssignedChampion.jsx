import { useDraggable } from "@dnd-kit/core";

import { AssignedChampionContainer } from "./styled";

/**
 * Renders a draggable champion image.
 *
 * @param {string} champName - Name of the champion
 */
const AssignedChampion = ({ champName }) => {
  // === Init ===
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: champName,
  });

  // === Render ===
  return (
    <AssignedChampionContainer
      src={
        new URL(`../../assets/champs/${champName}.png`, import.meta.url).href
      }
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      isDragging={isDragging}
    />
  );
};

export default AssignedChampion;
