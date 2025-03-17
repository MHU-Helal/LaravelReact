import React, { createContext } from 'react'
import UserProfile from './UserProfile'

export const UsersContext = createContext()
const UsersData = () => {

    const users = {
        name: "Md. Helal",
        role: "Full stack developer",
    }

   
    return (
        <>

        <UsersContext.Provider value={{users}}>
            <UserProfile />
        </UsersContext.Provider>
            {/* <div className="container w-50 mt-5 text-light fs-1 rounded p-5 bg-info">
                <h1>{users.name}</h1>
                <h2>{users.role}</h2>
            </div> */}
        </>
    )
}

export default UsersData