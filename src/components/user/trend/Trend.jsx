import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { GiFireflake } from 'react-icons/gi'
import useFetch from '../../../hooks/useFetch'
import LoadingPage from '../loading/LoadingPage';
import style from './trend.module.css'
import Rating from '../rating/Rating';
import { Link, useNavigate } from 'react-router-dom';
export default function Trend() {

    const { data, isLoading } = useFetch(`https://ecommerce-node4.onrender.com/products?limit=10`);

    if (isLoading) {
        return <LoadingPage />;
    }

    return (
        <>
            <section className='px-5 mb-5'>
                <Container fluid>
                    <div className={` d-flex flex-column justify-content-center gap-2 mb-5`}>
                        <span><GiFireflake /> <span className={`main-color fw-semibold`}>Trending Products</span></span>
                        <h3 className={`fs-2 fw-bold`}>What's Trending Now</h3>
                    </div>
                    <Row className='row-gap-3 justify-content-around'>
                        {
                            Array.from({ length: 4 }, (_, i) => (
                                <Col xl={3} lg={4} md={6} sm={12} key={data.products[i + 4]._id}>
                                    <div className={`${style.item} d-flex flex-column align-items-center`}>
                                        <div className={``}>
                                            <img src={data.products[i + 4].mainImage.secure_url} alt="" className='w-100' />
                                        </div>
                                        <div className='d-flex gap-2 pt-3'>
                                            <div className='d-flex flex-column gap-2'>
                                                <div className='d-flex gap-1'>
                                                    <Rating data={data.products[i].avgRating} />
                                                </div>
                                                <Link to={`/products/${data.products[i+4]._id}`} >{data.products[i + 4].name}</Link>
                                            </div>
                                            <p className='fw-semibold'>${data.products[i + 4].finalPrice}</p>
                                        </div>
                                    </div>
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </section>
        </>
    )
}
