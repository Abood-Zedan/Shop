import React, { useContext, useState } from 'react'
import { Button, Card, Col, Container, Nav, Row } from 'react-bootstrap'
import { GiFireflake } from "react-icons/gi";
import style from './displayProductsToHome.module.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Bounce, toast } from 'react-toastify';
import { CartContext } from '../context/CartContext';
import useFetch from '../../../hooks/useFetch';
import LoadingPage from '../loading/LoadingPage';

export default function DisplayProductsToHome() {

    const { cartCount, setCartCount } = useContext(CartContext);

    const { data, isLoading } = useFetch(`https://ecommerce-node4.onrender.com/products?limit=8`)

    const addToCart = async (productId) => {
        const token = localStorage.getItem('userToken');
        try {
            const responce = await axios.post(`https://ecommerce-node4.onrender.com/cart`,
                {
                    productId: productId,
                },
                {
                    headers: {
                        Authorization: `Tariq__${token}`,
                    }
                }
            )
            if (responce.status === 201) {
                toast.success('Added successfully', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                });
                setCartCount(cartCount + 1);
            }
        }
        catch (error) {
            toast.error(error, {
                position: "top-right",
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

    const [isActive1, setIsActive1] = useState(`${style.active}`)
    const [isActive2, setIsActive2] = useState(``)
    const [isActive3, setIsActive3] = useState(``)

    const bestSellers = () => {
        setIsActive1(`${style.active}`)
        setIsActive2(``)
        setIsActive3(``)
    }
    const newProducts = () => {
        setIsActive1(``)
        setIsActive2(`${style.active}`)
        setIsActive3(``)
    }
    const saleProducts = () => {
        setIsActive1(``)
        setIsActive2(``)
        setIsActive3(`${style.active}`)
    }

    if (isLoading) {
        return <LoadingPage />
    }
    return (
        <>
            <section className={`my-5`}>
                <Container fluid className={`${style.displayProducts} px-5`}>
                    <div className={`d-flex justify-content-between`}>
                        <div className={`${style.text} d-flex flex-column justify-content-center gap-2 mb-5`}>
                            <span><GiFireflake /> <span className={`main-color fw-semibold`}>Feature Products</span></span>
                            <h3 className={`fs-2 fw-bold`}>Our Features Collection</h3>
                        </div>
                        <div className="order">
                            <Nav className={`${style.nav}`}>
                                <Nav.Item>
                                    <Button onClick={() => bestSellers()} className={isActive1}>Best Sellers</Button>
                                </Nav.Item>
                                <Nav.Item>
                                    <Button onClick={() => newProducts()} className={isActive2}>New Products</Button>
                                </Nav.Item>
                                <Nav.Item>
                                    <Button onClick={() => saleProducts()} className={isActive3} >Sale Products</Button>
                                </Nav.Item>
                            </Nav>
                        </div>
                    </div>
                    <Row className='justify-content-evenly'>
                        {data.products.map(product =>
                            <Col md={3} className="d-flex justify-content-center h-100" key={product._id}>
                                <Card style={{ width: '21rem' }} className={`${style.card} border-0`}>
                                    <div className={`${style.img} d-flex flex-direction-column align-items-center flex-column`}>
                                        <Card.Img variant="top" src={product.mainImage.secure_url} />
                                        <div onClick={() => addToCart(product._id)} className={`${style.addCart} d-flex flex-direction-column align-items-center flex-column gap-1`}>
                                            <i className="fa-solid fa-basket-shopping"></i>
                                            <span>add to cart</span>
                                        </div>
                                        <div className={`${style.wishlist}`}>
                                            <i className="fa-solid fa-heart"></i>
                                        </div>
                                    </div>
                                    <Card.Body className={`${style.card_body} d-flex`}>
                                        <div className={`${style.text}`}>
                                            <Card.Text className='d-flex gap-1 m-0'>
                                                <div className="rating">
                                                    <i className={`fa-solid fa-star ${style.star}`}></i>
                                                    <i className={`fa-solid fa-star ${style.star}`}></i>
                                                    <i className={`fa-solid fa-star ${style.star}`}></i>
                                                    <i className={`fa-solid fa-star ${style.star}`}></i>
                                                    <i className={`fa-solid fa-star ${style.star}`}></i>
                                                </div>
                                                <p className='text-color'>(65)</p>
                                            </Card.Text>
                                            <Card.Title><Link to={`/products/${product._id}`} className={`${style.name} fs-6 text-decoration-none`}>{product.name}</Link></Card.Title>
                                        </div>
                                        <div className={`${style.price} d-flex flex-column gap-1`}>
                                            {product.discount > 0 ? <span className='price-befDiscount text-decoration-line-through text-color'>${product.price}</span> : null}
                                            <span className={`${style.price_aftDiscount}`}>${product.finalPrice}</span>
                                        </div>
                                    </Card.Body>
                                    {product.discount > 0 ? <div className={`${style.discount}`}>{product.discount}% OFF</div> : null}
                                </Card>
                            </Col>
                        )}
                    </Row>
                </Container>
            </section>
        </>
    )
}
