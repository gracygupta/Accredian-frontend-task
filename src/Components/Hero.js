import { useEffect, useState } from "react";
import hero from "../img/hero.png";
import ChatComponent from "./Chat";
import Footer from "./Footer";
// import courses from "./programs";
import ReferralModal from "./ReferralModal";
import { useNavigate } from "react-router-dom";
import FAQsSection from "./FAQ";
import Benefits from "./Benefits";
import HowToRefer from "./Steps";

export default function Hero({ courses }) {
  const [enrolled, setEnrolled] = useState(false);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [categories, setCategories] = useState([]);

  // const categories = Object.keys(courses);
  const checkLogin = async () => {
    const token = await localStorage.getItem("token");

    if (!token) navigate("/login");
  };

  const openModal = () => {
    checkLogin();
    setShowModal(true);
  };
  // const closeModal = () => setShowModal(false);
  const closeModal = () => {
    setTimeout(() => {
      setShowModal(false);
    }, 3000);
  };
  useEffect(() => {
    console.log(showModal);
    console.log(categories);
  }, [showModal, categories]);

  useEffect(() => {
    setCategories(Object.keys(courses));
  }, [courses]);

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
                  onClick={openModal}
                >
                  Refer Now
                </a>
                <a
                  href="#resources"
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

      {/* Render Referral Modal */}
      <ReferralModal
        courses={courses}
        isOpen={showModal}
        onClose={closeModal}
      />

      {/* Steps Section */}
      <HowToRefer openModal={openModal} />

      {/* Benefits Section */}
      <Benefits
        courses={courses}
        enrolled={enrolled}
        setEnrolled={setEnrolled}
        categories={categories}
        openModal={openModal}
        // categoryCourses={categoryCourses}
      />

      {/* FAQs Section */}
      <FAQsSection />

      {/* Chat Component */}
      <ChatComponent />

      {/* Footer Component */}
      <Footer courses={courses} />
    </>
  );
}
