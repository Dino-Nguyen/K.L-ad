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

const ResetPassword = () => {

  let initialState = {
    email: "watson@example.com",
    password: "12345678",
  };
  const [state, setState] = useState(initialState);
  const handleSubmit = (value, { isSubmitting }) => {
    this.props.loginWithEmailAndPassword(value);
  };
  const handleChange = (event) => {
    event.persist();
    this.setState({ [event.target.name]: event.target.value });
  };
  const checked = () => {
    document.getElementById("formLogin").display = "none"         
  }
  const showPassword=()=> {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  
  return (
    <StyleSignIn>
     
      <div id="employeeLoginForm">
        <div className="auth-layout-wrap">
        <img src="/assets/images/kelick.png" />
          <div className="digits-code-text">
          Reset Password
          </div>
          <div className="forget-pass-text">
          Set the new password for your Customer account <br/> so you can login and access all the features
            </div>
          <div id="formLogin">
                  <Formik
                    initialValues={state}
                    validationSchema={SigninSchema}
                    onSubmit={handleSubmit}
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
                          <label htmlFor="password">New Password</label>
                          <input
                            className="form-control form-control-rounded"
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            id="password"
                          />
                           <img onClick={showPassword} src="/assets/images/Eye.png" id="eye-password"/>
                          {errors.password && (
                            <div className="text-danger mt-1 ml-2">
                              {errors.password}
                            </div>
                          )}
                        </div>
                        <div className="form-group">
                          <label htmlFor="password">Confirm New Password</label>
                          <input
                            className="form-control form-control-rounded"
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            id="password"
                          />
                           <img onClick={showPassword} src="/assets/images/Eye.png" id="eye-password"/>
                          {errors.password && (
                            <div className="text-danger mt-1 ml-2">
                              {errors.password}
                            </div>
                          )}
                        </div>
                        
                      <Link to='/session/password-reset-success'>
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
};

const mapStateToProps = (state) => ({
  loginWithEmailAndPassword: PropTypes.func.isRequired,
  user: state.user,
});

export default connect(mapStateToProps, {
  loginWithEmailAndPassword,
})(ResetPassword);
