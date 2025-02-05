import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../../hooks/useFetch';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import HeadOfPage from '../../../components/user/headOfPage/HeadOfPage';
import LoadingProduct from '../../../components/user/loading/LoadingProduct';
import DisplayProducts from '../../../components/user/displayProducts/DisplayProducts';

export default function ProductsCategories() {

    const { categoryId } = useParams();
    const { data, error, isLoading } = useFetch(`https://ecommerce-node4.onrender.com/products/category/${categoryId}`);
    console.log(data);
    if (isLoading) {
        return <LoadingProduct/>
    }

    return (
        <>
            <DisplayProducts data={data} />
        </>
    )
}
