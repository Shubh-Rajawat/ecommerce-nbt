import React from 'react'
import BreadCrumb from '../components/common/BreadCrumb'
import { FaClipboardList, FaEdit, FaPhoneAlt } from 'react-icons/fa'
import { ImLocation } from 'react-icons/im'


const Profile = () => {
    return (
        <>
            <BreadCrumb page={ {
                title: "Profile",
                path: "Home / Profile",
                bg: "bg-[#F2F2F2]"
            } } />
            <div className='ss-container py-12 flex justify-center' >
                <div className="w-[60%] h-full bg-[#F2F2F2] p-10 rounded-3xl">
                    <div
                        className={ `border  rounded-[20px] p-8 bg-white shadow-lg relative overflow-hidden` }
                    >
                        <div
                            className=" absolute top-0 right-0 bg-[#D63348] p-4 rounded-es-xl cursor-pointer"

                        >
                            <FaEdit color="white" size={ 22 } className="" />
                        </div>
                        <div className="">
                            <span className=" ">
                                <img src={ `https://bit.ly/dan-abramov` } alt="" className="h-44 rounded-full border-4 border-[#D63348]" />
                            </span>
                            <div className="mt-3">
                                <h3 className="popins font-semibold text-[24px] my-3">
                                    John Doe
                                </h3>
                                <div className=" my-2 popins text-[18px] text-[#777777]">
                                    examplejohn@gmail.com
                                </div>
                                <div className=" flex items-center gap-4 my-6 popins text-[18px]">
                                    <div className="bg-[#D63348] text-white rounded-full">
                                        <FaPhoneAlt className=" text-[20px] m-2" size={ 22 } />
                                    </div>
                                    <span className="text-[#777777]">+234 9011039271</span>
                                </div>
                                <div className=" flex items-center gap-4 popins text-[18px] my-2 ">
                                    <div className="bg-[#D63348] text-white rounded-full">
                                        <ImLocation className="text-[20px] m-2" size={ 22 } />
                                    </div>
                                    <span className="text-[#777777]">
                                        No 15 Test Street London, UK, SE1 1AB
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white my-2 shadow-lg rounded-md text-[20px] py-2 px-1">
                        <div className="flex">
                            <FaClipboardList />
                            orders
                        </div>
                        <div className=""></div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Profile