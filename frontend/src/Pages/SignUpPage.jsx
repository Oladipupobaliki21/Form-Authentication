import { useState} from 'react'
import { signUp } from '../api';


const SignUpPage = () => {
    const [formData, setFormData]= useState({
        username: '',
        email: '',
        password: '', 
    });
    const handleSubmit= async(e)=>
    {
        e.preventDafault();
        try{
            const response = await signUp(formData);
            alert(response.message);
        }
      catch(error){
        alert('Sign-up Failed');
      }
        
    }
    

  return (
    <div className='min-h-screen flex items-center justify-center bg-amber-950'>
        <form onSubmit={handleSubmit} className='bg-white p-6 rounded shadow-md'> 
        <h2 className='mb-4 text-2xl text-center'>Sign Up</h2>
        {/* <p className='mb-2'>User Name</p> */}
        <input type='text' placeholder='Username' value={formData.username} onChange={(e)=> setFormData({...formData, username: e.target.value})} className='w-full p-2 mb-4 border rounded outline-none' required/>
        <input type='email' placeholder='Email' value={formData.email} onChange={(e)=> setFormData({...formData, email: e.target.value})} className='w-full p-2 mb-4 border rounded outline-none' required/>
        <input type='password' placeholder='Enter Your Password' value={formData.password} onChange={(e)=> setFormData({...formData, password: e.target.value})} className='w-full p-2 mb-4 border rounded outline-none' required/>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Sign Up
        </button>
        </form>
    </div>
  )
}

export default SignUpPage