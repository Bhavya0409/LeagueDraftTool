import { useState } from "react";
import styled from "styled-components";
import { DndContext } from "@dnd-kit/core";

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
const TeamBanContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.blue ? "row" : "row-reverse")};
  column-gap: 48px;
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
  const [champions, setChampions] = useState(
    CHAMPIONS.map((champ) => ({ name: champ, id: CHAMP_POOL })),
  );

  // === Helpers ===
  const getAvailableChamps = () => {
    return champions.filter((c) => c.id === CHAMP_POOL).map((c) => c.name);
  };
  const getSelectedChamp = (side, type, order) => {
    return (
      champions.find((c) => c.id === `${side}-${type}-${order}`)?.name || null
    );
  };

  // === Handlers ===
  const onDragEnd = (event) => {
    const area = event.over.id;

    setChampions(
      champions.map((champ) =>
        champ.name === event.active.id ? { ...champ, id: area } : champ,
      ),
    );

    console.log("end", { event });
  };
  const onDragStart = (event) => {
    console.log("start", { event });
  };
  const onDragOver = (event) => {
    console.log("over", { event });
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
          champion={getSelectedChamp(side, type, i)}
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
      <Container>
        <TeamContainer>
          <TeamInput color={"#3E7BFA"} placeholder={"Enter Team Name..."} />
          <TeamInput color={"#FF5C5C"} placeholder={"Enter Team Name..."} />
        </TeamContainer>

        <BansContainer>
          <TeamBanContainer blue>
            <RoundBanContainer blue>
              {renderChampAreas(SIDE_BLUE, TYPE_BAN)}
            </RoundBanContainer>
          </TeamBanContainer>

          <TeamBanContainer red>
            <RoundBanContainer red>
              {renderChampAreas(SIDE_RED, TYPE_BAN)}
            </RoundBanContainer>
          </TeamBanContainer>
        </BansContainer>

        <MainContainer>
          <PicksContainer>
            {renderChampAreas(SIDE_BLUE, TYPE_PICK)}
          </PicksContainer>

          <ChampPool availableChamps={getAvailableChamps()} />

          <PicksContainer>
            {renderChampAreas(SIDE_RED, TYPE_PICK)}
          </PicksContainer>
        </MainContainer>
      </Container>
    </DndContext>
  );
};

export default Main;
