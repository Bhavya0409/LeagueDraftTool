import { useDroppable } from "@dnd-kit/core";

import AssignedChampion from "../AssignedChampion";

import { ProjectedImage } from "../../styled";
import { ChampionBox } from "./styled";

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
    return <AssignedChampion championName={draftedChampion} />;
  } else if (isOver) {
    // If a champion is being dragged over this slot, show the dragging champ in grayscale
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
