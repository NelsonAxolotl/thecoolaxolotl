import boutik from "../Pics/boutik.webp";
import { useTranslation } from "react-i18next";

const ShopifySection = () => {
  const { t } = useTranslation();

  return (
    <div className="shopify-section">
      <img src={boutik} alt="Shopify" className="shopify-image" />
      <h2 className="shopify-title">{t("shopify.title")}</h2>
      <p className="shopify-description">
        {t("shopify.description")
          .split("\n")
          .map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
      </p>
      <div className="shopflex">
        <ul className="shopify-features">
          {t("shopify.features", { returnObjects: true }).map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShopifySection;
