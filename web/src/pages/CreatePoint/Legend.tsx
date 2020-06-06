import React from "react";

type LegendProps = {
  details?: string;
  title: string;
};

const Legend = (props: LegendProps) => (
  <legend>
    <h2>{props.title}</h2>
    {props.details && <span>{props.details}</span>}
  </legend>
);

export default Legend;
