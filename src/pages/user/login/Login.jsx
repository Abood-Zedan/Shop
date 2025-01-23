import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Bounce, toast } from 'react-toastify';

export default function Login() {

  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const registerUser = async (value) => {
    setIsLoading(true);
    try {
      const response = await axios.post(`https://ecommerce-node4.onrender.com/auth/signin`, value)
      if (response.status === 200) {
        navigate('/')
      }
      console.log(response)
    } catch (error) {
        toast.error(`${error.response.data.message}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
          })
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>

      <Form onSubmit={handleSubmit(registerUser)}>
        <FloatingLabel
          controlId="floatingInput"
          label="email"
          className="mb-3">
          <Form.Control type="email" placeholder="" {...register('email', { required: 'Email is required' })} />
          {errors.email ? <div className='text-danger'>{errors.email.message}</div> : null}
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInput"
          label="password"
          className="mb-3">
          <Form.Control type="text" placeholder="" {...register('password', { required: 'Password is required' })} />
          {errors.password ? <div className='text-danger'>{errors.password.message}</div> : null}
        </FloatingLabel>
        <Button type='submit' variant="primary" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Login'}
        </Button>
      </Form>
    </>
  )
}
