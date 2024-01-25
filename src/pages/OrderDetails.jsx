import React from 'react'
import BreadCrumb from '../components/common/BreadCrumb'
import SingleOrderCart from '../components/order/SingleOrderCart'

const OrderDetails = () => {
  return (
   <>

    <BreadCrumb    page={ {
          title: "Orders Detail",
          path: "Home / Your Orders_Detail",
          bg: "bg-[#F2F2F2]",
        } }/>

        <section className='grid grid-cols-1 lg:grid-cols-5 ss-container'>

  <div class="col-span-3 pt-4">  
    <SingleOrderCart />
    <SingleOrderCart />
    <SingleOrderCart />
  </div>
  <div class="lg:col-span-2  p-4 popins text-[#777777] pt-10 px-10 capitalize">  
  <div className='flex justify-between pt-2 '>
    <p>Sub Total</p>
    <p className='text-[#09405E] ramto'>21,80</p>
  </div>
  <div className='flex justify-between pt-2'>
    <p>Pick Up discount</p>
    <p className='text-[#09405E] ramto'>1,00</p>
  </div>
  <div className='flex justify-between pt-2'>
    <p>coupon discount</p>
    <p className='text-[#09405E] ramto'>1,00</p>
  </div>
    <div className='flex justify-between pt-2'>
    <p>points discount</p>
    <p className='text-[#09405E] ramto'>2,00</p>
  </div>
    <div className='flex justify-between pt-2'>
    <p className='ramto text-[#000]'>Total <span className='popins text-[#777777]'>(2 Item)</span></p>
    <p className='text-[#D63348] ramto'>25,80</p>
  </div>
<div className='text-center mt-3'>
  <button className='bg-[#D63348] rounded-3xl px-4 py-2 text-[#fff] ramto '>Re-Order</button>

</div>  </div>
        </section>
   </>
  )
}

export default OrderDetails