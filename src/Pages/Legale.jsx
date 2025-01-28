import React from "react";
import "./Legale.css";
import Nav from "../Components/Nav";
import End from "../Components/End";
import legale from "../Pics/legal.webp";

const Legale = () => {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <Nav />
      <div className="legale">
        <img src={legale} alt="Axolotl" className="round-image-legale" />
        <div className="legal-container">
          <h1>Mentions Légales</h1>

          <section>
            <h2>1. Présentation du site</h2>
            <p>
              Le site <strong>thecoolaxolotl.com</strong> (ci-après « le Site »)
              est édité par :
            </p>
            <ul>
              <li>The Cool Axolotl</li>
            </ul>
            <p>
              <strong>Siège social :</strong> Montpellier <br />
              <strong>Email :</strong>{" "}
              <a href="mailto:thecoolaxolotldesigner@gmail.com">
                thecoolaxolotldesigner@gmail.com
              </a>{" "}
              <br />
              <strong>Téléphone :</strong> 06 17 80 67 15 <br />
              <strong>SIRET :</strong> / <strong>NDA :</strong>
            </p>
            <p>
              <strong>Directeur de la publication :</strong> The Cool Axolotl
            </p>
          </section>

          <section>
            <h2>2. Hébergement du site</h2>
            <p>Le site est hébergé par :</p>
            <p>
              <strong>Nom de l’hébergeur :</strong> <br />
              <strong>Adresse :</strong> 4 rue de Metz
              <br />
              <strong>Téléphone :</strong> 06 17 80 67 15
            </p>
          </section>

          <section>
            <h2>3. Propriété intellectuelle</h2>
            <p>
              Le contenu du site <strong>thecoolaxolotl.com</strong> (textes,
              images, graphismes, logo, icônes, sons, logiciels, etc.) est la
              propriété exclusive de [Nom de votre entreprise] ou de ses
              partenaires. <br />
              Toute reproduction, représentation, modification, publication ou
              adaptation de tout ou partie des éléments du site, quel que soit
              le moyen ou le procédé utilisé, est interdite sans l’autorisation
              préalable écrite de [Nom de votre entreprise].
            </p>
          </section>

          <section>
            <h2>4. Responsabilité</h2>
            <p>
              Les responsables de la publication ne peuvent être tenus pour
              responsables des dommages directs ou indirects causés au matériel
              de l’utilisateur lors de l’accès au site{" "}
              <strong>thecoolaxolotl.com</strong>. <br />
              Le site contient des liens hypertextes vers d’autres sites,
              toutefois, les éditeurs du site n’assument aucune responsabilité
              quant au contenu de ces sites.
            </p>
          </section>

          <section>
            <h2>5. Données personnelles</h2>
            <p>
              Conformément à la réglementation en vigueur (notamment le RGPD),
              les utilisateurs disposent d’un droit d’accès, de rectification et
              de suppression des données personnelles les concernant. Pour
              exercer ce droit, veuillez envoyer un email à{" "}
              <strong>[Votre adresse email de contact]</strong>.
            </p>
          </section>

          <section>
            <h2>6. Cookies</h2>
            <p>
              Le site <strong>thecoolaxolotl.com</strong> utilise des cookies
              pour améliorer l’expérience utilisateur et analyser le trafic du
              site. <br />
              Vous avez la possibilité de désactiver les cookies en modifiant
              les paramètres de votre navigateur.
            </p>
          </section>

          <section>
            <h2>7. Droit applicable</h2>
            <p>
              Les présentes mentions légales sont régies par la loi française.
              Tout litige relatif à l’utilisation du site{" "}
              <strong>thecoolaxolotl.com</strong> sera soumis à la compétence
              des tribunaux français.
            </p>
          </section>
        </div>
      </div>
      <End />
    </>
  );
};

export default Legale;
