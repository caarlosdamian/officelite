import React from "react";
// @ts-ignore
import { Slide } from "react-reveal";
import { CardI } from "../../common/types";
import { bgPatternPricing } from "../../assets/";
import { Button } from "../button/Button";
import "./Card.scss";

export const Card = ({ information }: CardI) => {
  const { img, description, features, tier, title } = information;
  return (
    <Slide left>
      <div className={img ? "card blue" : "card"}>
        {img && (
          <img
            className="blue-img"
            src={bgPatternPricing}
            alt="bgPatternPricing"
          />
        )}
        <div className={img ? "card-top blue" : "card-top"}>
          <div className="top-wrapper">
            <h1 className="top-wrapper-title">{title}</h1>
          </div>
          <div className="bottom-wrapper">
            <h1 className="bottom-wrapper-title">{tier}</h1>
            <h3 className="bottom-wrapper-description">{description}</h3>
            <div className="button-wrap">
              <Button
                label="Try for Free"
                variant={img ? "third" : "secondary"}
              />
            </div>
          </div>
        </div>
        <div className={img ? "card-bottom blue" : "card-bottom"}>
          <div className="top-wrapper">
            {features.map((item) => (
              <span className="top-wrapper-feature" key={item.id}>
                {item.title}
              </span>
            ))}
          </div>
        </div>
        <div className="button-remove">
          <Button label="Try for Free" variant={img ? "third" : "secondary"} />
        </div>
      </div>
    </Slide>
  );
};
