import { useState } from "react";
import styled from "styled-components";
import { DndContext, DragOverlay } from "@dnd-kit/core";

import {
  CHAMPIONS,
  CHAMP_POOL,
  SIDE_BLUE,
  SIDE_RED,
  TYPE_BAN,
  TYPE_PICK,
} from "../utils";

import DraftSlot from "./DraftSlot";
import ChampionPool from "./ChampionPool";

import { DraggingImage } from "../styled";

const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Exo+2:wght@100..900&display=swap");

  width: 1280px;
  min-height: 800px;
  display: grid;
  padding: 24px;
  grid-template-rows: auto auto 1fr;
  background: #2a2a2a;

  font-family: "Exo 2", sans-serif;
  font-optical-sizing: auto;
  font-weight: 200;
  font-style: normal;

  border: 4px solid black;
  border-radius: 16px;
`;
const TeamContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const TeamInput = styled.input`
  width: 512px;
  height: 48px;
  border-radius: 8px;
  text-align: center;
  background: ${(props) => props.color || "#ffffff"};
  font-size: 24px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 0;
`;
const BansContainer = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
`;
const ResetButton = styled.button`
  height: 48px;
  text-align: center;
  border: 0;
  outline: 0;
  background: white;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: black;
  font-size: 20px;
  width: 128px;

  &:active {
    background: #e0e0e0;
  }
`;
const RoundBanContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 12px;
  flex-direction: ${(props) =>
    props.side === SIDE_BLUE ? "row" : "row-reverse"};

  & > *:nth-child(3) {
    margin-right: ${(props) => (props.side === SIDE_BLUE ? "32px" : "0")};
    margin-left: ${(props) => (props.side === SIDE_BLUE ? "0" : "32px")};
  }
`;
const MainContainer = styled.div`
  margin-top: 96px;
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: space-between;
`;
const PicksContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;

const Main = () => {
  // === Init ===
  const INITIAL_STATE = CHAMPIONS.map((champ) => ({
    name: champ,
    id: CHAMP_POOL,
  }));
  const [champions, setChampions] = useState(INITIAL_STATE);
  const [draggingChamp, setDraggingChamp] = useState(null);

  // === Helpers ===
  /**
   * Gets the name of the champion drafted for a given side/type/order
   *
   * @param {SIDE_BLUE || SIDE_RED} side - Which side the champion is on
   * @param {TYPE_BAN || TYPE_PICK} type - Whether the champion is a ban or a pick
   * @param {number} order - The order of the pick/ban (0-4)
   * @returns Name of the champion or null if none drafted
   */
  const getDraftedChampion = (side, type, order) => {
    return (
      champions.find((c) => c.id === `${side}-${type}-${order}`)?.name || null
    );
  };

  // === Handlers ===
  const onReset = () => {
    setChampions(INITIAL_STATE);
  };
  const onDragEnd = (event) => {
    if (event.over) {
      const area = event.over.id;

      setDraggingChamp(null);
      setChampions(
        champions.map((champ) =>
          champ.name === event.active.id ? { ...champ, id: area } : champ,
        ),
      );
    }
  };
  const onDragStart = (event) => {
    setDraggingChamp(event.active.id);
  };

  // === Render Helpers ===
  const renderDraftSlots = (side, type) => {
    return Array(5)
      .fill()
      .map((_, i) => (
        <DraftSlot
          key={i}
          side={side}
          type={type}
          order={i}
          draftedChampion={getDraftedChampion(side, type, i)}
          draggingChamp={draggingChamp}
        />
      ));
  };

  // === Return ===
  return (
    <DndContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
      <DragOverlay
        dropAnimation={{
          duration: 100,
        }}
      >
        <DraggingImage
          src={
            new URL(`../assets/champs/${draggingChamp}.png`, import.meta.url)
              .href
          }
        />
      </DragOverlay>
      <Container>
        <TeamContainer>
          <TeamInput color={"#3E7BFA"} placeholder={"Enter Team Name..."} />
          <ResetButton onClick={onReset}>Reset</ResetButton>
          <TeamInput color={"#FF5C5C"} placeholder={"Enter Team Name..."} />
        </TeamContainer>

        <BansContainer>
          <RoundBanContainer $side={SIDE_BLUE}>
            {renderDraftSlots(SIDE_BLUE, TYPE_BAN)}
          </RoundBanContainer>

          <RoundBanContainer $side={SIDE_RED}>
            {renderDraftSlots(SIDE_RED, TYPE_BAN)}
          </RoundBanContainer>
        </BansContainer>

        <MainContainer>
          <PicksContainer>
            {renderDraftSlots(SIDE_BLUE, TYPE_PICK)}
          </PicksContainer>

          <ChampionPool champions={champions} />

          <PicksContainer>
            {renderDraftSlots(SIDE_RED, TYPE_PICK)}
          </PicksContainer>
        </MainContainer>
      </Container>
    </DndContext>
  );
};

export default Main;
