import axios from 'axios'
import React, { useEffect, useState } from 'react'
import LoadingPage from '../../../components/user/loading/LoadingPage';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import style from './cart.module.css'
import { useForm } from 'react-hook-form';
import { Bounce, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
export default function Order() {

    const [cart, setCart] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const token = localStorage.getItem('userToken');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
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

    const { register, handleSubmit, formState: { errors } } = useForm();

    const addOrder = async (value) => {
        const token = localStorage.getItem('userToken')
        setLoading(true)
        try {
            const response = await axios.post(`https://ecommerce-node4.onrender.com/order`, value,
                {
                    headers: {
                        Authorization: `Tariq__${token}`
                    }
                }
            )
            if(response.status === 201){
                toast.success('The Order has been added', {
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
                    navigate('/profile/orders')
            }
        } catch (error) {
            toast.error('Error'+ error, {
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
        }finally {
            setLoading(false)
        }
    }

    if (isLoading) {
        return <LoadingPage />
    }

    return (
        <>
            <section className={`${style.order} my-5`}>
                <Container fluid className='px-5'>
                    <h2 className='my-5 text-center'>Your Order</h2>
                    <Row className={`justify-content-between row-gap-3`}>
                        {cart.map(item =>
                            <Col md={4} key={item.details._id} className='d-flex gap-3 justify-content-center'>
                                <img src={item.details.mainImage.secure_url} alt="" className='border' width={150} />
                                <div className='fw-semibold'>
                                    <p>Price: ${item.details.finalPrice}</p>
                                    <p>Quantity: {item.quantity}</p>
                                </div>
                            </Col>
                        )}
                    </Row>
                    <h3 className={`my-5 ${style.border}`}>Total Price: ${cart.reduce((total, item) => total + (item.details.finalPrice * item.quantity), 0)}</h3>
                    <h3>Added Order:</h3>
                    <Form className='w-25 mx-auto' onSubmit={handleSubmit(addOrder)}>
                        <Form.Group controlId="" className='mb-3'>
                            <Form.Label>Coupon</Form.Label>
                            <Form.Control type="text" placeholder="" {...register('couponName')} />
                            {errors.couponName ? <div className='text-danger'>{errors.couponName.message}</div> : null}
                        </Form.Group>
                        <Form.Group controlId="" className='mb-3'>
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" placeholder="" {...register('address', { required: 'Address is Required' })} />
                            {errors.address ? <div className='text-danger'>{errors.address.message}</div> : null}
                        </Form.Group>
                        <Form.Group controlId="" className='mb-3'>
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="text" placeholder="" {...register('phone', { required: ' Phone is Required' })} />
                            {errors.phone ? <div className='text-danger'>{errors.phone.message}</div> : null}
                        </Form.Group>
                        <Button type='submit' disabled={loading}>{loading? 'Loading...': 'Place Order'}</Button>
                    </Form>
                </Container>
            </section>
        </>
    )
}
