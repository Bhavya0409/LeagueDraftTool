import { useState, useEffect } from "react";
import fs from "fs";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import styled from "styled-components";

import { CHAMPIONS } from "./utils";

const Container = styled.div`
  // width: 1280px;
  max-width: 1280px;
  min-height: 800px;
  display: grid;
  grid-template-rows: auto auto 1fr;
`;
const SidesContainer = styled.div`
  height: 48px;
  background: #1e2a3aff;
  display: flex;
  flex-direction: row;
`;
const SideContainer = styled.div`
  width: 50%;
  height: 100%;
`;
const BlueSideContainer = styled(SideContainer)`
  background: #1e2a3aff;
`;
const RedSideContainer = styled(SideContainer)`
  background: #3e1e2aff;
`;
const BansContainer = styled.div`
  height: 48px;
  background: #1e2a3aff;
  display: flex;
  flex-direction: row;
`;
const BanContainer = styled.div`
  width: 50%;
  height: 100%;
  background: #3a1e35ff;
`;
const BlueSideBanContainer = styled(BanContainer)``;
const RedSideBanContainer = styled(BanContainer)``;
const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 7fr 1fr;
  height: 100%;
`;
const ColumnContainer = styled.div`
  height: 100%;
  display: grid;
  row-gap: 8px;
  grid-template-rows: auto auto auto 1fr auto auto;
`;
const SideColumnContainer = styled(ColumnContainer)`
  margin: auto;
`;
const LeftColumnContainer = styled(SideColumnContainer)``;
const MiddleColumnContainer = styled(ColumnContainer)`
  background: #775130ff;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 8px;
  align-content: start;
`;
const RightColumnContainer = styled(SideColumnContainer)``;
const ChampionContainer = styled.div`
  background: black;
  width: 128px;
  height: 128px;
  border-radius: 8px;
`;

const App = () => {
  // Import all champion images as an object
  const championImages = import.meta.glob("./assets/champs/*.png", {
    eager: true,
  });

  // Helper to get image by champion name
  const getChampionImage = (champion) => {
    // Find the key that matches the champion filename
    const key = `./assets/champs/${champion}.png`;
    return championImages[key]?.default || "";
  };
  return (
    <Container>
      <SidesContainer>
        <BlueSideContainer>Blue</BlueSideContainer>
        <RedSideContainer>Red</RedSideContainer>
      </SidesContainer>
      <BansContainer>
        <BlueSideBanContainer>Blue side bans</BlueSideBanContainer>
        <RedSideBanContainer>Red side bans</RedSideBanContainer>
      </BansContainer>

      <MainContainer>
        <LeftColumnContainer>
          <ChampionContainer />
          <ChampionContainer />
          <ChampionContainer />
          <div />
          <ChampionContainer />
          <ChampionContainer />
        </LeftColumnContainer>
        <MiddleColumnContainer>
          {/* <img src={AatroxPng} alt="Aatrox" /> */}
          {CHAMPIONS.map((champ) => (
            <img key={champ} src={getChampionImage(champ)} alt={champ} />
          ))}
        </MiddleColumnContainer>
        <RightColumnContainer>
          <ChampionContainer />
          <ChampionContainer />
          <ChampionContainer />
          <div />
          <ChampionContainer />
          <ChampionContainer />
        </RightColumnContainer>
      </MainContainer>
    </Container>
  );
};

export default App;
