import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Banner = () => {
  return (
    <div>
      <div className="px-4 md:px-12 lg:px-16 bg-gray-100 py-4 md:py-6 dark:bg-gray-800 dark:text-white">
        <div>
          <Swiper
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            modules={[Autoplay]}
            className="relative"
          >
            <SwiperSlide>
              <div className="relative">
                <img
                  className="rounded-lg w-full h-80 md:h-96 lg:h-160"
                  src="https://i.ibb.co/6RV09c29/freelancer4.jpg"
                  alt="Slide 1"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/40 text-white rounded-lg">
                  <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-center">
                    Welcome to Freelance Hub
                  </h2>
                  <p className="text-sm md:text-base text-center my-4 px-4">
                    We connect talented freelancers with clients worldwide for
                    diverse, <br /> quality-driven remote work opportunities.
                  </p>
                  <button className="btn text-white bg-[#009fff]">
                    Learn More
                  </button>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative">
                <img
                  className="rounded-lg w-full h-80 md:h-96 lg:h-160"
                  src="https://i.ibb.co/fV2kpRMh/freelancer5.jpg"
                  alt="Slide 2"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/40 text-white rounded-lg">
                  <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-center">
                    Connect, Work, Grow Online
                  </h2>
                  <p className="text-sm md:text-base text-center my-4 px-4">
                    We link global freelancers with clients, offering secure,
                    flexible,
                    <br /> and professional work opportunities.
                  </p>
                  <button className="btn text-white bg-[#009fff]">
                    Learn More
                  </button>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative">
                <img
                  className="rounded-lg w-full h-80 md:h-96 lg:h-160"
                  src="https://i.ibb.co/m5dRV0w3/freelancer3.jpg"
                  alt="Slide 3"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/40 text-white rounded-lg">
                  <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-center">
                    Freelance Hub – Lets Carrier Online
                  </h2>
                  <p className="text-xs md:text-base text-center my-4 px-4">
                    We connect skilled freelancers with clients worldwide for
                    secure, <br /> flexible, and rewarding remote jobs..
                  </p>
                  <button className="btn text-white bg-[#007fff]">
                    Learn More
                  </button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Banner;
