import React from 'react'
import "./Footer.Module.css"

export default function MinFooter() {
  return (<>

    <div className='footer text-white text-center w-100   '>
      <div className="container-fluid ">
        <div className="row py-5 " >
          <div className=" col-lg-4 pt-5">
            <h3>LOCATION</h3>
            <p className='py-3'>2215 John Daniel Drive</p>
            <p className=''>Clark, MO 65243</p>
          </div>

          <div className=" col-lg-4 pt-5">
            <h3>AROUND THE WEB</h3>
         
            <p className='py-3'>Clark, MO 65243</p>
          </div>
          
          <div className=" col-lg-4 py-5 ">
            <h3> ABOUT FREELANCER</h3>

            <p className='py-3'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
          </div>



        </div>
      </div>

    </div>
    <footer className='sec-footer text-white text-center  w-100 py-3'>
      <p>Copyright © Your Website 2021</p>
    </footer>
  </>
  )
}
