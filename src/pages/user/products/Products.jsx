import React from 'react'
import useFetch from '../../../hooks/useFetch'
import LoadingPage from '../../../components/user/loading/LoadingPage'
import DisplayProducts from '../../../components/user/displayProducts/DisplayProducts'
import Newsletter from '../../../components/user/newsletter/Newsletter'

export default function Products() {

    const { data, isLoading } = useFetch(`https://ecommerce-node4.onrender.com/products?limit=10`)
    if (isLoading) {
        return <LoadingPage />
    }

    return (
        <>
            <DisplayProducts data={data} />
            <Newsletter />
        </>
    )
}
