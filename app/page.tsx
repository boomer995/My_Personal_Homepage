import FirstScreen from "../components/First screen/index";
import ForthScreen from "../components/forth screen/index";
import SecondScreen from "../components/second screen/index";
import ThirdScreen from "../components/third screen/index";
export default function Home() {
  return (
    <>
      <main className="w-screen flex flex-col items-center">
        <FirstScreen />
        <SecondScreen />
        <ThirdScreen />
        <ForthScreen />
      </main>
      <footer className="flex flex-col justify-center items-center mt-[164px] h-[156px] bg-[#292C36]">
        <p className="text-[32px] text-white font-bold">LOGO</p>
        <p className="text-[16px] text-white font-bold mt-[8px]">
          COPYRIGHT © 2018 CV RAULIQBAL.
        </p>
      </footer>
    </>
  );
}
