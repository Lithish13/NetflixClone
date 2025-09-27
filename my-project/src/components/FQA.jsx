import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { faqActions } from "../state/fQA.js";
const FQA = () => {
  const dispatch = useDispatch();
  const privacy = useSelector((store) => store.fqa);
  const faqs = [
    {
      question: "What is your refund policy?",
      answer: "We offer a 30-day money-back guarantee on all subscriptions.",
    },
    {
      question: "Can I cancel my subscription at any time?",
      answer: "Yes, you can cancel your subscription at any time.",
    },
    {
      question: "How many devices can I use my account on?",
      answer: "You can use your account on up to 4 devices simultaneously.",
    },
    {
      question: "Do you offer a free trial?",
      answer: "Yes, we offer a 7-day free trial for new users.",
    },
  ];
  return (
    <div>
      <h1 className="text-white text-2xl font-bold ml-6 mt-6">
        Frequently Asked Questions
      </h1>
      <div className="ml-6 mt-4 cursor-pointer">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="mb-4 mr-4"
            onClick={() => {
              dispatch(faqActions.plus());
            }}
          >
            <div className="flex items-center justify-between mb-2 bg-gray-800 p-4 pt-2 pb-2">
              <h2 className="text-lg font-semibold text-white">
                {faq.question}
              </h2>

              {privacy ? (
                <p className="text-gray-300 p-4 pt-2 pb-2 mb-2">{faq.answer}</p>
              ) : (
                <span className="text-white text-5xl ">+</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FQA;
