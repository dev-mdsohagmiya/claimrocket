import React from "react";
import NavLink from "./NavLink";
import Image from "next/image";
import Link from "next/link";
import { IoClose } from "react-icons/io5";

export default function NavOptions({ onNavToggle }) {
  onNavToggle("i am from nav options");
  return (
    <div>
      <div className="grid grid-cols-2">
        <div>
          <div className="m-5">
            <Link href={"/"}>
              <Image src="/assets/logo.png" alt="" height={200} width={200} />
            </Link>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="text-end m-5">
            <IoClose className="text-[40px] cursor-pointer" />
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
  );
}
