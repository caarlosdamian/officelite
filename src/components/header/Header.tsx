import { Outlet } from "react-router-dom";
import { bgPatternHeader, logo } from "../../assets";
import "./Header.scss";

export const Header = () => {
  return (
    <div className="main-container">
      <div className="header">
        <img src={logo} className="header-logo" alt="logo" />
      </div>
      <img
        src={bgPatternHeader}
        className="header-pattern"
        alt="header-pattern"
      />
      <Outlet />
    </div>
  );
};
