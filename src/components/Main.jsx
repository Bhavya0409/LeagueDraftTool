import { useState } from "react";
import styled from "styled-components";
import {
  DndContext,
  DragOverlay,
  defaultDropAnimationSideEffects,
} from "@dnd-kit/core";

import {
  CHAMPIONS,
  CHAMP_POOL,
  SIDE_BLUE,
  SIDE_RED,
  TYPE_BAN,
  TYPE_PICK,
} from "../utils";

import ChampArea from "./ChampArea";
import ChampPool from "./ChampPool";
import Champ from "./Champ";

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
  flex-direction: ${(props) => (props.blue ? "row" : "row-reverse")};

  & > *:nth-child(3) {
    margin-right: ${(props) => (props.blue ? "32px" : "0")};
    margin-left: ${(props) => (props.blue ? "0" : "32px")};
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
  const [activeId, setActiveId] = useState(null);

  // === Helpers ===
  const getSelectedChamp = (side, type, order) => {
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

      setActiveId(null);
      setChampions(
        champions.map((champ) =>
          champ.name === event.active.id ? { ...champ, id: area } : champ,
        ),
      );
    }
  };
  const onDragStart = (event) => {
    setActiveId(event.active.id);
  };
  const onDragOver = (event) => {
    // console.log("over", { event });
  };
  const onDragMove = (event) => {
    //console.log("move", { event });
  };

  // === Render Helpers ===
  const renderChampAreas = (side, type) => {
    return Array(5)
      .fill()
      .map((_, i) => (
        <ChampArea
          side={side}
          type={type}
          order={i}
          selectedChampion={getSelectedChamp(side, type, i)}
          activeId={activeId}
        />
      ));
  };

  // === Return ===
  return (
    <DndContext
      onDragEnd={onDragEnd}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDragMove={onDragMove}
    >
      <DragOverlay
        dropAnimation={{
          duration: 100,
          sideEffects: defaultDropAnimationSideEffects({
            styles: {
              active: {
                filter: "grayscale(1)",
              },
            },
          }),
        }}
      >
        {activeId ? <Champ champName={activeId} /> : null}
      </DragOverlay>
      <Container>
        <TeamContainer>
          <TeamInput color={"#3E7BFA"} placeholder={"Enter Team Name..."} />
          <ResetButton onClick={onReset}>Reset</ResetButton>
          <TeamInput color={"#FF5C5C"} placeholder={"Enter Team Name..."} />
        </TeamContainer>

        <BansContainer>
          <RoundBanContainer blue>
            {renderChampAreas(SIDE_BLUE, TYPE_BAN)}
          </RoundBanContainer>

          <RoundBanContainer red>
            {renderChampAreas(SIDE_RED, TYPE_BAN)}
          </RoundBanContainer>
        </BansContainer>

        <MainContainer>
          <PicksContainer>
            {renderChampAreas(SIDE_BLUE, TYPE_PICK)}
          </PicksContainer>

          <ChampPool champions={champions} />

          <PicksContainer>
            {renderChampAreas(SIDE_RED, TYPE_PICK)}
          </PicksContainer>
        </MainContainer>
      </Container>
    </DndContext>
  );
};

export default Main;
