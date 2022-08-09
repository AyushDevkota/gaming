import React, { useState } from "react";
import {
  Section,
  SectionTitle,
  PrimaryButton,
  DropDown,
  Card,
} from "../Reusable";
import { BROWSE_RESULTS, BROWSE_TOURNAMENTS } from "../../public/constant";
import Image from "next/image";
import Link from "next/link";

const viewDropDownOptions = [
  {
    value: "grid",
    label: "Grid View",
  },
  {
    value: "list",
    label: "List View",
  },
];
const filterDropDownOptions = [
  {
    value: "featured",
    label: "Featured",
  },
];

const Results = () => {
  const [view, setView] = useState<string>(viewDropDownOptions[0].value);
  const [filter, setFilter] = useState<string>(filterDropDownOptions[0].value);
  return (
    <Section>
      <div className="flex justify-between items-start">
        <SectionTitle title="results" />
        <div className="flex gap-2">
          <DropDown
            options={viewDropDownOptions}
            states={{ selectedOption: view, setSelectedOption: setView }}
          />
          <DropDown
            options={filterDropDownOptions}
            states={{ selectedOption: filter, setSelectedOption: setFilter }}
          />
        </div>
      </div>
      {view === viewDropDownOptions[0].value ? (
        <div className="grid grid-cols-4 gap-x-4 gap-y-12">
          {BROWSE_RESULTS.map((el) => (
            <Card key={el.id} data={el} />
          ))}
        </div>
      ) : (
        <table className="w-full border-collapse text-sm">
          <tr className="text-left">
            {BROWSE_TOURNAMENTS.th.map((el) => (
              <th key={el.id} className="py-4">
                {el.value}
              </th>
            ))}
          </tr>
          {BROWSE_TOURNAMENTS.td.map((el) => (
            <tr className="even:bg-[#ffffff04]" key={el.id}>
              <td className="flex items-center py-3 gap-4">
                <Image src={el.img} alt="" layout="responsive" />
                <div>
                  <p className="">{el.name}</p>
                  <p>
                    <span className="text-light text-xs">Hosted by&nbsp;</span>
                    {el.organizer}
                  </p>
                </div>
              </td>
              <td>
                <p>{el.date}</p>
                <p>{el.time}</p>
              </td>
              <td>{el.prize}</td>
              <td>{el.participants}</td>
              <td>
                <PrimaryButton bgColor="#ff3338" txtColor="#fff">
                  <Link href={`/browse/${el.id}`}>
                    <a>entry</a>
                  </Link>
                </PrimaryButton>
              </td>
            </tr>
          ))}
        </table>
      )}
    </Section>
  );
};

export default Results;
