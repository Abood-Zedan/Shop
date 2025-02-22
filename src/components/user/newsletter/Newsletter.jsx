import React from 'react'
import mainImg from '../../../assets/images/newsletter/newsletter.png'
import star from '../../../assets/images/newsletter/shape.png'

import style from './newsletter.module.css'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
export default function Newsletter() {
    return (
        <>
            <section className={`${style.newsletter} my-5`}>
                <Container fluid className='px-5'>
                    <Row className={`${style.item}`}>
                        <Col md={6} className={`${style.text}`}>
                            <span className='fs-5'>Our Newsletter</span>
                            <h2>Get weekly update. Sign up and get up to <span>20% off</span> your first purchase</h2>
                            <Form>
                                <Form.Group className={`${style.form}`}>
                                    <Form.Control type="email" placeholder="Enter your email" />
                                    <Button type="submit">Subscribe</Button>
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col md={6} className={`${style.img} d-flex justify-content-end position-relative`}>
                            <img src={mainImg} alt="" className={`${style.mainImg}`} />
                            <img src={star} alt="" className={`${style.star}`} />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
