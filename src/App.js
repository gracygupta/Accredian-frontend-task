import React, { useEffect, useState } from "react";
import Hero from "./Components/HeroNew";
// import ReferralModal from "./ReferralModal";
import Header from "./Components/Header";
import Banner from "./Components/Banner";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const handleCloseBanner = () => {
    console.log("Clicked");
    setShowBanner(false);
  };

  useEffect(() => {
    console.log(showBanner);
  }, [showBanner]);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="">
      {showBanner && <Banner onCloseBanner={handleCloseBanner} />}
      <Header className="z-10" />
      {/* <div className=""> */}
      <Hero />
      {/* </div> */}
      {/* <div className="container">
      </div> */}
    </div>
    // <div className="bg-gray-600 container h-full w-full ">
    //   <Hero onOpenModal={handleOpenModal} />
    //   {/* {showModal && <ReferralModal onCloseModal={handleCloseModal} />} */}
    // </div>
  );
}

export default App;
