import React from 'react'
import {useDispatch} from "react-redux"
import { login,logout } from './features/user/userSlice'

function Login() {
    const dispatch = useDispatch();

  return (
    <div>
    <button onClick={()=>{
        dispatch(login({name: "furkan", age:20, email: 'dadaslash@fmail.com'}))
    }}>
     Login
    </button>
      <button onClick={()=>{
        dispatch(logout())
      }}>
        logout
      </button>
    </div>
  )
}

export default Login
