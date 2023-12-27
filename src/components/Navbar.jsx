import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/WatchList">WatchList</Link>
      <Link to="/Watched">Watched</Link>
      <Link to="/Watching">Watching</Link>
    </div>
  );
};

export default Navbar;
