import React from "react";
import Card from "./Card";

const RightImgCard = () => {
  return (
    <Card
      backgroundInfo={"bg-white"}
      direction={"md:flex-row-reverse"}
      imgFile={"/assets/attorney-11.jpg"}
      alt={"Free consiling Image"}
      imgWidth={"md:w-[550px]"}
      textCol={"text-black"}
      animationData={"fade-left"}
      heading={"Maximize your claim, Minimize your stress"}
      firstPara={"PERSONAL INJURY"}
      secondPara={
        "At Claim Rocket, we fight to get you the maximum compensation you deserve. We understand that each case is unique, and so are the challenges you face. Our personalized approach is designed to reduce your stress and promote your recovery while we take care of the legal complexities."
      }
      buttonText={"FREE CONSULTAION"}
    />
  );
};

export default RightImgCard;
