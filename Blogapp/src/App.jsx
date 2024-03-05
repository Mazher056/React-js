import React, { createContext } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'

const arr = ["mazher","alam","ansari"];
const taskcontext = createContext();


export default function App() {
  return (
    <>
    <Header></Header>
        <Outlet/>
    <Footer></Footer>
   </>
  )
}
