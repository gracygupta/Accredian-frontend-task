import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./Pages/Refer&Earn";
import "react-toastify/dist/ReactToastify.css";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
// import { CoursesProvider } from "./Context/CourseContext";

function App() {
  return (
    // <CoursesProvider>
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
        </Routes>
      </div>
    </Router>
    // </CoursesProvider>
  );
}

export default App;
