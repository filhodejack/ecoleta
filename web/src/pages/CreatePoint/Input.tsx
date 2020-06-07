import React from "react";
import FieldProps from "./FieldProps";

const Input = (props: FieldProps) => {
  let result;

  switch (props.type) {
    case "select":
      result = (
        <select
          id={props.id || props.name}
          name={props.name}
          onChange={props.onChange}
          value={props.value}
        >
          <option value={props.value}>Escolha uma opção</option>
          {props.options?.map((option: string) => (
            <option key={option} value={option}>
              {option}
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
          onChange={props.onChange}
          type={props.type}
        />
      );
      break;
  }

  return result;
};

export default Input;
