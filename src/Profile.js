import React from 'react'
import { useSelector } from 'react-redux'

function Profile() {
    const user = useSelector((state) => state.user.value)
    const theme = useSelector((state)=> state.theme.value)
  return (
    <div style={{color: theme}}>
    <p>name : {user.name} </p>
    <p>email : {user.email}</p>
    <p>age: {user.age} </p>
      
    </div>
  )
}

export default Profile
