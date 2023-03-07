import React,{useState} from 'react'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    let  [user, setuser] =useState("")
    let [pass, setpass] =useState("")
    let [number, setnumber] =useState("")
    let [gender, setgender] =useState("") 
    let [dob, setdob] = useState("")
    let navigate =useNavigate()
    let handleSubmit=(e)=>{
        e.preventDefault()
        // console.log({user,pass,number,gender});
        localStorage.setItem("user" ,user)
        localStorage.setItem("pwd",pass)
        localStorage.setItem("Number",number)
        localStorage.setItem("gender" ,gender)
        localStorage.setItem("DOB" ,dob)


        toast.success("Signup successful",{position:toast.POSITION.TOP_CENTER})
        
        navigate('/login')
   }
  return (
    <div className='signup'>
        <ToastContainer/>
         <form action="" >
   
    <center>
            

    
            <label htmlFor="user">UserName :</label>
            <input type="text" id='user'onChange={(e)=>{
                    setuser(e.target.value)
            }}/>
            <br />
        
                <label htmlFor="pass">Password :</label>
                 <input type="text" id='pass' onChange={(e)=>{
                 setpass(e.target.value)
            }} />
       <br />
            
                <label htmlFor="number">Number :</label>
                 <input type="text" id='number' onChange={(e)=>{
                setnumber(e.target.value)
            }} />
        <br />
        <label htmlFor="dob">DOB :</label>
            <input type="date" id='dob'onChange={(e)=>{
                    setdob(e.target.value)
            }}/>
          <div className='radio'>
          <label htmlFor="gender">Gender:  </label>
          <div className='male'>
          <label htmlFor="gender">male</label>
           <input type="radio" id='gender' name='gender' value="male" onChange={(e)=>{
            setgender(e.target.value)
           }} />
           </div >
           <label htmlFor="gender">female</label>
            <input  type="radio" id='gender'name='gender' value="female" onChange={(e)=>{
            setgender(e.target.value)}} />
          </div>
            <br />
        

        <button onClick={handleSubmit}>Submit</button>
   
    
    
    </center>
</form>
</div>
  )
}

export default Signup