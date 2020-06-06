import React from "react";
import FieldProps from "./FieldProps";
import Input from "./Input";

const Field = (props: FieldProps) => (
  <div className="field">
    <label htmlFor={props.name}>{props.title}</label>
    <Input
      id={props.id || props.name}
      name={props.name}
      onChange={props.onChange}
      options={props.options}
      title={props.title}
      type={props.type}
      value={props.value}
    />
  </div>
);

export default Field;
