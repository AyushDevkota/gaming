import React from "react";
import { Section, SectionTitle, Card } from "../Reusable";
import { HOME_TOURNAMENTS } from "../../public/constant";

const TournamentHighlights = () => {
  return (
    <Section>
      <SectionTitle title="tournament highlights" />
      <div className="grid grid-cols-2 gap-8">
        {HOME_TOURNAMENTS.map((el) => (
          <Card key={el.id} data={el} />
        ))}
      </div>
    </Section>
  );
};

export default TournamentHighlights;
