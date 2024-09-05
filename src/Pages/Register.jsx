import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { checkEmailApi, registerApi } from '../Services/AllApis';
import { useNavigate } from 'react-router-dom';

function Register() {

    const [user,setUser]=useState({
        username:"" , email:"", password:""
    })

    const nav = useNavigate();

    const handleregiter=async()=>{
        console.log(user);
        const {username,email,password}=user
        if(!username || !email || !password){
            toast.warning("Enter valid inputs")
        }else{
            const result=await checkEmailApi(email)
            console.log(result);
            if(result.data.length>0){
                toast.warning("Email ID already in use")
            }
            else{
                const result = await registerApi(user)
                if(result.status==201){
                    toast.success("Success")
                    setUser({
                        email:"" , username:"" , password:""
                    })
                    nav('/login')
                }
                else{
                    toast.error("Registration Failed")
                    console.log(result);
                    
                }
             
            }
        }
        
    }


  return (
    <>
   <div className='d-flex justify-content-center align-items-center ' style={{height:"80vh"}}>
    <div className=' w-75 border shadow bg-light p-5' style={{borderRadius:"20px"}}>
        <h1>REGISTER</h1>
        <input type="text" className="form-control mb-3"  onChange={(e)=>{setUser({...user,email:e.target.value})}} placeholder='Enter your Email id' />
        <input type="text" className="form-control mb-3"  onChange={(e)=>{setUser({...user,username:e.target.value})}}  placeholder='Username' />
       <input type="password"  className='form-control mb-3'  onChange={(e)=>{setUser({...user,password:e.target.value})}} placeholder='Enter password'/>
       <div className='d-flex justify-content-between'>
        <button className='btn btn-success' onClick={handleregiter}>Register</button>
        <Link to={'/login'}>Already a  User?</Link>
       </div>
    </div>
   </div>
   </>
  )
}

export default Register