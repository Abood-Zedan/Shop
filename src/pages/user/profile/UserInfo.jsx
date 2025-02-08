import React, { useContext, useState } from 'react'
import { UserContext } from '../../../components/user/context/UserContext'
import { Button, Container, Form } from 'react-bootstrap';
import { MdOutlineEmail } from "react-icons/md";
import { IoAddOutline } from "react-icons/io5";
import { MdOutlineSettings } from "react-icons/md";
import { LuShare2 } from "react-icons/lu";
import { MdCircle } from "react-icons/md";

import style from './profile.module.css'
export default function UserInfo() {

    const { user, isLoading } = useContext(UserContext);

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <>
            <section className={`${style.userInfo}`}>
                <Container>
                    <div className={`d-flex justify-content-between align-items-center`}>
                        <div className="info">
                            <div className="img"></div>
                            <div className="text">
                                <div className={`${style.name} d-flex gap-3 align-items-center`}>
                                    <h1>{user.userName}</h1>
                                    <div className="circle">
                                        {user.status == 'Active' ? <MdCircle className={`${style.statuss} rounded-circle ${style.green}`} />
                                            : <MdCircle className={`${style.statuss} rounded-circle ${style.red}`} />}
                                    </div>
                                </div>
                                <p><MdOutlineEmail /> {user.email}</p>
                            </div>
                        </div>
                        <div className={`${style.icons} d-flex gap-2`}>
                            <Button><IoAddOutline /></Button>
                            <Button><MdOutlineSettings /></Button>
                            <Button><LuShare2 /></Button>
                        </div>
                    </div>
                    <hr/>
                    <div className={`${style.details}`}>
                        <h3 className='fs-5'>Details :</h3>
                        <br />
                        <Form className='d-flex flex-column gap-3'>
                            <Form.Group controlId="formBasicEmail" className='d-flex gap-2 align-items-center'>
                                <Form.Label>User Name :</Form.Label>
                                <Form.Control className='w-25' type="text" placeholder="" value={user.userName} disabled />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail" className='d-flex gap-2 align-items-center'>
                                <Form.Label>Email :</Form.Label>
                                <Form.Control className='w-25' type="email" placeholder="" value={user.email} disabled />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail" className='d-flex gap-2 align-items-center'>
                                <Form.Label>Email :</Form.Label>
                                <Form.Control className='w-25' type="password" placeholder="" value={user.password} disabled />
                            </Form.Group>
                        </Form>
                    </div>
                </Container>
            </section>
        </>
    )
}
