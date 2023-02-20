import React from "react";
import { date } from "../../common/utils";
import { useGetCount } from "../../hooks/useGetCount";
import { Button } from "../button/Button";
import "./Count.scss";

export const Count = ({ light }: any) => {
  const launchDate: any = useGetCount("11/04/2023");
  return (
    <div className="count">
      <div className="count-top">
        <span className={light ? "count-top-title light" : "count-top-title"}>
          Coming
          <strong> 4 Nov 2023</strong>
        </span>
      </div>
      <div className="count-middle">
        {date.map((item: any) => (
          <div key={item} className={`count-wrapper ${light ? "light" : ""}`}>
            <span className={`count-wrapper-title ${light ? "light" : ""}`}>
              {launchDate[item] < 10
                ? `0${launchDate[item]}`
                : launchDate[item]}
            </span>
            <span className={`count-wrapper-subtitle ${light ? "light" : ""}`}>
              {item}
            </span>
          </div>
        ))}
      </div>
      {!light && (
        <div className="count-bottom">
          <Button label="Get Started" variant="primary" />
        </div>
      )}
    </div>
  );
};
