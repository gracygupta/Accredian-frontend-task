import React from "react";
import { useSpring, animated, useInView } from "@react-spring/web";
import step1 from "../img/1.png";
import step2 from "../img/2.png";
import step3 from "../img/3.png";

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

const HowToRefer = ({ openModal }) => {
  return (
    <div id="refer-n-earn" className="bg-blue-500 py-6 lg:py-8">
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
            onClick={openModal}
            className="rounded-md bg-white px-4 py-2.5 text-sm font-semibold shadow-sm hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Refer Now
          </a>
        </div>
      </div>
    </div>
  );
};

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

export default HowToRefer;
