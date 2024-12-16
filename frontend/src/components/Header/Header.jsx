import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
          Welcome to Tomato, where we bring you a delicious array of dining
          options to satisfy your cravings!
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
