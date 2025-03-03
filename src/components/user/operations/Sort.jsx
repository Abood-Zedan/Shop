import axios from 'axios'
import React from 'react'
import { Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { Bounce, toast } from 'react-toastify'

export default function Sort({setData , setSort , getSort}) {

    const { register, handleSubmit } = useForm();

    const sortBy = async (value) => {
        try {
            const responce = (value.sort === 'default') ? await axios.get(`https://ecommerce-node4.onrender.com/products?limit=6`) :
                await axios.get(`https://ecommerce-node4.onrender.com/products?limit=6&sort=${value.sort}`)
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
                setSort(value.sort)
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
        }
    }

    return (
        <>
            <div>
                <Form onChange={handleSubmit(sortBy)}>
                    <Form.Group className='d-flex align-items-center justify-content-center'>
                        <Form.Label className='w-25'>Sort by:</Form.Label>
                        <Form.Select aria-label="Default select example" className='w-auto' value={getSort != null ? getSort : null} {...register('sort')}>
                            <option>default</option>
                            <option >price</option>
                            <option >-price</option>
                            <option >name</option>
                            <option >-name</option>
                            <option >discount</option>
                            <option >-discount</option>
                        </Form.Select>
                    </Form.Group>
                </Form>
            </div>
        </>
    )
}
