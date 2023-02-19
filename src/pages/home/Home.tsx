import "./Home.scss";
import { charts } from "../../assets/";
import { Button } from "../../components/button/Button";
import { cardInfo } from "../../common/utils";
import { Card } from "../../components/card/Card";

export const Home = () => {
  return (
    <div className="home">
      <div className="home-top">
        <div className="home-top-left">
          <img src={charts} alt="charts" className="home-top-left-img" />
        </div>
        <div className="home-top-right">
          <h1 className="home-top-right-title">
            A simple solution to complex tasks is coming soon
          </h1>
          <span className="home-top-right-subtitle">
            Say goodbye to inefficient juggling of multiple apps, teams, and
            projects. Officelite is the new collaboration platform built with an
            intuitive interface to improve productivity.
          </span>
          <Button variant="primary" label="Get Started" />
        </div>
      </div>
      <div className="home-middle">
        {cardInfo.map((item) => (
          <Card key={item.id}/>
        ))}
      </div>
      <div className="home-bottom">
        <div className="home-bottom-left"></div>
        <div className="home-bottom-right"></div>
      </div>
    </div>
  );
};
