import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const UserContext = createContext();

const UserContextProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getUser()
    }, [])

    const getUser = async () => {
        const token = localStorage.getItem('userToken');
        try {
            const response = await axios.get(`https://ecommerce-node4.onrender.com/user/profile`, {
                headers: {
                    Authorization: `Tariq__${token}`
                }
            })
            setUser(response.data.user)
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }
    return <UserContext.Provider value={{ user, isLoading }}>
        {children}
    </UserContext.Provider>
}

export default UserContextProvider