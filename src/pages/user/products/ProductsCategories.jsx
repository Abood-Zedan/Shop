import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import useFetch from '../../../hooks/useFetch';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import HeadOfPage from '../../../components/user/headOfPage/HeadOfPage';
import LoadingProduct from '../../../components/user/loading/LoadingProduct';
import DisplayProducts from '../../../components/user/displayProducts/DisplayProducts';
import { Col, Row } from 'react-bootstrap';
import Rating from '../../../components/user/rating/Rating';
import axios from 'axios';
import { CartContext } from '../../../components/user/context/CartContext';
import { Bounce, toast } from 'react-toastify';

export default function ProductsCategories() {

    const { categoryId } = useParams();
    const { data, error, isLoading } = useFetch(`https://ecommerce-node4.onrender.com/products/category/${categoryId}`);
    if (isLoading) {
        return <LoadingProduct />
    }

    return (
        <>
            <DisplayProducts getData={data} />
        </>
    )
}
