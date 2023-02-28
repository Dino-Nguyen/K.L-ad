import { lazy } from "react";
import { authRoles } from "app/auth/authRoles";

const Dashboard = lazy(() => import("./Dashboard"));
const MyProfile = lazy(() => import("./MyProfile"));

const dashboardRoutes = [
  {
    path: "/dashboard",
    component: Dashboard,
    auth: authRoles.admin,
  },
  {
    path: "/my-profile",
    component: MyProfile,
  },
];

export default dashboardRoutes;
