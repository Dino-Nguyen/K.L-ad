import { lazy } from "react";

const Organization = lazy(() => import("./index"));


const organizationRouter = [
  {
    path: "/organization",
    component: Organization,
  },
  
];

export default organizationRouter;
