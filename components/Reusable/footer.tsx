import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaYoutube, FaLinkedin, FaFacebook } from "react-icons/fa";

const YEAR = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-dark pt-20 pb-10 text-white">
      <div className="container md:px-24">
        <div className="flex justify-between pb-36">
          <div className="flex flex-col gap-6">
            <Link href="/" passHref>
              <a>
                <Image
                  src="/logo.png"
                  alt="logo"
                  height="4px"
                  width="10px"
                  objectFit="contain"
                  layout="responsive"
                />
              </a>
            </Link>
            <div className="flex items-center gap-2">
              <Link href="/" passHref>
                <a>
                  <FaYoutube size={25} color="#fff" />
                </a>
              </Link>
              <Link href="/" passHref>
                <a>
                  <FaLinkedin size={25} color="#fff" />
                </a>
              </Link>
              <Link href="/" passHref>
                <a>
                  <FaFacebook size={25} color="#fff" />
                </a>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="font-bold">Tournaments</h3>
            <ul className="opacity-80 flex flex-col gap-3">
              <li>
                <Link href="/">
                  <a>Create Tournament</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Featured</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Ongoing</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Past</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="font-bold">Games</h3>
            <ul className="opacity-80 flex flex-col gap-3">
              <li>
                <Link href="/">
                  <a>Mobile Legends</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>League of Legends</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>PUBG</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Valorant</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Dota 2</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Apex Legends</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="font-bold">Others</h3>
            <ul className="opacity-80 flex flex-col gap-3">
              <li>
                <Link href="/">
                  <a>News</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Blogs</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Contact Us</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="pt-2 text-sm">
          Privacy Policy | © Copyright {YEAR}. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
