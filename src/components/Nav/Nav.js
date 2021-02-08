import React from "react";
import { NavLink } from "react-router-dom";

import "./Nav.scss";

const Nav = () => {
  return (
    <div className="nav">
      <NavLink className="link" activeClassName="active-link" to="/users">
        Users
      </NavLink>
      <NavLink className="link" activeClassName="active-link" to="/addusers">
        Add user
      </NavLink>
      <NavLink className="link" activeClassName="active-link" to="/tweets">
        Tweets
      </NavLink>
      <NavLink className="link" activeClassName="active-link" to="/addtweets">
        Add tweets
      </NavLink>
    </div>
  );
};

export default Nav;
