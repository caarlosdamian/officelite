import React from "react";
import "./Button.scss";

interface ButtonI {
  label: string;
  variant: "primary" | "secondary" | "third";
}

export const Button = ({ variant, label }: ButtonI) => {
  return <div className={`button ${variant}`}>{label}</div>;
};
