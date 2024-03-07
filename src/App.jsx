import React from 'react'
import LayOut from './Comp/LayOut/LayOut'

import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import MinPage from './Comp/MinPage/MinPage'
import About from './Comp/About/About'
import Portfolio from './Comp/Portfolio/Portfolio'
import Contact from './Comp/Contact/Contact'
import NotFound from './Comp/NotFound/NotFound'

const routers= createBrowserRouter([{
path:"" ,element :<LayOut/>,children:[
  {index:true,element:<MinPage/>},
  {path:"MinPage" , element : <MinPage/>} ,
  {path:"About" , element : <About/>} ,
  {path:"Portfolio" , element : <Portfolio/>} ,
  {path:"Contact" , element : <Contact/>},
  {path:'*',element: <NotFound/>}
]


}])


export default function App() {
  return (
    <RouterProvider router={routers}></RouterProvider>

  )
}
