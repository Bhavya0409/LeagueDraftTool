import styled from "styled-components";

export const AssignedChampionContainer = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  filter: ${(props) => (props.isDragging ? "grayscale(1)" : "none")};

  &:hover {
    border: 1px solid #999;
    height: 78px;
    width: 78px;
  }
`;
