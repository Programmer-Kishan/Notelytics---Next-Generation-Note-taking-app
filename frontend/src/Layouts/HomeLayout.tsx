import { Outlet } from "react-router-dom";
import HomeNavbar from "../components/Navbars/HomeNavbar";

const HomeLayout = () => {
  return (
    <>
        <HomeNavbar />
        <Outlet />
    </>
  )
}

export default HomeLayout
