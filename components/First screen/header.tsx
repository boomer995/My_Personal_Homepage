export default function header() {
  return (
    <div className=" w-4/5 mt-[55px] flex justify-between">
      <span className="text-white text-[34px] font-bold">
        My Personal Homepage
      </span>
      <div className="w-1/3 flex justify-evenly text-18">
        <span className="text-white">ABOUT</span>
        <span className="text-white">WHAT I DO</span>
        <span className="text-white">WORK</span>
        <span className="text-white">CONTACT</span>
      </div>
    </div>
  );
}
