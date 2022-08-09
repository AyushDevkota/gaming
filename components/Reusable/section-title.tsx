import React from "react";

interface Props {
  title: string;
}

const SectionTitle = ({ title }: Props) => {
  return <h2 className="font-bold text-2xl mb-9 capitalize">{title}</h2>;
};

export default SectionTitle;
