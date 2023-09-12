"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Card = ({
  backgroundInfo,
  direction,
  imgFile,
  alt,
  imgWidth,
  textCol,
  heading,
  firstPara,
  secondPara,
  buttonText,
  animationData,
}) => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <div
      className={`h-auto md:h-[750px] ${backgroundInfo}  px-[45px] md:px-[130px] relative`}
    >
      <div
        className={`flex flex-col ${direction}  items-center justify-center py-12 gap-24 `}
      >
        <img
          src={`${imgFile}`}
          alt={`${alt}`}
          className={`${imgWidth} w-auto h-auto md:h-[650px] rounded-3xl`}
          data-aos={animationData}
        />
        <div className={`${textCol} text-start `}>
          {firstPara && <p className=" tracking-widest">{firstPara}</p>}
          <h1 className="text-3xl font-bold py-6">{heading}</h1>

          <p className="pb-6">{secondPara}</p>
          <button className="bg-red-700 p-2 font-bold hover:scale-105  transform transition-transform text-white">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
