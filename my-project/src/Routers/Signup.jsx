import React from "react";
import { IoCheckbox } from "react-icons/io5";

const Signup = () => {
  return (
    <div className="">
      <img
        src="https://i.redd.it/zjgs096khv591.jpg"
        alt="logo"
        className=" w-full object-cover brightness-15 z-50"
      />
      <div className="">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="netflix-logo"
          className="w-45 mx-auto mb-4 left-6 absolute top-6 "
        />
        <div className="text-white  mt-20 bg-transparent border rounded-2xl  border-gray-100 pl-4 text-center flex flex-col justify-center absolute top-20 left-1/3 right-1/3 space-x-6 pt-4 pb-4 ">
          <p className="text-2xl font-bold">Sign In</p>
          <input
            type="email"
            placeholder="Email address or phone number"
            className="mt-4 p-2 rounded-md outline-1 outline-gray-300 bg-black"
          />
          <input
            type="password"
            placeholder="Password"
            className="mt-4 p-2 rounded-md outline-1 outline-gray-300 bg-black"
          />
          <button className="bg-red-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-red-700 transition ml-2 cursor-pointer mt-4">
            Sign In
          </button>
          <p>or</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition ml-2 cursor-pointer mt-4">
            Sign in with Google
          </button>
          <p>Forget password or phone number?</p>
          <div className="flex items-center justify-center space-x-2 mt-4">
            <input type="checkbox" />
            <span>Remember me</span>
          </div>
          <p>
            New to Netflix? <span className="text-blue-600">Sign up now.</span>
          </p>
          <p className="pr-6 text-sm mt-4">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </p>
        </div>
        <footer className="  text-white cursor-pointer pl-20">
          <p className="pt-6">
            Questions? Call{" "}
            <span className="text-white hover:underline">
              000-800-919-1743 (Toll-Free){" "}
            </span>
          </p>
          <div className="grid grid-cols-4 underline pb-6   gap-4 mt-6 mb-10">
            <p>FAQ</p>
            <p>Help Centre</p>
            <p>Terms of Use</p>
            <p>Privacy</p>
            <p>Cookie Preferences</p>
            <p>Corporate Information</p>
          </div>
        </footer>
        <select className=" bg-black text-white cursor-pointer border border-gray-600 px-2.5 py-1.5  rounded-md font-semibold transition outline-0 mb-10 ml-20">
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
        </select>
      </div>
    </div>
  );
};

export default Signup;
