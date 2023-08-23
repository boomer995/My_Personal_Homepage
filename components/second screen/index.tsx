import ImageBox from "../second screen/image";

export default function SecondScreen() {
  return (
    <div className=" h-[200px] flex justify-center mt-[106px]">
      <div className="w-[400px] h-[290px] border-2 border-white rounded-br-[20px]">
        <ImageBox />
      </div>
      <div className="w-[400px] h-[290px] ml-[50px]">
        <p className="text-[#4C70EF] text-[24px]">ABOUT ME</p>
        <p className="text-[#FFF] text-[36px]">I'm Tian Haipeng</p>
        <p className="text-[#B0ADAD] text-[18px]">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.
        </p>
      </div>
    </div>
  );
}
