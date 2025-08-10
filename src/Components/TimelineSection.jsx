import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";
import Rocket from "../Components/Rocket";
import proto from "../Pics/proto2.webp";
import dev from "../Pics/production2.webp";
import hand from "../Pics/client.webp";
import analyse from "../Pics/analyse.webp";
import maintenance from "../Pics/maintenance.webp";
import int from "../Pics/prototype2.webp";
import defaultImage from "../Pics/client.webp"; // image fallback sûre

const TimelineSection = ({ steps }) => {
  const { t } = useTranslation();
  const lastItemRef = useRef(null);
  const [launchRocket, setLaunchRocket] = useState(false);

  const images = [hand, analyse, proto, int, dev, maintenance];

  useEffect(() => {
    if (!lastItemRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLaunchRocket(true);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    observer.observe(lastItemRef.current);

    return () => {
      if (lastItemRef.current) observer.unobserve(lastItemRef.current);
    };
  }, [lastItemRef]);

  return (
    <div className="timeline-container2">
      <h2 className="timeline-title2">{t("timeline.title")}</h2>
      <div className="timeline2">
        {steps.map((step, index) => {
          const imgSrc =
            typeof images[index] === "string" ? images[index] : defaultImage;

          const isLast = index === steps.length - 1;

          return (
            <div
              ref={isLast ? lastItemRef : null}
              className={`timeline-item2 ${
                index % 2 === 0 ? "left" : "right"
              } hidden`}
              key={index}
            >
              <span className="timeline-number2">{index + 1}</span>
              <div className="timeline-content2">
                <h3 className="timeline-step2">{step.title}</h3>
                <p className="timeline-description2">{step.description}</p>
              </div>
              <div className="timeline-image2">
                <img
                  src={imgSrc}
                  alt={`Step ${index + 1}`}
                  width={200}
                  height={200}
                />
              </div>
            </div>
          );
        })}
      </div>
      {/* <Rocket triggerLaunch={launchRocket} /> */}
    </div>
  );
};

export default TimelineSection;
