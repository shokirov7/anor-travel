import React from "react";
import "./Loader.scss";

function Loader() {
  return (
    <div className="loader_holder">
      <div className="newtons-cradle">
        <div className="newtons-cradle__dot"></div>
        <div className="newtons-cradle__dot"></div>
        <div className="newtons-cradle__dot"></div>
        <div className="newtons-cradle__dot"></div>
      </div>
    </div>
  );
}

export default Loader;
