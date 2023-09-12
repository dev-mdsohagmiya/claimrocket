"use client";
import React from "react";
import Lottie from "lottie-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { AiFillStar } from "react-icons/ai";
import star from "../../public/assets/star.json";

const Reviews = () => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    stars.push(<AiFillStar className="w-4 h-4 text-yellow-500" />);
  }

  return (
    <div className="bg-white mx-[45px] md:mx-[130px] py-10 text-center">
      <h6 className="tracking-widest py-4">TESTIMONIALS</h6>
      <h1 className=" text-xl md:text-5xl font-bold pb-10">Our Customers</h1>
      <div className="flex items-center justify-center pb-6">
        <Lottie animationData={star} className=" w-20 md:w-48" />
      </div>

      <Swiper
        spaceBetween={40}
        slidesPerView={4}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <div className="p-4">
              <h1 className="font-bold text-sm text-black ">Dog Bite</h1>
              <p className="  text-gray-900  text-sm">Jhon doe</p>
            </div>
            <p className="text-sm font-light text-black text-start">
              "I was bitten by a neighbor's dog and didn't know where to turn.
              Claim Rocket was empathetic and professional. Their expertise led
              to a settlement that covered all my medical expenses."
            </p>
            <p className="flex items-center justify-cneter mt-1">{stars}</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="p-4">
              <h1 className="font-bold text-sm text-black ">Dog Bite</h1>
              <p className="  text-gray-900  text-sm">Jhon doe</p>
            </div>
            <p className="text-sm font-light text-black text-start">
              "I was bitten by a neighbor's dog and didn't know where to turn.
              Claim Rocket was empathetic and professional. Their expertise led
              to a settlement that covered all my medical expenses."
            </p>
            <p className="flex items-center justify-cneter mt-1">{stars}</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="p-4">
              <h1 className="font-bold text-sm text-black ">Dog Bite</h1>
              <p className="  text-gray-900  text-sm">Jhon doe</p>
            </div>
            <p className="text-sm font-light text-black text-start">
              "I was bitten by a neighbor's dog and didn't know where to turn.
              Claim Rocket was empathetic and professional. Their expertise led
              to a settlement that covered all my medical expenses."
            </p>
            <p className="flex items-center justify-cneter mt-1">{stars}</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="p-4">
              <h1 className="font-bold text-sm text-black ">Dog Bite</h1>
              <p className="  text-gray-900  text-sm">Jhon doe</p>
            </div>
            <p className="text-sm font-light text-black text-start">
              "I was bitten by a neighbor's dog and didn't know where to turn.
              Claim Rocket was empathetic and professional. Their expertise led
              to a settlement that covered all my medical expenses."
            </p>
            <p className="flex items-center justify-cneter mt-1">{stars}</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="p-4">
              <h1 className="font-bold text-sm text-black ">Dog Bite</h1>
              <p className="  text-gray-900  text-sm">Jhon doe</p>
            </div>
            <p className="text-sm font-light text-black text-start">
              "I was bitten by a neighbor's dog and didn't know where to turn.
              Claim Rocket was empathetic and professional. Their expertise led
              to a settlement that covered all my medical expenses."
            </p>
            <p className="flex items-center justify-cneter mt-1">{stars}</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="p-4">
              <h1 className="font-bold text-sm text-black ">Dog Bite</h1>
              <p className="  text-gray-900  text-sm">Jhon doe</p>
            </div>
            <p className="text-sm font-light text-black text-start">
              "I was bitten by a neighbor's dog and didn't know where to turn.
              Claim Rocket was empathetic and professional. Their expertise led
              to a settlement that covered all my medical expenses."
            </p>
            <p className="flex items-center justify-cneter mt-1">{stars}</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="p-4">
              <h1 className="font-bold text-sm text-black ">Dog Bite</h1>
              <p className="  text-gray-900  text-sm">Jhon doe</p>
            </div>
            <p className="text-sm font-light text-black text-start">
              "I was bitten by a neighbor's dog and didn't know where to turn.
              Claim Rocket was empathetic and professional. Their expertise led
              to a settlement that covered all my medical expenses."
            </p>
            <p className="flex items-center justify-cneter mt-1">{stars}</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="p-4">
              <h1 className="font-bold text-sm text-black ">Dog Bite</h1>
              <p className="  text-gray-900  text-sm">Jhon doe</p>
            </div>
            <p className="text-sm font-light text-black text-start">
              "I was bitten by a neighbor's dog and didn't know where to turn.
              Claim Rocket was empathetic and professional. Their expertise led
              to a settlement that covered all my medical expenses."
            </p>
            <p className="flex items-center justify-cneter mt-1">{stars}</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Reviews;
