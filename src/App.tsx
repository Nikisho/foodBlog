import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Header, Menu } from "./components"
import { About, Home } from "./pages"
import { useState } from "react"
import { Collapse, Fade } from "@mui/material"


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
    <div className='h-auto bg-gradient-to-tr from-orange-200'>
      <Header showMenu={showMenu} setShowMenu={setShowMenu} />
      <div className="flex flex-col xl:flex-row">

      <Collapse in={showMenu} orientation='horizontal' timeout={2000} className="">
        <div className="w-56">
          <Menu />
        </div>
      </Collapse>
      <RouterProvider router={router} />
      </div>
    </div>
  )
}

export default App
