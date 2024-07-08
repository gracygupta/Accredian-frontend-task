// import axios from "axios";
// import { useState, useEffect } from "react";

// const useFetchCourses = () => {
//   const [courses, setCourses] = useState({});

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/courses");
//         const coursesData = response.data;

//         const formattedCourses = coursesData.reduce((acc, course) => {
//           const { category, name, referrerBonus, refereeBonus } = course;

//           if (!acc[category]) {
//             acc[category] = [];
//           }

//           acc[category].push({
//             name,
//             referrerBonus: `₹ ${referrerBonus.toLocaleString()}`,
//             refereeBonus: `₹ ${refereeBonus.toLocaleString()}`,
//           });

//           return acc;
//         }, {});

//         setCourses(formattedCourses);
//       } catch (error) {
//         console.error("Error fetching courses:", error);
//       }
//     };

//     fetchCourses();
//   }, []);

//   return courses;
// };

// export default useFetchCourses;
