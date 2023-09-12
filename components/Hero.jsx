"use client";
import Image from "next/image";
import heroBg from "../public/assets/herobg.png";
import heroLogo from "../public/assets/heroLogo.png";
import React from "react";

const Hero = () => {
  return (
    <div
      className={`min-h-screen bg-cover bg-center relative  bg-black h-[1630px] md:h-[1400px]`}
    >
      {/* Background Image  */}
      <Image
        src={"/assets/herobg.png"}
        fill
        className={` min-h-screen items-center absolute inset-0 bg-black opacity-100 top-32 object-fit`}
      />
      <div className="absolute inset-0 flex flex-col items-center top-20 md:top-48">
        {/* Hero upper part  */}
        <div className="text-white  grid grid-cols-12 mb-14">
          <div className="col-span-12 md:col-span-6 p-9 md:p-20">
            <div className=" pb-28">
              <p className=" font-bold text-xl pb-5 tracking-widest">
                FREE CASE CONSULTATION 24/7
              </p>
              <img
                src={"/assets/heroLogo.png"}
                alt=""
                className="h-20 md:h-24 w-auto"
              />
            </div>
            <div>
              <p className="text-xl tracking-normal leading-loose">
                At Claim Rocket, we believe in the power of experience and the
                value of an extensive professional network. We’re not just a law
                firm – we are your trusted ally in the fight for justice,
                championing your rights with the speed and precision of a
                rocket.
              </p>
              <div className=" pt-4 grid grid-cols-12">
                <button className="bg-red-700 p-2 font-bold hover:scale-105  transform transition-transform col-span-7 md:col-span-6">
                  LAUNCH YOUR CLAIM
                </button>

                <button className="bg-red-700 py-2 px-[14px] font-bold md:ml-10 ml-0 mt-4 md:mt-0 hover:scale-105  transform transition-transform col-span-7 md:col-span-6">
                  CALL (866) ROCKET8
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Hero Lower part */}
        <div className="text-white flex flex-col md:flex-row justify-center  mx-5 md:mx-20 gap-8 items-end ">
          <div className="bg-black p-8 rounded-md">
            <h1 className="text-2xl font-bold">No Win, No Fee</h1>
            <p className="tracking-normal leading-loose pt-5">
              At Claim Rocket, we fight to get you the maximum compensation you
              deserve. We understand that each case is unique, and so are the
              challenges you face. Our personalized approach is designed to
              reduce your stress and promote your recovery while we take care of
              the legal complexities.
            </p>
          </div>
          <div className="w-auto h-auto md:h-96 bg-gradient-to-br from-slate-400 p-8  flex flex-col justify-end  rounded-md">
            <h1 className="font-semibold text-xl pb-4 ">
              Your Injuiry, Our Priority
            </h1>
            <p>
              We work tirelessly to alleviate your stress, handle your legal
              concerns, and get you back to full strength.
            </p>
          </div>
          <div className="w-auto h-auto md:h-96 bg-white text-black p-8  flex flex-col justify-end  rounded-md">
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
  );
};

export default Hero;
