import Link from "next/link";
import React from "react";
import { Section, PrimaryButton } from "../Reusable";

const banner = () => {
  return (
    <Section>
      <div className="h-80 bg-banner bg-no-repeat bg-contain rounded-r-2xl relative">
        <div className="bg-redOverlay h-full w-full bg-cover rounded-r-2xl"></div>
        <div className="absolute top-1/3 right-12 flex flex-col gap-4 w-1/3">
          <p className="font-bold text-3xl">
            Want to host your own tournament?
          </p>
          <PrimaryButton bgColor="#fff" txtColor="#0e0e0e">
            <Link href="/here">start here</Link>
          </PrimaryButton>
        </div>
      </div>
    </Section>
  );
};

export default banner;
