import React, { useState } from 'react';
import Image1 from '../assets/img1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";

export default function SignupPage() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        terms: false
    });

    const [formInputerror, setformInputerror] = useState({
        nameerror: false,
        usernameerror: false,
        emailerror: false,
        passworderror: false,
        termserror: false
    });

    const [formerror, setformerror] = useState('')

    const handleInputChange = (e) => {
        const { name, value, checked, type } = e.target;
        const inputValue = type === 'checkbox' ? checked : value;
        setFormData({ ...formData, [name]: inputValue });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name === '') {
            setformerror('Please enter your name')
            formInputerror.nameerror = true
            setformInputerror({ ...formInputerror })
            return
        }

        formInputerror.nameerror = false
        setformInputerror({ ...formInputerror })

        if (formData.username === '') {
            setformerror('Please enter your username')
            formInputerror.usernameerror = true
            setformInputerror({ ...formInputerror })
            return
        }

        formInputerror.usernameerror = false
        setformInputerror({ ...formInputerror })

        if (formData.email === '') {
            setformerror('Please enter your email')
            formInputerror.emailerror = true
            setformInputerror({ ...formInputerror })
            return
        }

        formInputerror.emailerror = false
        setformInputerror({ ...formInputerror })

        if (formData.password === '') {
            setformerror('Please enter your password')
            formInputerror.passworderror = true
            setformInputerror({ ...formInputerror })
            return
        }

        formInputerror.passworderror = false
        setformInputerror({ ...formInputerror })

        if (formData.password.length < 8) {
            setformerror('Password must be at least 8 characters')
            formInputerror.passworderror = true
            setformInputerror({ ...formInputerror })
            return
        }

        formInputerror.passworderror = false
        setformInputerror({ ...formInputerror })

        if (formData.terms === false) {
            setformerror('Please read our Terms and Conditions')
            return
        }

        setformerror('')

        sessionStorage.setItem('formData', JSON.stringify(formData));
        navigate('./getstarted')
    };



    return (
        <div className='md:flex items-stretch'>
            <div className='bg-[#f2d184] md:min-w-[25%] py-[60px]  overflow-hidden relative flex flex-col h-svh'>
                <div className='w-[80%] max-w-sm mx-auto text-[#866518]'>
                    <p className='text-[#a68239] logo-name'>dribble</p>
                    <h1 className='font-bold text-2xl mt-5'>
                        Discover the world's top
                        Designers & Creatives.</h1>
                </div>

                <div className='flex flex-col h-[90%] justify-between md:h-full '>
                    <img className='w-[100%] max-w-[400px] drop-shadow-grey h-[80%] object-cover mx-auto md:w-full ' src={Image1} alt='' />

                    <div className='w-[80%] max-w-sm mx-auto text-[#866518] flex items-center justify-between my-12'>
                        <p className='text-[#866518] text-md'>Art by <a className='underline' href='https:\\zestlark-0.web.app'>zestlark</a> </p>
                        <button onClick={() => { window.location.href = '#signup' }} className='flex justify-center items-center gap-2 md:hidden w-[100px] h-12 bg-[#866518] rounded-full'>
                            <span className='text-[#f2d184] font-light text-sm'>Signup</span>
                            <FontAwesomeIcon className='text-[20px] text-[#f2d184] font-light' icon={faArrowRight} />
                        </button>
                    </div>
                </div>
            </div>
            <div className='bg-white-100 p-6 pt-[40px] w-full pb-0' id='signup'>
                <p className='text-end text-sm font-light md:font-normal'>Already a member? <a href='signup' className='text-indigo-600'>Sign in</a></p>
                <div className='max-h-[100%]  overflow-y-scroll'>
                    <form className='block mx-auto  md:max-w-[80%] xl:max-w-[50%] bg-red-000 overflow-scroll' onSubmit={handleSubmit}>
                        <h1 className='font-bold text-2xl my-5 mb-7'>
                            Sign up to Dribbble</h1>

                        {formerror !== '' && <li className='text-red-500 text-sm mb-5'>{formerror}</li>}

                        <div className='flex gap-5'>
                            <span className='w-[50%]'>
                                <label className='block font-bold'>
                                    {formInputerror.nameerror ? <FontAwesomeIcon className='text-red-500 mr-1' icon={faTriangleExclamation} /> : ''}
                                    Name
                                </label>
                                <input name='name' value={formData.name} onChange={handleInputChange} type='text' className={`w-full text-sm font-light p-3 border-0 outline-0 mt-1 rounded-md bg-[#f3f3f3] ${formInputerror.nameerror ? 'bg-red-100 text-red-500' : ''}`} />
                            </span>
                            <span className='w-[50%]'>
                                <label className='block font-bold'>
                                    {formInputerror.usernameerror ? <FontAwesomeIcon className='text-red-500 mr-1' icon={faTriangleExclamation} /> : ''}
                                    Username</label>
                                <input name='username' value={formData.username} onChange={handleInputChange} type='text' className={`w-full text-sm font-light p-3 border-0 outline-0 mt-1 rounded-md bg-[#f3f3f3] ${formInputerror.usernameerror ? 'bg-red-100 text-red-500' : ''}`} />
                            </span>
                        </div>
                        <span className='block mt-6'>
                            <label className='block font-bold'>
                                {formInputerror.emailerror ? <FontAwesomeIcon className='text-red-500 mr-1' icon={faTriangleExclamation} /> : ''}
                                Email</label>
                            <input name='email' value={formData.email} onChange={handleInputChange} type='email' className={`w-full text-sm font-light p-3 border-0 outline-0 mt-1 rounded-md bg-[#f3f3f3] ${formInputerror.emailerror ? 'bg-red-100 text-red-500' : ''}`} />
                        </span>
                        <span className='block mt-6'>
                            <label className='block font-bold'>
                                {formInputerror.passworderror ? <FontAwesomeIcon className='text-red-500 mr-1' icon={faTriangleExclamation} /> : ''}
                                Password</label>
                            <input name='password' value={formData.password} onChange={handleInputChange} placeholder='6+ characters' type='password' className={`w-full text-sm font-light p-3 border-0 outline-0 mt-1 rounded-md bg-[#f3f3f3] ${formInputerror.passworderror ? 'bg-red-100 text-red-500' : ''}`} />
                        </span>
                        <span className='flex mt-6 align-top gap-5'>
                            <input name='terms' checked={formData.terms} onChange={handleInputChange} type='checkbox' className='w-7 border-0 outline-0 mt-1 rounded-md bg-[#f3f3f3]' />
                            <p className='text-sm text-gray-500'>Creating an account means you're okay with our <a href='terms' className='text-indigo-600'>Terms of
                                Service, Privacy Policy,</a> and our <a href='notificaton' className='text-indigo-600'>default Notification
                                    Settings.</a></p>
                        </span>
                        <button className='bg-[#ea4b8b] hover:bg-[#ea4b8b99] px-6 py-3 my-6 rounded-lg text-sm text-white transition-all w-full md:w-[200px]'>Create Account</button>
                        <p className='mb-5 sm:block md:hidden xl:block'>
                            <small className='text-gray-500'>This site is protected by reCAPTCHA and the Google <br />
                                <a href='terms' className='text-indigo-600'>Privacy Policy</a> and <a href='terms' className='text-indigo-600'>Terms of Service apply.</a></small>
                        </p>
                    </form>
                </div>
            </div>
        </div >
    )
}
