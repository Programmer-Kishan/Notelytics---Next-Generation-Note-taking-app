import { NavLink } from "react-router-dom"
import ButtonProps from "./ButtonInterface"

interface AdditionalProps {
  to: string
}

const GeneralButtons = ({text, bgColor, textColor, to}: ButtonProps & AdditionalProps) => {
  return (
    <NavLink to={`/${to}`}>
      <button 
        style={{
          backgroundColor: bgColor,
          color: textColor
        }}
        className={`py-2 px-6 font-bold text-lg rounded-2xl tracking-wide`} 
      >
          {text}
      </button>
    </NavLink>
  )
}

export default GeneralButtons
