"use client";

interface Props {
  title: string;
  img: string;
  url: string;
}

export default function ProjectBox(props: Props) {
  function handleClick() {
    window.open(props.url);
  }
  return (
    <div className="bg-[#292C36] rounded-t-lg mt-[32px] ml-[20px]">
      <div>
        <img
          src={props.img}
          width={380}
          height={280}
          alt=""
          className="rounded-t-lg"
        />
      </div>
      <div className="ml-[24px] mt-[20px] text-white text-[20px] ">
        <p>{props.title}</p>
        <button
          type="button"
          onClick={handleClick}
          className="px-[18px] py-[10px] bg-[#558FFF] rounded-[6px] mt-[12px] mb-[20px]"
        >
          View Dome
        </button>
      </div>
    </div>
  );
}
