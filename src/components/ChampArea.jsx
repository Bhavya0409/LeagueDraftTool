import { ChampionBox } from "../styled";
import { useDroppable } from "@dnd-kit/core";

const ChampArea = ({ side, type, order }) => {
  const { setNodeRef } = useDroppable({
    id: `${side}-${type}-${order}`,
  });
  return <ChampionBox ref={setNodeRef} />;
};

export default ChampArea;
