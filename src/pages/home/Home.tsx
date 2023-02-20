import "./Home.scss";
import { bgPatternFooter, charts } from "../../assets/";
import { Button } from "../../components/button/Button";
import { cardInfo } from "../../common/utils";
import { Card } from "../../components/card/Card";
import { Count } from "../../components/count/Count";
import { Headers } from "../../components/headers/Headers";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="home">
      <div className="home-top">
        <div className="home-top-left">
          <img src={charts} alt="charts" className="home-top-left-img" />
        </div>
        <Headers
          title={"A simple solution to complex tasks is coming soon"}
          subtitle={
            "Say goodbye to inefficient juggling of multiple apps, teams, and projects. Officelite is the new collaboration platform built with an intuitive interface to improve productivity."
          }
        >
          <Link to={"/singup"} className='link'>
            <Button variant="primary" label="Get Started" />
          </Link>
        </Headers>
      </div>
      <div className="home-middle">
        {cardInfo.map((item: any) => (
          <Card key={item.id} information={item} />
        ))}
      </div>
      <div className="home-bottom">
        <img
          className="home-bottom-img"
          src={bgPatternFooter}
          alt="bgPatternFooter"
        />
        <Count />
      </div>
    </div>
  );
};
