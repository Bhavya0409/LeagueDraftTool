import { ChampionBox } from "../styled";
import { useDroppable } from "@dnd-kit/core";
import Champ from "./Champ";

const ChampArea = ({ side, type, order, selectedChampion, activeId }) => {
  const { setNodeRef, isOver } = useDroppable({
    id: `${side}-${type}-${order}`,
  });
  if (selectedChampion) {
    return <Champ champName={selectedChampion} />;
  }
  if (isOver) {
    return <Champ champName={activeId} />;
  }
  return <ChampionBox ref={setNodeRef} />;
};

export default ChampArea;
