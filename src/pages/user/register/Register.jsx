import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Bounce, toast } from 'react-toastify';
import registerImg from '../../../assets/images/istockphoto.webp'
import { Nav } from 'react-bootstrap';

export default function Register() {

  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const registerUser = async (value) => {
    setIsLoading(true);
    try {
      const response = await axios.post(`https://ecommerce-node4.onrender.com/auth/signup`, value)
      if (response.status === 201) {
        toast.info('please check your email', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
        navigate('/Login')
      }
      console.log(response)
    } catch (error) {
      if (error.response.status === 409) {
        toast.error('Email already in use', {
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
      } else (
        toast.error('Server error', {
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
      )
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <section className='register-page d-flex 100vh hight'>
        <dev className='img w-50 h-100'>
          <img src={registerImg} alt="" className='w-100 h-100' />
        </dev>
        <dev className='registerForm w-50 d-flex flex-column justify-content-center align-items-center'>
          <h1 className='fw-bold'>Shop</h1>
          <h2>Create an account</h2>
          <Form onSubmit={handleSubmit(registerUser)} className=' d-flex flex-column'>
            <FloatingLabel
              controlId="floatingInput"
              label="userName"
              className="mb-3">
              <Form.Control type="text" placeholder="" {...register('userName', { required: 'UserName is required' })} />
              {errors.userName ? <div className='text-danger'>{errors.userName.message}</div> : null}
            </FloatingLabel>

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
            <Button type='submit' disabled={isLoading}>
              {isLoading ? 'Loading...' : 'Register'}
            </Button>
          </Form>
          <div className='login-btn d-flex flex-column justify-content-center align-items-center'>
            <h3>Do you have an account?</h3>
            <Nav.Link className='btn' as={Link} to={'/login'}>Login</Nav.Link>
          </div>
        </dev>
      </section>
    </>
  )
}
