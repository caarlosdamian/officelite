import React from "react";
import { InputI } from "../../common/types";
import "./TextInput.scss";

export const TextInput = ({
  placeholder,
  onChange,
  name,
  error,
  ...props
}: InputI) => {
  return (
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      className={`input ${error ? 'error': ''}`}
      {...props}
    />
  );
};
