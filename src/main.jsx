import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/home/Home';
import About from './components/about/About';
import Conatct from './components/contact/Conatct';

const router =createBrowserRouter([
  {
    path:"/",
    element : <Home></Home>,
    // to making nasted page components on reacts
    children:[
      {
        path:"/about",
        element:<About></About>
    },
    {
      path:"/contact",
      element:<Conatct></Conatct>
    }
  ]
  },

    {
      path:"/contact",
      element: <div>hello from contact page</div>
    }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router}/>
  </StrictMode>,
)
