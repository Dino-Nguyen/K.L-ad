import { lazy } from "react";

const Interview = lazy(() => import("./index"));
const AddRoles = lazy(() => import("./components/addRoles"));
const LastRoles = lazy(() => import("./components/lastRoles"));
const MarketingExcutive = lazy(() => import("./components/marketingExcutive"));

const interviewRouter = [
  {
    path: "/interview",
    component: Interview,
  },
  {
    path: "/roles/add",
    component: AddRoles,
  },
  {
    path: "/last-roles/add",
    component: LastRoles,
  },
  {
    path: "/maketing-excutive",
    component: MarketingExcutive,
  },
];

export default interviewRouter;
