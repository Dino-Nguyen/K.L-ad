import React, { Component } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { loginWithEmailAndPassword } from "app/redux/actions/LoginActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { StyleSignIn } from "./stylesSignIn";
const ForgotPasswordSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("email is required"),
});
const openAdminLoginForm = () => {
  document.getElementById("employeeLoginForm").style.display ="none"
  document.getElementById("adminLoginForm").style.display ="block"
}
const openEmployeeLoginForm =() => {
  document.getElementById("employeeLoginForm").style.display ="block"
  document.getElementById("adminLoginForm").style.display ="none"
}

class ForgotPassword extends Component {
  state = {
    email: "watson@example.com",
  };

  handleChange = (event) => {
    event.persist();
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (value, { isSubmitting }) => {
    this.props.loginWithEmailAndPassword(value);
  };

  render() {
    return (
      <StyleSignIn>
  <div id="employeeLoginForm">
        <div className="auth-layout-wrap">
          <img src="/assets/images/Forget-Password.png" />
          <div className="forget-pass-text">
            Enter your registered Customer Email ID and we will send a 6 digits code to your email to reset your password
            </div>
          <div className="selected" color-scheme="light">
            <div>
            <img src="/assets/images/2. Radio.png" id="employeeLogin"/>
            <label for="employeeLogin">Employee Login</label>
            </div>
            <div>
            <img src="/assets/images/2. Radio (1).png" id="adminLogin" onClick={openAdminLoginForm} />
            <label for="adminLogin">Admin Login</label>
            </div>
          </div>
          <div id="formLogin">
                  <Formik
                    initialValues=""
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
                        
                        <div className="form-group">
                          <label htmlFor="email">Email ID</label>
                          <input
                            className="form-control form-control-rounded position-relative"
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                          />
                          {errors.email && (
                            <div className="text-danger mt-1 ml-2">
                              {errors.email}
                            </div>
                          )}
                        </div>
                       
                       
                      <Link to='/session/reset-code'>
                        <button
                          className="btn btn-rounded btn-primary w-100 my-1 mt-2"
                          type="submit"
                          id="btn-login"
                        >
                         Reset Password
                        </button>
                        </Link>
                      </form>
                    )}
                  </Formik>
          </div>
          <div className="pe-3 auth-right already-have">
            
                Already have an Account?
                  <Link
                    to="/session/signin"
                    className=" return-login"
                    id="btn-signUpNew"
                  >
                     Login
                  </Link>
           
          </div>
             
          
        </div>
      </div>

     <div id="adminLoginForm">
        <div className="auth-layout-wrap">
          <img src="/assets/images/Forget-Password.png" />
          <div className="forget-pass-text">
            Enter your registered Customer Email ID and we will send a 6 digits code to your email to reset your password
            </div>
          <div className="selected" color-scheme="light">
            <div>
            <img src="/assets/images/2. Radio (1).png" id="employeeLogin" onClick={openEmployeeLoginForm}/>
            <label for="employeeLogin">Employee Login</label>
            </div>
            <div>
            <img src="/assets/images/2. Radio.png" id="adminLogin" />
            <label for="adminLogin">Admin Login</label>
            </div>
          </div>
          <div id="formLogin">
                  <Formik
                    initialValues=""
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
                        
                        <div className="form-group">
                          <label htmlFor="email">Email ID</label>
                          <input
                            className="form-control form-control-rounded position-relative"
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                          />
                          {errors.email && (
                            <div className="text-danger mt-1 ml-2">
                              {errors.email}
                            </div>
                          )}
                        </div>
                       
                       
                      <Link to='/session/reset-code'>
                        <button
                          className="btn btn-rounded btn-primary w-100 my-1 mt-2"
                          type="submit"
                          id="btn-login"
                        >
                         Reset Password
                        </button>
                        </Link>
                      </form>
                    )}
                  </Formik>
          </div>
          <div className="pe-3 auth-right already-have">
            
                Already have an Account?
                  <Link
                    to="/session/signin"
                    className=" return-login"
                    id="btn-signUpNew"
                  >
                     Login
                  </Link>
           
          </div>
             
          
        </div>
      </div>

      </StyleSignIn>
    );
  }
}

const mapStateToProps = (state) => ({
  loginWithEmailAndPassword: PropTypes.func.isRequired,
  user: state.user,
});

export default connect(mapStateToProps, {
  loginWithEmailAndPassword,
})(ForgotPassword);
