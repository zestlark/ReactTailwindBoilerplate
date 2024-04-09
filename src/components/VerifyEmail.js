import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faCheckCircle, } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";

export default function VerifyEmail() {

  const navigate = useNavigate();

  useEffect(() => {
    let formdata = sessionStorage.getItem('formData');
    formdata = JSON.parse(formdata)

    if (!formdata) {
      navigate('../signup');
    }
  }, [navigate]);

  let formdata = sessionStorage.getItem('formData');
  formdata = JSON.parse(formdata);

  if (!formdata) {
    return null;
  }

  const { email } = formdata;

  return (
    <>
      <Navbar />
      <div className='sm:w-[80%] p-2 mx-auto mt-10 mb-10 min-h-[70svh]' id="role">
        <h1 className='font-bold text-3xl mt-5 text-center'>
          Please verify your email...
        </h1>

        <div className='relative w-[80px] mt-10  mx-auto'>
          <FontAwesomeIcon className=' text-2xl absolute right-[-10px] top-0 border-2 rounded-full text-[#ea4b8b] bg-white -rotate-12 ' icon={faCheckCircle} />
          <FontAwesomeIcon className='text-gray-400 text-[80px]' icon={faEnvelope} />
        </div>

        <div className='text-center font-normal text-sm text-gray-500 px-3'>
          <p className='mt-3'>Please verify your email address. We've sent a confirmation email to:</p>
          <p className='my-5'><b className='font-bold text-black'>{email}</b></p>
          <p className='mt-3'>Click the confirmation link in that email to begin using Dribbble.</p>
          <p className='mt-5 lg:max-w-[50%] mx-auto'>
            Didn't receive the email? Check your Spam folder, it may have been caught by a filter. If
            you still don't see it, you can <a href='/' className='text-[#ea4c88] font-medium'>resend the confirmation email</a>.
          </p>
          <p className='mt-5  mx-auto'>
            Wrong email address? <a href='/' className='text-[#ea4c88] font-medium'>Change it.</a>
          </p>
        </div>
      </div>

      <Footer />
    </>
  )
}
