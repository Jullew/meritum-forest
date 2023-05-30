import About from "@/components/about/About";
import Hero from "@/components/home/Hero";
import Header from "@/components/layout/Header";
import Whyus from "@/components/whyus/Whyus";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Whyus />
    </>
  );
}
