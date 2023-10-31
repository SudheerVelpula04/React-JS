import React, { useContext } from 'react'
import NavPage from './NavPage'
import { loginInfo } from '../../../App'



function LoginPage() {
  const loginInfo1=useContext(loginInfo)
  const loginHandler=()=>{
      loginInfo1.loginUser()
  }
  return (
    <div>
        <NavPage/>
        <h1>LoginPage</h1>
        <button onClick={loginHandler}>login</button>

    </div>
  )
}

export default LoginPage