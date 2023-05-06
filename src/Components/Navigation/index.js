import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ props }) => {
  return (
    <div>
      <h2>Trailmates</h2>
      <nav>
        <ul>
          <li><Link to="/">Newsfeed</Link></li>
          <li><Link to="/search">Search</Link></li>
          <li><Link to="/messages">Messages</Link></li>
          <li><Link to="/settings">Settings</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
