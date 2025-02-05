import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const CartContext = createContext();

const CartContextProvider = ({ children }) => {

    const [cartCount, setCartCount] = useState();
    const token = localStorage.getItem('userToken');
    useEffect(() => {
        getCart()
    }, [])
    const getCart = async () => {
        const responce = await axios.get(`https://ecommerce-node4.onrender.com/cart`,
            {
                headers: {
                    Authorization: `Tariq__${token}`,
                }
            }
        )
        setCartCount(responce.data.count)
    }

    return <CartContext.Provider value={{ cartCount, setCartCount }}>
        {children}
    </CartContext.Provider>

}

export default CartContextProvider;