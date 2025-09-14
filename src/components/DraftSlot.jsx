import { ChampionBox } from "../styled";
import { useDroppable } from "@dnd-kit/core";
import ChampionImage from "./ChampionImage/ChampionImage";
import DisabledChampionImage from "./DisabledChampionImage";

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
    return <ChampionImage champName={draftedChampion} />;
  } else if (isOver) {
    return <DisabledChampionImage champName={draggingChamp} />;
  }
  return <ChampionBox ref={setNodeRef} />;
};

export default DraftSlot;
