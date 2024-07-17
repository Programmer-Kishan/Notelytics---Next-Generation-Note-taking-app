
import NoteBookModal from "../Modals/NoteBookModal"
import EmptyDashboard from "./EmptyDashboard"
import { useRef } from "react"

const UserDashboard = () => {

  const notebookDialog = useRef<HTMLDialogElement>(null)

  return (
    <div className="background px-36 py-24">
      <NoteBookModal ref={notebookDialog}/>
      <div className="w-full flex justify-end">
        <button
          className="p-2 text-[#08D9D6] bg-transparent border-2 border-[#08D9D6] rounded-lg font-poppins text-base shadow-[0_0_3px_#08D9D6] transition-shadow hover:shadow-[0_0_8px_#08D9D6]"
          onClick={() => notebookDialog.current?.showModal()}
        >
          +Create NoteBook
        </button>
      </div>
      <div className="w-full h-full grid place-items-center">
        <EmptyDashboard />
      </div>
    </div>
  )
}

export default UserDashboard
