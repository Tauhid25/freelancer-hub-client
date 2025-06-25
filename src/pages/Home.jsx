import React from "react";
import Banner from "../components/Banner";
import FeaturedTasks from "../components/FeaturedTasks";
import Testimonials from "../components/Testimonials";
import SiteOverview from "../components/SiteOverview";

const Home = () => {
  return (
    <div>
      <Banner />
      <FeaturedTasks />
      <Testimonials />
      <SiteOverview />
    </div>
  );
};

export default Home;
