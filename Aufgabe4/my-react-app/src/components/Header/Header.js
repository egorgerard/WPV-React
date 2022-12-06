import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <div className="Header__Title">
        <h1>To-Do's</h1>
      </div>
      <div className="Header__Buttons">
        <div to="/" className="Header__Button">
          To-Do's
        </div>
        <div to="/add" className="Header__Button">
          New To-Do
        </div>
      </div>
    </div>
  );
};

export default Header;
