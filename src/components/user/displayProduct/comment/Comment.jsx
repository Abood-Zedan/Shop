import axios from 'axios';
import React, { useState } from 'react'
import { Button, FloatingLabel, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import style from './comment.module.css'
import { Bounce, toast } from 'react-toastify';

export default function Comment({ productId }) {

    const token = localStorage.getItem('userToken');
    const { register, handleSubmit, formState: {errors} } = useForm();
    const [loading,setLoading] = useState(false);

    const userReviwe = async (value) => {
        setLoading(true)
        try {
            const responce = await axios.post(`https://ecommerce-node4.onrender.com/products/${productId}/review`, value,
                {
                    headers: {
                        Authorization: `Tariq__${token}`,
                    }
                }
            )
            if (responce.status === 201) {
                toast.success('Commented successfully', {
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
            }
        } catch (error) {
            toast.error('You cannot comment more than once', {
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
            setLoading(false);
        }
    }


    return (
        <>
            <section className={`${style.comment} my-5`}>
                <div className={`${style.form}`}>
                    <h4 className='mb-3'>Write Review</h4>
                    <Form onSubmit={handleSubmit(userReviwe)}>
                        <div className="info d-flex gap-4">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="User Name"
                                className={`${style.form_floating} mb-3`}
                            >
                                <Form.Control className={`${style.form_control}`} type="text" placeholder="" />
                            </FloatingLabel>
                            <FloatingLabel className={`${style.form_floating}`} controlId="floatingPassword" label="Email">
                                <Form.Control className={`${style.form_control}`} type="email" placeholder="" />
                            </FloatingLabel>
                        </div>
                        <div className="text d-flex gap-4">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Comment"
                                className={`${style.form_floating} mb-3 w-75`}
                            >
                                <Form.Control className={`${style.form_control}`} type="text" placeholder="" {...register('comment', {required: 'Comment is Required'})} />
                                {errors.comment? <div className='text-danger'>{errors.comment.message}</div> : null}
                            </FloatingLabel>
                            <FloatingLabel className={`${style.form_floating} w-25`} controlId="floatingPassword" label="Rating">
                                <Form.Control className={`${style.form_control}`} type="text" placeholder="" {...register('rating' ,{required: 'Rating is Required'})} />
                                {errors.rating? <div className='text-danger'>{errors.rating.message}</div> : null}
                            </FloatingLabel>
                        </div>
                        <Button type='submit' className='mt-4' disabled={loading}>{loading ? 'Loading...' : 'Submit Review'}</Button>
                    </Form>
                </div>
            </section>
        </>
    )
}
