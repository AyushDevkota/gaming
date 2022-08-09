import React from "react";

const selectStyles =
  "bg-dark p-2 text-light text-xs  border-r-8 border-r-transparent cursor-pointer";

interface Props {
  options: {
    value: string;
    label: string;
  }[];
  states: {
    selectedOption: string;
    setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
  };
}

const DropDown = ({
  options,
  states: { selectedOption, setSelectedOption },
}: Props) => {
  return (
    <select
      className={selectStyles}
      value={selectedOption}
      onChange={(e) => setSelectedOption(e.target.value)}
    >
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  );
};

export default DropDown;
