import React from 'react'

import Navbar from '../Navbar/Navbar'

import { Outlet } from 'react-router-dom'
import MinFooter from '../MinFooter/MinFooter'


export default function LayOut() {
  return (
    <>
    <Navbar/>
 <Outlet/>

<MinFooter/>
    </>
  )
}
