import React from "react";
import Image from "next/image";
import { IoMdNotificationsOutline } from "react-icons/io";
import { NAV_LINKS } from "../../public/constant";
import PrimaryButton from "./primary-button";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  return (
    <header className="bg-black px-12 py-3 flex justify-between items-center text-white text-sm">
      <div className="flex items-center gap-8 container">
        <Link href="/" passHref>
          <a>
            <Image src="/logo.png" alt="" width={60} height={20} />
          </a>
        </Link>
        <ul className="uppercase flex items-center gap-8 text-[#737373]">
          {NAV_LINKS.map((el) => (
            <li key={el.id}>
              <Link href={el.url}>
                <a
                  className={
                    router.pathname == el.url
                      ? "bg-disable text-white p-2"
                      : "text-secondary p-2"
                  }
                >
                  {el.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-6">
        <button>
          <IoMdNotificationsOutline size={24} />
        </button>
        <PrimaryButton bgColor="#ff3338" txtColor="#fff">
          <Link href="/signup">sign in</Link>
        </PrimaryButton>
      </div>
    </header>
  );
};

export default Navbar;
