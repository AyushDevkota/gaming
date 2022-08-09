import React from "react";
import { Section, SectionTitle, GameCard } from "../Reusable";
import { ML, MLBg } from "../../public";

const data = {
  bgImg: MLBg,
  img: ML,
  name: "mobile legend",
};

const games = () => {
  return (
    <Section>
      <SectionTitle title="games" />
      <div className="grid grid-cols-6 gap-4">
        <GameCard data={data} />
        <GameCard data={data} />
        <GameCard data={data} />
        <GameCard data={data} />
        <GameCard data={data} />
        <GameCard data={data} />
      </div>
    </Section>
  );
};

export default games;
