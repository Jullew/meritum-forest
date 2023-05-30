import React from "react";

type Props = { title: any; subtitle: any };

function Heading({ title, subtitle }: Props) {
  return (
    <>
      <h3 className="uppercase font-Jost  font-semibold tracking-wider text-lg my-2 text-g">
        {title}
      </h3>
      <h2 className="uppercase font-barlow w-1/1 md:w-1/2 text-4xl md:text-6xl my-2">
        {subtitle}
      </h2>
    </>
  );
}

export default Heading;
