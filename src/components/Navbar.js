import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBriefcase, faCircleXmark, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";

import MenuBar from '../assets/icons/menubar.png'

export default function Navbar() {

    const navigate = useNavigate();

    const [userexist, setuserexist] = useState(false)
    const [navmenu, setnavmenu] = useState(false)

    let formdata2 = sessionStorage.getItem('formData2');
    formdata2 = JSON.parse(formdata2)

    let formdata = sessionStorage.getItem('formData');
    formdata = JSON.parse(formdata)

    const { avatar } = formdata2 || {}
    const { name, email } = formdata || {}

    useEffect(() => {
        if (avatar && name && email) {
            setuserexist(true)
        } else {
            setuserexist(false)
        }
    }, [avatar, name, email])


    const goto = (url) => {
        navigate(url)
    }

    const NotificatonAndAvatar = ({ className }) => {
        return (
            <span className={`${className}`}>
                <span className='flex gap-5 md:block md:gap-0 p-2 px-3 md:p-0 rounded-md items-center border-2 w-full md:w-auto md:border-0'>
                    <div className='relative h-7 w-7 mt-1 md:mt-0'>
                        <FontAwesomeIcon className='text-gray-400 absolute right-0 bottom-0 border-2 rounded-full bg-white' icon={faCircleXmark} />
                        <FontAwesomeIcon className='text-gray-400 text-xl' icon={faBriefcase} />
                    </div>
                    <p className='text-md text-gray-500 md:hidden'>Notification</p>
                </span>

                {userexist ?
                    <div className='flex md:block gap-5 md:gap-0 p-2 px-3 md:p-0 rounded-md items-center border-2 w-full md:w-auto mt-2 md:mt-0 md:border-0'>
                        <img src={avatar} className='w-7 h-7 md:w-10 md:h-10 object-cover rounded-full' alt='' />
                        <p className='text-md text-gray-500 md:hidden'>
                            <mdall className='text-gray-700 font-bold capitalize'>{name}</mdall><br />
                            <mdall>{email}</mdall>
                        </p>
                    </div>
                    : ''}

            </span>
        )
    }

    return (
        <div className='flex items-center justify-between w-[100%] px-3 md:px-10  mx-auto  md:min-w-[25%] py-[20px] border-b-2'>
            <div className='flex flex-row-reverse md:flex-row justify-end md:justify-start items-center gap-3 md:gap-10'>
                <span className='bg-transparent w-auto h-7 grid place-content-center rounded-md'><p className='text-black p-2 md:p-0 logo-name'>dribbble</p></span>
            </div>


            <div className='md:hidden' onClick={() => { setnavmenu(!navmenu) }}>
                {!navmenu ? <img src={MenuBar} className='opacity-50 w-8 h-8 object-cover rounded-full' alt='' /> : ''}
                {navmenu ? <FontAwesomeIcon className='text-gray-500  w-8 h-7' icon={faXmark} /> : ''}
            </div>


            <span className={`${navmenu ? 'fixed' : 'hidden'} max-h-[90vh] overflow-scroll border-2 md:border-0 rounded-md md:rounded-none z-10 top-20 left-0 py-5 md:py-0 flex-col md:flex-row md:static md:flex w-full justify-between bg-white`}>
                {userexist ?
                    <span className='mx-5 mb-2 md:mt-0 md:mx-0 flex-wrap md:flex-nowrap flex items-center gap-5 md:hidden'>
                        <NotificatonAndAvatar className="w-full flex-col-reverse md:w-auto items-center flex  gap-2" />
                    </span>
                    : ''}
                <div className='flex flex-col md:flex-row'>
                    <ul className='mx-5 flex-col gap-2 md:flex-row md:g-0 md:mx-0 flex text-md md:gap-7 md:ml-10 items-center text-gray-500 font-medium'>
                        <li className='border-2 w-full p-3 rounded-md md:w-auto md:p-0 md:border-0'><a href='/'>Inspiation</a></li>
                        <li className='border-2 w-full p-3 rounded-md md:w-auto md:p-0 md:border-0'><a href='/'>Find Work</a></li>
                        <li className='border-2 w-full p-3 rounded-md md:w-auto md:p-0 md:border-0'><a href='/'>Learn Design</a></li>
                        <li className='border-2 w-full p-3 rounded-md md:w-auto md:p-0 md:border-0'><a href='/'>Go Pro</a></li>
                        <li className='border-2 w-full p-3 rounded-md md:w-auto md:p-0 md:border-0'><a href='/'>Hire Designers</a></li>
                    </ul>
                </div>


                <span className='mx-5 mt-5 md:mt-0 md:mx-0 flex-wrap md:flex-nowrap flex items-center gap-5 '>
                    <div className='bg-gray-200 flex p-2 w-full md:w-[140px] items-center rounded-md border-2'>
                        <FontAwesomeIcon className='text-gray-500 w-10' icon={faSearch} />
                        <input placeholder='Search' className='w-full bg-gray-200 p-[3px]' type='search' />
                    </div>

                    {userexist ?
                        <NotificatonAndAvatar className="hidden w-full md:w-auto items-center md:flex gap-5 md:gap-5" />
                        : ''}

                    {userexist ?
                        <div className='w-full md:w-auto'>
                            <button className='bg-[#ea4b8b] hover:bg-[#ea4b8b99] px-6 py-3  rounded-lg text-md text-white transition-all w-full'>upload</button>
                        </div>
                        :
                        <div className='w-full md:w-auto flex gap-3 items-center'>

                            <button className='bg-transparent hover:bg-gray-100 px-6 py-3 border-[1px] border-gray-500  rounded-lg text-md text-gray-500 transition-all w-full' onClick={() => { goto('/') }}>Login</button>
                            <button className='bg-[#ea4b8b] hover:bg-[#ea4b8b99] px-6 py-3 border-[1px] border-[#ea4b8b]  rounded-lg text-md text-white transition-all w-full' onClick={() => { goto('/signup') }}>Signup</button>

                        </div>
                    }

                </span>

            </span>

        </div>
    )
}
