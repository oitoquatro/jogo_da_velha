/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Square = ({ value, onClick }) => {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
