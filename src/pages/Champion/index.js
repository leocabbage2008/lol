import React, { useEffect } from "react";
import championServices from "../../services/champions";
import skinImgUrl from "../../constants/skinImgUrl";
import "./index.css";
import classnames from "classnames";

export default function ChampionPage() {
  const [champName, setChampName] = React.useState("");
  const [champData, setChampData] = React.useState({});
  const [info, setInfo] = React.useState(false);
  useEffect(() => {
    const address = window.location.href.split("/");
    const champName = address[address.length - 1];
    setChampName(champName);
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const data = await championServices.fetchChampionByName(champName);
      setChampData(data.data.data[champName]);
    };
    if (champName) fetchData();
    console.log(champName);
  }, [champName]);
  useEffect(()=>console.log(champData),[champData]);
  return (
    <div>
      <h1>{champData.name}</h1>
      <h2>{champData.title && championServices.capitalize(champData.title)}</h2>
      <p>{champData.lore}</p>
      <br />
      <h1 className="stats" onClick={() => setInfo(!info)}>
        <span
          className={classnames("arrow", { right: info }, { down: !info })}
          alt="..."
        />
        Stats
      </h1>
      <ul className={classnames("info", { show: info })}>
        {champData.info &&
          champData.stats &&
          Object.entries(champData.info)
            .concat(Object.entries(champData.stats))
            .map((stat) => {
              console.log(stat);
              return (
                <li>
                  <h2 key={Math.random()}>{stat[0] + ": " + stat[1]}</h2>
                </li>
              );
            })}
      </ul>
      <h1>Skins:</h1>
      <div className="skins">
        {champData.skins &&
          champData.skins.map((skin) => {
            return (
              <img
                src={`${skinImgUrl}${champName}_${skin.num}.jpg`}
                alt={skin.num}
                key={skin.num}
              />
            );
          })}
      </div>
    </div>
  );
}
