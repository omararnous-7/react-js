import React from 'react'

export default function Contact() {
  return (<>
    <div className="container">
       
    <div className="row g-4 justify-content-center">
      <h2 className='text-center mt-5'>CONATCT SECTION</h2>
                    <div className="col-lg-12">
                        <input type="text" className="form-control mt-5 w-75" placeholder="userName"/>
                    </div>
                    <div className="col-lg-12">
                        <input type="email" className="form-control mt-3 w-75" placeholder="userAge"/>
                    </div>

                    <div className="col-lg-12">
                        <input type="text" className="form-control mt-3 w-75" placeholder="userEmail"/>
                    </div>

                    <div className="col-lg-12">
                        <input type="password" className="form-control form mt-3 w-75 " placeholder="userPassword"/>
                    </div>


                </div>
                <button className='btn btn-success my-3 mb-5'>send message</button>

    </div>



    
    </>
  )
}
