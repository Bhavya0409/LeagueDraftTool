import styled, { css } from "styled-components";

/**
 * The fundamental styling unit for this application is the "box" that contains the champion image.
 * This box can be in many different states, each with slightly different styling
 * 1. "Empty"       - The empty state where there is no champion
 * 2. "Assigned"    - The state where a champion exists in a slot
 * 3. "Residue"     - The state where a champion has been picked up, and what the origin state looks like while dragging
 * 4. "Projected"   - The state where a champion has been picked up, and what the destination state looks like when over that element
 * 5. "Placeholder" - The state where a champion has been moved out of champion pool, but there is a residue image in the pool
 * 6. "Dragging"    - The state where a champion has been picked up, and what the dragging champion styling looks like
 */

// The default box styling that applies to all elements
const defaultBoxStyles = css`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: #080808;
  cursor: pointer; // could be "grab"
`;
export const EmptyBox = styled.div`
  ${defaultBoxStyles}

  &:hover {
    border: 1px solid #999;
    height: 78px;
    width: 78px;
    cursor: pointer;
  }
`;
// The styling of the origin state when the element has been picked up
export const ResidueImage = styled.img`
  ${defaultBoxStyles}
  cursor: not-allowed;
  filter: grayscale(0);
`;
// The styling of the destination state when an element has been picked up and is hovering over the destination slot
export const ProjectedImage = styled.img`
  ${defaultBoxStyles}
  cursor: not-allowed;
  filter: grayscale(1);
  opacity: 0.3;
`;
// The styling of the champion pool slot when the champion has been drafted somewhere else
export const PlaceholderImage = styled.img`
  ${defaultBoxStyles}
  cursor: not-allowed;
  filter: grayscale(1);
  opacity: 0.3;
`;
// The styling of the champion box that is being dragged
export const DraggingImage = styled.img`
  ${defaultBoxStyles}
  cursor: grabbing;
`;

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
