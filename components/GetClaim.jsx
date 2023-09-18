import React from "react";

export default function GetClaim() {
  return (
    <>
      <div id="login" className="bg-black pt-40 pb-20  ">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center py-3">
            <h2 className="text-[35px] md:text-[45px]  text-white">
              Free Case Assessment
            </h2>
            <h2 className="text-[14px]  text-white"></h2>
          </div>
          <div className=" grid grid-cols-12">
            <div className=" col-span-12 lg:col-span-12 md:mx-4 bg-[#1c1c1c] mt-4  ">
              <div className="md:mx-4 p-5 md:p-10">
                <div>
                  <div className="py-3">
                    <label
                      htmlFor="input"
                      className="text-[#757575] text-[20px]"
                    >
                      Fast Name
                    </label>
                    <input
                      type="text"
                      className="py-4  border-1 border-[#757575] border focus:outline-none  focus:border-[#E02B20]  w-full bg-[#1c1c1c]  text-white text-[18px] px-2"
                    />
                  </div>
                  <div className="py-3">
                    <label
                      htmlFor="input"
                      className="text-[#757575] text-[20px]"
                    >
                      LastName
                    </label>
                    <input
                      type="text"
                      className="py-4  border-1 border-[#757575] border w-full focus:outline-none  focus:border-[#E02B20]   bg-[#1c1c1c] text-white text-[18px] px-2"
                    />
                  </div>
                  <div className="py-3">
                    <label
                      htmlFor="input"
                      className="text-[#757575] text-[20px]"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      className="py-4  border-1 border-[#757575] focus:outline-none  focus:border-[#E02B20]  border w-full bg-[#1c1c1c] text-white text-[18px] px-2"
                    />
                  </div>
                  <div className="py-3">
                    <label
                      htmlFor="input"
                      className="text-[#757575] text-[20px]"
                    >
                      Phone
                    </label>
                    <input
                      type="text"
                      className="py-4  border-1 border-[#757575] focus:outline-none  focus:border-[#E02B20]  border w-full bg-[#1c1c1c] text-white text-[18px] px-2"
                    />
                  </div>
                  <div className="py-3">
                    <label
                      htmlFor="input"
                      className="text-[#757575] text-[20px]"
                    >
                      Message
                    </label>
                    <textarea
                      className="py-4  border-1 border-[#757575] focus:outline-none  focus:border-[#E02B20]  border w-full bg-[#1c1c1c] text-white text-[18px] px-2"
                      id=""
                      cols="30"
                      rows="8"
                      required
                    ></textarea>
                  </div>
                  <div>
                    <button className="bg-[#E02B20] text-white px-6 py-4 hover:scale-105 duration-300 w-full mt-4  uppercase">
                      Free Case Assessment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
