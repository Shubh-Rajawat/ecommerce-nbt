import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { userSignup } from "../redux/apiData/user";
import { Avatar, AvatarBadge, Spinner, Textarea } from "@chakra-ui/react";
import BreadCrumb from "../components/common/BreadCrumb";
import { IoIosCamera } from "react-icons/io";

const EditProfile = () => {
  const dispatch = useDispatch();
  const { userData, isLoading, isError } = useSelector( ( state ) => state.user );
  const [ value, setValue ] = useState( "+91" );
  const [ showPassword, setShowPassword ] = useState( false );
  const [ inputError, setInputError ] = useState( false );
  const [ user, setUser ] = useState( {
    name: "",
    email: "",
    country_code: value,
    phone_number: "",
    image: "",
    address: "",
  } );
  const handleSubmit = async ( e ) => {
    e.preventDefault();
    setInputError( false );
    if ( !user.email || !user.name || !user.phone_number || !user.password ) {
      setInputError( "All fields required" );
      return;
    }
    await dispatch( userSignup( user ) );
  };
  console.log( "error", isError );
  return (
    <>
      <BreadCrumb
        page={ {
          title: "Edit Profile",
          path: "Home / Edit Profile",
          bg: "bg-[#F2F2F2]",
        } }
      />
      <div className="w-[100%] ss-container px-1 py-5 md:py-12 flex justify-center">
        <section className="w-full md:w-[68%] lg:w-[65%] h-full bg-[#F2F2F2] px-5  md:px-7 pt-10 rounded-3xl">
          <div className=" grid place-content-center">
            <Avatar size='2xl' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' style={ {
              border: "5px solid #D63348"
            } }  >
              <AvatarBadge borderColor='blue.900' bg='blue.900' boxSize='45px' >
                <IoIosCamera size={ 28 } className="text-white" />
              </AvatarBadge >
            </Avatar>
          </div>
          <div className="w-full">
            <form onSubmit={ handleSubmit }>
              <div className="">
                <div className="first-group flex gap-2 flex-col  lg:flex-row  justify-between  align-middle my-4 ">
                  <div className="flex flex-col items-start flex-1 ">
                    <label htmlFor="name" className="text-[#09405E] ramto text-[14px]">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      onChange={ ( e ) => {
                        setUser( { ...user, name: e.target.value } );
                      } }
                      placeholder="Enter name"
                      autoComplete="off"
                      className=" bg-white ps-3 text-[16px] w-full focus-visible:outline-none text-[#000000] rounded-[20px] h-[50px] "
                    />
                  </div>
                  <div className="flex flex-col items-start flex-1 ">
                    <label htmlFor="email" className="text-[#09405E] ramto text-[14px]">
                      Email address
                    </label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      onChange={ ( e ) => {
                        setUser( { ...user, email: e.target.value } );
                      } }
                      placeholder="Enter email"
                      autoComplete="off"
                      className=" bg-white ps-3 text-[16px] w-full focus-visible:outline-none text-[#000000] rounded-[20px] h-[50px] "
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start mt-4">
                  <label htmlFor="phone" className="text-[#09405E] ramto text-[14px]">
                    Pnone Number
                  </label>
                  <div className="flex bg-white ps-4 text-[16px] w-full focus-visible:outline-none text-[#000000] rounded-[20px] h-[50px] items-center">
                    <PhoneInput
                      international
                      style={ { width: "40px", color: "black" } }
                      countryCallingCodeEditable={ false }
                      defaultCountry="IN"
                      value={ value }
                      onChange={ ( e ) => {
                        setValue( e );
                        setUser( {
                          ...user,
                          country_code: e,
                        } );
                        console.log( "shubh", e );
                      } }
                    />
                    <span className="text-sm text-[#000000]">{ value }</span>
                    <input
                      type="number"
                      name="phone"
                      id="phone"
                      value={ `${ user?.phone_number }` }
                      onChange={ ( e ) => {
                        console.log( "value", value );
                        setUser( {
                          ...user,
                          phone_number: `${ e.target.value }`,
                        } );
                      } }
                      placeholder="Enter phone number"
                      autoComplete="off"
                      className=" bg-white  ps-3 text-[16px] w-full focus-visible:outline-none text-[#000000] rounded-[20px] h-[50px] "
                    />
                  </div>
                </div>

                <div className="flex flex-col items-start mt-4 relative">
                  <label
                    htmlFor="address"
                    className="text-[#09405E] ramto text-[14px]">
                    Address
                  </label>
                  <textarea rows={ 5 }
                    onChange={ ( e ) => {
                      setUser( { ...user, address: e.target.value } )
                    } }
                    placeholder='Enter your complete address'
                    className="bg-white ps-3 py-1 text-[16px] resize-none  w-full focus-visible:outline-none text-[#000000] rounded-[20px]"
                  />
                </div>

                <div className="flex items-center justify-center my-4">
                  <button
                    disabled={ isLoading ? true : false }
                    className="ramto bg-[#D63348] text-white rounded-3xl py-2 px-8 text-sm md:text-lg align-middle"
                  >
                    <span>Save</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default EditProfile;