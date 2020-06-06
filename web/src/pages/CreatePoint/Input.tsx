import React from "react";
import FieldProps from "./FieldProps";

const Input = (props: FieldProps) => {
  let result;

  switch (props.type) {
    case "select":
      result = (
        <select id={props.id || props.name} name={props.name}>
          <option value="">Escolha uma opção</option>
          {props.values?.map((value: string) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      );
      break;

    default:
      result = (
        <input
          id={props.id || props.name}
          name={props.name}
          type={props.type}
        />
      );
      break;
  }

  return result;
};

export default Input;
