// import ButtonProps from "./ButtonInterface"


const NeonButton = ({text}: {text: string}) => {
  return (
    <button 
        className="p-2 text-[#EAEAEA] bg-transparent border-2 border-[#EAEAEA] rounded-lg font-poppins text-base shadow-[0_0_3px_#EAEAEA] transition-shadow hover:shadow-[0_0_8px_#EAEAEA]"
    >
      +{text}
    </button>
  )
}

export default NeonButton
