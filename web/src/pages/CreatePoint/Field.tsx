import React from "react";
import FieldProps from "./FieldProps";
import Input from "./Input";

const Field = (props: FieldProps) => (
  <div className="field">
    <label htmlFor={props.name}>{props.title}</label>
    <Input
      id={props.id || props.name}
      name={props.name}
      title={props.title}
      type={props.type}
      values={props.values}
    />
  </div>
);

export default Field;
