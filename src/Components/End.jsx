import React from "react"; // Ajoutez cette ligne
import "./End.css";
import { Link } from "react-router-dom";
import legal from "/legal.webp";
import axo from "/axolotllogo.webp";
import politic from "/politiqueaxo.webp";

const End = () => {
  return (
    <>
      <div className="end">
        <div className="legal">
          <Link to="/Mentions-légales">
            <img
              src={legal}
              alt="mention légale"
              width="150"
              height="150"
              className="round-image4"
              loading="lazy"
            />
          </Link>{" "}
          <p>Mentions légales</p>
        </div>
        <div className="copy">
          <Link to="/">
            <img
              src={axo}
              width="150"
              height="150"
              alt="logo"
              className="round-image5"
            />
          </Link>
          <p>Copyright © 2025 | The Cool Axolotl </p>
        </div>
        <div className="politique ">
          <Link to="/Politique-de-confidentialité">
            <img
              src={politic}
              width="300"
              height="150"
              alt="politique de confidentialité axolotl"
              className="round-image4"
              loading="lazy"
            />
          </Link>
          <p>Politique de confidentialité</p>
        </div>
      </div>
    </>
  );
};
export default End;
