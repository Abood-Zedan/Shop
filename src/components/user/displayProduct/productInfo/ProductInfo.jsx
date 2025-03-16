import React, { useContext, useState } from 'react'
import HeadOfPage from '../../headOfPage/HeadOfPage'
import { Button, Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';
import { Bounce, toast } from 'react-toastify';
import style from './productInfo.module.css'
import { CartContext } from '../../context/CartContext';
import { preinit } from 'react-dom';
import Rating from '../../rating/Rating';


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import './styles.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function ProductInfo({ data, productId }) {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);


    const [countReviews, setCountReviews] = useState(data.product.reviews.length);
    const [loading, setLoading] = useState(false);
    const { cartCount, setCartCount } = useContext(CartContext);
    const addToCart = async () => {
        const token = localStorage.getItem('userToken');
        setLoading(true)
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
                setCartCount(cartCount + 1)
            }
        }
        catch (error) {
            toast.error("The item already exists", {
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

    return (
        <section className={`${style.product}`}>
            <HeadOfPage title='Shop Details' page='Shop Details' />
            <Container fluid className='px-5'>
                <Row className="mx-0 row-gap-5">
                    <Col lg={6} className="">
                        <Swiper
                            style={{
                                '--swiper-navigation-color': '#fff',
                                '--swiper-pagination-color': '#fff',
                            }}
                            spaceBetween={10}
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper2 mb-4"
                        >
                            <SwiperSlide className='d-flex justify-content-center align-items-center'>
                                <img src={data.product.mainImage.secure_url} className={`${style.img}`} />
                            </SwiperSlide>
                            {
                                data.product.subImages.map(image =>
                                    <SwiperSlide key={data.product._id} className='d-flex justify-content-center align-items-center'>
                                        <img src={image.secure_url} alt="" className={`${style.img}`} />
                                    </SwiperSlide>
                                )
                            }
                        </Swiper>
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            spaceBetween={10}
                            slidesPerView={4}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img src={data.product.mainImage.secure_url} className='w-100' />
                            </SwiperSlide>
                            {
                                data.product.subImages.map(image =>
                                    <SwiperSlide md={3} sm={6} key={data.product._id}>
                                        <img src={image.secure_url} alt="" className='w-100' />
                                    </SwiperSlide>
                                )
                            }
                        </Swiper>
                    </Col>
                    <Col lg={6} className="">
                        <div className="info-product d-flex flex-column gap-3">
                            {data.product.discount > 0 ? <span className={`${style.discount} main-color fw-bold`}><i className="fa-solid fa-tags"></i> SALE {data.product.discount}% OFF</span> : null}
                            <h1 className={`${style.main_title}`}>{data.product.name}</h1>
                            <div className="rating d-flex gap-1 align-items-center">
                                {<Rating data={data.avgRating} />}
                                <span className='text-color'>({countReviews} Reviews)</span>
                            </div>
                            <p className='text-color'>{data.product.description}</p>
                            <div className="price d-flex gap-2 align-items-center">
                                {data.product.discount > 0 ? <span className='fs-5 fw-bold text-color text-decoration-line-through'>${data.product.price}</span> : null}
                                <span className='fs-5 fw-bold fs-3'>${data.product.finalPrice}</span>
                            </div>
                            <div className={`${style.color} d-flex flex-column gap-2`}>
                                <span className='fs-4 fw-semibold'>Color</span>
                                <ul>
                                    <li>
                                        <input type="radio" name="color" id="black" value='black' className='d-none' />
                                        <label htmlFor="black"><span className={`${style.black}`}></span></label>
                                    </li>

                                    <li>
                                        <input type="radio" name="color" id="red" value='red' className='d-none' />
                                        <label htmlFor="red"><span className={`${style.red}`}></span></label>
                                    </li>

                                    <li>
                                        <input type="radio" name="color" id="green" value='green' className='d-none' />
                                        <label htmlFor="green"><span className={`${style.green}`}></span></label>
                                    </li>

                                    <li>
                                        <input type="radio" name="color" id="bule" value='blue' className='d-none' />
                                        <label htmlFor="bule"><span className={`${style.blue}`}></span></label>
                                    </li>
                                </ul>
                            </div>
                            <div className={`${style.size} d-flex flex-column gap-2`}>
                                <span className='fs-4 fw-semibold'>Size</span>
                                <ul>
                                    <li>
                                        <input type="radio" name="size" id="size1" value='Slim Fit' className='d-none' />
                                        <label htmlFor="size1">S</label>
                                    </li>

                                    <li>
                                        <input type="radio" name="size" id="size2" value='Slim Fit' className='d-none' />
                                        <label htmlFor="size2">M</label>
                                    </li>

                                    <li>
                                        <input type="radio" name="size" id="size3" value='Slim Fit' className='d-none' />
                                        <label htmlFor="size3">L</label>
                                    </li>

                                    <li>
                                        <input type="radio" name="size" id="size4" value='Slim Fit' className='d-none' />
                                        <label htmlFor="size4">XL</label>
                                    </li>
                                    <li>
                                        <input type="radio" name="size" id="size5" value='Slim Fit' className='d-none' />
                                        <label htmlFor="size5">2XL</label>
                                    </li>
                                </ul>
                            </div>
                            <div className={`${style.button} d-flex gap-3 align-items-center`}>
                                <Button className={`${style.btn_cart}`} onClick={() => addToCart()} disabled={loading}>{loading ? 'Loading...' : 'Add to Cart'}</Button>
                                <Button className={`${style.btn_wishlist}`}><i className="fa-regular fa-heart"></i></Button>
                            </div>
                            <div className={`${style.code} text-color`}>
                                <span>SKU : </span>
                                KE-91039
                            </div>
                            <div className={`${style.share} d-flex gap-2`}>
                                <span>Share : </span>
                                <div className="icon d-flex gap-2 align-items-center">
                                    <i className="fa-brands fa-facebook-f"></i>
                                    <i className="fa-brands fa-linkedin-in"></i>
                                    <i className="fa-brands fa-instagram"></i>
                                    <i className="fa-brands fa-twitter"></i>
                                </div>
                            </div>
                            <div className={`${style.order} d-flex gap-2`}>
                                <span><i className="fa-solid fa-truck-fast"></i> Free Shipping</span>
                                <span><i className="fa-solid fa-box-open"></i> Easy Returns</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
