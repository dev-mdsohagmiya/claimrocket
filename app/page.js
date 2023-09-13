import Accordions from "@/components/Accordion/Accordions";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero";
import BottomCard from "@/components/MiddleCard/BottomCard";
import LeftImgCard from "@/components/MiddleCard/LeftImgCard";
import RightImgCard from "@/components/MiddleCard/RightImgCard";
import NavBar from "@/components/Navber";
import Reviews from "@/components/Reviews/Reviews";

export default function Home() {
  return (
    <div className="bg-white">
      <NavBar />
      <Hero />
      <PracticeCards />
    </div>
  );
}
