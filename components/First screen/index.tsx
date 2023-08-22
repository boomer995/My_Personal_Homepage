import header from "./header";

export default function FirstScreen() {
  return (
    <>
      <div className="w-screen h-screen flex flex-col items-center bg-[url('/next.svg')] bg-cover">
        {header()}
        <div className="mt-[295px] flex flex-col items-center">
          <p className="text-white text-[68px]">I'm Tian Haipeng</p>
          <p className="text-white text-[24px] mt-[30px]">
            Front-End Development
          </p>
        </div>
      </div>
    </>
  );
}
