"use client";
import Image from "next/image";
// components/NavBar.js
import { useState } from "react";
import { HiMail } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";
const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav id="nav">
      <div id="n-contract">
        <div className="mx-10 py-2">
          <ul>
            <li className="inline-block text-sm">
              <BsFillTelephoneFill className="inline-block" /> (866) 762 5388{" "}
            </li>
            <li className="inline-block text-sm mx-2">
              <HiMail className="inline-block text-[20px]" />{" "}
              CONTACT@CLAINROCKET.COM{" "}
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-10">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-3 lg:col-span-4">
            <img className="w-[220px]" src="/assets/logo.png" alt="" />
          </div>
          <div className="col-span-9 lg:col-span-8 text-end">
            <ul className="mt-[10px] ">
              <li className="inline-block mx-2 lg:mx-3  text-base">HOME</li>
              <li className="inline-block mx-2 lg:mx-3  text-base">BLOGS</li>
              <li className="inline-block mx-2 lg:mx-3  text-base">
                CONTACT US
              </li>
              <li className="inline-block mx-3 lg:mx-2  text-base">
                <button className="bg-[#E02B20] text-white px-6 py-2">
                  LAUNCH YOUR CLAIM
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
