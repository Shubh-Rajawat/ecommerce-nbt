import React from 'react'
import BreadCrumb from '../common/BreadCrumb'

const Rewards = () => {
  return (
    <>
<BreadCrumb 

     page={ {
          title: "Rewards",
          path: "Home / Rewards",
          bg: "bg-[#F2F2F2]",
        } }
/>
     <div className="w-[100%] ss-container px-1 py-5 md:py-12 flex justify-center">
        <div className="w-full md:w-[60%] lg:w-[55%] xl:w-[44%] h-full bg-[#F2F2F2] px-5  md:px-12 py-10 rounded-3xl">
          <div
            className={`border  rounded-[45px]  bg-white shadow-lg relative overflow-hidden`}
          >
           
            <div className="bg-[#D63348] text-center h-[200px] grid place-content-center">
              <h1 className='text-[35px] ramto text-white'>Reward Points</h1>
              <p className='popins text-white'>As On 05  OCT 2023</p>
            </div>
            <div className='px-10 py-5 popins text-[#777777] '>

                <div className='flex justify-between pt-2 font-[600]'>
                <p>Previous Balance</p>
                <p className='text-[#09405E] font-semibold ramto'>6303 pts</p>
                </div>
                  <div className='flex justify-between pt-2 font-[600]'>
                <p>Earned this month</p>
                <p className='text-[#09405E] font-semibold ramto'>+462 pts</p>
                </div>
                  <div className='flex justify-between pt-2 font-[600]  border-b-[1px] border-[#777777]'>
                <p className='text-[#000] font-bold '>Total Balance</p>
                <p className='text-[#D63348] font-bold ramto'>6765 pts</p>
                </div>
                  <div className='flex justify-between pt-4 font-[600]'>
                <p>Points Expiring By This Month</p>
                <p className='ramto text-[#09405E]' >0pts</p>
                </div>
            </div>
          </div>
        
          {/* History Reward */}
          <div className="py-4">
           
            <h1 className='ramto text-[20px] py-2'>History</h1>
            <div className='w-full  h-full bg-white shadow-lg relative overflow-hidden py-7 px-5  md:px-7  rounded-3xl popins font-semibold'>
                <p >Reward points added for order <br />
                     #FDY-741503335- 7616966</p>
             <div className='flex justify-between text-[#777777] pt-3'>   <p>01 OCT 2023</p>
           <p className='text-[#D63348] font-bold ramto'>+65 pts</p></div>
           <p className='text-[#777777]'>Transaction ID: #102721302</p>
            </div>
       
          </div>


            <div className="py-4">
            <div className='w-full  h-full bg-white shadow-lg relative overflow-hidden py-7 px-5  md:px-7  rounded-3xl popins font-semibold'>
                <p >Reward points added for order <br />
                     #FDY-741503335- 7616966</p>
             <div className='flex justify-between text-[#777777] pt-3'>   <p>01 OCT 2023</p>
           <p className='text-[#09405E] font-bold ramto'>-20 pts</p></div>
           <p className='text-[#777777]'>Transaction ID: #102721302</p>
            </div>
       
          </div>
        </div>


      
       
      </div>
    </>
  )
}

export default Rewards