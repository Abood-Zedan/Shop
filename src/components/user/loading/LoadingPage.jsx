import React from 'react'
import style from './loading.module.css'

export default function LoadingPage() {
    return (
        <>
            <div className={`${style.spiner_2} vh-100 d-flex justify-content-center align-items-center`}>
                <span className={`${style.loader_page}`}></span>
            </div>
        </>
    )
}
