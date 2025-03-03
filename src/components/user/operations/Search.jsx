import axios from 'axios';
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { Bounce, toast } from 'react-toastify';

import style from './operations.module.css'

export default function Search({ setData ,setSearch , getSearch }) {

    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm()
    const search = async (value) => {
        setLoading(true);
        try {
            const responce = await axios.get(`https://ecommerce-node4.onrender.com/products?search=${value.key}&limit=6`)
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
                setSearch(value.key)
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
                <Form onSubmit={handleSubmit(search)} className='d-flex justify-content-end gap-3'>
                    <Form.Group>
                        <Form.Control type="text" placeholder="Search..." value={getSearch != null ? getSearch : null} {...register('key', { required: "this is not empty" })} />
                        {errors.key ? <p className='text-danger'>{errors.key.message}</p> : null}
                    </Form.Group>
                    <Button type='submit' disabled={loading} >Search</Button>
                </Form>
            </div>
        </>
    )
}
