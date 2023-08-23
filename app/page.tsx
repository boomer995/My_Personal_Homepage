import FirstScreen from "../components/First screen/index";
import SecondScreen from "../components/second screen/index";
import ThirdScreen from "../components/third screen/index";
export default function Home() {
  return (
    <main className="w-screen flex flex-col items-center">
      <FirstScreen />
      <SecondScreen />
      <ThirdScreen />
    </main>
  );
}
