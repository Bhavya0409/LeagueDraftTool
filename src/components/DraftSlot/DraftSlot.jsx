import { useDroppable } from "@dnd-kit/core";

import ChampionImage from "../ChampionImage";

import { ChampionBox, ProjectedImage } from "../../styled";

const DraftSlot = ({
  side,
  type,
  order,
  draftedChampion = null,
  draggingChamp = null,
}) => {
  // === Init ===
  const { setNodeRef, isOver } = useDroppable({
    id: `${side}-${type}-${order}`,
  });

  // === Render ===
  if (draftedChampion) {
    // If a champion has been drafted for this slot, show it
    return <ChampionImage champName={draftedChampion} />;
  } else if (isOver) {
    // If a champ is being dragged over this slot, show the dragging champ in grayscale
    return (
      <ProjectedImage
        src={
          new URL(`../../assets/champs/${draggingChamp}.png`, import.meta.url)
            .href
        }
      />
    );
  }
  // Otherwise, show an empty slot
  return <ChampionBox ref={setNodeRef} />;
};

export default DraftSlot;
