"use client";
import { FaSkype } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { HiMail } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useState } from "react";
function UserLogin() {
  const [userData, setUserData] = useState({
    email: " ",
    password: "",
  });
  const handleForm = (e) => {
    e.preventDefault();
    setUserData({
      email: " ",
      password: "",
    });
  };
  return (
    <>
      <div id="login" className="bg-black pt-40 pb-20 ">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center py-3">
            <h2 className="text-[35px] md:text-[45px]   text-white">
              Welcome to Our Secure Portal
            </h2>
            <h2 className="text-[22px]  text-white">
              Please Log In to Access Your Account
            </h2>
          </div>
          <div className=" grid grid-cols-12">
            <div className=" col-span-12 lg:col-span-12 md:mx-4 bg-[#1c1c1c]  mt-4">
              <form onSubmit={handleForm}>
                <div className="md:mx-4 p-5 md:p-10">
                  <div>
                    <div className="py-3">
                      <label
                        htmlFor="input"
                        className="text-[#757575] text-[20px]"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="py-4  border-1 border-[#757575] border w-full focus:outline-none  focus:border-[#E02B20]   bg-[#1c1c1c] text-white text-[18px] px-2"
                        value={userData.email}
                        onChange={(e) =>
                          setUserData({ ...userData, email: e.target.value })
                        }
                      />
                    </div>
                    <div className="py-3">
                      <label
                        htmlFor="input"
                        className="text-[#757575] text-[20px]"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        className="py-4  border-1 border-[#757575] focus:outline-none  focus:border-[#E02B20]  border w-full bg-[#1c1c1c] text-white text-[18px] px-2"
                        value={userData.password}
                        onChange={(e) =>
                          setUserData({ ...userData, password: e.target.value })
                        }
                      />
                    </div>

                    <div>
                      <button
                        className="bg-[#E02B20] text-white px-6 py-4 hover:scale-105 duration-300 w-full mt-4 "
                        type="submit"
                      >
                        LOGIN
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserLogin;
