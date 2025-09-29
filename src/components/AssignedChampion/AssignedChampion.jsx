import { useDraggable } from "@dnd-kit/core";

import { AssignedChampionContainer } from "./styled";

/**
 * Renders a draggable champion image.
 *
 * @param {string} championName - Name of the champion
 */
const AssignedChampion = ({ championName }) => {
  // === Init ===
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: championName,
  });

  // === Render ===
  return (
    <AssignedChampionContainer
      src={
        new URL(`../../assets/champs/${championName}.png`, import.meta.url).href
      }
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      isDragging={isDragging}
    />
  );
};

export default AssignedChampion;
