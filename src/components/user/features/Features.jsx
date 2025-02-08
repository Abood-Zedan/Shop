import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaTruckFast } from "react-icons/fa6";
import { FaMicrophone } from "react-icons/fa";
import { FaRegHandshake } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";

import style from './features.module.css'

export default function Features() {
    return (
        <>
            <section className={`my-5`}>
                <Container fluid className={`px-5`}>
                    <Row className={`${style.row}`}>
                        <Col md={3} className={`${style.border}`}>
                            <div className={`d-flex gap-2 px-3 align-items-center`}>
                                <div className={`${style.icon}`}>
                                    <FaTruckFast />
                                </div>
                                <div className={`${style.info}`}>
                                    <h3>Free Shipping</h3>
                                    <p>You get your items delivered without any extra cost.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} className={`${style.border}`}>
                            <div className={`d-flex gap-2 px-3 align-items-center`}>
                                <div className={`${style.icon}`}>
                                    <FaMicrophone />
                                </div>
                                <div className={`${style.info}`}>
                                    <h3>Free Shipping</h3>
                                    <p>You get your items delivered without any extra cost.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} className={`${style.border}`}>
                            <div className={`d-flex gap-2 px-3 align-items-center`}>
                                <div className={`${style.icon}`}>
                                    <FaRegHandshake />
                                </div>
                                <div className={`${style.info}`}>
                                    <h3>Free Shipping</h3>
                                    <p>You get your items delivered without any extra cost.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className={`d-flex gap-2 px-3 align-items-center`}>
                                <div className={`${style.icon}`}>
                                    <FaSackDollar />
                                </div>
                                <div className={`${style.info}`}>
                                    <h3>Free Shipping</h3>
                                    <p>You get your items delivered without any extra cost.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
