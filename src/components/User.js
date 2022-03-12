import React from "react";
import one from "./images/one.jfif";
import two from "./images/download.png";

function User() {
  return (
    <div>
      <div className="add-to-cart">
        <img src={two} />
      </div>
      <h1>User Page</h1>
      <div className="card-wrapper">
        <div className="img-wrapper item">
          <img src={one} />
        </div>
        <div className="text-wrapper item">
          <span>OPPO</span>
          <span>Price: 50,000</span>
        </div>
        <div className="btn-wrapper item">
          <button>Add to Card</button>
        </div>
      </div>
    </div>
  );
}

export default User;
