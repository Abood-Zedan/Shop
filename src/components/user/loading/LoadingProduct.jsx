import React from 'react'
import style from './loading.module.css'

export default function LoadingProduct() {
    return (
        <>
            <div className={`${style.spiner_1} d-flex align-items-center} d-flex align-items-center`}>
                <span className={`${style.product_loader}`}></span>
            </div>
        </>
    )
}
