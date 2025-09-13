import { ChampionBox } from "../styled";
import { useDroppable } from "@dnd-kit/core";
import Champ from "./Champ";

const ChampArea = ({ side, type, order, champion }) => {
  const { setNodeRef } = useDroppable({
    id: `${side}-${type}-${order}`,
  });
  if (champion) {
    return <Champ champName={champion} />;
  }
  return <ChampionBox ref={setNodeRef} />;
};

export default ChampArea;
