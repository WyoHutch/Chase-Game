import React from "react";

const Squares = ({ objSqrs, posSqr, showKnife }) => {
  let valShow = "";
  if (objSqrs[posSqr] === 1) {
    valShow = "X";
  } else if (objSqrs[posSqr] === 9 && showKnife) {
    valShow = "K";
  }

  return (
    <div className="showSqrs" style={{ alignItems: "center" }}>
      {valShow}
    </div>
  );
};

export default Squares;
