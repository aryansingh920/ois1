import React, { useState } from "react";
import "./Component4.css";
import Baseball_on from "./CRICK_ON.png";
import Baseball_off from "./CRICKET_OFF copy.png";

function Component4(props) {
  const { cricket, soft6, place } = props;
  const [on, setOn] = useState(false);
  return (
    <div className="baseball-cricket" onMouseEnter={() => setOn(true)}
    onMouseLeave={() => setOn(false)}>
      {/* <div className="overlap-group2">
        <div className="cricket aldrich-normal-white-26px">{cricket}</div>
      </div>
      <div className="overlap-group1">
        <img className="soft-6" src={soft6} alt="SOFT 6" />
        <div className="rectangle-32"></div>
      </div>
      <img
        className="vector-6"
        src="https://anima-uploads.s3.amazonaws.com/projects/636e8b12dd63d44d26a503cc/releases/63d5473d0a7b05b1acab5225/img/vector-3.svg"
        alt="Vector 6"
      />
      <div className="place-2 inter-bold-white-36px">{place}</div> */}
      {on ? (
        <img style={{ height: "100%" }} src={Baseball_on} alt="baseball" />
      ) : (
        <img style={{ height: "90%" }} src={Baseball_off} alt="baseball" />
      )}
    </div>
  );
}

export default Component4;
