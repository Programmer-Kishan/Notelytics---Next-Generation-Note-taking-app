import { forwardRef } from "react";
import GeneralInput from "../Inputs/GeneralInput";
import LongButtons from "../Buttons/LongButtons";

const NoteBookModal = forwardRef<HTMLDialogElement>((_, ref) => {
    return (
        <dialog ref={ref} className="bg-[#EAEAEA] px-4 py-7 rounded-lg w-1/3">
            <form method="dialog">
                <div className="w-full text-right">
                    <button className="font-lg text-gray-700 font-montserrat font-extrabold">X</button>
                </div>
                <div className="flex flex-col gap-5">
                    <GeneralInput label="Note Book Name" type="text" name="notebookName" />
                    <GeneralInput label="Note Book Description" type="textarea" name="notebookdesc" />
                    <LongButtons text="Submit" bgColor="#FF2E63" textColor="#fff" type="submit" hoverColor="#ed2b5c" />
                </div>
            </form>
            {/* <form className="flex flex-col gap-5">
            <GeneralInput label="Note Book Name" type="text" name="notebookName" />
            <GeneralInput label="Note Book Description" type="textarea" name="notebookdesc" />
            <GeneralButtons text="Submit" bgColor="#08D9D6" textColor="#000000" type="submit" hoverColor="#06c2bf"/>
        </form> */}
        </dialog>
    )
})

export default NoteBookModal
