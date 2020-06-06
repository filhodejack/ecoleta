import { ChangeEventHandler } from "react";

type FieldProps = {
  id?: string;
  name: string;
  onChange?: ChangeEventHandler;
  /**
   * Is it a select list? GOOD! The items come-'ere.
   */
  options?: string[];
  /**
   * Holds the title of the HTML form field component.
   */
  title: string;
  type: string;
  /**
   * Initial value.
   */
  value?: string;
};

export default FieldProps;
