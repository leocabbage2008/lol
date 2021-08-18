import axios from "axios";

const fetchAllChampions = () => {
  return axios
    .get(
      "https:/ddragon.leagueoflegends.com/cdn/10.4.1/data/en_US/champion.json"
    )
    .then((response) => {
      return response.data.data;
    });
};

const fetchChampionByName = (name) => {
  return axios.get(
    `https:/ddragon.leagueoflegends.com/cdn/10.4.1/data/en_US/champion/${name}.json`
  );
};

const capitalize = (v) => {
  return v[0].toUpperCase() + v.slice(1);
};

const championServices = {
  fetchAllChampions,
  fetchChampionByName,
  capitalize,
};

export default championServices;
