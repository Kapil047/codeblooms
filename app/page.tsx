import Hero from "@/components/home/Hero";
import ImagesShowCase from "@/components/home/ImagesShowCase";
import TurningData from "@/components/home/TurningData";
import WorkedWith from "@/components/home/WorkedWith";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <ImagesShowCase />
      <WorkedWith /> 
      <TurningData/>
    </div>
  );
}
