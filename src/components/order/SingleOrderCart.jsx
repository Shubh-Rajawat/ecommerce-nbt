import React from 'react'
import reImg from '../../static/assets/reorder.png'

const SingleOrderCart = () => {
  return (
 <>

    <div className='grid grid-cols-5 bg-[#F2F2F2] ramto mt-3 rounded-xl px-2 md:px-12 py-7 gap-3'>
<div className='col-span-2 '>

    <img src={reImg} />
</div>
<div className='col-span-3 md:pt-3   '>
    <h2 className='text-[#09405E]'>Luger Burger</h2>
    <div className='flex justify-between pt-[3px] md:pt-3'>
        <p className='popins '>Small 5 pz.</p>
        <p className='text-[#D63348]'>4,90</p>
    </div>
     <div className='flex justify-between pt-[3px] md:pt-3'>
        <p className='popins '>Pomosoro</p>
        <p className='text-[#D63348]'>1,90</p>
    </div>
     <div className='flex justify-between pt-[3px] md:pt-3'>
        <p className=' popins text-[#09405E] font-semibold'>Qty: 1</p>
        <p className='text-[#D63348]'>$72.92</p>
    </div>
</div>

    </div>
 </>
  )
}

export default SingleOrderCart