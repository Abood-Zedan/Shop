import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { MdEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { IoMdCodeWorking } from "react-icons/io";
import { TfiBackLeft } from "react-icons/tfi";
import style from './forgotPassword.module.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Bounce, toast } from 'react-toastify';

export default function ForgotPassword() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState();
    const forgotPassword = async (value) => {
        setIsLoading(true);
        try {
            const response = await axios.patch(`https://ecommerce-node4.onrender.com/auth/forgotPassword`, value)
            if (response.status === 200) {
                toast.success('The password has been changed', {
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
                navigate('/auth/login');
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
        }finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            <section className='vh-100 d-flex justify-content-center align-items-center flex-column'>
                <Form className="form w-25 d-flex flex-column gap-3" onSubmit={handleSubmit(forgotPassword)}>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className=""
                    >
                        <Form.Control type="email" placeholder="name@example.com" {...register('email', { required: 'Email is required' })} />
                        <MdEmail className={`${style.icon}`} />
                        {errors.email ? <div className='text-danger'>{errors.email.message}</div> : null}
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="New Password"
                        className=""
                    >
                        <Form.Control type="text" placeholder="" {...register('password' ,{ required: 'Password is required' })} />
                        <TbLockPassword className={`${style.icon}`} />
                        {errors.password ? <div className='text-danger'>{errors.password.message}</div> : null}
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Code"
                        className=""
                    >
                        <Form.Control type="text" placeholder="" {...register('code', { required: 'Code is required' })} />
                        <IoMdCodeWorking className={`${style.icon}`} />
                        {errors.code ? <div className='text-danger'>{errors.code.message}</div> : null}
                    </FloatingLabel>
                    <Button type="submit" variant='dark' className="mt-3 w-50" disabled={isLoading}>{isLoading ? 'Loading...': 'Reset My Password'}</Button>
                </Form>
                <Button variant='danger' onClick={() => { navigate('/auth/sendCode') }} className={`${style.back}`}>Back <TfiBackLeft /></Button>
            </section>
        </>
    )
}
