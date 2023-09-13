import React from "react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const Accordion = (props) => {
  return (
    <div className="border border-gray-300  mb-2 ">
      <div
        className={`flex items-center justify-center  ${
          props.isOpen ? "bg-white" : "bg-gray-100"
        }`}
      >
        <MdKeyboardDoubleArrowDown
          className={`float-right  transform transition duration-300 ease-in  w-5 h-5 text-gray-700 ml-4 ${
            props.isOpen ? "rotate-180" : "rotate-0"
          } `}
        />
        <button
          className="w-full py-5 px-2 text-left 
                            transform transition duration-300 delay-150 ease-in"
          onClick={props.toggleAccordion}
        >
          <span className="text-gray-700 leading-4">{props.title}</span>
        </button>
      </div>
      {props.isOpen && (
        <div
          className={`p-5 bg-white text-sm text-gray-600 transform transition duration-300 delay-150 ease-in `}
        >
          <span>{props.data}</span>
        </div>
      )}
    </div>
  );
};

export default Accordion;
