import React, { Component } from "react";
import { useEffect, useState } from "react";
import Select from "react-select";
import { Formik } from "formik";
import * as yup from "yup";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { StyleSignIn } from "./stylesSignIn";
import { BiBorderRadius } from "react-icons/bi";


const showPassword=()=> {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

const Signup =() => {
 let state = {
    email: "",
    username: "",
    password: "",
    repassword: "",
  };

 const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
  };
  

  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({});

  useEffect(() => {
    fetch(
      "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
    )
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.countries);
        setSelectedCountry(data.userSelectValue);
      });
  }, []);



  
    return (
      <StyleSignIn>
      {/* <div
        className="auth-layout-wrap"
        style={{
          backgroundImage: "url(/assets/images/photo-wide-4.jpg)",
        }}
      >
        <div className="auth-content">
          <div className="card o-hidden">
            <div className="row">
              <div
                className="col-md-6 text-center "
                style={{
                  backgroundSize: "cover",
                  backgroundImage: "url(/assets/images/photo-long-3.jpg)",
                }}
              >
                <div className="ps-3 auth-right">
                  <div className="auth-logo text-center mt-4">
                    <img src="assets/images/logo.png" alt="" />
                  </div>
                  <div className="flex-grow-1"></div>
                  <div className="w-100 mb-4">
                    <Link
                      to="/session/signin"
                      className="btn btn-rounded btn-outline-primary btn-outline-email w-100 my-1 btn-icon-text"
                    >
                      <i className="i-Mail-with-At-Sign"></i> Sign in with Email
                    </Link>

                    <Button className="btn btn-outline-google w-100 my-1 btn-icon-text btn-rounded">
                      <i className="i-Google-Plus"></i> Sign in with Google
                    </Button>
                    <Button className="btn btn-outline-facebook w-100 my-1 btn-icon-text btn-rounded">
                      <i className="i-Facebook-2"></i> Sign in with Facebook
                    </Button>
                  </div>
                  <div className="flex-grow-1"></div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="p-4">
                  <h1 className="mb-3 text-18">Sign Up</h1>
                  <Formik
                    initialValues={this.state}
                    validationSchema={SignupSchema}
                    onSubmit={this.handleSubmit}
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
                          <label htmlFor="username">Your name</label>
                          <input
                            className="form-control form-control-rounded"
                            name="username"
                            type="text"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.username}
                          />
                          {errors.username && touched.username && (
                            <div className="text-danger mt-1 ml-2">
                              {errors.username}
                            </div>
                          )}
                        </div>
                        <div className="form-group">
                          <label htmlFor="email">Email address</label>
                          <input
                            name="email"
                            className="form-control form-control-rounded"
                            type="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                          />
                          {errors.email && touched.email && (
                            <div className="text-danger mt-1 ml-2">
                              {errors.email}
                            </div>
                          )}
                        </div>
                        <div className="form-group">
                          <label htmlFor="password">Password</label>
                          <input
                            name="password"
                            className="form-control form-control-rounded"
                            type="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                          />
                          {errors.password && touched.password && (
                            <div className="text-danger mt-1 ml-2">
                              {errors.password}
                            </div>
                          )}
                        </div>
                        <div className="form-group">
                          <label htmlFor="repassword">Retype password</label>
                          <input
                            name="repassword"
                            className="form-control form-control-rounded"
                            type="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.repassword}
                          />
                          {errors.repassword && touched.repassword && (
                            <div className="text-danger mt-1 ml-2">
                              {errors.repassword}
                            </div>
                          )}
                        </div>
                        <button
                          className="btn btn-primary w-100 my-1 btn-rounded mt-3"
                          type="submit"
                        >
                          Sign Up
                        </button>
                      </form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

<div id="employeeLoginForm">
        <div className="auth-layout-wrap">
        <img src="/assets/images/kelick.png" />
          <div className="digits-code-text">
          Register Account
          </div>
          <div className="forget-pass-text">
          Sign up for an free account now! <br/>
Fill in the details of the first organization you will <br/> be managing to get started.
            </div>
          <div id="formLogin">
                  <Formik
                    // initialValues={state}
                    // validationSchema={SigninSchema}
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
                      <div className="sign-up-container">
                        <div className="sign-up-box">
                        <div className="form-group">
                          <label htmlFor="email">Email ID</label>
                          <input
                            className="form-control form-control-rounded position-relative"
                            type="email"
                            name="email"
                            // onChange={handleChange}
                            // onBlur={handleBlur}
                            // value={values.email}
                          />
                          {errors.email && (
                            <div className="text-danger mt-1 ml-2">
                              {errors.email}
                            </div>
                          )}
                        </div>
                        <div className="form-group">
                          <label htmlFor="name">Phone No.</label>
                          <input
                            className="form-control form-control-rounded position-relative"
                            type="text"
                            name="name"
                            // onChange={handleChange}
                            // onBlur={handleBlur}
                            // value={values.name}
                          />
                          {errors.name && (
                            <div className="text-danger mt-1 ml-2">
                              {errors.name}
                            </div>
                          )}
                        </div>
                        <div className="form-group">
                          <label htmlFor="password">Password</label>
                          <input
                            className="form-control form-control-rounded"
                            type="password"
                            name="password"
                            // onChange={handleChange}
                            // onBlur={handleBlur}
                            // value={values.password}
                            id="password"
                          />
                           <img onClick={showPassword} src="/assets/images/Eye.png" id="eye-password"/>
                          {errors.password && (
                            <div className="text-danger mt-1 ml-2">
                              {errors.password}
                            </div>
                          )}
                        </div>
                       
                        </div>
                        <div  className="sign-up-box sign-up-box2 ">
                        
                        <div className="form-group">
                          <label htmlFor="name">Organization Name</label>
                          <input
                            className="form-control form-control-rounded position-relative"
                            type="text"
                            name="name"
                            // onChange={handleChange}
                            // onBlur={handleBlur}
                            // value={values.name}
                          />
                          {errors.name && (
                            <div className="text-danger mt-1 ml-2">
                              {errors.name}
                            </div>
                          )}
                        </div>
                        <div className="form-group">
                          <label htmlFor="name">Organization ID</label>
                          <input
                            className="form-control form-control-rounded position-relative"
                            type="text"
                            name="name"
                            // onChange={handleChange}
                            // onBlur={handleBlur}
                            // value={values.name}
                          />
                          {errors.name && (
                            <div className="text-danger mt-1 ml-2">
                              {errors.name}
                            </div>
                          )}
                        </div>
                        <div className="form-group">
                          <label id="org-country" htmlFor="name">Organisation’s Country based in</label>
                          
                          <Select
                          id="select-country"
                          options={countries}
                          value={selectedCountry}
                          onChange={(selectedOption) => setSelectedCountry(selectedOption)}
                          styles={{
                            control: (baseStyles, state) => ({
                              ...baseStyles,
                              borderColor:'#E5E5E5' ,
                              backgroundColor: "#E5E5E5",
                              borderRadius: "5px",
                            }),
                          }}
                        />
                          {errors.name && (
                            <div className="text-danger mt-1 ml-2">
                              {errors.name}
                            </div>
                          )}
                        </div>
                       
                        </div>
                       </div> 
                       


                      <Link to='/session/signin'>
                        <button
                          className="btn btn-rounded btn-primary w-100 my-1 mt-2"
                          type="submit"
                          id="btn-login"
                        >
                          Sign Up
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


const SignupSchema = yup.object().shape({
  username: yup.string().required("email is required"),
  email: yup.string().email("Invalid email").required("email is required"),
  password: yup
    .string()
    .min(8, "Password must be 8 character long")
    .required("password is required"),
  repassword: yup
    .string()
    .required("repeat password")
    .oneOf([yup.ref("password")], "Passwords must match"),
});

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, {})(Signup);
