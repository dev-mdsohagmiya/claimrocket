"use client";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { FaTrophy, FaHandHoldingMedical } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";

const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);
  return (
    <div
      className={`min-h-screen bg-cover bg-center relative  bg-black h-[1550px] sm:h-[1300px] md:h-[1700px] lg:h-[1200px] `}
    >
      <div className="container mx-auto">
        {/* Background Image  */}
        <Image
          src={"/assets/herobg.png"}
          fill
          className={` min-h-screen items-center absolute inset-0 bg-black opacity-100 top-[60px] object-fit`}
        />
        <div className="relative inset-0 flex flex-col items-center top-20 md:top-48 md:mx-[130px] mx-[45px]">
          {/* Hero upper part  */}
          <div className="text-white  grid grid-cols-12 mb-14">
            <div className="col-span-12 md:col-span-6 ">
              <div className=" pb-24">
                <p className=" font-bold text-base md:text-xl pb-5 tracking-widest">
                  FREE CASE CONSULTATION 24/7
                </p>
                <img src={"/assets/heroLogo.png"} alt="" className=" flex" />
              </div>
              <div>
                <p className="md:text-xl text-base tracking-normal md:leading-9  font-light">
                  At Claim Rocket, we believe in the power of experience and the
                  value of an extensive professional network. We’re not just a
                  law firm – we are your trusted ally in the fight for justice,
                  championing your rights with the speed and precision of a
                  rocket.
                </p>
                <div className=" pt-4 flex flex-col lg:flex-row gap-4">
                  <button className="bg-red-700 p-2 font-bold hover:scale-105  transform transition-transform ">
                    LAUNCH YOUR CLAIM
                  </button>

                  <button className="bg-red-700 py-2 px-[14px] font-bold  ml-0 mt-4 md:mt-0 hover:scale-105  transform transition-transform ">
                    CALL (866) ROCKET8
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Hero Lower part */}
          <div
            className="text-white flex flex-col lg:flex-row justify-center   gap-8 items-end relative mb-14 "
            data-aos="zoom-in"
          >
            <div>
              <div className="bg-black p-4 rounded-md">
                <FaTrophy className="w-10 h-10" />
                <h1 className="text-2xl font-bold">No Win, No Fee</h1>
                <p className="tracking-normal leading-loose pt-5">
                  At Claim Rocket, we fight to get you the maximum compensation
                  you deserve. We understand that each case is unique, and so
                  are the challenges you face. Our personalized approach is
                  designed to reduce your stress and promote your recovery while
                  we take care of the legal complexities.
                </p>
              </div>
            </div>
            <div className="flex gap-10 md:flex-row flex-col">
              <div className="w-full h-full md:h-96 bg-gradient-to-br from-slate-400 p-4  flex flex-col justify-end  rounded-md">
                <FaHandHoldingMedical className="w-10 h-10" />
                <h1 className="font-semibold text-xl pb-4 ">
                  Your Injuiry, Our Priority
                </h1>
                <p>
                  We work tirelessly to alleviate your stress, handle your legal
                  concerns, and get you back to full strength.
                </p>
              </div>
              <div className="w-full h-full md:h-96 bg-white text-black p-4  flex flex-col justify-end  rounded-md">
                <IoIosPeople className="w-10 h-10 text-black" />
                <h1 className="font-semibold text-xl pb-4">
                  Your Injuiry, Our Priority
                </h1>
                <p>
                  We work tirelessly to alleviate your stress, handle your legal
                  concerns, and get you back to full strength.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
