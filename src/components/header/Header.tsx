import { Outlet } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <h1>Header</h1>
      <Outlet />
    </div>
  );
};
