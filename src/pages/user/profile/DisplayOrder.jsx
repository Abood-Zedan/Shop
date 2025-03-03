import React, { useEffect, useState } from 'react'
import LoadingPage from '../../../components/user/loading/LoadingPage';
import axios from 'axios';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import style from './profile.module.css'

export default function DisplayOrder() {

    const { orderId } = useParams();
    const [isLoading, setISLoading] = useState(true);
    const [orders, setOrders] = useState();
    const getOrder = async () => {
        const token = localStorage.getItem('userToken')
        try {
            const rsponse = await axios.get(`https://ecommerce-node4.onrender.com/order`,
                {
                    headers: {
                        Authorization: `Tariq__${token}`
                    }
                }
            )
            setOrders(rsponse.data.orders)
        } catch (error) {
            console.log(error)
        } finally {
            setISLoading(false);
        }
    }
    useEffect(() => {
        getOrder()
    }, [])

    if (isLoading) {
        return <LoadingPage />
    }
    return (
        <>
            <section className={`${style.displayOrder}`}>
                <Container className='d-flex flex-column gap-5'>
                    <h2 className='mt-3'>Order details :</h2>
                    <Row className='row-gap-5 justify-content-around'>
                        {orders.map(order =>
                            order._id == orderId ?
                                order.products.map(product =>
                                    <Col md={4} key={product.productId._id}>
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" src={product.productId.mainImage.secure_url} />
                                            <Card.Body className='d-flex flex-column gap-3'>
                                                <Card.Title>{product.productId.name}</Card.Title>
                                                <Card.Text>
                                                    <span>Quantity : {product.quantity}</span>
                                                    <span>Total price : ${product.finalPrice}</span>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ) : null
                        )}
                    </Row>
                </Container>
            </section>
        </>
    )
}
