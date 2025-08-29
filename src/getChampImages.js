import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Initial setup
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputDir = path.join(__dirname, "../src/assets/champs");
fs.mkdirSync(outputDir, { recursive: true });

/**
 * Fetches an image from a URL and saves it to a specified path.
 * @returns {Promise<void>}
 */
const fetchImage = async (champName) => {
  const imageUrl = `https://ddragon.leagueoflegends.com/cdn/15.15.1/img/champion/${champName}.png`;
  const outputPath = path.join(outputDir, `${champName}.png`);

  const res = await fetch(imageUrl);
  const blob = await res.blob();

  const buffer = await blob.arrayBuffer();
  const bufferFrom = Buffer.from(buffer);

  fs.createWriteStream(outputPath).write(bufferFrom);
};
const fetchImages = async () => {
  const champsUrl =
    "https://ddragon.leagueoflegends.com/cdn/15.15.1/data/en_US/champion.json";
  const response = await fetch(champsUrl);
  const data = await response.json();
  const champNames = Object.keys(data.data);
  return Promise.all(champNames.map((champName) => fetchImage(champName)));
};

const getChamps = async () => {
  const champsUrl =
    "https://ddragon.leagueoflegends.com/cdn/15.15.1/data/en_US/champion.json";
  const response = await fetch(champsUrl);
  const data = await response.json();
  const champNames = Object.keys(data.data);
  return champNames;
};

// fetchImages()
//   .then(() => console.log("All images downloaded successfully"))
//   .catch((err) => console.error("Error downloading images:", err));

getChamps().then((champs) => console.log(JSON.stringify(champs)));
