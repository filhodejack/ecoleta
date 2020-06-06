import React from "react";

const Input = (props: any) => {
  let result;
  let count = 0;

  const values = props.values?.map((value: string) => {
    count += 1;
    return <option value={count}>{value}</option>;
  });

  switch (props.type) {
    case "select":
      result = (
        <select id={props.id || props.name} name={props.name}>
          <option value="0" selected>
            Escolha uma opção
          </option>
          {values}
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
