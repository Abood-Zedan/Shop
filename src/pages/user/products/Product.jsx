import React, { useEffect, useState } from 'react'
import useFetch from '../../../hooks/useFetch'
import { useParams } from 'react-router-dom'
import LoadingPage from '../../../components/user/loading/LoadingPage';
import { Button, Card, FloatingLabel, Form } from 'react-bootstrap';
import axios from 'axios';
import HeadOfPage from '../../../components/user/headOfPage/HeadOfPage';
import reviewImg from '../../../assets/images/product/review.jpg'
import { useForm } from 'react-hook-form';
import { Bounce, toast } from 'react-toastify';
import ProductInfo from '../../../components/user/displayProduct/productInfo/ProductInfo';
import Reviews from '../../../components/user/displayProduct/reviews/Reviews';
import Comment from '../../../components/user/displayProduct/comment/Comment';

export default function Product() {

    const { productId } = useParams();
    const { data, isLoading } = useFetch(`https://ecommerce-node4.onrender.com/products/${productId}`)

    if (isLoading) {
        return <LoadingPage />
    }

    return (
        <>
            <ProductInfo data={data} productId={productId}/>
            <Reviews data={data}/>
            <Comment productId={productId}/>
        </>
    )
}
