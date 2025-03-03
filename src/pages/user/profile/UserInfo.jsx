import React, { useContext, useState } from 'react'
import { UserContext } from '../../../components/user/context/UserContext'
import { Button, Container, Form } from 'react-bootstrap';
import { MdOutlineEmail } from "react-icons/md";
import { IoAddOutline } from "react-icons/io5";
import { MdOutlineSettings } from "react-icons/md";
import { LuShare2 } from "react-icons/lu";
import { MdCircle } from "react-icons/md";
import { FaAt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoIosEyeOff } from "react-icons/io";
import { IoIosEye } from "react-icons/io";
import { CiCalendarDate } from "react-icons/ci";
import userImage from '../../../assets/images/profile/userImage.jfif'
import { IoMdColorFilter } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Bounce, toast } from 'react-toastify';
import LoadingPage from '../../../components/user/loading/LoadingPage';


import style from './profile.module.css'

export default function UserInfo() {

    const { register, handleSubmit } = useForm();
    const { user, isLoading } = useContext(UserContext);
    const [showPassword, setShowPassword] = useState('password')
    const navigat = useNavigate();
    const [imageChange, setImageChange] = useState(false)
    const [image, setImage] = useState(userImage);
    const { setUser } = useContext(UserContext);
    const isPssword = () => {
        setShowPassword(showPassword === 'password' ? 'text' : 'password')
    }
    const [loading, setLoading] = useState(false)

    const updateImage = async (value) => {
        const token = localStorage.getItem('userToken')
        const formData = new FormData();
        formData.append('image', value.image[0])
        setLoading(true)
        try {
            const response = await axios.put(`https://ecommerce-node4.onrender.com/user/update-image`, formData,
                {
                    headers: {
                        Authorization: `Tariq__${token}`
                    }
                }
            )
            if (response.status === 200) {
                toast.success('the change image successy', {
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
            toast.error('Error :' + error, {
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
            setLoading(false)
        }
    }

    const handleImageChange = (e) => {
        setImageChange(true)
        const file = e.target.files[0]
        setImage(URL.createObjectURL(file))
    }

    const updatePassword = () => {
        localStorage.removeItem('userToken')
        setUser(null);
        navigat('/auth/sendcode')
    }

    if (isLoading) {
        return <LoadingPage />
    }

    return (
        <>
            <section className={`${style.userInfo}`}>
                <Container className='pt-3'>
                    <div className={`${style.info} d-flex justify-content-between align-items-center`}>
                        <div className="d-flex flex-column gap-3">
                            <div className={`${style.img} position-relative`}>
                                {user.image != null && !imageChange ? <img src={user.image.secure_url} alt="" className={`rounded-circle`} /> : <img src={image} alt="" className={`rounded-circle`} />}
                                <Form onSubmit={handleSubmit(updateImage)}>
                                    <Form.Group controlId='changeImage' onChange={handleImageChange}>
                                        <Form.Label><IoMdColorFilter /></Form.Label>
                                        <Form.Control type='file' {...register('image')} className='d-none'></Form.Control>
                                    </Form.Group>
                                    {imageChange ? <Button type='submit' className={`${style.save}`} disabled={loading}>{loading ? "Loading..." : 'Save'}</Button> : null}
                                </Form>
                            </div>
                            <div className="text">
                                <div className={`${style.name} d-flex gap-3 align-items-center`}>
                                    <h1 className='fs-3'>{user.userName}</h1>
                                    <div className="circle">
                                        {user.status == 'Active' ? <MdCircle className={`${style.statuss} rounded-circle ${style.green}`} />
                                            : <MdCircle className={`${style.statuss} rounded-circle ${style.red}`} />}
                                    </div>
                                </div>
                                <p><MdOutlineEmail /> {user.email}</p>
                            </div>
                        </div>
                        <div className={`${style.icons} d-flex gap-2 align-self-start`}>
                            <Button><IoAddOutline /></Button>
                            <Button><MdOutlineSettings /></Button>
                            <Button><LuShare2 /></Button>
                        </div>
                    </div>
                    <div className={`${style.details} d-flex flex-column gap-3`}>
                        <h3 className='fs-5'>Details :</h3>
                        <Form className='d-flex flex-column gap-3'>
                            <Form.Group controlId="formBasicEmail" className='d-flex align-items-center'>
                                <Form.Label>User Name :</Form.Label>
                                <Form.Control className='w-25' type="text" placeholder="" value={user.userName} disabled />
                                <div className={`${style.icon}`}><FaAt /></div>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail" className='d-flex align-items-center'>
                                <Form.Label>Email :</Form.Label>
                                <Form.Control className='w-25' type="email" placeholder="" value={user.email} disabled />
                                <div className={`${style.icon}`}><MdEmail /></div>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail" className='d-flex align-items-center'>
                                <Form.Label>Password :</Form.Label>
                                <Form.Control className='w-25' type={showPassword} placeholder="" value={user.password} disabled />
                                <div onClick={() => { isPssword() }} className={`${style.icon}`}>{showPassword === 'password' ? <IoIosEyeOff /> : <IoIosEye />}</div>
                            </Form.Group>
                            <Button className={`${style.update}`} onClick={() => { updatePassword() }}>Update Password</Button>
                        </Form>
                        <p className='d-flex gap-2 mt-4'><div><CiCalendarDate /></div> {user.createdAt.slice(0, 10)}</p>
                    </div>
                </Container>
            </section>
        </>
    )
}
