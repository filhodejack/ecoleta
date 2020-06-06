import React from "react";
import Input from "./Input";

const Field = (props: any) => (
  <div className="field">
    <label htmlFor={props.name}>{props.desc}</label>
    <Input
      desc={props.desc}
      id={props.id || props.name}
      name={props.name}
      type={props.type}
      values={props.values}
    />
  </div>
);

export default Field;
