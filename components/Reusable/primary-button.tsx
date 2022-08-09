import React from "react";

interface Props {
  bgColor: string;
  txtColor: string;
  children: JSX.Element | string;
}

const PrimaryButton = ({ bgColor, children, txtColor }: Props) => {
  return (
    <button
      className="px-4 py-2 w-max uppercase text-xs rounded"
      style={{ backgroundColor: `${bgColor}`, color: `${txtColor}` }}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
