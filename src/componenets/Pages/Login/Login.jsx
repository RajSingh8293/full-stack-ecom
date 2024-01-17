import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { auth } from '../../../Firebase/firebaseConfig'
import { store } from '../../../Contexts/ContextStore'
import Loader from '../../Loader/Loader'

const Login = () => {
  const { loading, setLoading } = useContext(store)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)

    if (email === '' || password === '') {
      toast.error('All fileds are required')
    }
    try {
      const user = await signInWithEmailAndPassword(auth, email, password)
      const userData = user.user
      // console.log(userData)

      toast.success('Login successful')
      localStorage.setItem('user', JSON.stringify(userData))
      navigate('/')
      setLoading(false)
      setEmail('')
      setPassword('')
    } catch (error) {
      toast.error('Something went wrong')
      setLoading(false)
    }
  }

  return (
    <section className="w-[100%] pt-[80px] flex justify-center  flex-col items-center">
      {loading ? (
        <Loader />
      ) : (
        <div>
          <h1 className="text-3xl font-bold pb-5">Login</h1>

          <form className="w-full max-w-[500px] bg-black p-10 rounded">
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
              Don't have an account{' '}
              <Link to="/signup" className="text-blue-400">
                signup
              </Link>
            </p>
            <div className="py-4">
              <button
                className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-4 rounded"
                type="button"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      )}
    </section>
  )
}

export default Login
