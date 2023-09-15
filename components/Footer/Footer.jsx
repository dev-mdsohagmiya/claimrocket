"use client";
import Image from "next/image";
import React from "react";
import NavLink from "../NavLink";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div
        className={` bg-cover bg-center relative  bg-black  md:px-[130px] px-[45px] py-12`}
      >
        {/* Background Image  */}

        <div className=" relative flex flex-col items-center justify-center  py-8">
          <div className=" md:w-[370px] md:h-[70px] w-[270px] h-[45px] my-14">
            <Image
              src={"/assets/heroLogo.png"}
              alt="Logo"
              height={"200"}
              width={"300"}
              className="w-full h-full object-fill"
            />
          </div>
          <div className=" flex flex-col md:flex-row pb-7">
            <button className="bg-red-700 p-2 font-bold hover:scale-105 text-white  transform transition-transform ">
              LAUNCH YOUR CLAIM
            </button>

            <button className="bg-red-700 py-2 px-[14px] font-bold text-white md:ml-10 ml-0 mt-4 md:mt-0 hover:scale-105  transform transition-transform ">
              CALL (866) ROCKET8
            </button>
          </div>
          <div className="text-white flex justify-center">
            <ul className="mt-[18px] ">
              <li className="inline-block mx-2 lg:mx-3  text-base">
                <NavLink
                  className="uppercase text-white"
                  activeClasses="text-red-600"
                  text="HOME"
                  href="/"
                />
              </li>
              <li className="inline-block mx-2 lg:mx-3  text-base">
                <NavLink
                  className="uppercase text-white"
                  activeClasses="text-red-600"
                  text="BLOGS"
                  href="/blogs"
                />
              </li>
              <li className="inline-block mx-2 lg:mx-3  text-base">
                <NavLink
                  className="uppercase text-white"
                  activeClasses="text-red-600"
                  text="CONTACT US"
                  href="/contact"
                />
              </li>
              <li className="text-center block md:inline-block  mx-3 lg:mx-2  text-base hover:scale-105 duration-300">
                <NavLink
                  className="uppercase"
                  activeClasses="text-red-600"
                  text="LOGIN"
                  href="/login"
                />
              </li>
              <li className=" text-center block md:inline-block mx-2">
                <Link href="/privacy-policy" className="tex-white">
                  PRIVACY POLICY
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="min-w-full bg-gray-900 text-sm font-light relative py-4 px-[45px] md:px-[130px] text-gray-400 ">
        {" "}
        © Claim Rocket.
      </div>
    </div>
  );
};

export default Footer;
