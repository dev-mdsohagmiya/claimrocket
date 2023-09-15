"use client";
import Image from "next/image";
// components/NavBar.js
import { useEffect, useState } from "react";
import { HiMail } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import Link from "next/link";
import NavLink from "./NavLink";
import NavOptions from "./NavOptions";
import { IoClose } from "react-icons/io5";

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggle = () => {
    if (isNavOpen) {
      setIsNavOpen(false);
    } else {
      setIsNavOpen(true);
    }
  };
  useEffect(() => {
    console.log("hello i am from hello");
    setIsNavOpen(false);
  }, []);

  return (
    <nav id="nav" className="fixed w-full z-20">
      <div id="n-contract">
        <div className="mx-5 lg:mx-10 py-2 text-center md:text-start">
          <ul>
            <li className="inline-block text-sm">
              <BsFillTelephoneFill className="inline-block" /> (866) 762 5388{" "}
            </li>
            <li className="inline-block text-sm  mx-2">
              <HiMail className="inline-block text-[20px]" />{" "}
              CONTACT@CLAINROCKET.COM{" "}
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-5 lg:mx-10">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-8 lg:col-span-4">
            <Link href={"/"}>
              <Image src="/assets/logo.png" alt="" height={200} width={200} />
            </Link>
          </div>
          <div className="col-span-4 lg:col-span-8 text-end ">
            <div className="w-full lg:hidden flex justify-end font-bold mt-[8px]">
              <HiMiniBars3CenterLeft
                onClick={handleToggle}
                className="text-[40px] font-bold cursor-pointer"
              />
            </div>
            <ul className="mt-[18px] hidden lg:block ">
              <li className="inline-block mx-2 lg:mx-3  text-base">
                <NavLink
                  className="uppercase text-black"
                  activeClasses="text-red-600"
                  text="HOME"
                  href="/"
                />
              </li>
              <li className="inline-block mx-2 lg:mx-3  text-base">
                <NavLink
                  className="uppercase"
                  activeClasses="text-red-600"
                  text="BLOGS"
                  href="/blogs"
                />
              </li>
              <li className="inline-block mx-2 lg:mx-3  text-base">
                <NavLink
                  className="uppercase"
                  activeClasses="text-red-600"
                  text="CONTACT US"
                  href="/contact"
                />
              </li>
              <li className="inline-block mx-3 lg:mx-2  text-base hover:scale-105 duration-300">
                <NavLink
                  className="uppercase"
                  activeClasses="text-red-600"
                  text="LOGIN"
                  href="/login"
                />
              </li>
              <li className="inline-block mx-3 lg:mx-2  text-base hover:scale-105 duration-300">
                <NavLink
                  className="uppercase "
                  activeClasses="text-red-600 bg-gray-900 px-6 py-[10px]"
                  dClass={"bg-[#E02B20] text-white px-6 py-[10px]"}
                  text="REGISTER"
                  href="/register"
                />
              </li>
              <li className="inline-block mx-3 lg:mx-2  text-base hover:scale-105 duration-300">
                <NavLink
                  className="uppercase "
                  activeClasses="text-red-600 bg-gray-900 px-6 py-[10px]"
                  dClass={"bg-[#E02B20] text-white px-6 py-[10px]"}
                  text="LAUNCH YOUR CLAIM"
                  href="/claim"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* naviotion */}
      <div
        className={`duration-500 absolute top-0 h-[100vh] bg-white border-r-2 border-black w-[90%]  ${
          isNavOpen ? "translate-x-[0]" : "-translate-x-[100%]"
        }`}
      >
        <div className="absolute top-0 bg-white h-[100vh] w-[90%]">
          <div>
            <div className="grid grid-cols-2">
              <div>
                <div className="m-5">
                  <Link href={"/"}>
                    <Image
                      src="/assets/logo.png"
                      alt=""
                      height={200}
                      width={200}
                    />
                  </Link>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="text-end m-5">
                  <IoClose
                    onClick={handleToggle}
                    className="text-[40px] cursor-pointer"
                  />
                </div>
              </div>
            </div>
            <ul className="mt-[66px] ">
              <li className="block mx-2 lg:mx-3  text-base text-center py-2">
                <NavLink
                  className="uppercase text-black"
                  activeClasses="text-red-600"
                  text="HOME"
                  href="/"
                />
              </li>
              <hr />
              <li className="block mx-2 lg:mx-3  text-base text-center py-2">
                <NavLink
                  className="uppercase"
                  activeClasses="text-red-600"
                  text="BLOGS"
                  href="/blogs"
                />
              </li>
              <hr />
              <li className="block mx-2 lg:mx-3  text-base text-center py-2">
                <NavLink
                  className="uppercase"
                  activeClasses="text-red-600"
                  text="CONTACT US"
                  href="/contact"
                />
              </li>
              <hr />
              <li className="block mx-3 lg:mx-2  text-base hover:scale-105 duration-300 text-center py-2">
                <NavLink
                  className="uppercase"
                  activeClasses="text-red-600"
                  text="LOGIN"
                  href="/login"
                />
              </li>
              <hr />
              <li className="text-center mt-5 block mx-3 lg:mx-2  text-base hover:scale-105 duration-300">
                <NavLink
                  className="uppercase "
                  activeClasses="text-red-600 bg-gray-900 px-6 py-[10px]"
                  dClass={"bg-[#E02B20] text-white px-6 py-[10px]"}
                  text="REGISTER"
                  href="/register"
                />
              </li>

              <li className="text-center mt-5 block mx-3 lg:mx-2  text-base hover:scale-105 duration-300">
                <NavLink
                  className="uppercase "
                  activeClasses="text-red-600 bg-gray-900 px-6 py-[10px]"
                  dClass={"bg-[#E02B20] text-white px-6 py-[10px]"}
                  text="LAUNCH YOUR CLAIM"
                  href="/claim"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
