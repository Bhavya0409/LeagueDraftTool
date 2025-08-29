import { useState, useEffect } from "react";
import fs from "fs";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import styled from "styled-components";

const Container = styled.div`
  width: 1280px;
  min-height: 750px;
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
  grid-template-columns: 1fr 8fr 1fr;
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
`;
const RightColumnContainer = styled(SideColumnContainer)``;
const ChampionContainer = styled.div`
  background: black;
  width: 112px;
  height: 112px;
  border-radius: 8px;
`;

const App = () => {
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
        <MiddleColumnContainer>Middle Container</MiddleColumnContainer>
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
