import React from "react";
import { inputInfo } from "../../common/utils";
import { Button } from "../button/Button";
import { Select } from "../select/Select";
import { TextInput } from "../textInput/TextInput";
import "./Form.scss";

export const Form = () => {
  return (
    <div className="form">
      {inputInfo.map((item) =>
        item.select ? (
          <Select item={item} />
        ) : (
          <TextInput key={item.id} placeholder={item.name} error={false} />
        )
      )}
      <Button label="Get on the list" variant="primary" />
    </div>
  );
};
