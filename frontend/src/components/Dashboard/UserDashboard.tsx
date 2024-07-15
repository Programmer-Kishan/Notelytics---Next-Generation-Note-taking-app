import NeonButton from "../Buttons/NeonButton"
import EmptyDashboard from "./EmptyDashboard"

const UserDashboard = () => {
  return (
    <div className="background px-36 py-24">
      <div className="w-full flex justify-end">
        <NeonButton text="Create NoteBook" />
      </div>
      <div className="w-full h-full grid place-items-center">
        <EmptyDashboard />
      </div>
    </div>
  )
}

export default UserDashboard
