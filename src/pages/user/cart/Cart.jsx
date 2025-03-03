import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row, Table } from 'react-bootstrap';
import LoadingPage from '../../../components/user/loading/LoadingPage';
import { Link, useNavigate } from 'react-router-dom';
import HeadOfPage from '../../../components/user/headOfPage/HeadOfPage';
import { Bounce, toast } from 'react-toastify';
import { MdRemoveShoppingCart } from "react-icons/md";

import style from './cart.module.css'
import Newsletter from '../../../components/user/newsletter/Newsletter';

export default function Cart() {

    const [cart, setCart] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [loading, setLoading] = useState(false);
    const token = localStorage.getItem('userToken');
    const navigat = useNavigate();
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
        setLoading(true);
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
            if (responce.status === 200) {
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
                setCart(prevCart => {
                    return prevCart.map(item => {
                        if (item.productId == productId) {
                            return { ...item, quantity: item.quantity + 1 };
                        }
                        return item;
                    })
                })
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
        } finally {
            setLoading(false);
        }
    }
    const decProduct = async (productId) => {
        setLoading(true);
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
            if (responce.status === 200) {
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
                setCart(prevCart => {
                    return prevCart.map(item => {
                        if (item.productId == productId) {
                            return { ...item, quantity: item.quantity - 1 };
                        }
                        return item;
                    })
                })
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
        } finally {
            setLoading(false);
        }
    }
    const removeItem = async (productId) => {
        setLoading(true);
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
            if (responce.status === 200) {
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
                getCart();
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
        } finally {
            setLoading(false);
        }
    }
    const clearCart = async () => {
        setLoading(true);
        try {
            const responce = await axios.patch("https://ecommerce-node4.onrender.com/cart/clear",
                null,
                {
                    headers: {
                        Authorization: `Tariq__${token}`,
                    },
                },
            )
            if (responce.status === 200) {
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
                getCart();
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
        } finally {
            setLoading(false);
        }
    }


    if (isLoading) {
        return <LoadingPage />
    }

    return (
        <>
            <HeadOfPage title='Cart Page' page='Cart' />
            {cart.length == 0 ? <div className='text-center pb-5'> <MdRemoveShoppingCart fontSize={150} /> <p className='fs-2'>The Cart is empty</p> </div> :
                <section className={`${style.cart}`}>
                    <Container fluid>
                        <Row>
                            <Col xl={9} >
                                <div>
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
                                                        <div className={`${style.info} d-flex gap-4`}>
                                                            <img src={item.details.mainImage.secure_url} alt="" className='' />
                                                            <Link to={`/cart/${item.details._id}`} className='fs-6'>{item.details.name}</Link>
                                                        </div>
                                                    </td>
                                                    <td className='text-center'>${item.details.finalPrice}</td>
                                                    <td className='text-center'>
                                                        <div className={`${style.test} d-flex justify-content-center align-items-center gap-2`}>
                                                            <div className={`${style.quantity}`}>
                                                                <Button onClick={() => decProduct(item.productId)} disabled={loading}>-</Button>
                                                                <span className='px-3'>{item.quantity}</span>
                                                                <Button onClick={() => incProduct(item.productId)} disabled={loading}>+</Button>
                                                            </div>
                                                            <Button className={`${style.remove}`} onClick={() => removeItem(item.productId)} disabled={loading}><i className="fa-solid fa-xmark"></i></Button>
                                                        </div>
                                                    </td>
                                                    <td className='text-center'>${item.details.finalPrice * item.quantity}</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </Table>
                                    <div className={`${style.shoping_btn} d-flex justify-content-between align-items-center`}>
                                        <Button onClick={() => navigat('/products')}>Continue Shopping</Button>
                                        <Button onClick={() => clearCart()} disabled={loading}>Clear Cart</Button>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={3} >
                                <div className={`${style.price}`}>
                                    <h4>Cart Totals</h4>
                                    <h5 className={`${style.border}`}>Subtotal: <span>${cart.reduce((acc, item) => acc + (item.details.finalPrice * item.quantity), 0)}</span></h5>
                                    <div className={`${style.topping} ${style.border}`}>
                                        <h4>Shipping</h4>
                                        <Form>
                                            <Form.Group className='d-flex gap-2 text-color' controlId='check'>
                                                <Form.Check type='checkbox'></Form.Check>
                                                <Form.Label className='d-flex justify-content-between w-100'>Free Delivery <span>$120</span></Form.Label>
                                            </Form.Group>
                                            <Form.Group className='d-flex gap-2 text-color' controlId='check'>
                                                <Form.Check type='checkbox'></Form.Check>
                                                <Form.Label className='d-flex justify-content-between w-100'>Flat Rate <span>$150</span></Form.Label>
                                            </Form.Group>
                                            <Form.Group className='d-flex gap-2 text-color' controlId='check'>
                                                <Form.Check type='checkbox'></Form.Check>
                                                <Form.Label className='d-flex justify-content-between w-100'>Local Area <span>$90</span></Form.Label>
                                            </Form.Group>
                                        </Form>
                                    </div>
                                    <h5>Total <span>${cart.reduce((acc, item) => acc + (item.details.finalPrice * item.quantity), 0)}</span></h5>
                                    <Button onClick={() => navigat('/order')}>Proceed to checkout</Button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>}
            <Newsletter/>
        </>
    )
}
