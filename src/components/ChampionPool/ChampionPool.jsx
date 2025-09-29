import { useDroppable } from "@dnd-kit/core";

import { ChampsContainer, PlaceholderImage } from "../../styled";
import AssignedChampion from "../AssignedChampion";
import { CHAMP_POOL } from "../../utils";

const ChampionPool = ({ champions }) => {
  // === Init ===
  const { setNodeRef } = useDroppable({
    id: CHAMP_POOL,
  });

  // === Return ===
  return (
    <ChampsContainer ref={setNodeRef}>
      {champions.map((champ) =>
        champ.id === CHAMP_POOL ? (
          <AssignedChampion key={champ.name} champName={champ.name} />
        ) : (
          <PlaceholderImage
            key={champ.name}
            src={
              new URL(`../../assets/champs/${champ.name}.png`, import.meta.url)
                .href
            }
          />
        ),
      )}
    </ChampsContainer>
  );
};

export default ChampionPool;
