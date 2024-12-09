import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

import video from '../../LoginAssets/video.mp4'
const Login = () => {
  return (
    <div className="loginPage flex">
      <div className="container flex">
        <div className="videoDiv">
            <video src={video} autoPlay muted loop></video>
            <div className="textDiv">
                <h2 className="title">Create And Sell Extraordinary Products</h2>
                <p>Adopt the peace of naturel</p>
            </div>
            <div className="footerDiv flex">
                <span className="text">Don't have an account?</span>
                <Link to={'/register'}>
                <button className='btn'>Sign Up</button>
                </Link>
            </div>
        </div>
      </div>
      {/* <a href="/register">To Register</a>
       <br />
       <a href="/dashboard">To Dashboard</a>
       <br />
       This is Login Page  */}
    </div>
  );
};

export default Login;
