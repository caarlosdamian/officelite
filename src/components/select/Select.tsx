import React, { useState } from "react";
import { arrowDown, check } from "../../assets";
import "./Select.scss";

export const Select = ({ item }: any) => {
  const [selected, setSelected] = useState("Basic Pack");
  const [active, setactive] = useState(true);
  const { name, options } = item;
  return (
    <div className="select">
      <div className="select-labels">
        <span className="select-labels-title">{selected}</span>
        <img
          src={arrowDown}
          alt="arrow"
          className={`arrow ${active ? "active" : ""}`}
          onClick={() => setactive(!active)}
        />
      </div>
      {active && (
        <div className="select-wrapper">
          {options.map((item: any) => (
            <div
              className="item-container"
              key={item.id}
              onClick={() => setSelected(item.name)}
            >
              <div className="left">
                <span className="item-container-span">{item.name}</span>
                <div className="item-container-price">{item.price}</div>
              </div>
              <div className="right">
                {selected === item.name && <img src={check} alt="check" />}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
