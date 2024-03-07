import React from 'react'
import img1 from '../../Img/poert1.png'
import img2 from '../../Img/port2.png'
import img3 from '../../Img/port3.png'


export default function Portfolio() {
  return (
    <>
    <div className="container">


  <div className="text-center py-4">
  <h2>PORTFOLIO COMPONENT</h2> 

  </div>
  <div className="row ">
  <div className="col-lg-4 text-center">
<img src={img1} alt=" img1" className='  w-100  p-3 py-4' />
  </div>
  <div className="col-lg-4 text-centerw-25">
<img src={img2} alt="img2" className='  w-100  p-3 py-4'/>
  </div>
  <div className="col-lg-4 text-centerw-25">
<img src={img3} alt="img3" className='  w-100  p-3 py-4' />
  </div>
  </div>

  <div className='row'>
  <div className="col-lg-4 text-centerw-25">
<img src={img1} alt="img1" className='  w-100  p-3 pb-5' />
  </div>
  <div className="col-lg-4 text-centerw-25">
<img src={img2} alt="img2" className='  w-100  p-3 pb-5' />
  </div>
  <div className="col-lg-4 text-centerw-25">
<img src={img3} alt="img3" className='  w-100  p-3 pb-5' />
  </div>
  </div>








    </div>
    

    
    </>
  )
}
