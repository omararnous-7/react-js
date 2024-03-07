import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.Module.css'

export default function Navbar() {
  return (
    <>
      
    <nav className=" navbar navbar-expand-lg  ">
<div className="container-fluid text-center  ">
  <Link to="MinPage" className="navbar-brand col-md-4 ps-5 fw-bold text-white " > <h2> Start Framework</h2></Link>

  <div className="collapse navbar-collapse col-md-6 " id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
      
      <li className="nav-item">
        <Link to="About" className="nav-link py-4 px-2 fw-bold text-white" > <h5>About</h5>      </Link>
      </li>
      <li className="nav-item">
        <Link to="Portfolio" className="nav-link py-4 px-2 fw-bold text-white" > <h5>Portfolio</h5> </Link>
      </li>
      <li className="nav-item">
        <Link  to="Contact" className="nav-link py-4 px-2 fw-bold text-white"> <h5>Contact</h5> </Link>
      </li>
  
   
    </ul>
    
  </div>
</div>
</nav>
  
    
    </>
  )
}



// import React from 'react'

// export default function Navbar() {
//   return (<>
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//   <div className="container-fluid">
//     <a className="navbar-brand" to="#">Navbar</a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <a className="nav-link active" aria-current="page" to="#">Home</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" to="#">Link</a>
//         </li>
//         <li className="nav-item dropdown">
//           <a className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Dropdown
//           </a>
//           <ul className="dropdown-menu">
//             <li><a className="dropdown-item" to="#">Action</a></li>
//             <li><a className="dropdown-item" to="#">Another action</a></li>
//             <li><hr className="dropdown-divider"/></li>
//             <li><a className="dropdown-item" to="#">Something else here</a></li>
//           </ul>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link disabled" aria-disabled="true">Disabled</a>
//         </li>
//       </ul>

//     </div>
//   </div>
// </nav>
// </>
//   )
// }
