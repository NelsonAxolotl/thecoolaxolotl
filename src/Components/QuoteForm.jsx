import fly from "../Pics/fly.png";
import { useTranslation } from "react-i18next";

const QuoteForm = ({
  quoteData,
  handleQuoteChange,
  handleQuoteSubmit,
  quoteSent,
  isSent,
  showAxolotl,
  quoteErrorMessage,
  setQuoteData,
}) => {
  const { t } = useTranslation();

  return (
    <div className="quote-section">
      <h2>{t("quote.title")}</h2>
      <p>{t("quote.intro.line1")}</p>
      <p>{t("quote.intro.line2")}</p>
      <p>{t("quote.intro.line3")}</p>

      <form className="quote-form" onSubmit={handleQuoteSubmit}>
        {/* Nom */}
        <label htmlFor="name">{t("quote.form.name")} :</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder={t("quote.form.name")}
          value={quoteData.name || ""}
          onChange={handleQuoteChange}
          required
        />

        {/* Email */}
        <label htmlFor="email">{t("quote.form.email")} :</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder={t("quote.form.email")}
          value={quoteData.email || ""}
          onChange={handleQuoteChange}
          required
        />

        {/* Type de projet */}
        <label htmlFor="projectType">{t("quote.form.projectType")} :</label>
        <select
          id="projectType"
          name="projectType"
          value={quoteData.projectType || ""}
          onChange={handleQuoteChange}
          required
        >
          <option value="">{t("quote.form.projectType")} :</option>
          <option value="site vitrine">
            {t("quote.form.projectTypeOptions.vitrine")}
          </option>
          <option value="plateform web">
            {t("quote.form.projectTypeOptions.plateform")}
          </option>
          <option value="blog">
            {t("quote.form.projectTypeOptions.blog")}
          </option>
          <option value="portfolio">
            {t("quote.form.projectTypeOptions.portfolio")}
          </option>
          <option value="boutique en ligne">
            {t("quote.form.projectTypeOptions.ecommerce")}
          </option>
          <option value="maquette">
            {t("quote.form.projectTypeOptions.maquette")}
          </option>
          <option value="autre">
            {t("quote.form.projectTypeOptions.autre")}
          </option>
        </select>

        {quoteData.projectType === "autre" && (
          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="otherProjectType">
              {t("quote.form.otherProjectType")} :
            </label>
            <input
              type="text"
              id="otherProjectType"
              name="otherProjectType"
              placeholder={t("quote.form.otherProjectType")}
              value={quoteData.otherProjectType || ""}
              onChange={handleQuoteChange}
              style={{
                width: "500px",
                padding: "10px",
                fontSize: "16px",
                height: "40px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
          </div>
        )}

        {/* Type de client */}
        <label htmlFor="clientType">{t("quote.form.clientType")} :</label>
        <select
          id="clientType"
          name="clientType"
          value={quoteData.clientType || ""}
          onChange={handleQuoteChange}
          required
        >
          <option value="">{t("quote.form.clientType")}</option>
          <option value="particulier">
            {t("quote.form.clientTypeOptions.particulier")}
          </option>
          <option value="entreprise">
            {t("quote.form.clientTypeOptions.entreprise")}
          </option>
          <option value="association">
            {t("quote.form.clientTypeOptions.association")}
          </option>
          <option value="autre">
            {t("quote.form.clientTypeOptions.autre")}
          </option>
        </select>

        {quoteData.clientType === "autre" && (
          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="otherClientType">
              {t("quote.form.otherClientType")} :
            </label>
            <input
              type="text"
              id="otherClientType"
              name="otherClientType"
              placeholder={t("quote.form.otherClientType")}
              value={quoteData.otherClientType || ""}
              onChange={handleQuoteChange}
              style={{
                width: "500px",
                padding: "10px",
                fontSize: "16px",
                height: "40px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
          </div>
        )}

        {/* Nature du projet */}
        <label htmlFor="projectNature">{t("quote.form.projectNature")} :</label>
        <select
          id="projectNature"
          name="projectNature"
          value={quoteData.projectNature || ""}
          onChange={handleQuoteChange}
          required
        >
          <option value="">{t("quote.form.projectNature")}</option>
          <option value="culture">
            {t("quote.form.projectNatureOptions.culture")}
          </option>
          <option value="commercial">
            {t("quote.form.projectNatureOptions.commercial")}
          </option>
          <option value="expérimental">
            {t("quote.form.projectNatureOptions.expérimental")}
          </option>
          <option value="éducatif">
            {t("quote.form.projectNatureOptions.éducatif")}
          </option>
          <option value="autre">
            {t("quote.form.projectNatureOptions.autre")}
          </option>
        </select>

        {/* Nombre de pages */}
        <label htmlFor="numberOfPages">{t("quote.form.numberOfPages")} :</label>
        <input
          type="number"
          id="numberOfPages"
          name="numberOfPages"
          min="0"
          placeholder={t("quote.form.numberOfPages")}
          value={quoteData.numberOfPages || ""}
          onChange={handleQuoteChange}
          required
        />

        {/* Idées */}
        <label htmlFor="ideas">{t("quote.form.ideas")}</label>
        <textarea
          id="ideas"
          name="ideas"
          rows="4"
          style={{
            width: "100%",
            height: "200px",
            fontSize: "16px",
            padding: "10px",
          }}
          placeholder={t("quote.form.ideas")}
          value={quoteData.ideas || ""}
          onChange={handleQuoteChange}
        ></textarea>

        <p>
          <strong>{t("quote.form.domainNote")}</strong>
        </p>

        <button type="submit" className="quote-button">
          {t("quote.form.submit")}
        </button>

        <div className="consent-cont">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            checked={quoteData.consent || false}
            onChange={(e) =>
              setQuoteData({ ...quoteData, consent: e.target.checked })
            }
            required
          />
          <label htmlFor="consent">{t("quote.form.consent")}</label>
        </div>
      </form>

      {quoteSent && (
        <p className="success-message" style={{ marginTop: "30px" }}>
          {t("quote.messages.success")}
        </p>
      )}
      {isSent && showAxolotl && (
        <div className="axolotl-container-happy2">
          <img
            src={fly}
            alt="Axolotl"
            className="axolotl-image-happy2 sent"
            onAnimationEnd={(e) => e.target.classList.remove("sent")}
          />
        </div>
      )}
      {quoteErrorMessage && (
        <p className="error-message" style={{ marginTop: "20px" }}>
          {t("quote.messages.error")}
        </p>
      )}

      {/* Infos fichier */}
      <div className="file">
        <p>
          {t("file.sendInstruction")}{" "}
          <a href="mailto:thecoolaxolotldesigner@gmail.com">
            thecoolaxolotldesigner@gmail.com
          </a>
        </p>
        <p>{t("file.reliabilityNote")}</p>
      </div>
    </div>
  );
};

export default QuoteForm;
