import React, { useContext } from 'react'
import { UsersContext } from './UsersData'

const UserProfile = () => {
    const {users} = useContext(UsersContext)
  return (
    <>
    <h1 className='container w-50 mt-5 text-light text-center fs-1 rounded p-5 bg-info'>{users.name}'s Profile</h1>
    <h2 className='container w-50 mt-5 text-info text-center fs-1 rounded p-5 bg-secondary'>{users.role}</h2>
    
    </>
  )
}

export default UserProfile