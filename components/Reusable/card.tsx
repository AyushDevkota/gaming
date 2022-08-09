import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface Props {
  data: {
    id: number;
    game: string;
    title: string;
    heroImg: StaticImageData;
    organizerImg: StaticImageData;
    organizer: string;
    prizePool?: number;
    days?: number;
    btnText?: string;
  };
}

const Card = ({ data }: Props) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="realtive">
        <Image
          src={data.heroImg}
          alt={data.title}
          objectFit="contain"
          layout="responsive"
        />
      </div>
      <p className="text-xs text-primary capitalize font-thin">{data.game}</p>
      <h3 className="text-white text-lg font-semibold capitalize">
        {data.title}
      </h3>
      <div className="flex gap-3 items-center">
        <Image
          src={data.organizerImg}
          alt={data.organizer}
          className="rounded-full"
          height="33px"
          width="33px"
          layout="fixed"
        />
        <div className="text-xs">
          <p className="uppercase text-primary">hosted by</p>
          <p className="capitalize text-white">{data.organizer}</p>
        </div>
      </div>
      {data.prizePool && data.days && (
        <div className="flex flex-col">
          <div className="flex gap-0.5 text-center text-white">
            <div className="bg-disable basis-1/2 py-1">
              <p className="text-xs">Prize Pool</p>
              <p className="">Rs {data.prizePool}</p>
            </div>
            <div className="bg-disable basis-1/2 py-1">
              <p className="text-xs">Closes in</p>
              <p className="">{data.days} days</p>
            </div>
          </div>
          {data.btnText && (
            <button className="text-[#ff3338] bg-white py-2 uppercase font-medium">
              <Link href={`/browse/${data.id}`}>
                <a>{data.btnText}</a>
              </Link>
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Card;
