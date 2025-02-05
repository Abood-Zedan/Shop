import React, { useContext } from 'react'
import HeadOfPage from '../headOfPage/HeadOfPage'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Bounce, toast } from 'react-toastify'
import axios from 'axios'
import style from './displayProducts.module.css'
import { CartContext } from '../context/CartContext'

export default function DisplayProducts({ data }) {

    const { cartCount, setCartCount } = useContext(CartContext);
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

    return (
        <>
            <section className={`${style.displayProducts}`}>
                <HeadOfPage title='Products whit Categories' page='Products' />
                <div className="row justify-content-center row-gap-5 m-0">
                    {data.products.map(product =>
                        <div className="col-4 d-flex justify-content-center h-100" key={product._id}>
                            <Card style={{ width: '23rem' }} className={`${style.card} border-0`}>
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
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}
