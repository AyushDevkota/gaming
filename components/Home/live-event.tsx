import React from "react";
import { Section, SectionTitle, Card } from "../Reusable";
import { HOME_LIVE_STREAMS } from "../../public/constant";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

const liveEvent = () => {
  return (
    <Section>
      <div className="flex justify-between">
        <SectionTitle title="live events stream" />
        <div className="flex items-start gap-2">
          <button>
            <GrFormPrevious size={30} style={{ backgroundColor: "#4d4d4d" }} />
          </button>
          <button>
            <GrFormNext size={30} style={{ backgroundColor: "#4d4d4d" }} />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-8">
        {HOME_LIVE_STREAMS.map((el) => (
          <Card key={el.id} data={el} />
        ))}
      </div>
    </Section>
  );
};

export default liveEvent;
