import React, { useState } from "react";
import "./MOUSEOFFSOFTBALL.css";
import Baseball_on from "./SOFT_ON.png";
import Baseball_off from "./SOFT_OFF.png";

function MOUSEOFFSOFTBALL(props) {
  const { softball, soft3, place } = props;
  const [on, setOn] = useState(false);
  return (
    <div onMouseEnter={() => setOn(true)}
    onMouseLeave={() => setOn(false)}
    className="baseball-soft">
      {/* <div className="overlap-group3">
        <div className="softball aldrich-normal-white-26px">{softball}</div>
      </div>
      <div className="flex-row">
        <div className="rectangle-26"></div>
        <img className="soft-3-1" src={soft3} alt="SOFT 3" />
      </div>
      <img
        className="vector-4"
        src="https://anima-uploads.s3.amazonaws.com/projects/636e8b12dd63d44d26a503cc/releases/63d5473d0a7b05b1acab5225/img/vector-3.svg"
        alt="Vector 4"
      />
      <div className="place-3 inter-bold-white-36px">{place}</div> */}
      {on ? (
        <img style={{ height: "100%" }} src={Baseball_on} alt="baseball" />
      ) : (
        <img style={{ height: "90%" }} src={Baseball_off} alt="baseball" />
      )}
    </div>
  );
}

export default MOUSEOFFSOFTBALL;
