import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import './page3.css'
import "swiper/css";
import "swiper/css/pagination";

const Page3 = () => {
  const testimonials = [
    {
      name: "Rahul Yadav",
      data: "Our home got a complete makeover thanks to their expert painting services! The colors are vibrant, and the finish is flawless. Highly professional and on time—highly recommended!"  
    },
    {
      name: "Priya Sharma",
      data: "I wanted a beautiful garden but had no idea where to start. Their team transformed my backyard into a lush green paradise! Now, I love spending time outdoors." 
    },
    {
      name: "Ananya Rao",
      data: "Keeping up with household chores was a nightmare, but their housekeeping service has been a game-changer! My home has never felt cleaner and fresher." 
    },
    {
      name: "Kunal Verma",
      data: "From painting to gardening and even housekeeping, they took care of everything! Our home has never looked better. Professional, efficient, and worth every penny!" 
    },
    {
      name: "Deepak Nair",
      data: "We had an old tree that was becoming a safety hazard. Their team handled it professionally and safely, leaving our space neat and tidy. Great service!" 
    },

  ];

  return (
    <div className="testimonial h-[80vh] w-full bg-[#aad5aa] flex flex-col justify-center items-center py-10">
      <h1 className="text-7xl font-bold text-white uppercase">Testimonials</h1>

      <div className="relative w-1/2 mt-16">
        <Swiper
          className="h-4/5 rounded-md bg-[#7dae7d]"
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          slidesPerView={1}
          centeredSlides={true}
          pagination={{ clickable: true, el: ".custom-pagination" }}
        >
          {testimonials.map((text, index) => (
            <SwiperSlide
              key={index}
              className="flex flex-col justify-center items-center rounded-md px-8 py-6 h-full text-center font-semibold text-white"
            >
              <p className="mb-4">"{text.data}"</p>
              <h2 className="text-3xl font-semibold">"{text.name}"</h2>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-pagination mt-6 flex justify-center"></div>
      </div>
    </div>
  );
};

export default Page3;
