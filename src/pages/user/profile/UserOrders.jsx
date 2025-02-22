import React, { useEffect, useState } from 'react'
import { CgSandClock } from "react-icons/cg";
import { FaTruckFast } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";

import { Button, Col, Container, Row } from 'react-bootstrap'
import axios from 'axios'
import style from './Profile.module.css'
import LoadingPage from '../../../components/user/loading/LoadingPage';
import { useNavigate } from 'react-router-dom';
import { Bounce, toast } from 'react-toastify';

export default function UserOrders() {

  const [isLoading, setISLoading] = useState(true);
  const [orders, setOrders] = useState();
  let count = 1;
  const navigat = useNavigate();
  const token = localStorage.getItem('userToken')
  const getOrder = async () => {
    try {
      const rsponse = await axios.get(`https://ecommerce-node4.onrender.com/order`,
        {
          headers: {
            Authorization: `Tariq__${token}`
          }
        }
      )
      setOrders(rsponse.data.orders)
    } catch (error) {
      console.log(error)
    } finally {
      setISLoading(false);
    }
  }

  const cancelOrder = async (orderId) => {
    try {
      const response = await axios.patch(`https://ecommerce-node4.onrender.com/order/cancel/${orderId}`,
        null,
        {
          headers: {
            Authorization: `Tariq__${token}`
          }
        }
      )
      if (response.status == 200) {
        toast.success('cancelled done', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getOrder()
  }, [])

  if (isLoading) {
    return <LoadingPage />
  }

  return (
    <>
      <section className={`${style.orders}`}>
        <Container fluid className='d-flex flex-column gap-3 mt-3'>
          <h2>Your Orders :</h2>
          <Row className='row-gap-5'>
            {
              orders.map(order =>
                <Col md={6} key={order._id}>
                  <div className={`${style.order}`}>
                    <span className='d-flex align-items-center justify-content-between'>Order Number : <span className='p-0'>{count++}</span></span>
                    <h3 className='fs-4'>Location : {order.address}</h3>
                    <h4 className='fs-5'>Phone : {order.phoneNumber}</h4>
                    <h5>Total : ${order.finalPrice}</h5>
                    <p className='m-0'>Date : {order.createdAt}</p>
                    {order.status == 'pending' ? <div className='d-flex align-items-center justify-content-between'>Order status : <span><CgSandClock /></span></div> :
                      order.status == 'deliverd' ? <div className='d-flex align-items-center justify-content-between'>Order status : <span><FaTruckFast /></span></div> :
                        <div className='d-flex align-items-center justify-content-between'>Order status : <span><MdCancel /></span></div>}
                    <div className={`${style.button} d-flex justify-content-between align-items-center`}>
                      <Button onClick={() => navigat(`/profile/displayOrder/${order._id}`)} disabled={order.status == 'cancelled'}>Details</Button>
                      <Button onClick={() => cancelOrder(order._id)} disabled={order.status != 'pending'}>Cancel</Button>
                    </div>
                  </div>
                </Col>
              )
            }
          </Row>
        </Container>
      </section>
    </>
  )
}
