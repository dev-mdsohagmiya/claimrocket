import React from "react";

const BottomCard = () => {
  return (
    <div className="bg-black md:px-[130px] px-[45px] text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 p-5 md:p-16 items-center justify-center">
        <div className="text-start">
          <h6 className="tracking-widest font-semibold py-1 md:py-3">
            ABOUT US
          </h6>
          <h1 className="text-base md:text-5xl font-bold leading-snug">
            Join the Claim Rocket family today!
          </h1>
        </div>
        <div>
          <p>
            Welcome to Claim Rocket, your dedicated personal injury attorneys,
            who expedite your journey to justice while minimizing stress. We
            offer a unique blend of experience and a robust network of
            professionals ready to support your case, aiming to maximize your
            claim and promote your recovery. Our ‘no win, no fee’ approach,
            coupled with free initial consultations, underscores our commitment
            to your cause. With your injury as our top priority, we navigate the
            legal complexities while you focus on healing. Join the Claim Rocket
            family today and experience our powerful, rocket-speed
            representation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BottomCard;
