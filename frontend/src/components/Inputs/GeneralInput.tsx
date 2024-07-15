interface GeneralInputProps {
  label: string,
  type: string,
  name: string,
}

const GeneralInput = ({ label, type, name }: GeneralInputProps) => {
  return (
    <div>
      <label className="bg-[#EAEAEA] font-poppins relative top-3 left-3">{label}</label>
      {type === 'textarea' ? 
        <textarea 
          name={name} 
          rows={5}
          className="bg-transparent rounded-[4px] border-[#252A34] border-2 px-1 py-2 w-full font-poppins"
        ></textarea> 
        : 
        <input 
          type={type} 
          name={name} 
          className="bg-transparent rounded-[4px] border-[#252A34] border-2 px-1 py-2 w-full font-poppins"
        />
      }
    </div>
  )
}

export default GeneralInput
