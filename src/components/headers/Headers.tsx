import React from "react";
import { HeadersI } from "../../common/types";
import { Button } from "../button/Button";
import "./Headers.scss";

export const Headers = ({ children, title, subtitle }: HeadersI) => {
  return (
    <div className="headers">
      <h1 className="headers-title">{title}</h1>
      <span className="headers-subtitle">{subtitle}</span>
      {children}
    </div>
  );
};
