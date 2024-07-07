import { useState } from "react";
import { useSpring, animated, useInView } from "@react-spring/web";
import step1 from "../img/1.png";
import step2 from "../img/2.png";
import step3 from "../img/3.png";
import hero from "../img/hero.png";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropdownCircle,
} from "react-icons/io";
import { FaGraduationCap, FaQuestion } from "react-icons/fa";
import ChatComponent from "./Chat";
import Footer from "./Footer";
import courses from "./programs";

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

const categories = Object.keys(courses);

export default function Hero() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [enrolled, setEnrolled] = useState(false);

  const steps = [
    {
      title: "Submit referrals easily via our website’s referral section.",
      icon: step1,
    },
    {
      title: "Earn rewards once your referral joins an Accredian program.",
      icon: step2,
    },
    {
      title: "Both parties receive a bonus 30 days after program enrollment.",
      icon: step3,
    },
  ];

  const categoryCourses = courses[selectedCategory] || [];
  const [selectedFaqCategory, setSelectedFaqCategory] = useState(
    Object.keys(faqs)[0]
  );

  return (
    <>
      {/* Hero Section */}
      <div className="bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="text-center lg:text-left max-w-4xl lg:max-w-none w-full lg:w-1/2">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Let’s Learn & Earn
              </h1>
              <h3 className="mt-6 text-2xl leading-8 text-gray-600">
                Get a chance to win up to{" "}
                <span className="text-blue-500 font-bold text-3xl">
                  Rs. 15,000
                </span>
              </h3>
              <div className="mt-10 flex items-center justify-center lg:justify-start gap-6">
                <a
                  href="#"
                  className="rounded-md bg-blue-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Refer Now
                </a>
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="relative lg:w-1/2 h-96 lg:h-auto -z-2">
              <img
                src={hero}
                alt="Hero image"
                className="inset-0 w-full object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl"
              >
                <div
                  style={{
                    clipPath:
                      "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                  }}
                  className="relative left-[calc(50%-11rem)] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#3b82f6] to-[#60a5fa] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                />
              </div>
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
              >
                <div
                  style={{
                    clipPath:
                      "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                  }}
                  className="relative left-[calc(50%+3rem)] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#3b82f6] to-[#60a5fa] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <div className="bg-blue-500 py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* How To Refer? Header */}
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8 text-center">
            How to Refer?
          </h2>

          {/* Referral Steps Cards */}
          <div className="flex flex-wrap justify-center gap-8">
            {steps.map((step, index) => (
              <AnimatedStep key={index} step={step} index={index} />
            ))}
          </div>
          <div className="mt-10 flex items-center justify-center gap-6">
            <a
              href="#"
              className="rounded-md bg-white px-4 py-2.5 text-sm font-semibold shadow-sm hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Refer Now
            </a>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-4">
            What Are The{" "}
            <span className="text-blue-500">Referral Benefits?</span>
          </h2>
          <div className="flex justify-end mb-4">
            <label className="inline-flex items-center cursor-pointer">
              <span className="mr-2 text-gray-700">Enrolled</span>
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                checked={enrolled}
                onChange={() => setEnrolled(!enrolled)}
              />
              <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
          <div className="flex h-full">
            {/* Vertical Menu */}
            <div className="w-1/4 bg-white shadow-lg rounded-lg">
              <ul>
                {categories.map((category, index) => (
                  <li
                    key={index}
                    className={`flex flex-row items-center p-2 border-b border-blue-200 cursor-pointer ${
                      selectedCategory === category
                        ? "bg-blue-500 text-white"
                        : "text-gray-700"
                    } ${index === 0 ? "rounded-t-lg" : ""}
              ${index === categories.length - 1 ? "rounded-b-lg" : ""}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    <span className="flex-grow">{category}</span>
                    <IoIosArrowDroprightCircle
                      className={`ml-2 ${
                        selectedCategory === category
                          ? "bg-blue-500 text-white"
                          : "text-gray-700"
                      }`}
                    />
                  </li>
                ))}
              </ul>
            </div>

            {/* Table */}
            <div className="relative overflow-x-auto ml-4 w-full h-full">
              <table className="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100 shadow-md sm:rounded-lg">
                <thead className="text-xs text-white uppercase bg-blue-600 border-b border-white dark:text-white shadow-lg rounded-lg">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 bg-blue-500 w-3/5 sm:rounded-tl-lg"
                    >
                      Course
                    </th>
                    <th scope="col" className="px-6 py-3 w-1/5">
                      Referrer Bonus
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 bg-blue-500 w-1/5 sm:rounded-tr-lg"
                    >
                      Referee Bonus
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Render 9 fixed rows */}
                  {[...Array(10)].map((_, index) => {
                    const course = categoryCourses[index];
                    return (
                      <tr key={index} className="bg-blue-100">
                        <td
                          className={`px-6 font-small bg-white text-black whitespace-nowrap dark:text-gray-800 ${
                            course ? "py-2" : "py-3"
                          } ${index === 9 ? "sm:rounded-bl-lg" : ""}`}
                        >
                          {course ? (
                            <FaGraduationCap
                              className="inline-block align-middle text-blue-500"
                              size={20}
                            />
                          ) : (
                            ""
                          )}
                          {course ? " " + course.name : ""}
                        </td>
                        <td
                          className={`px-6 dark:text-gray-800  ${
                            course ? "py-2" : "py-3"
                          }`}
                        >
                          {course ? course.referrerBonus : ""}
                        </td>
                        <td
                          className={`px-6 bg-white dark:text-gray-800  ${
                            course ? "py-2" : "py-3"
                          }  ${index === 9 ? "sm:rounded-br-lg" : ""}`}
                        >
                          {course ? course.refereeBonus : ""}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className="flex justify-end w-full mt-2">
                <a
                  href="#"
                  className="flex items-center rounded-lg p-1 px-2 border border-gray-300 text-sm font-semibold leading-6 text-gray-500"
                >
                  Show more <IoIosArrowDropdownCircle className="ml-2 mt-1" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <a
              href="#"
              className="rounded-md bg-blue-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Refer Now
            </a>
          </div>
        </div>
      </div>

      {/* FAQs Section */}
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

      {/* Chat Component */}
      <ChatComponent />

      {/* Footer Component */}
      <Footer />
    </>
  );
}

const AnimatedStep = ({ step, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Allow the animation to repeat
    threshold: 0.1, // Adjust based on when you want to trigger the animation
  });

  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translate3d(0,0px,0)" : "translate3d(0,40px,0)",
    delay: index * 300,
  });

  return (
    <animated.div
      ref={ref}
      style={props}
      className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white"
    >
      {/* Image */}
      <div className="h-50 bg-gray-200">
        <img
          src={step.icon}
          alt={`Step ${index + 1}`}
          className="object-cover w-full h-full"
        />
      </div>
      {/* Content */}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Step {index + 1}
        </h3>
        <p className="text-gray-600">{step.title}</p>
      </div>
    </animated.div>
  );
};
