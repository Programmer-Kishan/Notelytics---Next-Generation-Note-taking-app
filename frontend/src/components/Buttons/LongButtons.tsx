
import ButtonProps from "./ButtonInterface"

interface AdditionalProps {
    type: "submit" | "reset"
}

const LongButtons = ({text, bgColor, textColor, type}: ButtonProps & AdditionalProps) => {
  console.log(text, bgColor, textColor, type);
  return (
    <button 
        style={{
          backgroundColor: bgColor,
          color: textColor
        }}
        className={`p-3 w-full rounded-lg font-poppins font-semibold text-xl`}
        type={type}
    >
      {text}
    </button>
  )
}

export default LongButtons
