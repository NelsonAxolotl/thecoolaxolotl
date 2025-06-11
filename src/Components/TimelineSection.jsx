import { useTranslation } from "react-i18next";

import proto from "../Pics/proto2.webp";
import dev from "../Pics/production2.webp";
import hand from "../Pics/client.webp";
import analyse from "../Pics/analyse.webp";
import maintenance from "../Pics/maintenance.webp";
import int from "../Pics/prototype2.webp";

const TimelineSection = ({ steps }) => {
  const { t } = useTranslation();

  const images = [hand, analyse, proto, int, dev, maintenance];

  return (
    <div className="timeline-container2">
      <h2 className="timeline-title2">{t("timeline.title")}</h2>
      <div className="timeline2">
        {steps.map((step, index) => (
          <div
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
                src={images[index]}
                alt={`Step ${index + 1}`}
                width={200}
                height={200}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineSection;
