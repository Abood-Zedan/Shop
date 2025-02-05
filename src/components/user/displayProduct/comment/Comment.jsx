import axios from 'axios';
import React from 'react'
import { Button, FloatingLabel, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import style from './comment.module.css'

export default function Comment({productId}) {

    const token = localStorage.getItem('userToken');
    const { register, handleSubmit } = useForm();

    const userReviwe = async (value) => {
        const responce = await axios.post(`localhost:3000/products/${productId}/review`,
            {
                comment: value.comment,
                rating: value.rating
            },
            {
                headers: {
                    Authorization: `Tariq__${token}`,
                }
            }
        )
        console.log(responce)
    }


    return (
        <>
            <section className={`${style.comment} mt-5`}>
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
                                <Form.Control className={`${style.form_control}`} type="text" placeholder="" {...register('comment')} />
                            </FloatingLabel>
                            <FloatingLabel className={`${style.form_floating} w-25`} controlId="floatingPassword" label="Rating">
                                <Form.Control className={`${style.form_control}`} type="text" placeholder="" {...register('rating')} />
                            </FloatingLabel>
                        </div>
                        <Button type='submit' className='mt-4'>Submit Review</Button>
                    </Form>
                </div>
            </section>
        </>
    )
}
