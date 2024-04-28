import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Header, Menu } from "./components"
import { About, Home } from "./pages"
import { useState } from "react"
import { Fade } from "@mui/material"


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/about',
      element: <About />
    }
  ])

  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <div className='h-screen bg-orange-200'>
      <Header showMenu={showMenu} setShowMenu={setShowMenu} />
      <Fade in={showMenu}>
        <div className="">
          <Menu />
        </div>
      </Fade>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
