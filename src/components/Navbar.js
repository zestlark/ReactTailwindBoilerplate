import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBriefcase, faCircleXmark, faXmark } from '@fortawesome/free-solid-svg-icons'

import MenuBar from '../assets/icons/menubar.png'

export default function Navbar() {

    let formdata2 = sessionStorage.getItem('formData2');
    formdata2 = JSON.parse(formdata2)
    const { avatar } = formdata2

    const [navmenu, setnavmenu] = useState(false)

    let formdata = sessionStorage.getItem('formData');
    formdata = JSON.parse(formdata)
    const { name, email } = formdata

    const NotificatonAndAvatar = ({ className }) => {
        return (
            <span className={`${className}`}>
                <span className='flex gap-5 sm:block sm:gap-0 p-2 px-3 sm:p-0 rounded-md items-center border-2 w-full sm:w-auto sm:border-0'>
                    <div className='relative h-7 w-7 mt-1 sm:mt-0'>
                        <FontAwesomeIcon className='text-gray-400 absolute right-0 bottom-0 border-2 rounded-full bg-white' icon={faCircleXmark} />
                        <FontAwesomeIcon className='text-gray-400 text-xl' icon={faBriefcase} />
                    </div>
                    <p className='text-sm text-gray-500 sm:hidden'>Notification</p>
                </span>
                <div className='flex sm:block gap-5 sm:gap-0 p-2 px-3 sm:p-0 rounded-md items-center border-2 w-full sm:w-auto mt-2 sm:mt-0 sm:border-0'>
                    <img src={avatar} className='w-7 h-7 sm:w-10 sm:h-10 object-cover rounded-full' alt='' />
                    <p className='text-sm text-gray-500 sm:hidden'>
                        <small className='text-gray-700 font-bold capitalize'>{name}</small><br />
                        <small>{email}</small>
                    </p>
                </div>
            </span>
        )
    }

    return (
        <div className='flex items-center justify-between w-[100%] px-3 sm:px-10  mx-auto  md:min-w-[25%] py-[20px] border-b-2'>
            <div className='flex flex-row-reverse sm:flex-row justify-end sm:justify-start items-center gap-3 sm:gap-10'>
                <span className='bg-transparent w-auto h-7 grid place-content-center rounded-md'><p className='text-black p-2 sm:p-0 logo-name'>dribble</p></span>
            </div>


            <div className='sm:hidden' onClick={() => { setnavmenu(!navmenu) }}>
                {!navmenu ? <img src={MenuBar} className='opacity-50 w-8 h-8 object-cover rounded-full' alt='' /> : ''}
                {navmenu ? <FontAwesomeIcon className='text-gray-500  w-8 h-7' icon={faXmark} /> : ''}
            </div>

            <span className={`${navmenu ? 'fixed' : 'hidden'} top-20 left-0 py-5 sm:py-0 flex-col sm:flex-row sm:static sm:flex w-full justify-between bg-white`}>

                <span className='mx-5 mb-2 sm:mt-0 sm:mx-0 flex-wrap sm:flex-nowrap flex items-center gap-5 sm:hidden'>
                    <NotificatonAndAvatar className="w-full flex-col-reverse sm:w-auto items-center flex  gap-2" />
                </span>

                <div className='flex flex-col sm:flex-row'>
                    <ul className='mx-5 flex-col gap-2 sm:flex-row sm:g-0 sm:mx-0 flex text-sm sm:gap-7 sm:ml-10 items-center text-gray-500 font-medium'>
                        <li className='border-2 w-full p-3 rounded-md sm:w-auto sm:p-0 sm:border-0'><a href='/'>Inspiation</a></li>
                        <li className='border-2 w-full p-3 rounded-md sm:w-auto sm:p-0 sm:border-0'><a href='/'>Find Work</a></li>
                        <li className='border-2 w-full p-3 rounded-md sm:w-auto sm:p-0 sm:border-0'><a href='/'>Learn Design</a></li>
                        <li className='border-2 w-full p-3 rounded-md sm:w-auto sm:p-0 sm:border-0'><a href='/'>Go Pro</a></li>
                        <li className='border-2 w-full p-3 rounded-md sm:w-auto sm:p-0 sm:border-0'><a href='/'>Hire Designers</a></li>
                    </ul>
                </div>


                <span className='mx-5 mt-5 sm:mt-0 sm:mx-0 flex-wrap sm:flex-nowrap flex items-center gap-5 '>
                    <div className='bg-gray-200 flex p-2 w-full sm:w-[140px] items-center rounded-md'>
                        <FontAwesomeIcon className='text-gray-500 w-10' icon={faSearch} />
                        <input placeholder='Search' className='w-full bg-gray-200 p-[2px]' type='search' />
                    </div>

                    <NotificatonAndAvatar className="hidden w-full sm:w-auto items-center sm:flex gap-5 sm:gap-5" />

                    <div className='w-full sm:w-auto'>
                        <button className='bg-[#ea4b8b] hover:bg-[#ea4b8b99] px-6 py-3  rounded-lg text-sm text-white transition-all w-full'>upload</button>
                    </div>
                </span>

            </span>

        </div>
    )
}
