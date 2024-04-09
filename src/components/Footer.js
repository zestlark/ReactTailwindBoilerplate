import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faDribbble, faInstagram, faTwitter, faPinterest } from "@fortawesome/free-brands-svg-icons"
import Logo from '../assets/logo.png'

export default function Footer() {

    const footerurl = [
        {
            title: 'For designers',
            sublinks: [
                { name: 'Go Pro!', url: '/' },
                { name: 'Explore design work', url: '/' },
                { name: 'Design blog', url: '/' },
                { name: 'ertime podcast', url: '/' },
                { name: 'Playoffs', url: '/' },
                { name: 'Weekly Warm-Up', url: '/' },
                { name: 'Refer a Friend', url: '/' },
                { name: 'Code of conduct', url: '/' },
            ]
        },
        {
            title: 'Hire designers',
            sublinks: [
                { name: 'Post a job opening', url: '/' },
                { name: 'Post a freelance project', url: '/' },
                { name: 'Search for designers', url: '/' },
                {
                    title: 'Brands',
                    sublinks: [
                        { name: 'Advertise with us', url: '/' }
                    ]
                }
            ]
        },
        {
            title: 'Company',
            sublinks: [
                { name: 'About', url: '/' },
                { name: 'Careers', url: '/' },
                { name: 'Support', url: '/' },
                { name: 'Media kit', url: '/' },
                { name: 'Testimonials', url: '/' },
                { name: 'API', url: '/' },
                { name: 'Terms of service', url: '/' },
                { name: 'Privacy policy', url: '/' },
                { name: 'Cookie policy', url: '/' },
            ]
        },
        {
            title: 'Directories',
            sublinks: [
                { name: 'Design jobs', url: '/' },
                { name: 'Designers for hire', url: '/' },
                { name: 'Freelance designers for hire', url: '/' },
                { name: 'Tags', url: '/' },
                { name: 'Places', url: '/' },
                {
                    title: 'Design assets',
                    sublinks: [
                        { name: 'Dribbble Marketplace', url: '/' },
                        { name: 'Creative Market', url: '/' },
                        { name: 'Fontspring', url: '/' },
                        { name: 'Font Squirrel', url: '/' },
                    ]
                }
            ]
        },
        {
            title: 'Design Resources',
            sublinks: [
                { name: 'Freelancing', url: '/' },
                { name: 'Design Hiring', url: '/' },
                { name: 'Design Portfolio', url: '/' },
                { name: 'Design Education', url: '/' },
                { name: 'Creative Process', url: '/' },
                { name: 'Design Industry Trends', url: '/' },
            ]
        }
    ]

    return (
        <div className='bg-gray-100 text-sm p-4 mt-10 pt-10'>

            <div className='max-w-[1200px] mx-auto mt-8 flex justify-between items-start flex-wrap lg:flex-nowrap'>

                <ul className='max-w-[250px] lg:max-w-[270px] p-3 pl-0 mb-5 lg:mr-10'>
                    <p className='text-black p-2 pl-0 sm:p-0 logo-name-big mb-5'>dribble</p>
                    <p>
                        Dribbble is the world's leading
                        community for creatives to share, grow,
                        and get hired.
                    </p>
                    <p>
                        <span className='flex gap-5 items-center text-gray-600 mt-5'>
                            <a href='/'><FontAwesomeIcon className='text-[20px] font-light' icon={faDribbble} /></a>
                            <a href='/'><FontAwesomeIcon className='text-[20px] font-light' icon={faTwitter} /></a>
                            <a href='/'><FontAwesomeIcon className='text-[20px] font-light' icon={faFacebook} /></a>
                            <a href='/'><FontAwesomeIcon className='text-[20px] font-light' icon={faInstagram} /></a>
                            <a href='/'><FontAwesomeIcon className='text-[20px] font-light' icon={faPinterest} /></a>
                        </span>
                    </p>
                </ul>

                {footerurl.map((e, key) => (
                    <ul className='mx-3 ml-0 sm:w-[150px] mb-5' key={key}>
                        <li className='text-sm font-semibold mb-4' key={`title_${key}`}>{e.title}</li>
                        {e.sublinks.map((f, subkey) => (
                            <React.Fragment key={`sublink_${key}_${subkey}`}>
                                {f?.title ?
                                    <>
                                        <li className='text-sm font-semibold mb-4' key={`subtitle_${key}_${subkey}`}>{f.title}</li>
                                        {f.sublinks.map((g, subSubKey) => (
                                            <li className='mb-4 text-gray-500' key={`subsublink_${key}_${subkey}_${subSubKey}`}>
                                                <a href={g.url}>{g.name}</a>
                                            </li>
                                        ))}
                                    </>
                                    : <li className='mb-4 text-gray-500' key={`sublink_${key}_${subkey}`}><a href={f.url}>{f.name}</a></li>}
                            </React.Fragment>
                        ))}
                    </ul>
                ))}

            </div>

            <div className='max-w-[1200px] mx-auto mt-8 p-3 pl-0 py-12 pb-8 sm:flex justify-between items-center border-t-2'>
                <p className='text-gray-500'>&copy; 2023 Dribbble. All rights reserved.</p>
                <p className='flex items-center gap-2 mt-8 sm:mt-0 text-gray-500'>20,501,853 shots dribbbled <img className='w-7' alt='' src={Logo} /></p>
            </div>

        </div>
    )
}
