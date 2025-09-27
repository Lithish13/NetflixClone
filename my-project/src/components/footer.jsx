import { useDispatch, useSelector } from "react-redux";
import { InfoActions } from "../state/Info";
const footer = () => {
  const dispatch = useDispatch();
  const LearnMore = useSelector((store) => store.Info);
  const infoHandler = () => {
    dispatch(InfoActions.More());
  };
  return (
    <div>
      <h1 className="text-white text-lg   mt-6 text-center">
        Ready to watch? Enter your email to create or restart your membership.
      </h1>
      <div className="flex justify-center  mt-4 space-x-2 h-10">
        <input
          type="email"
          placeholder="Email address"
          className=" rounded-md outline-1 w-1/3 pl-4  text-gray-400 outline-gray-300 "
        />
        <button className="bg-red-600 text-white rounded-md font-semibold hover:bg-red-700 transition ml-2 w-40 cursor-pointer">
          Get Started
        </button>
      </div>
      <p className="text-slate-400 ml-6 mt-6 ">
        Questions? Call{" "}
        <span className="hover:underline">000-800-919-1743</span>
      </p>
      <div className="mt-6 flex space-x-40">
        <ul className=" space-y-4 text-slate-400 ml-6 mt-6 mb-10 cursor-pointer underline">
          <li>FAQ</li>
          <li>Help Center</li>
          <li>Account</li>
          <li>Media Center</li>
          <li>Investor Relations</li>
          <li>Jobs</li>
        </ul>
        <ul className=" space-y-4 text-slate-400 ml-6 mt-6 mb-10 cursor-pointer underline">
          <li>Terms of Use</li>
          <li>Privacy</li>
          <li>Cookie Preferences</li>
          <li>Corporate Information</li>
          <li>Contact Us</li>
          <li>Legal Notices</li>
        </ul>
        <ul className=" space-y-4 text-slate-400 ml-6 mt-6 mb-10 cursor-pointer underline">
          <li>Cookie Preferences</li>
          <li>Corporate Information</li>
          <li>Contact Us</li>
          <li>Legal Notices</li>
          <li>Terms of Use</li>
          <li>Privacy</li>
        </ul>
      </div>

      <select className=" bg-black text-white cursor-pointer border border-gray-600 px-2.5 py-1.5  rounded-md font-semibold transition outline-0 mb-10 ml-6">
        <option value="English">English</option>
        <option value="Hindi">Hindi</option>
      </select>
      <p className="text-slate-100 ml-6 mt-6 ">Netflix India</p>
      <p className="text-slate-100 ml-6 mt-6 mb-10 w-4/5 text-[13px] pb-10 cursor-pointer">
        This page is protected by Google reCAPTCHA to ensure you're not a bot.
        <span
          className="underline text-blue-600"
          onClick={() => {
            infoHandler();
          }}
        >
          {LearnMore ? "Hide" : "Learn more"}
        </span>
        {LearnMore && (
          <p>
            The information collected by Google reCAPTCHA is subject to the
            Google Privacy Policy and Terms of Service, and is used for
            providing, maintaining, and improving the reCAPTCHA service and for
            general security purposes (it is not used for personalised
            advertising by Google).
          </p>
        )}
      </p>
    </div>
  );
};

export default footer;
