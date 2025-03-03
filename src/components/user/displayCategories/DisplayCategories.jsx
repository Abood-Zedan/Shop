import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Navigation, Pagination } from 'swiper/modules';
import useFetch from '../../../hooks/useFetch';
import { GiFireflake } from "react-icons/gi";
import { Container } from 'react-bootstrap';
import style from './displayCategories.module.css'
import { useNavigate } from 'react-router-dom';

export default function DisplayCategories() {

    const navigate = useNavigate();
    const { data, isLoading } = useFetch(`https://ecommerce-node4.onrender.com/categories/active`)
    if (isLoading) {
        return <h2>loading...</h2>
    }
    return (
        <>
            <section className='mt-5'>
                <Container fluid className={`px-5 position-relative`}>
                    <div className={`${style.text} mb-5 d-flex flex-column gap-3`}>
                        <span><GiFireflake /> <span>Categories</span></span>
                        <h2>Browse Top Category</h2>
                    </div>
                    <Swiper
                        className="position-static"
                        modules={[Navigation, Pagination]}
                        spaceBetween={50}
                        navigation
                        loop={true}
                        slidesPerView={1}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                        }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        {data.categories.map(category =>
                            <SwiperSlide key={category._id} className={`${style.swiper} d-flex align-items-center justify-content-center`} >
                                <div onClick={() => { navigate(`/categories/${category._id}`) }} className={`${style.img}`}>
                                    <img src={category.image.secure_url} alt="" className='w-75' />
                                    <h3>{category.name}</h3>
                                </div>
                            </SwiperSlide>
                        )}
                    </Swiper>
                </Container>
            </section>
        </>
    )
}
