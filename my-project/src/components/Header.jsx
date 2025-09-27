import React from "react";
import { IoLanguage } from "react-icons/io5";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div>
        <img
          src="https://i.redd.it/zjgs096khv591.jpg"
          alt="logo"
          className=" w-full object-cover brightness-30 z-50"
        />
        <div className="absolute top-6 w-full text-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="netflix-logo"
            className="w-45 mx-auto mb-4 left-6 absolute "
          />
          <div>
            <div
              className="absolute right-32 flex items-center outline-1 
             outline-gray-300 pr-2"
            >
              <IoLanguage className="text-white text-2xl ml-2  " />
              <select className=" text-white cursor-pointer bg-transparent px-2.5 py-1.5  rounded-md font-semibold transition outline-0 ">
                <option
                  defaultValue={"default"}
                  className="text-black "
                  value="english"
                >
                  English
                </option>
                <option value="hindi" className=" text-black ">
                  Hindi
                </option>
              </select>
            </div>
            <button className="bg-red-600 text-white px-4 py-1 rounded-md font-semibold hover:bg-red-700 transition absolute right-6 cursor-pointer">
              <Link to="/signup">Sign Up</Link>
            </button>
          </div>
        </div>
        <div className=" absolute bottom-0 left-0 right-0 p-4 text-center mt-10  text-white top-1/3 mx-auto space-y-2">
          <h1 className="text-5xl font-bold">Unlimited movies, TV</h1>
          <p className="text-5xl font-bold">shows and more.</p>
          <p className="font-bold">Watch anywhere. Cancel anytime.</p>
          <div className=" mt-4">
            Ready to watch? Enter your email to create or restart your
            <p>membership.</p>
          </div>
          <div>
            <input
              type="email"
              placeholder="Email address"
              className="px-4 py-2 rounded-md outline-1 outline-gray-300 mt-2 w-1/5"
            />
            <button className="bg-red-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-red-700 transition ml-2 cursor-pointer">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
