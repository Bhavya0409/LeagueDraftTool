import { useDroppable } from "@dnd-kit/core";

import { ChampsContainer, PlaceholderImage } from "../styled";
import ChampionImage from "./ChampionImage";
import AssignedChampion from "./AssignedChampion";
import { CHAMP_POOL } from "../utils";

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
          <ChampionImage key={champ.name} champName={champ.name} />
        ) : (
          // <AssignedChampion championName={champ.name} />
          <PlaceholderImage
            key={champ.name}
            src={
              new URL(`../assets/champs/${champ.name}.png`, import.meta.url)
                .href
            }
          />
        ),
      )}
    </ChampsContainer>
  );
};

export default ChampPool;
