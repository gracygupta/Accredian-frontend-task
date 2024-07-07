import React, { useState, useEffect } from "react";
import step1 from "../img/1.png";
import step2 from "../img/2.png";
import step3 from "../img/3.png";

function ReferralSteps() {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    {
      title: "Submit referrals easily via our website’s referral section.",
      icon: step1, // Replace with your icon path
    },
    {
      title: "Earn rewards once your referral joins an Accredian program.",
      icon: step2, // Replace with your icon path
    },
    {
      title: "Both parties receive a bonus 30 days after program enrollment.",
      icon: step3, // Replace with your icon path
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentStep((prevStep) => (prevStep % steps.length) + 1);
    }, 3000); // Adjust interval for animation speed (in milliseconds)

    return () => clearInterval(intervalId);
  }, []);

  const handleStepClick = (stepIndex) => {
    setCurrentStep(stepIndex + 1);
  };

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex items-center gap-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded-md ${
              currentStep === index + 1 ? "bg-gray-200 animate-pulse" : ""
            }`}
            onClick={() => handleStepClick(index)}
          >
            <img
              src={step.icon}
              alt={`Step ${index + 1} Icon`}
              className="w-6 h-6"
            />
            <span className="text-sm font-semibold">{step.title}</span>
          </div>
        ))}
      </div>
      <p className="text-center text-sm text-gray-500">
        Click a step to jump or watch the animation for sequence.
      </p>
    </div>
  );
}

export default ReferralSteps;
