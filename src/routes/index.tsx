import {
  createBrowserRouter,
  createRoutesFromElements,
  createHashRouter,
  Route,
} from "react-router-dom";
import { Header } from "../components/header/Header";
import { Home } from "../pages/home/Home";
import { SignUp } from "../pages/signup/SignUp";

export const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<Home />} />
      <Route path="/singup" element={<SignUp />} />
    </Route>
  )
);
