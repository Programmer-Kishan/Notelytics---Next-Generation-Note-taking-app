import { useState, FormEvent } from "react"

import LongButtons from "../../Buttons/LongButtons"
import FormInput from "../../Inputs/FormInput"
import { validateEmail } from "../../../utils/validation"

const SignUp = () => {

  const [emailError, setEmailError] = useState({
    value: false, taken: false
  });

// In JavaScript, when you write const formData = new FormData(event.target), the event.target is implicitly 
// typed as EventTarget, which is a generic type that represents the target of an event.

// However, in TypeScript, the type system is more strict, and event.target is typed as EventTarget by default.
// The FormData constructor expects an HTMLFormElement as its argument, not just an EventTarget.

// By writing const formData = new FormData(event.target as HTMLFormElement), we're telling TypeScript to 
// perform a type assertion, which means we're explicitly telling the compiler that we know event.target is 
// actually an HTMLFormElement, even though it's typed as EventTarget.

// This type assertion is necessary because TypeScript is trying to prevent a potential error. If event.target 
// is not an HTMLFormElement, the FormData constructor would throw an error at runtime. By asserting that event.
// target is an HTMLFormElement, we're taking responsibility for ensuring that it's indeed the correct type.

// In other words, we're saying to TypeScript: "Hey, I know you think event.target is just an EventTarget, 
// but I'm sure it's actually an HTMLFormElement, so let me use it as such."

// This type assertion is a common pattern in TypeScript, especially when working with libraries or APIs that
// expect specific types, but the TypeScript type system can't infer those types automatically.

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const fd = new FormData(event.target as HTMLFormElement)
    if (!validateEmail(fd.get("email") as string)) {
      setEmailError({
        value: true,
        taken: false,
      })
      return ;
    }
    const data = Object.fromEntries(fd.entries());
    console.log(data);
  }

  return (
    <div className="bg-meteor w-full h-screen bg-no-repeat bg-cover grid place-items-center">
      <form 
        className="bg-gray-600/50 flex flex-col px-6 py-8 w-[30%] gap-7 rounded-md"
        onSubmit={(e) => handleSubmit(e)}
      >
        <h1 className="text-white text-5xl text-center font-montserrat font-extrabold">Sign Up</h1>
        <FormInput label="Username" type="text" name="username" />
        <div className="flex flex-col gap-2">
          <FormInput label="Email" type="email" name="email"/>
          {emailError.value && <p className="text-sm text-[#EAEAEA] font-poppins">Please Enter Valid Email Address</p>}
        </div>
        <FormInput label="Password" type="password" name="password"/>
        <p>Already have an account <a href="#" className="underline">Login</a></p>
        <LongButtons 
          text="Submit" 
          bgColor="#08D9D6"
          textColor="#000000" 
          type="submit"
          hoverColor="#06c2bf"
        />
      </form>
    </div>
  )
}

export default SignUp
