"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import FirstScreen from "../components/First screen/index";
import ForthScreen from "../components/forth screen/index";
import SecondScreen from "../components/second screen/index";
import ThirdScreen from "../components/third screen/index";

export default function Home() {
  return (
    <ReactLenis root>
      <main className="w-screen flex flex-col items-center" id="wrapper">
        <section id="content">
          <FirstScreen />
        </section>
        <section id="content">
          <SecondScreen />
        </section>
        <section id="content">
          <ThirdScreen />
        </section>
        <section id="content">
          <ForthScreen />
        </section>
      </main>
      <footer className="flex flex-col justify-center items-center mt-[164px] h-[156px] bg-[#292C36]">
        <p className="text-[32px] text-white font-bold">LOGO</p>
        <p className="text-[16px] text-white font-bold mt-[8px]">
          COPYRIGHT © 2018 CV RAULIQBAL.
        </p>
      </footer>
    </ReactLenis>
  );
}
