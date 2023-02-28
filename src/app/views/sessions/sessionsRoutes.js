import { resetPassword } from "app/redux/actions/LoginActions";
import { lazy } from "react";


const Signup = lazy(() => import("./Signup"));

const Signin = lazy(() => import("./Signin"));

const ForgotPassword = lazy(() => import("./ForgotPassword"));

const ResetCode = lazy(() => import("./ResetCode"))

const ResetPassword = lazy(() => import("./ResetPassword"))

const PasswordResetSuccess = lazy(() => import("./PasswordResetSuccess"))

const Error404 = lazy(() => import("./Error"));

const sessionsRoutes = [
  {
    path: "/session/signup",
    component: Signup
  },
  {
    path: "/session/signin",
    component: Signin
  },
  {
    path: "/session/forgot-password",
    component: ForgotPassword
  },
  {
    path: "/session/reset-code",
    component: ResetCode
  },
  {
    path: "/session/reset-password",
    component: ResetPassword
  },
  {
    path: "/session/password-reset-success",
    component: PasswordResetSuccess
  },
  {
    path: "/session/404",
    component: Error404
  }
];

export default sessionsRoutes;
