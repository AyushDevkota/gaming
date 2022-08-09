import React from "react";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Section = ({ children }: Props) => {
  return (
    <section className="bg-bg text-white py-12">
      <div className="md:w-4/5 mx-auto container">{children}</div>
    </section>
  );
};

export default Section;
