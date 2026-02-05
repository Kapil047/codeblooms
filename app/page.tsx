import Hero from "@/components/home/Hero";
import ImagesShowCase from "@/components/home/ImagesShowCase";
import WorkedWith from "@/components/home/WorkedWith";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <ImagesShowCase />
      <WorkedWith />    
    </div>
  );
}
