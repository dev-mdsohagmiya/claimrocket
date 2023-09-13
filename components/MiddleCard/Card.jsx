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
  imgHeight,
  textCol,
  heading,
  headingSize,
  firstPara,
  secondPara,
  buttonText,
  animationData,
  roundedProperty,
}) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div
      className={`h-auto ${backgroundInfo}  px-[45px] md:px-[130px] relative`}
    >
      <div
        className={`flex  ${direction}  items-center justify-center py-12 gap-24 `}
      >
        <img
          src={`${imgFile}`}
          alt={`${alt}`}
          className={`  ${imgWidth} w-auto h-auto ${imgHeight} ${roundedProperty} max-w-full`}
          data-aos={animationData}
        />
        <div className={`${textCol} text-start `}>
          {firstPara && <p className=" tracking-widest">{firstPara}</p>}
          <h1 className={`py-6 ${headingSize}`}>{heading}</h1>

          <p className="pb-6 md:text-base text-sm">{secondPara}</p>
          <button className="bg-red-600 p-2 font-bold hover:scale-105  transform transition-transform text-white">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
