import React from "react";
import facebook from "../images/facebook.png";
import git from "../images/git.png";
import google from "../images/google.png";

const Login = () => {
  return (
    <div>
        <div className="shadow-md p-4 pl-96">
            <img className="ml-[18rem]  w-48 h-auto" src="https://myaccount.nytimes.com/lire_ui/img/nyt-logo.svg"/>
        </div>
      <div className="ml-[30rem] mt-24">
        <h1 className="text-gray-700 font-medium text-3xl ml-12">
          Log in or create an account
        </h1>
        <br />
        <label className="font-semibold text-lg">Email Address</label>
        <br />
        <input className="w-6/12 p-2 border border-black" />
        <br />
        <button className="bg-black text-white w-6/12 p-2 mt-4 font-bold">
          Continue
        </button>
        <h1 className="ml-64">or</h1>
        <h1 className="mt-4">
          By continuing, you agree to the Terms of Sale, Terms of Service, and{" "}
          <br />
          Privacy Policy.
        </h1>
        <div className="border border-black w-6/12 p-2 flex items-center mt-4">
          <img className="w-4 h-4 ml-40" src={google} alt="google" />
          <h1 className="font-bold ml-4">Continue with Google</h1>
        </div>
        <div className="border border-black w-6/12 p-2 flex items-center mt-4">
          <img className="w-4 h-4 ml-40" src={facebook} alt="facebook" />
          <h1 className="font-bold ml-4">Continue with Facebook</h1>
        </div>
        <div className="border border-black w-6/12 p-2 flex items-center mt-4">
          <img className="w-4 h-4 ml-40" src={git} alt="apple" />
          <h1 className="font-bold ml-4">Continue with Apple</h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
