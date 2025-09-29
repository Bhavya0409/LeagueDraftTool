import styled from "styled-components";

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
