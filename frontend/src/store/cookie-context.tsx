import { createContext, FC, ReactNode, useState } from "react";
import { ICookie, CookieContextType } from "../@types/cookie";
import Cookies from "js-cookie"

export const CookieContext = createContext<CookieContextType | null>(null);

const CookieProvider: FC<{children: ReactNode}> = ({children}) => {

    const [user, setUser] = useState<ICookie | null>(null);

    function saveCookies(user: ICookie) {
        // console.log(user);
        // console.log("Cookie Saved");
        Cookies.set("user", JSON.stringify(user));
        setUser(user);
    }

    function getCookie(name: string): string {
        const CurrUser = JSON.parse(Cookies.get("user") as string);
        return CurrUser[name];      
    }

    return <CookieContext.Provider
        value={{
            user: user as ICookie,
            setCookies: saveCookies,
            getCookie: getCookie
        }}
    >
        {children}
    </CookieContext.Provider>
}

export default CookieProvider;