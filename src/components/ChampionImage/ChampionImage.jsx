import { useDraggable } from "@dnd-kit/core";

import { ChampionImageContainer } from "./styled";

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
    <ChampionImageContainer
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

export default ChampionImage;
