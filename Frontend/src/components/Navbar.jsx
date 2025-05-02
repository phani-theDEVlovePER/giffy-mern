import React, { useState } from 'react'
import { logo, menu } from '../assets'
import '../myStyles.css'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    return (
        <>
            {/* for mobile device */}
            {/* start */}
            <div className='sm:hidden h-[4rem] w-full z-20'>
                <div className='min-w-full h-[4rem] flex items-center justify-between pl-4 pr-4'>
                    <img src={logo} alt='LOGO' className='w-[4rem]' />
                    <img src={menu} alt='menu' className='w-[2rem]'
                        onClick={() => setNav(!nav)}
                    />
                </div>

                <ul className={nav ? 'flex flex-col justify-center items-end gap-4 font-[500] p-5 myFonts sm:hidden overflow-hidden h-[15rem] ease-in-out duration-500 border-t-4 absolute right-0 min-w-full bg-gray-100 ' : 'h-0 ease-in-out duration-500 flex flex-col justify-center items-end overflow-hidden absolute right-0 min-w-full bg-gray-100 '}>
                    <li className='bg-gray-100 hover:bg-gray-300 w-[8rem] rounded-md h-[3rem] pl-2'>Home</li>
                    <li className='bg-gray-100 hover:bg-gray-300 w-[8rem] rounded-md h-[3rem] pl-2'>Our Services</li>
                    <li className='bg-gray-100 hover:bg-gray-300 w-[8rem] rounded-md h-[3rem] pl-2'>Insights</li>
                    <li className='bg-gray-100 hover:bg-gray-300 w-[8rem] rounded-md h-[3rem] pl-2'>About Us</li>
                    <li className='bg-gray-100 hover:bg-gray-300 w-[8rem] rounded-md h-[3rem] pl-2 mb-6'>Contact Us</li>
                </ul>
            </div>
            {/* end */}

            {/* for pc */}
            <div className='min-w-full h-[4rem]  hidden sm:flex items-center justify-between pl-4 pr-4 sticky top-0 z-10 bg-gray-50'>
                <img src={logo} alt='CHIRPN' className='w-[4rem] cursor-pointer' />
                <ul className='flex items-center gap-3 myFonts font-[600] h-full'>
                    <li className='listItem cursor-pointer active'>Home</li>
                    <li className='listItem cursor-help'>Our Services</li>
                    <li className='listItem cursor-help'>Insights</li>
                    <li className='listItem cursor-help'>About Us</li>
                    <li className='listItem cursor-help'>Contact Us</li>
                </ul>
            </div>
            {/* end */}
        </>
    )
}

export default Navbar