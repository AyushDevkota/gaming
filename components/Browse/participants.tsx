import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PrimaryButton } from "../Reusable";

const participants = () => {
  return (
    <>
      <h2 className="mb-6">Total Participants</h2>
      <ul className="">
        {Array.from({ length: 6 }, (_, i) => (
          <li key={i} className="flex justify-between py-3 even:bg-[#ffffff04]">
            <div className="flex items-center gap-2">
              <Image
                src="/pubg.png"
                alt=""
                height={25}
                width={25}
                className="rounded-full"
                objectFit="cover"
              />
              <p className="">EVOS GAMING</p>
            </div>
            <p>Accepted</p>
            <PrimaryButton bgColor="#ff3338" txtColor="#fff">
              <Link href="/">
                <a>Show Squad</a>
              </Link>
            </PrimaryButton>
          </li>
        ))}
      </ul>
    </>
  );
};

export default participants;

{
  /* <li className="flex justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/pubg.png"
              alt=""
              height={25}
              width={25}
              className="rounded-full"
              objectFit="cover"
            />
            <p className="">EVOS GAMING</p>
          </div>
          <p>Accepted</p>
          <PrimaryButton bgColor="#ff3338" txtColor="#fff">
            <Link href="/">
              <a>Show Squad</a>
            </Link>
          </PrimaryButton>
        </li> */
}
