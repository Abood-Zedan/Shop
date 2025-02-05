import React from 'react'
import { Card, Row } from 'react-bootstrap'
import reviewImg from '../../../../assets/images/product/review.jpg'
import style from './reviews.module.css'

export default function Reviews({data}) {


    return (
        <>
            <section className={`${style.infoAndReviews} mt-5`}>
                <div className="container-fluid">
                    <Row className={`${style.row}`}>
                        <div className="col-4">
                            <div className={`${style.info}`}>
                                <h4>Additional Information:</h4>
                                <p className='fw-medium'>Stock: <span className='text-color'>{data.product.stock}</span></p>
                                <p className='fw-medium'>status: <span className='text-color' >{data.product.status}</span></p>
                                <p className='fw-medium'>updatedAt: <span className='text-color'>{data.product.updatedAt}</span></p>
                            </div>
                        </div>
                        <div className="col-7">
                            <div className={`${style.reviews}`}>
                                <span>Reviews</span>
                                <h4 className='mt-5'>Customer Reviews: ({data.product.reviews.length})</h4>
                                <div className="displayReviwes d-flex flex-column gap-3">
                                    {data.product.reviews.map(review =>
                                        <div className={`${style.review}`} key={review._id}>
                                            <Card className='px-4 pt-4'>
                                                <div className='d-flex gap-3 position-relative'>
                                                    <Card.Img variant="top" className={`${style.img}`} src={reviewImg} />
                                                    <div className="text text-capitalize">
                                                        <Card.Title>{review.createdBy.userName}</Card.Title>
                                                        <div className={`${style.rating}`}>
                                                            <i className="fa-solid fa-star"></i>
                                                            <i className="fa-solid fa-star"></i>
                                                            <i className="fa-solid fa-star"></i>
                                                            <i className="fa-solid fa-star"></i>
                                                            <i className="fa-solid fa-star"></i>
                                                            <span>{review.updatedAt}</span>
                                                        </div>
                                                    </div>
                                                    <a href="#" className={`${style.reply} text-decoration-none main-color`}><i className="fa-solid fa-reply-all"></i> Reply</a>
                                                </div>
                                                <Card.Body className={`${style.card_body}`}>
                                                    <Card.Text>
                                                        <p className='text-color'>{review.comment}</p>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </Row>
                </div>
            </section>
        </>
    )
}
