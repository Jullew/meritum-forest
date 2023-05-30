import React from "react";
import Heading from "../layout/Heading";

type Props = {};

function Recents({}: Props) {
  return (
    <div className="container mx-auto">
      <Heading title="Ostatnie realizacje" subtitle="Zobacz jak pracujemy" />
    </div>
  );
}

export default Recents;
