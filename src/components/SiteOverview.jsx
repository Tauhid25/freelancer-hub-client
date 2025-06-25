import React from "react";
import jobsImg from "../assets/job-offer.png";
import newJobsImg from "../assets/new-project.png";
import hiringImg from "../assets/talent-search.png";
import freelancerImg from "../assets/freelancer.png";
import CountUp from "react-countup";

const SiteOverview = () => {
  return (
    <div className="py-10 bg-gray-100 px-4 md:px-8 lg:px-16 dark:bg-gray-800 dark:text-white">
      <div className="text-center mb-10">
        <h1 className="text-2xl md:text-4xl font-bold py-2 md:py-4">
          Our Impact in Numbers
        </h1>
        <p className="text-gray-600 text-sm md:text-base dark:text-white">
          Explore key statistics showcasing Freelance Hub’s growth, successful projects, and vibrant global freelancer community.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Item 1 */}
        <div className="bg-white p-6 rounded-2xl flex flex-col items-center text-center shadow-sm dark:bg-gray-800 dark:border dark:border-white">
          <img className="w-20 h-20 mb-4" src={jobsImg} alt="" />
          <p className="text-4xl font-bold text-blue-700 dark:text-white">
            <CountUp end={149} duration={4} />M+
          </p>
          <p className="text-lg font-medium text-gray-600 mt-2 dark:text-white">Jobs Available</p>
        </div>

        {/* Item 2 */}
        <div className="bg-white p-6 rounded-2xl flex flex-col items-center text-center shadow-sm dark:bg-gray-800 dark:border dark:border-white">
          <img className="w-20 h-20 mb-4" src={newJobsImg} alt="" />
          <p className="text-4xl font-bold text-blue-700 dark:text-white">
            <CountUp end={179} duration={4} />K+
          </p>
          <p className="text-lg font-medium text-gray-600 mt-2 dark:text-white">New Jobs This Week!</p>
        </div>

        {/* Item 3 */}
        <div className="bg-white p-6 rounded-2xl flex flex-col items-center text-center shadow-sm dark:bg-gray-800 dark:border dark:border-white">
          <img className="w-20 h-20 mb-4" src={hiringImg} alt="" />
          <p className="text-4xl font-bold text-blue-700 dark:text-white">
            <CountUp end={298} duration={4} />K+
          </p>
          <p className="text-lg font-medium text-gray-600 mt-2 dark:text-white">Companies Hiring</p>
        </div>

        {/* Item 4 */}
        <div className="bg-white p-6 rounded-2xl flex flex-col items-center text-center shadow-sm dark:bg-gray-800 dark:border dark:border-white">
          <img className="w-20 h-20 mb-4" src={freelancerImg} alt="" />
          <p className="text-4xl font-bold text-blue-700 dark:text-white">
            <CountUp end={8} duration={4} />M+
          </p>
          <p className="text-lg font-medium text-gray-600 mt-2 dark:text-white">Total Freelancers</p>
        </div>
      </div>
    </div>
  );
};

export default SiteOverview;
