import { useDroppable } from "@dnd-kit/core";

import { ChampsContainer } from "../styled";
import Champ from "./Champ";
import { CHAMP_POOL } from "../utils";

const ChampPool = ({ availableChamps }) => {
  // === Init ===
  const { setNodeRef } = useDroppable({
    id: CHAMP_POOL,
  });

  // === Return ===
  return (
    <ChampsContainer ref={setNodeRef}>
      {availableChamps.map((champ) => (
        <Champ key={champ} champName={champ} />
      ))}
    </ChampsContainer>
  );
};

export default ChampPool;
