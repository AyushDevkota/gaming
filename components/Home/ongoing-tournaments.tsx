import React from "react";
import Link from "next/link";
import { HOME_ONGOING_TOURNAMENTS } from "../../public/constant";
import { Section, SectionTitle, PrimaryButton, Card } from "../Reusable";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

const ongoingTournaments = () => {
  return (
    <Section>
      <div className="flex justify-between">
        <SectionTitle title="ongoing tournaments" />
        <div className="flex items-start gap-2">
          <button>
            <GrFormPrevious size={30} style={{ backgroundColor: "#4d4d4d" }} />
          </button>
          <button>
            <GrFormNext size={30} style={{ backgroundColor: "#4d4d4d" }} />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-8">
        {HOME_ONGOING_TOURNAMENTS.map((el) => (
          <Card key={el.id} data={el} />
        ))}
      </div>
      <div className="text-center mt-12">
        <PrimaryButton bgColor="#ff3338" txtColor="#fff">
          <Link href="/">
            <a>see more</a>
          </Link>
        </PrimaryButton>
      </div>
    </Section>
  );
};

export default ongoingTournaments;
