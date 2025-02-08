import axios from 'axios';
import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Bounce, toast } from 'react-toastify';
import { MdEmail } from "react-icons/md";
import { TfiBackLeft } from "react-icons/tfi";
import style from './forgotPassword.module.css'


export default function SendCode() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const sendCode = async (value) => {
        setIsLoading(true);
        try {
            const response = await axios.patch(`https://ecommerce-node4.onrender.com/auth/sendcode`, value)
            if (response.status === 200) {
                toast.info('Please check your email', {
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
                navigate('/auth/forgotPassword');
            }
        } catch (error) {
            toast.error(error, {
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
            setIsLoading(false);
        }
    }
    return (
        <>
            <section className='vh-100 d-flex justify-content-center align-items-center flex-column'>
                <Form className="form w-25" onSubmit={handleSubmit(sendCode)}>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className=""
                    >
                        <Form.Control type="email" placeholder="name@example.com" {...register('email', { required: 'Email is required' })} />
                        <MdEmail className={`${style.icon}`} />
                        {errors.email ? <div className='text-danger'>{errors.email.message}</div> : null}
                    </FloatingLabel>
                    <span>The code will be sent to the email you entered</span>
                    <Button type="submit" variant='dark' className="mt-3" disabled={isLoading}>{isLoading ? "loading..." : "Send Code"}</Button>
                </Form>
                <Button variant='danger' onClick={() => { navigate('/auth/login') }} className={`${style.back}`}>Back <TfiBackLeft /></Button>
            </section>
        </>
    )
}
