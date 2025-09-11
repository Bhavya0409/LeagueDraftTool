import styled from "styled-components";
import { CHAMPIONS } from "../utils";

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
`;
const ChampionBox = styled.div`
  height: 80px;
  width: 80px;
  border-radius: 8px;
  border: 1px solid white;
  background: #080808;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
const ChampsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, minmax(80px, 1fr));
  gap: 24px;
  overflow-y: scroll;
  height: 496px;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
const Champ = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 8px;
`;

const Main = () => {
  // Import all champion images as an object
  const championImages = import.meta.glob("../assets/champs/*.png", {
    eager: true,
  });

  // Helper to get image by champion name
  const getChampionImage = (champion) => {
    // Find the key that matches the champion filename
    const key = `../assets/champs/${champion}.png`;
    return championImages[key]?.default || "";
  };

  return (
    <Container>
      <TeamContainer>
        <TeamInput color={"#3E7BFA"} placeholder={"Enter Team Name..."} />
        <TeamInput color={"#FF5C5C"} placeholder={"Enter Team Name..."} />
      </TeamContainer>

      <BansContainer>
        <TeamBanContainer blue>
          <RoundBanContainer blue>
            <ChampionBox />
            <ChampionBox />
            <ChampionBox />
          </RoundBanContainer>
          <RoundBanContainer blue>
            <ChampionBox />
            <ChampionBox />
          </RoundBanContainer>
        </TeamBanContainer>

        <TeamBanContainer red>
          <RoundBanContainer red>
            <ChampionBox />
            <ChampionBox />
            <ChampionBox />
          </RoundBanContainer>
          <RoundBanContainer red>
            <ChampionBox />
            <ChampionBox />
          </RoundBanContainer>
        </TeamBanContainer>
      </BansContainer>

      <MainContainer>
        <PicksContainer>
          <ChampionBox />
          <ChampionBox />
          <ChampionBox />
          <ChampionBox />
          <ChampionBox />
        </PicksContainer>

        <ChampsContainer>
          {CHAMPIONS.map((champ) => (
            <Champ key={champ} src={getChampionImage(champ)} alt={champ} />
          ))}
        </ChampsContainer>

        <PicksContainer>
          <ChampionBox />
          <ChampionBox />
          <ChampionBox />
          <ChampionBox />
          <ChampionBox />
        </PicksContainer>
      </MainContainer>
    </Container>
  );
};

export default Main;
