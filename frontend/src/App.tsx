import { createBrowserRouter, RouterProvider } from "react-router-dom"

import HomePage from "./components/InitialPages/HomePage/HomePage"
import SignUp from "./components/InitialPages/SignUp/SignUp"
import Login from "./components/InitialPages/Login/Login"
import HomeLayout from "./Layouts/HomeLayout"
import UserLayout from "./Layouts/UserLayout"
import UserDashboard from "./components/Dashboard/UserDashboard"

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          path: "",
          element: <HomePage />
        },
        {
          path: "login",
          element: <Login />
        },
        {
          path: "signup",
          element: <SignUp />
        }
      ]
    },
    {
      path: "/user",
      element: <UserLayout />,
      children: [
        {
          path: ":userId",
          element: <UserDashboard />
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
