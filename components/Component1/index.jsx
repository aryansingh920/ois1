import React, { useState } from "react";
import "./Component1.css";
import Baseball_on from "./BASEBALL_ON.png";
import Baseball_off from "./BASEBALL_OFF.png";
// import Baseball_off from "../../public/BASEBALL_OFF.png";

function Component1(props) {
  const { place, baseball, soft3 } = props;
  const [on, setOn] = useState(false);
  // console.log(on);
  return (
    <div
      onMouseEnter={() => setOn(true)}
      onMouseLeave={() => setOn(false)}
      className="baseball"
    >
      {on ? (
        <img style={{ height: "100%" }} src={Baseball_on} alt="baseball" />
      ) : (
        <img style={{ height: "90%" }} src={Baseball_off} alt="baseball" />
      )}
    </div>
  );
}

export default Component1;
