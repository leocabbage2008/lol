import React from "react";
import championServices from "../.././services/champions";

import skinImgUrl from "../.././constants/skinImgUrl";

export default function Champion({ data, clickHandler }) {
  const img = `${skinImgUrl}${data[1].id}_0.jpg`;
  return (
    <div className="card" onClick={() => clickHandler(data[1].id, img)}>
      <h1>{data[1].id}</h1>
      <p>{championServices.capitalize(data[1].title)}</p>
      <img src={img} alt={data[1].id} />
    </div>
  );
}
