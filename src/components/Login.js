import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const[isSignInForm,setIsSignInForm] = useState(true)

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)
  }
  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/dadb130d-463b-4e5b-b335-038ed912059e/web_tall_panel/IN-en-20241118-TRIFECTA-perspective_19bdd42f-315f-4636-b5fb-3cabd8eb471c_large.jpg" alt="login-bg"/>
      </div>

      <div className='login-form absolute bg-[#000000b3] p-8 mx-auto left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/12'>
        <h2 className='text-white text-3xl font-semibold'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h2>
        <form>
          {!isSignInForm &&
            <input type="text" placeholder='Full Name' className='p-4 my-4 bg-transparent border-2 border-solid border-white rounded-2 w-full'/>
          }
          <input type="email" placeholder='Email Address' className='p-4 my-4 bg-transparent border-2 border-solid border-white rounded-2 w-full'/>
          <input type="password" placeholder='Password' className='p-4 my-4 bg-transparent border-2 border-solid border-white rounded-2 w-full'/>
          <button className='p-4 my-6 bg-red-700 w-full rounded-lg text-white'>{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
        </form>

        <p className='cursor-pointer my-3 text-white text-xl' onClick={toggleSignInForm}>
          {isSignInForm ? 'New to Netflix? Sign up Now' : 'Already a User? Sign In Now'}
        </p>
      </div>

    </div>
  )
}

export default Login