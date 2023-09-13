"use client";

import React from "react";

import { FaCarCrash, FaDog, FaUserNurse, FaCrutch } from "react-icons/fa";
import { FaPersonFalling } from "react-icons/fa6";
import { TbFidgetSpinner } from "react-icons/tb";
import { MdPersonalInjury, MdOutlineChurch } from "react-icons/md";
import PracticeCard from "./PracticeCard";
const practiceCards = [
  {
    id: 1,
    title: "Vehicle Accidents",
    description:
      "Vehicle accidents can devastate lives. We’re a personal injury law firm fighting for justice, ensuring victims get the compensation they deserve.",
    icon: <FaCarCrash className="w-14 h-14" />,
  },
  {
    id: 2,
    title: "Workplace Injury",
    description:
      "Workplace injury victim? Our law firm fights to protect your rights, seeking just compensation for your loss. Contact us for expert legal assistance now.",
    icon: <MdPersonalInjury className="w-14 h-14" />,
  },
  {
    id: 3,
    title: "Medical Malpractice",
    description:
      "Suffered due to medical malpractice? Our law firm defends your rights, seeking full compensation for the harm you endured. Get expert help today.",
    icon: <TbFidgetSpinner className="w-14 h-14" />,
  },
  {
    id: 4,
    title: "Dog Bites",
    description:
      "Victim of a dog bite? Our law firm fights for you, securing compensation for medical bills & trauma. Get our expert legal help today. Don’t suffer alone.",
    icon: <FaDog className="w-14 h-14" />,
  },
  {
    id: 5,
    title: "Slip & Fall Accidents",
    description:
      " Injured from a slip & fall? Our law firm champions victims, ensuring you get rightful compensation for your pain. Don’t suffer in silence, reach out now.",
    icon: <FaPersonFalling className="w-14 h-14" />,
  },
  {
    id: 6,
    title: "Nursing Home Abuse",
    description:
      "Victim of nursing home abuse? Our law firm fights for justice, ensuring you get rightful compensation. Reach out now for expert legal representation.",
    icon: <FaUserNurse className="w-14 h-14" />,
  },
  {
    id: 7,
    title: "Wrongful Death",
    description:
      "Experiencing a wrongful death loss? Our law firm stands with victims, ensuring you receive fair compensation for your sorrow. Don’t grieve alone, connect with us now.",
    icon: <MdOutlineChurch className="w-14 h-14" />,
  },
  {
    id: 8,
    title: "Personal Injury",
    description:
      "Harmed from a personal injury? Our law firm advocates for victims, guaranteeing you rightful compensation for your suffering. Don’t endure in silence, contact us now.",
    icon: <FaCrutch className="w-14 h-14" />,
  },
];

const PracticeCards = () => {
  return (
    <div className="py-12 bg-white relative  md:mx-[140px] min-h-screen ">
      <div className="">
        <h1 className="text-center tracking-widest pb-4 md:text-base text-sm">
          PERSONAL INJURY{" "}
        </h1>
        <h2 className="text-center text-base md:text-3xl font-bold text-gray-800 pb-6">
          Practice Areas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-x-10 gap-y-6 py-6">
          {practiceCards.map((card) => {
            return (
              <div key={card.id}>
                <PracticeCard card={card} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PracticeCards;
