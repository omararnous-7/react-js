import React from 'react'
import img from "../../Img/Untitled-1.png"
import './Minpage.Module.css'

export default function MinPage() {
  return (
    <>
    <div className='bg'>
    <div className=" text-center">
  <div className="row ">
    <div className="col-lg-12 ">
      <img src={img} alt="" className='w-25 pt-5 pb-3'/>
    </div>
    <div className="col-lg-12">
      <h1 className='pb-2 text-white'>START FRAMEWORK</h1>
      <p className='pb-5 text-white'>Graphic Artist - Web Designer - Illustrator</p>
    </div>
  </div>
</div>

</div>
    </>
  )
}
