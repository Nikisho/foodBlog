import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Header } from "./components"
import { About, Home } from "./pages"


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

  return (
    <div className='h-screen bg-orange-200'>
      <Header />
      <RouterProvider router={router} />
    </div>
  )
}

export default App
