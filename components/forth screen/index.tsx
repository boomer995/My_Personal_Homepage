import AnyProject from "./anyProject";
import ProjectBox from "./projectbox";

export default function ForthScreen() {
  let projectInfo = [
    {
      id: 1,
      title: "My Personal Blog",
      img: "/projectImg.jpg",
      url: "https://www.tianhp.top/",
    },
    {
      id: 2,
      title: "Need food App Design",
      img: "/projectImg.jpg",
      url: "https://www.tianhp.top/",
    },
    {
      id: 3,
      title: "Need food App Design",
      img: "/projectImg.jpg",
      url: "https://www.tianhp.top/",
    },
  ];
  const projectbox = projectInfo.map((item) => {
    return <ProjectBox key={item.id} {...item} />;
  });
  return (
    <div className="flex items-center flex-col mt-[124px] ">
      <p className="text-[#4C70EF] text-[24px]">PORTFOLIO</p>
      <p className="text-[#FFF] text-[36px]">LATEST PROJECTS</p>
      <div className="flex justify-between">{projectbox}</div>
      <AnyProject />
    </div>
  );
}
