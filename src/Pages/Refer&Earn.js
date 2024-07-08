import React, { useEffect, useState } from "react";
import Hero from "../Components/Hero";
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import { useCourses } from "../Context/CourseContext";

function Index() {
  const [showBanner, setShowBanner] = useState(true);
  const handleCloseBanner = () => {
    setShowBanner(false);
  };
  const { courses, categories } = useCourses();

  useEffect(() => {
    if (courses) console.log(courses);
    console.log(categories);
  }, [courses]);

  return (
    <div className="">
      {showBanner && <Banner onCloseBanner={handleCloseBanner} />}
      <Header className="z-10" courses={courses} />
      <Hero courses={courses} categories={categories} />
    </div>
  );
}

export default Index;
