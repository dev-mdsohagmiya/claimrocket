import Hero from "@/components/Hero";
import NavBar from "@/components/Navber";
import PracticeCards from "@/components/PracticeCards/PracticeCards";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white">
      <NavBar />
      <Hero />
      <PracticeCards />
    </div>
  );
}
