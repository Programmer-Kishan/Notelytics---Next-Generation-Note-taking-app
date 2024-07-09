
interface FormInputProps {
    label: string,
    type: string,
}

const FormInput = ({label, type}: FormInputProps) => {
  return (
    <div className="flex flex-col">
      {/* <label htmlFor={label}>{label}</label> */}
      <input 
        placeholder={label} 
        type={type}
        className="p-2 bg-transparent font-poppins text-[#EAEAEA] rounded-md border border-[#EAEAEA] focus:outline-0"
      />
    </div>
  )
}

export default FormInput
