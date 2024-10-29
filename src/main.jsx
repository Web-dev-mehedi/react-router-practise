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
import Users from './components/users/Users';
import UserDetails from './components/userDetails/UserDetails';


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
    },
    {
      path:"/users",
      // for fetching data from api using loader()
      loader:()=> fetch("https://jsonplaceholder.typicode.com/users"),
      element:<Users></Users>
    },
    {
      // : use this we can assaign a value in userId from browser url search bar / for dynamic link
      path:"/users/:userId",
      loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
      element: <UserDetails></UserDetails>
    }



  ]
  }
   
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router}/>
  </StrictMode>,
)
