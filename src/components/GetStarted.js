import React, { useState, useEffect } from 'react'
import UploadTemp from '../assets/upload-temp.png'
import UserRolePage from '../components/UserRolePage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { useNavigate, useLocation } from "react-router-dom";

export default function GetStarted() {

    const navigate = useNavigate();
    const location = useLocation();

    const [userRoleSection, setuserRoleSection] = useState(false)

    useEffect(() => {
        let signupData = sessionStorage.getItem('formData');
        if (!signupData) {
            navigate('../signup');
            return;
        }

        signupData = JSON.parse(signupData);
        if (signupData.name && signupData.username && signupData.password && signupData.email && signupData.terms) {
            console.log(signupData);
        } else {
            navigate('../signup');
        }
    }, [navigate]);

    useEffect(() => {
        if (location.hash === '#role') {
            let formdata2 = sessionStorage.getItem('formData2');
            if (formdata2 !== '' && formdata2 !== null) {
                formdata2 = JSON.parse(formdata2);
                if (formdata2 && formdata2.avatar && formdata2.location) {
                    setuserRoleSection(true);
                } else {
                    setuserRoleSection(false);
                }
            } else {
                setuserRoleSection(false);
            }
        } else {
            setuserRoleSection(false);
        }
    }, [location]);


    const defaultAvatar = ['https://api.dicebear.com/8.x/adventurer-neutral/svg?seed=Toby', 'https://api.dicebear.com/8.x/adventurer-neutral/svg?seed=Molly', 'https://api.dicebear.com/8.x/adventurer-neutral/svg', 'https://api.dicebear.com/8.x/adventurer-neutral/svg?seed=Chloe', 'https://api.dicebear.com/8.x/adventurer-neutral/svg?seed=Lilly']

    const [avatar, setavatar] = useState(UploadTemp)

    const [form, setform] = useState({
        avatar: '',
        location: ''
    })

    const handleimageavatar = (e) => {
        let src = e.target.src
        setavatar(src)
        form.avatar = src
        setform(form)
    }

    const handleuseravatar = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setavatar(imageUrl);
            form.avatar = imageUrl
            setform(form)
        } else {
            form.avatar = ''
            setform(form)
        }
    }

    const [formInputerror, setformInputerror] = useState({
        locationerror: false,
        avatarerror: false
    });

    const handleInputChange = (e) => {
        const { name, value, } = e.target;
        setform({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (form.avatar === '') {
            formInputerror.avatarerror = true
            setformInputerror({ ...formInputerror })
            return
        }

        formInputerror.avatarerror = false
        setformInputerror({ ...formInputerror })

        if (form.location === '') {
            formInputerror.locationerror = true
            setformInputerror({ ...formInputerror })
            return
        }

        formInputerror.locationerror = false
        setformInputerror({ ...formInputerror })

        sessionStorage.setItem('formData2', JSON.stringify(form));
        navigate('#role')
    }

    const togetstarted = () => {
        navigate('../signup/getstarted')
    }
    return (
        <div>
            <div className='max-w-[1200px] w-[100%] px-3  mx-auto  md:min-w-[25%] py-[20px] sm:py-[60px]  flex flex-col h-svh'>
                <div className='flex flex-row-reverse sm:flex-row justify-end sm:justify-start items-center gap-3 sm:gap-10'>
                    <span className='bg-transparent w-auto h-7 grid place-content-center rounded-md'><p className='text-[#ea4b8b] p-2 sm:p-0 logo-name'>dribbble</p></span>
                    {userRoleSection ? <span onClick={togetstarted} className='bg-gray-200 w-7 h-7 grid place-content-center rounded-md'><FontAwesomeIcon className='text-gray-500 mr-1 ml-1 w-2' icon={faAngleLeft} /></span> : ''}
                </div>

                {userRoleSection ? <UserRolePage /> :

                    <div className='sm:w-[80%] p-2 mx-auto mt-4'>
                        <h1 className='font-bold text-3xl mt-5'>
                            Welcome! Let's create your profile
                        </h1>
                        <p className='mt-3 font-light text-sm text-gray-500'>Let others get to know you better! You can do these later</p>

                        <form className='mt-10' onSubmit={handleSubmit}>
                            <label className='block font-bold'>Add an avatar</label>
                            <div className='mt-8 flex flex-col justify-center items-center  sm:flex-row gap-2 sm:gap-10 sm:items-start sm:justify-start'>
                                <img className={`rounded-full w-40 h-40 border-dashed border-2 p-1 cursor-pointer' ${formInputerror.avatarerror ? 'border-red-500' : ''}`} src={avatar} onClick={() => { document.getElementById('avatarinput').click() }} alt='' />
                                <span className='mt-8 w-full'>
                                    <label className='border-2 p-2 rounded-md text-sm cursor-pointer w-full block sm:inline-block text-center sm:w-auto' onClick={() => { document.getElementById('avatarinput').click() }}>Choose image</label>
                                    <input className='hidden' onChange={handleuseravatar} accept=".jpb,.png,.jpeg" id='avatarinput' type='file' />

                                    <details className='text-sm text-gray-500 mt-8'>
                                        <summary className='cursor-pointer'>Or choose one Of our defaults</summary>
                                        <span className='flex gap-5 pt-5 max-w-full overflow-x-scroll'>
                                            {defaultAvatar.map((e, index) => (
                                                <img key={index} onClick={handleimageavatar} className='w-16 h-16 rounded-full border-double border-4 border-[#f2d184] hover:scale-110 transition-all cursor-pointer' src={e} alt="" />
                                            ))}
                                        </span>
                                    </details>
                                </span>
                            </div>

                            <label className='block font-bold mt-14'>
                                {formInputerror.locationerror ? <FontAwesomeIcon className='text-red-500 mr-1' icon={faTriangleExclamation} /> : ''}
                                Add your location</label>
                            <input name='location' value={form.name} onChange={handleInputChange} type='text' className={`text-sm w-full font-light p-3 px-0 border-0 outline-0 mt-1  bg-transparent border-b-2 border-gray-300 ${formInputerror.locationerror ? 'bg-red-100 text-red-500' : ''}`} placeholder='Enter your location' />
                            <button className='bg-[#ea4b8b] hover:bg-[#ea4b8b99] px-6 py-3 my-12 mb-3 rounded-lg text-sm text-white transition-all w-full md:w-[200px]'>Next</button>
                            <p className='mb-5 sm:block md:hidden xl:block'>
                                <small className='text-gray-500 w-full md:w-[200px] block text-center'>or Press RETURN</small>
                            </p>
                        </form>
                    </div >

                }

            </div >
        </div >
    )
}
