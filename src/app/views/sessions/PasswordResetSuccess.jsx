import React, { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { loginWithEmailAndPassword, resetPassword } from "app/redux/actions/LoginActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { StyleSignIn } from "./stylesSignIn";
import { Label } from "recharts";
const SigninSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("email is required"),
  password: yup
    .string()
    .min(8, "Password must be 8 character long")
    .required("password is required"),
});

const PasswordResetSuccess = () => {

  
  
  return (
    <StyleSignIn>
     
      <div id="employeeLoginForm">
        <div className="auth-layout-wrap">
        <img src="/assets/images/kelick.png" />
          <div className="digits-code-text">
          Password Reset Success!
          </div>
          <div className="forget-pass-text">
          You have reseted your password successfully. <br/>
Please login your Customer account.
            </div>
          <div id="formLogin">
                  <Formik
                    initialValues=""
                    validationSchema={SigninSchema}
                    // onSubmit={handleSubmit}
                  >
                    {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                    }) => (
                      <form onSubmit={handleSubmit}>
                        
                     
                        <img id="success-pic" src="/assets/images/success.png" />
                        
                      <Link to='/session/signin'>
                        <button
                          className="btn btn-rounded btn-primary w-100 my-1 mt-2"
                          type="submit"
                          id="btn-login"
                        >
                         Back to Login
                        </button>
                        </Link>
                      </form>
                    )}
                  </Formik>
          </div>
             
          
        </div>
      </div>

    </StyleSignIn>
  );
};

const mapStateToProps = (state) => ({
  loginWithEmailAndPassword: PropTypes.func.isRequired,
  user: state.user,
});

export default connect(mapStateToProps, {
  loginWithEmailAndPassword,
})(PasswordResetSuccess);
