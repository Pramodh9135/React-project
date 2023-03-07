import React,{useState} from 'react'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    let  [username, setuser] =useState("")
    let [password, setpass] =useState("")
    let navigate =useNavigate()
    let handleSubmit=(e)=>{
        e.preventDefault();
        
 let pwd=       localStorage.getItem('pwd');
 let usr=localStorage.getItem('user');

        console.log("pwd"+pwd +"usr  "+usr);
       if( username==usr && password == pwd){
      
        toast.success('verified successfully',{position: toast.POSITION.TOP_CENTER})
        navigate('/menu')
       }
       else{
        if(username!=usr) toast.warning(' Invalid UserName',{position: toast.POSITION.TOP_CENTER});
        else if(password!=pwd)toast.warning(' Invalid  password',{position: toast.POSITION.TOP_CENTER})
        navigate('/login')
       }
    }
  return (

    <div className='login'>
        <ToastContainer />
        <form action="" >
            <center>
       <div > <label htmlFor="user">UserName :</label>
                    <input type="text" id='user'onChange={(e)=>{
                    setuser(e.target.value)
            }}/>
            <br />
                        <label htmlFor="pass">Password :</label>
                    
                    <input type="text" id='pass' onChange={(e)=>{
                 setpass(e.target.value)
            }} />
            <br />

                <button onClick={handleSubmit}>Submit</button></div>
           

            </center>
        </form>
    </div>
  )
}

export default Login