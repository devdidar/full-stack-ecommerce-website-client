import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import Blogs from "../Blogs/Blogs";
import DronesHome from "../DronesHome/DronesHome";
import Reviews from "../Reviews/Reviews";
import Navigation from "../../Shared/Navigation/Navigation";

const Home = () => {
  return (
    <div>
      <div
        style={{
          background:
            "linear-gradient(125deg, rgb(236, 252, 255) 0%, rgb(236, 252, 255) 40%, rgb(178, 252, 255) calc(40% + 1px), rgb(178, 252, 255) 60%, rgb(94, 223, 255) calc(60% + 1px), rgb(94, 223, 255) 72%, rgb(62, 100, 255) calc(72% + 1px), rgb(62, 100, 255) 100%)",
        }}
      >
        <Navigation />
        <Banner />
      </div>
      <DronesHome />
      <Reviews />
      <Blogs />
      <Footer />
    </div>
  );
};

export default Home;
