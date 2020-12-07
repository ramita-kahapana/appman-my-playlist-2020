/* eslint-disable import/no-anonymous-default-export */
import { lazy } from "react";

export default {
  Home: {
    path: "/",
    exact: true,
    component: lazy(() => import("../pages/Home")),
  },
  Register: {
    path: "/register",
    exact: true,
    component: lazy(() => import("../pages/Register")),
  },
  Login: {
    path: "/login",
    exact: true,
    component: lazy(() => import("../pages/Login")),
  },
};
