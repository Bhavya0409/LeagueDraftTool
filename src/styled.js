import styled from "styled-components";

export const ChampionBox = styled.div`
  height: 80px;
  width: 80px;
  border-radius: 8px;
  // border: 1px solid white;
  background: #080808;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
export const ChampsContainer = styled.div`
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
