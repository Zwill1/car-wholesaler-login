import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import LoggedInFooter from "./LoggedInFooter";

export default function Root() {
  return (
    <>
      <Nav />
      <Outlet />
      <LoggedInFooter />
    </>
  );
}