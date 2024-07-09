import LongButtons from "../../Buttons/LongButtons"
import FormInput from "../../Inputs/FormInput"

const SignUp = () => {
  return (
    <div className="bg-meteor w-full h-screen bg-no-repeat bg-cover grid place-items-center">
      <form className="bg-gray-600/50 flex flex-col px-6 py-8 w-[30%] gap-7 rounded-md">
        <h1 className="text-white text-5xl text-center font-montserrat font-extrabold">Sign Up</h1>
        <FormInput label="Username" type="text" />
        <FormInput label="Email" type="email" />
        <FormInput label="Password" type="password" />
        <p>Already have an account <a href="#" className="underline">Login</a></p>
        <LongButtons text="Submit" bgColor="#08D9D6" textColor="#000000" type="submit" />
      </form>
    </div>
  )
}

export default SignUp
