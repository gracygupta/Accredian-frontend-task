import React, { useState } from "react";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropdownCircle,
} from "react-icons/io";
import { FaGraduationCap, FaQuestion } from "react-icons/fa";

const Benefits = ({
  enrolled,
  setEnrolled,
  categories,
  selectedCategory,
  setSelectedCategory,
  openModal,
  categoryCourses,
}) => {
  return (
    <div className="bg-gray-100 py-8" id="resources">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-4">
          What Are The <span className="text-blue-500">Referral Benefits?</span>
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
            onClick={openModal}
            className="rounded-md bg-blue-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Refer Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
