import { useDroppable } from "@dnd-kit/core";

import { PlaceholderImage } from "../../styled";
import { ChampsContainer } from "./styled";
import AssignedChampion from "../AssignedChampion";
import { CHAMPION_POOL } from "../../utils";

const ChampionPool = ({ champions }) => {
  // === Init ===
  const { setNodeRef } = useDroppable({
    id: CHAMPION_POOL,
  });

  // === Return ===
  return (
    <ChampsContainer ref={setNodeRef}>
      {champions.map((champion) =>
        champion.id === CHAMPION_POOL ? (
          <AssignedChampion key={champion.name} championName={champion.name} />
        ) : (
          <PlaceholderImage
            key={champion.name}
            src={
              new URL(
                `../../assets/champs/${champion.name}.png`,
                import.meta.url,
              ).href
            }
          />
        ),
      )}
    </ChampsContainer>
  );
};

export default ChampionPool;
