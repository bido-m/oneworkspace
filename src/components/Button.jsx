import React from "react";

const Button = ({ name, icon, clas, type, click }) => {
  return (
    <>
      <button
        type={type}
        onClick={click}
        className={`${clas}`}
      >
        {icon && <span className="text-xl">{icon}</span>}
        <span>{name}</span>
      </button>
    </>
  );
};

export default Button;
