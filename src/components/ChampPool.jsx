import { useDroppable } from "@dnd-kit/core";

import { ChampsContainer } from "../styled";
import ChampionImage from "./ChampionImage";
import { CHAMP_POOL } from "../utils";
import DisabledChampionImage from "./DisabledChampionImage";

const ChampPool = ({ champions }) => {
  // === Init ===
  const { setNodeRef } = useDroppable({
    id: CHAMP_POOL,
  });

  // === Return ===
  return (
    <ChampsContainer ref={setNodeRef}>
      {champions.map((champ) =>
        champ.id === CHAMP_POOL ? (
          <ChampionImage
            key={champ.name}
            champName={champ.name}
            disabled={champ.id !== CHAMP_POOL}
          />
        ) : (
          <DisabledChampionImage key={champ.name} champName={champ.name} />
        ),
      )}
    </ChampsContainer>
  );
};

export default ChampPool;
