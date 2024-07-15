interface UserNavbarProps {
    name: string,
}

const UserNavbar = ({ name }: UserNavbarProps) => {
  return (
    <nav className="bg-transparent w-full absolute flex justify-end p-8 text-[#EAEAEA]">
        <h3 className="font-roboto text-xl font-normal">Welcome {name}!</h3>
    </nav>
  )
}

export default UserNavbar
