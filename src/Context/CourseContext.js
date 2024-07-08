// src/contexts/CoursesContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
// import useFetchCourses from "../services/courses";

const CoursesContext = createContext();

export const CoursesProvider = ({ children }) => {
  const courses = [];
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (courses) {
      const categoryNames = Object.keys(courses);
      setCategories(categoryNames);
    }
  }, [courses]);

  return (
    <CoursesContext.Provider value={{ courses, categories }}>
      {children}
    </CoursesContext.Provider>
  );
};

export const useCourses = () => {
  return useContext(CoursesContext);
};
