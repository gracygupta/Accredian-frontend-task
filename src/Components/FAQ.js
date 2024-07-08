import React, { useState } from "react";
import { FaQuestion } from "react-icons/fa";

const faqs = {
  Eligibility: [
    {
      question: "Who is eligible to participate in the referral program?",
      answer:
        "Anyone who is a registered user on our platform can participate in the referral program.",
    },
    {
      question: "Are there any restrictions on who I can refer?",
      answer:
        "You can refer anyone who is interested in our courses. However, self-referrals are not allowed.",
    },
  ],
  "How to Use?": [
    {
      question: "How do I refer someone?",
      answer: "Submit referrals easily via our website’s referral section.",
    },
    {
      question: "When do I earn my rewards?",
      answer: "You earn rewards once your referral joins an Accredian program.",
    },
  ],
  "Terms and Conditions": [
    {
      question: "What are the terms and conditions for the referral program?",
      answer:
        "Both parties receive a bonus 30 days after program enrollment, subject to verification of referral.",
    },
    {
      question: "Can the referral bonus be revoked?",
      answer:
        "Yes, the referral bonus can be revoked if any fraudulent activity is detected.",
    },
  ],
};

const FAQsSection = () => {
  const [selectedFaqCategory, setSelectedFaqCategory] = useState(
    Object.keys(faqs)[0]
  );

  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-4">
          Frequently Asked <span className="text-blue-500">Questions</span>
        </h2>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="lg:w-1/4 bg-white shadow-lg rounded-lg p-4">
            <ul>
              {Object.keys(faqs).map((category, index) => (
                <li
                  key={index}
                  className={`p-2 cursor-pointer ${
                    selectedFaqCategory === category
                      ? "bg-blue-500 text-white rounded-md"
                      : "text-gray-700"
                  }`}
                  onClick={() => setSelectedFaqCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-3/4 lg:ml-4 bg-white shadow-lg rounded-lg p-4">
            {faqs[selectedFaqCategory].map((faq, index) => (
              <div key={index} className="mb-4">
                <h3 className="flex flex-row text-lg font-semibold text-gray-800">
                  <FaQuestion size={18} className="mt-2" />
                  &ensp;
                  {faq.question}
                </h3>
                <p className="text-gray-600">&ensp; &ensp; {faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQsSection;
