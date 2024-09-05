import React,{useState} from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';
import { loginApi } from '../Services/AllApis';


function Login() {

    const [user , setUser]=useState({
        email:"" , password:""
    })
    
    const nav=useNavigate()

    const handlelogin=async()=>{
        console.log(user);
        const {email , password}= user
        if(!email || !password){
            toast.warning("Enter valid inputs")
        }else{
            const result = await loginApi(email, password)
            if(result.status==200){
                if(result.data.length>0){
                    console.log(result.data[0]);
                    sessionStorage.setItem('userData' , JSON.stringify(result.data[0]))
                    toast.success(" Login Successfully")
                    nav('/home')
                    setUser({
                        email:"" , password:""
                    })
                }else{
                    toast.warning("Invalid email / password")
                }
            }
            else{
                toast.error("Something went wrong ")
            }
        }
        
    }

  return (
   <>
   <div className='d-flex justify-content-center align-items-center ' style={{height:"80vh"}}>
    <div className=' w-75 border shadow bg-light p-5' style={{borderRadius:"20px"}}>
        <h1>LOGIN</h1>
        <input type="text" className="form-control mb-3"  onChange={(e)=>{setUser({...user,email:e.target.value})}} placeholder='Enter your Email id' />
       <input type="password"  className='form-control mb-3'  onChange={(e)=>{setUser({...user,password:e.target.value})}} placeholder='Enter password'/>
       <div className='d-flex justify-content-between'>
        <button className='btn btn-primary' onClick={handlelogin}>Login</button>
        <Link to={'/register'}>New User?</Link>
       </div>
    </div>
   </div>
   </>
  )
}

export default Login