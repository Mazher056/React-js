import React from 'react'
// import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import App from './App'
import Home from './Pages/Home'
import Createpost from './Pages/Createpost'



const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    // errorElement: <ErrorPage/>,
    children:[
        {index:true,element:<Home/>},
        {path:"createpost",element:<Createpost/>},
        
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>,
)
