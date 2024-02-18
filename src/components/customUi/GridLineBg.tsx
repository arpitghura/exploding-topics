import Image from "next/image";

const GridLineBg = () => {
  return (
    <div className="absolute left-0 top-0 h-screen w-screen -z-10 pointer-events-none">
      <Image
        src="/grid-line.svg"
        alt="grid lines background"
        width="1000"
        height="1000"
      ></Image>
    </div>
  );
};

export default GridLineBg;
