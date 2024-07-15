import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { CookieContext } from "../store/cookie-context";
import { CookieContextType } from "../@types/cookie";
import UserNavbar from "../components/Navbars/UserNavbar";

const UserLayout = () => {

    const ctx = useContext(CookieContext) as CookieContextType;

    return (
        <>
            <UserNavbar name={ctx.getCookie('username')}/>
            <Outlet />
        </>
    )
}

export default UserLayout;