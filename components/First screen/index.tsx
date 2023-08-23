import Content from "./content";
import Header from "./header";
export default function FirstScreen() {
  return (
    <>
      <div className="h-screen flex flex-col items-center bg-[url('/next.svg')] bg-cover bg-no-repeat">
        <Header />
        <Content />
      </div>
    </>
  );
}
