import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useFetch from '../../../hooks/useFetch'
import { Link } from 'react-router-dom'
import Footer from '../../../components/user/footer/Footer'
import HeadOfPage from '../../../components/user/headOfPage/HeadOfPage'
import LoadingPage from '../../../components/user/loading/LoadingPage'
import { Col, Container, Row } from 'react-bootstrap'
import Newsletter from '../../../components/user/newsletter/Newsletter'

export default function Categories() {

    const { data, error, isLoading } = useFetch(`https://ecommerce-node4.onrender.com/categories/active`)

    if (isLoading) {
        return <LoadingPage/>
    }
    return (
        <>
            <section className='categories-page mb-5'>
                <HeadOfPage title='Shop Categories' page='Categories'/>
                <Container fluid>
                    <Row className="mt-5 row-gap-3 justify-content-around">
                        {data.categories.map(category =>
                            <Col lg={3} md={4} sm={6} key={category._id}>
                                <Link to={`${category._id}`} className='d-flex justify-content-center'>
                                    <img src={category.image.secure_url} alt="" className='w-50' />
                                </Link>
                            </Col>
                        )}
                    </Row>
                </Container>
            </section>
            <Newsletter/>
        </>
    )
}
