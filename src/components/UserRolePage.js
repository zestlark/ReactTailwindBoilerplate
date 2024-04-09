import React, { useState } from 'react';
import StudentImage from '../assets/user-role/student.png';
import DesignerImage from '../assets/user-role/designer.png';
import InspirationImage from '../assets/user-role/inspiration.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";


export default function UserRolePage() {

    const navigate = useNavigate();

    const [selectedRole, setSelectedRole] = useState(null);

    const rolecard = [
        {
            title: "I'm a designer looking to share my work",
            image: StudentImage,
            description: "Dive into the world of design with Dribbble, the ultimate platform for aspiring creatives.",
            role: "desinger"
        },
        {
            title: "I'm looking to hire a designer",
            image: DesignerImage,
            description: "Join a vibrant community of creative minds on Dribbble, where over 7 million design professionals",
            role: "hiring"
        },
        {
            title: "I'm looking for design inspiration",
            image: InspirationImage,
            description: "With over 7 million shots from a vast community of designers, Dribbble is the leading source for design",
            role: "inspiration",
        }
    ];

    const handleRoleSelect = (index) => {
        setSelectedRole(index);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedRole !== null) {
            console.log(rolecard[selectedRole].role);
            localStorage.setItem('formdataUserRole', rolecard[selectedRole].role);
            navigate('../signup/verifyemail')
        }
    }


    return (
        <div className='sm:w-[80%] p-2 mx-auto mt-4' id="role">
            <h1 className='font-bold text-3xl mt-5 text-center'>
                What brings you to Dribbble?
            </h1>
            <p className='mt-3 font-light text-sm text-gray-500 text-center'>Select the options that best describe you. Don't worry, you can explore other options later.</p>

            <form className='mt-6' onSubmit={handleSubmit}>
                <div className='sm:flex justify-between gap-10  items-center '>
                    {
                        rolecard.map((e, index) => {
                            return (
                                <div key={index} className='border-2 h-auto sm:h-[270px] rounded-2xl  sm:w-[30%] p-5 mt-12'>
                                    <img src={e.image} className={`h-[180px] transition-all mx-auto ${selectedRole === index ? 'sm:mt-[-110px]' : 'sm:mt-[-50px]'}`} alt='' />
                                    <h3 className='mt-4 font-extrabold text-center'>{e.title}</h3>
                                    {selectedRole === index ? <p className='text-xs mt-3 text-center text-gray-500'>{e.description}</p> : ''}
                                    <label htmlFor={index} className={`mx-auto mt-2 block w-7 h-7 rounded-full ${selectedRole === index ? 'border-transparent' : 'border-2'}`} onClick={() => handleRoleSelect(index)}>
                                        {selectedRole === index ? <FontAwesomeIcon className='text-[#ea4b8b] w-full h-full mr-1' icon={faCheckCircle} /> : ''}
                                    </label>
                                    <input name="role" id={index} type='radio' className='hidden' />
                                </div>
                            );
                        })
                    }
                </div>

                <label className='block font-bold text-sm mt-10 text-center'>Anything else? You can select multiple</label>
                <button className='bg-[#ea4b8b] hover:bg-[#ea4b8b99] px-6 py-3 block mx-auto my-6 mb-3  rounded-lg text-sm text-white transition-all w-full md:w-[200px]'>Finish</button>
                <p className='mb-5  text-center'>
                    <small className='text-gray-500  block w-full text-center'>or Press RETURN</small>
                </p>
            </form>
        </div>
    );
}
