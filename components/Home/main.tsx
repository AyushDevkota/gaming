import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Section, PrimaryButton } from "../Reusable";
import { GAMES } from "../../public/constant";

const Main = () => {
  const [active, setActive] = useState<number>(1);
  return (
    <Section>
      <div className="grid grid-cols-[78%_20%] justify-between">
        <div className="relative">
          <Image src="/home-1.png" alt="" layout="fill" objectFit="cover" />
          <div className="absolute bottom-24 left-20 flex flex-col gap-4 w-1/2">
            <p className="text-primary text-sm">2022.2.21</p>
            <h2 className="font-bold text-3xl">
              Valorant Tournaments Have Been Added to Broccoli
            </h2>
            <PrimaryButton bgColor="#ffffff" txtColor="#0E0E0E">
              <Link href="/register">
                <a>Register</a>
              </Link>
            </PrimaryButton>
          </div>
        </div>
        <ul className="flex flex-col justify-between">
          {GAMES.map((el) => (
            <li
              key={el.id}
              className={`flex gap-2 items-center rounded-lg p-3 pr-14 cursor-pointer ${
                active === el.id && "bg-dark"
              }`}
              onClick={() => setActive(el.id)}
            >
              <Image src={el.img} alt={el.name} />
              <p className="text-sm">{el.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Main;
