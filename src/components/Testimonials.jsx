import React from "react";
import review5Img from "../assets/review-5.jpg";
import review3Img from "../assets/review-3.jpg";
import review7Img from "../assets/review-7.jpg";
import review8Img from "../assets/review-8.jpg";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className="py-10 bg-gray-100 px-4 md:px-8 lg:px-16 dark:bg-gray-800 dark:text-white">
      <div className="text-center mb-10">
        <h1 className="text-2xl md:text-3xl font-bold py-2 md:py-4">
          What Clients Say About Us
        </h1>
        <p className="text-gray-600 text-sm md:text-base dark:text-white">
          Read genuine client reviews sharing experiences, satisfaction, and
          success stories with our talented freelancers.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Item 1 */}
        <div className="bg-white p-6 rounded-2xl flex flex-col items-center text-center shadow-sm dark:bg-gray-800 dark:border dark:border-white">
          <div>
            <img
              className="w-24 h-24 rounded-full mb-4 dark:border-2 dark:border-white"
              src={review5Img}
              alt=""
            />
          </div>
          <div>
            <p className="text-lg font-semibold">Maria Khan</p>
            <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-700 mt-4">
              <p className="text-xs text-gray-600 mt-2 dark:text-white">
                Freelance Hub connected me with a skilled developer who
                delivered excellent results on time. Highly recommend this
                platform!
              </p>
            </blockquote>
            <p className="flex justify-center items-center py-3">
              <FaStar color="orange" />
              <FaStar color="orange" />
              <FaStar color="orange" />
              <FaStar color="orange" />
              <FaStar color="orange" />
            </p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="bg-white p-6 rounded-2xl flex flex-col items-center text-center shadow-sm dark:bg-gray-800 dark:border dark:border-white">
          <div>
            <img
              className="w-24 h-24 rounded-full mb-4 dark:border-2 dark:border-white"
              src={review3Img}
              alt=""
            />
          </div>
          <div>
            <p className="text-lg font-semibold">Ashik Chowdhury</p>
            <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-700 mt-4">
              <p className="text-xs text-gray-600 mt-2 dark:text-white">
                Freelance Hub made hiring easy and efficient. The designer I
                found was professional, creative, and exceeded my expectations.
              </p>
            </blockquote>
            <p className="flex justify-center items-center py-3">
              <FaStar color="orange" />
              <FaStar color="orange" />
              <FaStar color="orange" />
              <FaStar color="orange" />
              <FaStar color="orange" />
            </p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="bg-white p-6 rounded-2xl flex flex-col items-center text-center shadow-sm dark:bg-gray-800 dark:border dark:border-white">
          <div>
            <img
              className="w-24 h-24 rounded-full mb-4 dark:border-2 dark:border-white"
              src={review7Img}
              alt="Doctors"
            />
          </div>
          <div>
            <p className="text-lg font-semibold">Rubel Biswas</p>
            <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-700 mt-4">
              <p className="text-xs text-gray-600 mt-2 dark:text-white">
                I found a great writer on Freelance Hub. Fast delivery,
                high-quality work, and great communication throughout the
                project.
              </p>
            </blockquote>
            <p className="flex justify-center items-center py-3">
              <FaStar color="orange" />
              <FaStar color="orange" />
              <FaStar color="orange" />
              <FaStar color="orange" />
              <FaStar color="orange" />
            </p>
          </div>
        </div>

        {/* Item 4 */}
        <div className="bg-white p-6 rounded-2xl flex flex-col items-center text-center shadow-sm dark:bg-gray-800 dark:border dark:border-white">
          <div>
            <img
              className="w-24 h-24 rounded-full mb-4 dark:border-2 dark:border-white"
              src={review8Img}
              alt="Doctors"
            />
          </div>
          <div>
            <p className="text-lg font-semibold">Jahangir Alom</p>
            <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-700 mt-4">
              <p className="text-xs text-gray-600 mt-2 dark:text-white">
                Freelance Hub is my go-to platform. Reliable freelancers, smooth
                process, and excellent support every step of the way.
              </p>
            </blockquote>
            <p className="flex justify-center items-center py-3">
              <FaStar color="orange" />
              <FaStar color="orange" />
              <FaStar color="orange" />
              <FaStar color="orange" />
              <FaStar color="orange" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
