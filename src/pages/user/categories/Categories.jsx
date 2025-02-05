import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useFetch from '../../../hooks/useFetch'
import { Link } from 'react-router-dom'
import Footer from '../../../components/user/footer/Footer'
import HeadOfPage from '../../../components/user/headOfPage/HeadOfPage'
import LoadingPage from '../../../components/user/loading/LoadingPage'

export default function Categories() {

    const { data, error, isLoading } = useFetch(`https://ecommerce-node4.onrender.com/categories/active`)

    if (isLoading) {
        return <LoadingPage/>
    }
    return (
        <>
            <section className='categories-page'>
                <HeadOfPage title='Shop Categories' page='Categories'/>
                <div className="container-fluid">
                    <div className="row mt-5">
                        {data.categories.map(category =>
                            <div className="col-3" key={category._id}>
                                <Link to={`${category._id}`} className='d-flex justify-content-center'>
                                    <img src={category.image.secure_url} alt="" className='w-50' />
                                </Link>
                            </div>
                        )}
                    </div>
                </div>s
            </section>
        </>
    )
}
