import { updateProfile } from 'firebase/auth';
import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { auth, firestore } from '../firebase';
import { doc, setDoc } from "firebase/firestore"; 

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('')
  const { createUser } = UserAuth();
  const navigate = useNavigate()
  
  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createUser(email, password)
      updateProfile(auth.currentUser, {
        displayName: name
      }).then(() => {
        setDoc(doc(firestore, "users", auth.currentUser.uid), {
          name,
          email,
          createdAt: new Date()
        })
        navigate('/')
      }).catch((error) => {
        console.log(error);
        console.log('Something Went Wrong')
      });
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  }


  return (
    <div className='basis-full min-h-screen flex flex-col items-center justify-center bg-gray-50 space-y-10 py-12 px-4 sm:px-6 lg:px-8'>
      <div>
        <h1 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>Sign up with us</h1>
        <p className="mt-2 text-center text-sm text-gray-600">
          Or
          <Link to="/signin" className="font-medium text-indigo-600 border-b border-indigo-600"> Already have an account? </Link>
        </p>
      </div>
      <div className="max-w-md w-full mx-auto bg-white shadow rounded-lg p-7 space-y-6">
        <div className="flex flex-col">
          <label className="text-sm font-bold text-gray-600 mb-1" htmlFor="fullname">Full Name</label>
          <input className="border rounded-md bg-white px-3 py-2" type="text" name="fullname" id="text" placeholder="Enter your Full Name" value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-bold text-gray-600 mb-1" htmlFor="email">Email Address</label>
          <input className="border rounded-md bg-white px-3 py-2" type="text" name="email" id="email" placeholder="Enter your Email Address" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-bold text-gray-600 mb-1" htmlFor="password">Password</label>
          <input className="border rounded-md bg-white px-3 py-2" type="password" name="password" id="password" placeholder="Enter your Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div>
          <button className="w-full bg-indigo-600 text-white rounded-md p-2" onClick={handleSignUp}>Sign up</button>
        </div>
      </div>
    </div>
  )
}

export default SignUp