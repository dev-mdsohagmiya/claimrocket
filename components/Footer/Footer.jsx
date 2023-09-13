"use client";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div>
      <div
        className={`min-h-screen bg-cover bg-center relative  bg-black  md:px-[130px] px-[45px] py-12`}
      >
        {/* Background Image  */}
        <Image
          src={"/assets/herobg.png"}
          fill
          className={` min-h-screen items-center absolute inset-0 bg-black opacity-100  `}
        />
        <div className=" relative flex flex-col items-center justify-center  py-8">
          <div className=" md:w-[370px] md:h-[70px] w-[270px] h-[45px] my-14">
            <img
              src={"/assets/heroLogo.png"}
              alt="Logo"
              className="w-full h-full object-fill"
            />
          </div>
          <div className=" flex flex-col md:flex-row pb-7">
            <button className="bg-red-700 p-2 font-bold hover:scale-105  transform transition-transform ">
              LAUNCH YOUR CLAIM
            </button>

            <button className="bg-red-700 py-2 px-[14px] font-bold md:ml-10 ml-0 mt-4 md:mt-0 hover:scale-105  transform transition-transform ">
              CALL (866) ROCKET8
            </button>
          </div>
        </div>
        <div className=" relative md:grid md:grid-cols-12 flex flex-col items-center md:gap-2 gap-12 text-white justify-center">
          <div className="flex flex-col gap-5 md:items-start items-center col-span-3">
            <button>Home</button>
            <button>Free Consultation</button>
            <button>Practice Areas</button>
            <button>Contact</button>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-x-16 col-span-5 md:ml-10 ml-0">
            <div className="flex flex-col gap-y-5 md:items-start items-center pb-12 md:pb-0 ">
              <a href="#aumomobile">Automobile Accident</a>
              <a href=""> Medical Malpractice</a>
              <a href="">Slip & Fall Accident</a>
              <a href="">Workplace Injury</a>
              <a href="">Dog Bites</a>
              <a href="">Nursing Home Abuse</a>
              <a href="">Wrongful Death</a>
              <a href="">Personal Injury</a>
            </div>
            <div className="flex flex-col gap-5 font-light  md:items-start items-center ">
              <span>San Diego</span>
              <span>Los Angeles</span>
              <span>Orange County</span>
              <span>San Bernardino</span>
              <span>Monterey</span>
              <span>Seaside </span>
              <span>Carmel </span>
              <span>Fresno </span>
            </div>
          </div>
          <div className="flex flex-col  gap-y-24 col-span-4">
            <div className=" flex flex-col  gap-6  md:items-end items-center">
              <span>866 762 5388</span>
              <span>contact@claimrocket.com</span>
            </div>
            <div className=" flex flex-col  gap-6 md:items-end items-center">
              <span>3505 Cadillac Ave, O-206B </span>
              <span>Costa Mesa, CA 92626</span>
            </div>
          </div>
        </div>
      </div>
      <div className="min-w-full bg-gray-900 text-sm font-light relative py-4 px-[45px] md:px-[130px] text-gray-400">
        {" "}
        © Claim Rocket.
      </div>
    </div>
  );
};

export default Footer;
