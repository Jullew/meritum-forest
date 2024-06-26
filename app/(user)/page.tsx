import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Hero from "@/components/home/Hero";
import Header from "@/components/layout/Header";
import Recents from "@/components/recents/Recents";
import Whyus from "@/components/whyus/Whyus";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Whyus />
      {/* <Recents /> */}
      <Contact />
    </>
  );
}
