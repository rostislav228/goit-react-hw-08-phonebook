import React from "react";
import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";

export default function AuthNav() {
  return (
    <>
      <NavLink to="/register" exact activeClassName={s.activeLink}>
        Register
      </NavLink>
      <NavLink to="/login" exact activeClassName={s.activeLink}>
        Login
      </NavLink>
    </>
  );
}
