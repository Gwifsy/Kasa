import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error">
      <h2>404</h2>
      <h3>
        Oups! La page que <span>vous demandez n'existe pas.</span>
      </h3>
      <Link to="/">Retourner sur la page d’accueil</Link>
    </div>
  );
};

export default Error;
