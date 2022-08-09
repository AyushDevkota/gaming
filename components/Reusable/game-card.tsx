import Image, { StaticImageData } from "next/image";
import React from "react";

interface Props {
  data: {
    img: StaticImageData;
    bgImg: StaticImageData;
    name: string;
  };
}

const GameCard = ({ data: { bgImg, img, name } }: Props) => {
  return (
    <div className="relative rounded-lg">
      <Image src={bgImg} alt="" layout="responsive" className="rounded-lg" />
      <div className="absolute inset-0 z-50 bg-[#00000045] backdrop-blur-sm px-4 py-8 rounded-lg">
        <div className="w-1/3 flex flex-col gap-2 rounded-lg">
          <Image src={img} alt="" layout="responsive" />
          <p className="text-xs capitalize">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
