import styled from "styled-components";

export const ChampionBox = styled.div`
  height: 80px;
  width: 80px;
  border-radius: 8px;
  background: #080808;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &:hover {
    border: 1px solid #999;
    height: 78px;
    width: 78px;
    cursor: pointer;
  }
`;
