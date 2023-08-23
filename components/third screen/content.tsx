interface Props {
  title: string;
  img: string;
  content: string;
  post: string;
}

export default function ContentBox(props: Props) {
  return (
    <div className="flex flex-col items-center mt-5">
      <p className="text-[36px] text-white mb-5">{props.title}</p>
      <div className="w-[480px] h-[206px] rounded-[12px] bg-[#292C36]">
        <div className="flex ml-[44px] mt-[30px]">
          <div className="bg-[#38405A] rounded-[8px] p-[12px] inline-flex justify-center items-center gap-[12px]">
            <img src={props.img} alt="" />
          </div>
          <div className="flex flex-col w-[219.152px] text-white text-[24px] ml-3">
            <p>{props.post.split(" ")[0]}</p>
            <p>{props.post.split(" ")[1]}</p>
          </div>
        </div>
        <div className="mt-[32px] ml-[24px] text-[#B0ADAD] text-[18px]">
          <p>{props.content}</p>
        </div>
      </div>
    </div>
  );
}
