import { useEffect, useState } from "react";
import "./Rocket.css";

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
    <div
      className={`rocket-emoji ${launch ? "launch" : ""}`}
      style={{ fontSize: "3rem", userSelect: "none" }}
      role="img"
      aria-label="rocket"
      title="Rocket launching animation"
    >
      🚀
    </div>
  );
};

export default Rocket;
