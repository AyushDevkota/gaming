import React from "react";
import {
  Section,
  SectionTitle,
  PrimaryButton,
} from "../../components/Reusable";
import { AiOutlineSearch } from "react-icons/ai";

const selectStyles =
  "bg-dark p-2 text-light h-8 border-r-8 border-r-transparent cursor-pointer text-xs";

const Form = () => {
  return (
    <Section>
      <SectionTitle title="advanced search" />
      <form className="flex items-end gap-4">
        <div className="flex flex-col gap-2 basis-1/4">
          <label htmlFor="game" className="text-sm">
            Game
          </label>
          <select name="game" id="game" className={selectStyles}>
            <option value="" disabled selected>
              Select Game
            </option>
            <option value="dota2">Dota 2</option>
            <option value="valorant">Valorant</option>
            <option value="pubg">PUBG</option>
          </select>
        </div>

        <div className="flex flex-col gap-2  basis-1/3">
          <label htmlFor="location" className="text-sm">
            Location
          </label>
          <select name="location" id="location" className={selectStyles}>
            <option value="" disabled selected>
              Select Location
            </option>
            <option value="ktm">Kathmandu</option>
            <option value="berlin">Berlin</option>
            <option value="singapore">Singapore</option>
          </select>
        </div>

        <div className="flex flex-col gap-2  basis-1/5">
          <label htmlFor="status" className="text-sm">
            Status
          </label>
          <select name="status" id="status" className={selectStyles}>
            <option value="" disabled selected>
              Select Status
            </option>
            <option value="ongoing">Ongoing</option>
            <option value="upcoming">Upcoming</option>
            <option value="past">Past</option>
          </select>
        </div>

        <div className="flex flex-col gap-2  basis-1/3">
          <label htmlFor="event_date" className="text-sm">
            Event Date
          </label>
          <div>
            <input
              type="date"
              name="start_date"
              id="start_date"
              placeholder="Start Date"
              className={selectStyles}
            />
            <input
              type="date"
              name="end_date"
              id="end_date"
              placeholder="End Date"
              className={selectStyles}
            />
          </div>
        </div>
        <PrimaryButton bgColor="#FF3338" txtColor="#fff">
          <div className="flex items-center gap-2">
            <AiOutlineSearch size={15} />
            Search
          </div>
        </PrimaryButton>
      </form>
    </Section>
  );
};

export default Form;
