import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Navigation } from 'swiper/modules';
import useFetch from '../../../hooks/useFetch';
import { GiFireflake } from "react-icons/gi";
import { Container } from 'react-bootstrap';
import style from './displayCategories.module.css'

export default function DisplayCategories() {

    const { data, isLoading } = useFetch(`https://ecommerce-node4.onrender.com/categories/active`)
    console.log(data)
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
                    <Swiper className='position-static'
                        modules={[Navigation]}
                        spaceBetween={0}
                        navigation
                        loop={true}
                        slidesPerView={3}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        {data.categories.map(category =>
                            <SwiperSlide key={category._id} className={`${style.swiper} d-flex align-items-center justify-content-center`} >
                                <div className={`${style.img}`}>
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
