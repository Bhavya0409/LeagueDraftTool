import styled from "styled-components";

const Image = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  filter: grayscale(1);
`;

const DisabledChampionImage = ({ champName }) => {
  const getImageUrl = (name) => {
    return new URL(`../assets/champs/${name}.png`, import.meta.url).href;
  };

  return <Image src={getImageUrl(champName)} />;
};

export default DisabledChampionImage;
