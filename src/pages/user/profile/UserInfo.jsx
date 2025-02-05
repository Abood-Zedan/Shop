import React, { useContext } from 'react'
import { UserContext } from '../../../components/user/context/UserContext'

export default function UserInfo() {
    
    const {user, isLoading} = useContext(UserContext);

    if(isLoading) {
        return <div>Loading...</div>
    }

    return (
        <>
            <h1>User Information</h1>
            <h2>{user.userName}</h2>
        </>
    )
}
