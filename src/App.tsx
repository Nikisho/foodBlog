import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Header, Menu } from "./components"
import { About, Home, Recipe } from "./pages"
import { useState } from "react"
import { Collapse } from "@mui/material"


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
    ,
    {
      path: '/recipe',
      element: <Recipe />
    }
  ])

  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <div className='h-auto bg-gradient-to-tr from-orange-200 transtion duration-700'>
      <Header showMenu={showMenu} setShowMenu={setShowMenu} />
      <div className="flex flex-col xl:flex-row w-auto justify-center">

      <Collapse in={showMenu} orientation='horizontal' timeout={400} className={` ${showMenu? '':'hidden'}`} >
        <div className="w-72 xl:w-56">
          <Menu />
        </div>
      </Collapse>
      <RouterProvider router={router} />
      </div>
    </div>
  )
}

export default App
