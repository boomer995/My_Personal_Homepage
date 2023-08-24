import ContentBox from "./content";

export default function ThirdScreen() {
  let info = [
    {
      id: 1,
      title: "SPECIALIZING IN",
      img: "/web-development.svg",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit, rem voluptas sed blanditiis",
      post: "Front-end Development",
    },
    {
      id: 2,
      title: "INTEREST",
      img: "/technology.svg",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit, rem voluptas sed blanditiis",
      post: "Understand technology knowledge",
    },
  ];

  const contentBoxes = info.map((item) => (
    <ContentBox key={item.id} {...item} />
  ));

  return (
    <div className="flex items-center flex-col mt-[124px]">
      <p className="text-[#4C70EF] text-[24px]">WHAT I DO</p>
      <div className="flex w-[1000px] justify-between">{contentBoxes}</div>
    </div>
  );
}
