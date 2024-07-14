import { useState, FormEvent, useContext } from "react"
import { Blocks } from "react-loader-spinner";
import { NavLink } from "react-router-dom";

import LongButtons from "../../Buttons/LongButtons"
import FormInput from "../../Inputs/FormInput"
import * as UserApi from "../../../network/user_api";
import { CookieContext } from "../../../store/cookie-context";
import { CookieContextType } from "../../../@types/cookie";

const Login = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [credError, setCredError] = useState<string | null>(null)

  const ctx = useContext(CookieContext) as CookieContextType;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setIsLoading(true);

    const fd = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(fd.entries());

    try {
      const user = await UserApi.Login({
        username: data.username as string,
        password: data.password as string
      })
      // TODO: Needs to redirect to dashboard
      console.log(typeof(user), user);
      ctx.setCookies(user);
    } catch(error) {
      console.log(error.message);
      setCredError(error.message as string);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="bg-meteor w-full h-screen bg-no-repeat bg-cover grid place-items-center">
      {isLoading && <Blocks height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        visible={true} />
      }
      <form 
        className="bg-gray-600/50 flex flex-col px-6 py-8 w-[30%] gap-7 rounded-md"
        onSubmit={handleSubmit}
      >
        {credError && <p className="text-lg text-red-600 font-poppins text-center">{credError}</p>}
        <h1 className="text-white text-5xl text-center font-montserrat font-extrabold">Login</h1>
        <FormInput label="Username" type="text" name="username" disabled={isLoading}/>
        <FormInput label="Password" type="password" name="password" disabled={isLoading}/>
        <p>Don't have an account <NavLink to="/signup" className="underline">Sign Up</NavLink></p>
        <LongButtons text="Submit" bgColor="#08D9D6" textColor="#000000" type="submit" hoverColor="#06c2bf"/>
      </form>
    </div>
  )
}

export default Login
