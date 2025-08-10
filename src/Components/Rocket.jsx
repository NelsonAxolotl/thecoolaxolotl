import { useEffect, useState } from "react";
import "./Rocket.css";
import axofuz from "../Pics/axofuz.webp";
const Rocket = ({ triggerLaunch }) => {
  const [launch, setLaunch] = useState(false);

  useEffect(() => {
    if (triggerLaunch && !launch) {
      console.log("Launch triggered");
      setLaunch(true);
      const timer = setTimeout(() => setLaunch(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [triggerLaunch, launch]);

  return (
    <img
      src={axofuz}
      alt="rocket"
      className={`rocket-emoji ${launch ? "launch" : ""}`}
    />
  );
};

export default Rocket;
