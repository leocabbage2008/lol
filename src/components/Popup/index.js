import React from "react";
import classnames from "classnames";
import "./index.css";

export default function Popup({ display, header, img, closeHandler }) {
  return (
    <>
      <div className={classnames("popup", { active: display })}>
        <div className="container">
          <div className="closeCont" onClick={closeHandler}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="close"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <h1 className="header">{header}</h1>
        </div>
        <img src={img} alt={header} />
        <a href={`https://complexitylol.netlify.app/champion/${header}`}>
          More Details
        </a>
      </div>
      <div className={classnames("underlay", { show: display })}></div>
    </>
  );
}
