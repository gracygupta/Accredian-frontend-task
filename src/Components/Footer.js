import React, { useState } from "react";
import { IoIosArrowDropdownCircle, IoLogoYoutube } from "react-icons/io";
import {
  FaGraduationCap,
  FaFacebookSquare,
  FaTwitter,
  FaLinkedin,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import logo from "../img/logo2.png";
import courses from "./programs";

const Footer = () => {
  const categories = Object.keys(courses);
  const [showPrograms, setShowPrograms] = useState({});
  const [showAccredian, setShowAccredian] = useState(true);

  const toggleProgramCategory = (category) => {
    setShowPrograms((prev) => ({ ...prev, [category]: !prev[category] }));
  };

  const toggleAccredian = () => {
    setShowAccredian((prev) => !prev);
  };

  return (
    <footer id="about-us" className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <img src={logo} alt="Logo" className="w-55 ml-10" />
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {/* Programs */}
          <div className="py-10 pl-10 pr-5">
            <h3 className="text-lg font-bold mb-4">Programs</h3>
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li key={index}>
                  <button
                    className="flex items-center justify-between w-full text-left text-white hover:text-blue-500"
                    onClick={() => toggleProgramCategory(category)}
                  >
                    {category}
                    <IoIosArrowDropdownCircle
                      className={`ml-2 transition-transform ${
                        showPrograms[category] ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {showPrograms[category] && courses[category].length > 0 && (
                    <ul className="ml-4 mt-2">
                      {courses[category].map((course, courseIndex) => (
                        <li key={courseIndex} className="mb-2">
                          <div className="flex items-center">
                            <FaGraduationCap className="text-blue-500 mr-2" />
                            <span>{course.name}</span>
                          </div>
                          {/* <div className="ml-6 text-sm">
                            <p>Referrer Bonus: {course.referrerBonus}</p>
                            <p>Referee Bonus: {course.refereeBonus}</p>
                          </div> */}
                        </li>
                      ))}
                    </ul>
                  )}
                  {showPrograms[category] && courses[category].length === 0 && (
                    <p className="ml-4 mt-2 text-sm">No programs available.</p>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us and Social Media */}
          <div className="flex flex-col items-start py-10 pl-10 pr-5">
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="mb-4">
              <li>
                Email us (For Data Science Queries): admissions@accredian.com
              </li>
              <li>
                Email us (For Product Management Queries):pm@accredian.com
              </li>
              <li>
                Data Science Admission Helpline:+91 9079653292 (9 AM - 7 PM)
              </li>
              <li>Product Management Admission Helpline:+91 9625811095</li>
              <li>Enrolled Student Helpline: +91 7969322507</li>
              <li>
                Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector
                18, Gurugram, Haryana 122015
              </li>
            </ul>
            <h3 className="text-lg font-bold mb-4 pt-8">Social Media</h3>
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="text-white hover:text-blue-500">
                  <FaFacebookSquare size={28} />
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-blue-500">
                  <FaTwitter size={28} />
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-blue-500">
                  <FaLinkedin size={28} />
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-blue-500">
                  <GrInstagram size={28} />
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-blue-500">
                  <IoLogoYoutube size={28} />
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links and Why Accredian */}
          <div className="flex flex-col items-start py-10 pl-10">
            <div className="w-full">
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="mb-4">
                <li>
                  <a href="#" className="text-white hover:text-blue-500">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-blue-500">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-blue-500">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-blue-500">
                    Refer & Earn
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-blue-500">
                    Admission Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-blue-500">
                    Referral Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-blue-500">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-blue-500">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-blue-500">
                    Master FAQs
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full mt-8">
              <h4
                className="flex items-center justify-between font-semibold text-xl mb-2 cursor-pointer"
                onClick={toggleAccredian}
              >
                <span>Why Accredian</span>
                {showAccredian ? <FaChevronUp /> : <FaChevronDown />}
              </h4>
              {showAccredian && (
                <p className="mt-2">
                  Accredian stands out for our dedication to providing
                  high-quality, industry-recognized certifications and programs
                  that help individuals and organizations achieve their goals.
                  Our expert instructors, comprehensive curriculum, and
                  commitment to excellence make us the ideal choice for
                  professional development.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
