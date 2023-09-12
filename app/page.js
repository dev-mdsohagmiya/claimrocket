import Hero from "@/components/Hero";
import BottomCard from "@/components/MiddleCard/BottomCard";
import LeftImgCard from "@/components/MiddleCard/LeftImgCard";
import RightImgCard from "@/components/MiddleCard/RightImgCard";
import NavBar from "@/components/Navber";
import PracticeCards from "@/components/PracticeCards/PracticeCards";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white">
      <NavBar />
      <Hero />
      <PracticeCards />
      <LeftImgCard />
      <RightImgCard />
      <BottomCard />
    </div>
  );
}
