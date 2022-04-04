import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink to="/to-dos" className={(navData) => navData.isActive ? classes.active : ''}>To Do List</NavLink>
          </li>
          <li>
            <NavLink to="/new-to-do" className={(navData) => navData.isActive ? classes.active : ''}>New To Do </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
