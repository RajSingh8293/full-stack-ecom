import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth, db } from '../../../Firebase/firebaseConfig'
import { toast } from 'react-toastify'
import { Timestamp, addDoc, collection } from 'firebase/firestore'

const Signup = () => {
  const [loading, setloading] = useState(false)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSignup = async (e) => {
    e.preventDefault()
    setloading(true)

    console.log(username, email, password)
    if (username === '' || email === '' || password === '') {
      toast.error('All fileds are required')
    }
    try {
      const users = await createUserWithEmailAndPassword(auth, email, password)
      const userData = users.user
      const data = {
        username: username,
        email: userData.email,
        time: Timestamp.now(),
      }
      const userCollection = collection(db, 'users')
      const sendData = await addDoc(userCollection, data)
      navigate('/login')
      setUsername('')
      setEmail('')
      setPassword('')
      setloading(false)
    } catch (error) {
      toast.error('Something went wrong')
      setloading(false)

    }
  }

  return (
    <section className="w-[100%] pt-[80px] flex justify-center items-center flex-col">
      <h1 className="text-3xl font-bold pb-5">Signup</h1>
      <form className="w-full max-w-[500px] bg-black p-10 rounded">
        <div className="flex items-center border-b border-teal-500 py-2">
          <input
            className="text-white appearance-none bg-transparent border-none w-full  mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Username"
            aria-label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="flex items-center border-b border-teal-500 py-3">
          <input
            className=" text-white appearance-none bg-transparent border-none w-full  mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="email"
            placeholder="john@test.com"
            aria-label="Full name"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex items-center border-b border-teal-500 py-2">
          <input
            className=" text-white appearance-none bg-transparent border-none w-full  mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="password"
            placeholder="********"
            aria-label="Full name"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <p className="text-white pt-4">
          Have an account?{' '}
          <Link to="/login" className="text-blue-400">
            login
          </Link>
        </p>
        <div className="py-4">
          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-4 rounded"
            type="button"
            onClick={handleSignup}
          >
            Sign Up
          </button>
        </div>
      </form>
    </section>
  )
}

export default Signup
