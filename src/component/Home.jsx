import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  let navigate = useNavigate("")
  return (
    <div id='home'>
<button onClick={()=>{
  navigate('/signup')
}}>Signup</button>
<h3>        if already have a account then </h3>
<button onClick={()=>{
  navigate('/login')
}}>Login</button>

    </div>
  )
}

export default Home