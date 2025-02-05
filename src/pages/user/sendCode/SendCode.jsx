import axios from 'axios';
import React from 'react'
import { Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';

export default function SendCode() {

    const {register, handleSubmit} = useForm();

    const sendCode = async (value) => {
        console.log(value)
        try {
            const response = await axios.patch(`https://ecommerce-node4.onrender.com/auth/sendcode`,value)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <section className='vh-100 d-flex justify-content-center align-items-center'>
                <Form className="form w-25" onSubmit={handleSubmit(sendCode)}>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className=""
                    >
                        <Form.Control type="email" placeholder="name@example.com" {...register('email')} />
                    </FloatingLabel>
                    <span>The code will be sent to the email you entered</span>
                    <Button type="submit" className="btn-danger mt-3">Send Code</Button>
                </Form>
            </section>
        </>
    )
}
