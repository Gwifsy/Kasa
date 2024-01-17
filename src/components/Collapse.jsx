import React, { useState } from "react";

const Collapse = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <div className="header__collapse">
        <h3>{title}</h3>
        <img
          className={`arrow__icon ${isOpen}`}
          onClick={() => setIsOpen(!isOpen)}
          src="/assets/icon/arrow.svg"
          alt=""
        />
      </div>
      {isOpen && <div className="description">{description}</div>}
    </div>
  );
};

export default Collapse;
