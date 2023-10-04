import React from "react";
import SpinnerTrans from "./Spinner-trans.gif.gif";

const Loader = () => {
  return (
    <div>
      <img className="mx-auto w-28" src={SpinnerTrans} alt="" />
    </div>
  );
};

export default Loader;
