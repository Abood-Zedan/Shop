import axios from 'axios';
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { Bounce, toast } from 'react-toastify';

import style from './operations.module.css'


export default function Filter({ setData , setFilter , getFilter }) {
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm()
    const filter = async (value) => {
        setLoading(true)
        try {
            const responce = await axios.get(`https://ecommerce-node4.onrender.com/products?limit=6&finalPrice[gte]=${value.min}&finalPrice[lte]=${value.max}`)
            if (responce.status === 200) {
                toast.success('Done', {
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
                setData(responce.data)
                setFilter(value)
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

    return (
        <>
            <div className={`${style.operation}`}>
                <Form className='d-flex gap-2' onSubmit={handleSubmit(filter)}>
                    <Form.Control type="text"  value={getFilter != null ? getFilter.min : null} placeholder="Min price" className='w-25' {...register('min', { required: 'this is not empty' })} />
                    <Form.Control type="text" value={getFilter != null ? getFilter.max : null} placeholder="Max price" className='w-25' {...register('max', { required: 'this is not empty' })} />
                    <Button type='submit' disabled={loading}>{loading ? 'Loading...' : 'Go'}</Button>
                </Form>
            </div>
        </>
    )
}
