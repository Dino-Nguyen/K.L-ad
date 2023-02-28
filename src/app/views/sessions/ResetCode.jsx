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

class ResetCode extends Component {
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
          <img src="/assets/images/kelick.png" />
          <div className="digits-code-text">
          Enter 6 Digits Code
          </div>
          <div className="forget-pass-text">
          We have send the 6 digits code to your email.<br/> Please enter the code to proceed.
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
                        <div className="digits-code-group">
                        <input className="digits-code" type="text"/>
                        <input className="digits-code" type="text"/>
                        <input className="digits-code" type="text"/>
                        <input className="digits-code" type="text"/>
                        <input className="digits-code" type="text"/>
                        <input className="digits-code" type="text"/>
                        </div>
                        
                       
                      <Link to='/session/reset-password'>
                        <button
                          className="btn btn-rounded btn-primary w-100 my-1 mt-2"
                          type="submit"
                          id="btn-login"
                        >
                        Enter
                        </button>
                        </Link>
                      </form>
                    )}
                  </Formik>
          </div>
           <div className="resend-code">
           Resend Code to Registered Email
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
})(ResetCode);
