import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
   <div>
     <div style={{display:"flex" ,border:"2px solid Black",backgroundColor:"lightblue",justifyContent:"space-between",height:"75px",width:"100%"}}>
      <div >
        logo
      </div>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
        </ul>
      </div>
    </div>
   </div>
  )
}

export default Nav