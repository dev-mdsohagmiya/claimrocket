import React from "react";
import Card from "./Card";

const LeftImgCard = () => {
  return (
    <Card
      backgroundInfo={"bg-black"}
      direction={"md:flex-row flex-col "}
      imgFile={"/assets/attorney-12.jpg"}
      alt={"Free consiling Image"}
      imgWidth={"md:w-[470px]"}
      imgHeight={"md:h-[650px]"}
      roundedProperty={"rounded-3xl"}
      animationData={"fade-right"}
      textCol={"text-white"}
      heading={"Your Journey To Justice, Expedited"}
      firstPara={" "}
      headingSize={"md:text-3xl text-xl font-bold"}
      secondPara={
        "Navigating the complexities of personal injury claims can be challenging and stressful. Claim Rocket is here to make the process as smooth, swift, and stress-free as possible. We prioritize your well-being and strive to expedite your claim process, making sure you reach your destination quickly and efficiently."
      }
      buttonText={"FREE CONSULTAION"}
    />
  );
};

export default LeftImgCard;
