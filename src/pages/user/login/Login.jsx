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
import style from './login.module.css'

export default function Login() {

  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const loginUser = async (value) => {
    setIsLoading(true);
    try {
      const response = await axios.post(`https://ecommerce-node4.onrender.com/auth/signin`, value)
      if (response.status === 200) {
        toast.success('You have successfully logged in', {
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
        localStorage.setItem('userToken', response.data.token);
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
      <section className={`${style.login_page} d-flex vh-100`}>
        <div className={`${style.loginForm} w-50 d-flex flex-column justify-content-center align-items-center`}>
          <h1 className='fw-bold'>Zedan-Shop</h1>
          <h2 className='text-center'>Login</h2>
          <Form onSubmit={handleSubmit(loginUser)} className='d-flex flex-column'>
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
          <div className={`${style.forgot_password}`}>
            <Link to={'/auth/sendCode'}>Forgot Password?</Link>
          </div>
          <div className={`${style.login_btn} d-flex flex-column justify-content-center align-items-center`}>
            <h3>Do you have an account?</h3>
            <Nav.Link className={`${style.btn}`} as={Link} to={'/auth/register'}>Register</Nav.Link>
          </div>
        </div>
        <div className='w-50 h-100'>
          <img src={registerImg} alt="" className='w-100 h-100' />
        </div>
      </section>
    </>
  )
}
