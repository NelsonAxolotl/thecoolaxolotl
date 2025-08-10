import React from "react";
import { useTranslation } from "react-i18next";

const CustomPackageSection = ({ whyList }) => {
  const { t } = useTranslation();

  return (
    <div className="quote-intro">
      <h2>{t("customPackage.title")}</h2>
      <p>
        {t("customPackage.intro")
          .split("\n")
          .map((line, index, arr) => (
            <React.Fragment key={index}>
              {line}
              {index !== arr.length - 1 && <br />}
            </React.Fragment>
          ))}
      </p>
      <div className="texte-centre">
        <div className="flex-pack">
          <h3>{t("customPackage.whyTitle")}</h3>
          {whyList.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
          <br />
        </div>
        <div className="package-sur-mesure">
          <p>
            <strong>{t("customPackage.offerTitle")}</strong>
          </p>
          <p>{t("customPackage.offerDescription")}</p>

          <p>
            <strong>
              <a href="mailto:thecoolaxolotldesigner@gmail.com">
                <span role="img" aria-label="mail">
                  📩
                </span>
                {t("customPackage.contact")}
              </a>
            </strong>
          </p>
          <p>{t("customPackage.estimation")}</p>
        </div>
      </div>
    </div>
  );
};

export default CustomPackageSection;
