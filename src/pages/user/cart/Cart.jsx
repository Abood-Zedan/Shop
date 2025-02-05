import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Container, Table } from 'react-bootstrap';
import LoadingPage from '../../../components/user/loading/LoadingPage';
import style from './cart.module.css'
import { Link } from 'react-router-dom';
import HeadOfPage from '../../../components/user/headOfPage/HeadOfPage';
import { Bounce, toast } from 'react-toastify';

export default function Cart() {

    const [cart, setCart] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const token = localStorage.getItem('userToken');
    const getCart = async () => {
        try {
            const responce = await axios.get(`https://ecommerce-node4.onrender.com/cart`,
                {
                    headers: {
                        Authorization: `Tariq__${token}`,
                    }
                }
            )
            setCart(responce.data.products)
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getCart()
    }, [])

    const incProduct = async (productId) => {
        try {
            const responce = await axios.patch(`https://ecommerce-node4.onrender.com/cart/incraseQuantity`,
                {
                    productId: productId,
                },
                {
                    headers: {
                        Authorization: `Tariq__${token}`
                    }
                }
            )
            if(responce.status === 200){
                toast.success('The increase is successfully', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                    });
            }
        } catch (error) {
            toast.error('Error' + error, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
                });
        }
    }
    const decProduct = async (productId) => {
        try {
            const responce = await axios.patch(`https://ecommerce-node4.onrender.com/cart/decraseQuantity`,
                {
                    productId: productId,
                },
                {
                    headers: {
                        Authorization: `Tariq__${token}`
                    }
                }
            )
            if(responce.status === 200){
                toast.success('The decrease is successfully', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                    });
            }
        } catch (error) {
            toast.error('Error' + error, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
                });
        }
    }
    const removeItem = async (productId) => {
        try {
            const responce = await axios.patch(`https://ecommerce-node4.onrender.com/cart/removeItem`,
                {
                    productId: productId,
                },
                {
                    headers: {
                        Authorization: `Tariq__${token}`
                    }
                }
            )
            if(responce.status === 200) {
                toast.success('The remove item is successfully', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                    });
            }
        } catch (error) {
            toast.error('Error' + error, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
                });
        }
    }
    const clearCart = async () => {
        try {
            const responce = await axios.patch("https://ecommerce-node4.onrender.com/cart/clear",
                {
                    headers: {
                        Authorization: `Tariq__${token}`,
                    },
                },
            )
            if(responce.status === 200) {
                toast.success('The clear cart is successfully', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                    });
            }
        } catch (error) {
            toast.error('Error' + error, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
                });
        }
    }


    if (isLoading) {
        return <LoadingPage />
    }

    return (
        <>
            <HeadOfPage title='Cart Page' page='Cart'/>
            <section className={`${style.cart}`}>
                <Container fluid>
                    <Table>
                        <thead>
                            <tr>
                                <th><i className="fa-solid fa-shirt fs-5 me-1"></i> Products Details</th>
                                <th className='text-center'><i className="fa-solid fa-sack-dollar fs-5 me-1"></i >Price</th>
                                <th className='text-center'><i className="fa-solid fa-eye fs-5 me-1"></i > Quantity</th>
                                <th className='text-center'><i className="fa-solid fa-money-bill fs-5 me-1"></i> Total Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(item =>
                                <tr key={item.details._id}>
                                    <td className='text-center'>
                                        <div className='d-flex gap-4'>
                                            <img src={item.details.mainImage.secure_url} alt="" className='' />
                                            <Link to={`/cart/${item.details._id}`} className='fs-6'>{item.details.name}</Link>
                                        </div>
                                    </td>
                                    <td className='text-center'>${item.details.finalPrice}</td>
                                    <td className='text-center'>
                                        <div className='d-flex justify-content-center align-items-center gap-2'>
                                            <div className={`${style.quantity}`}>
                                                <Button onClick={() => decProduct(item.productId)}>-</Button>
                                                <span className='px-3'>{item.quantity}</span>
                                                <Button onClick={() => incProduct(item.productId)}>+</Button>
                                            </div>
                                            <Button className={`${style.remove}`} onClick={()=> removeItem(item.productId)}><i className="fa-solid fa-xmark"></i></Button>
                                        </div>
                                    </td>
                                    <td className='text-center'>${item.details.finalPrice * item.quantity}</td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                    <div className={`${style.shoping_btn} d-flex justify-content-between align-items-center`}>
                        <Button>Continue Shopping</Button>
                        <Button onClick={()=> clearCart()}>Clear Cart</Button>
                    </div>
                </Container>
            </section>
        </>
    )
}
