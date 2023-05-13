import React, { useEffect } from 'react'
import '../css/styles2.css'
import Fb from '../assest/facebook.png'
import In from '../assest/instagram.png'
import Yt from '../assest/youtube.png'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { motion } from "framer-motion"

function Footer() {
    useEffect(() => {
        AOS.init();
    })
    return (
        <div>
            <div className='bg-white pt-10 '>
                <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 space-y-5 md:space-y-0 justify-between items-start '>
                    <div className=' leading-loose'>
                        <h3 className='text-red-800 font-semibold text-2xl text-left  underline underline-offset-8 pl-10 decoration-gray-300 pb-5'>School Address</h3>
                        <p className='text-blue-900 pl-10 text-left'>
                            <span className='text-2xl'> Bhondawe Patil Public School</span><br />
                            Gut No. 49, Bajaj Nagar,MIDC,
                            <br />
                            Waluj, Aurangabad – 431136. (MH).
                            <br />
                            Contact: 6232616161/ 6232717171
                            <br />
                            Email: info@bhondawepatilschool.in
                        </p>

                    </div>
                    <div className='leading-loose'>
                        <h3 className='text-red-800 font-semibold text-2xl text-left  underline underline-offset-8 pl-10 decoration-gray-300 pb-5'>Quick Links</h3>
                        <p className='text-blue-900 pl-10 text-left'>
                            <div className='grid grid-cols-1'>
                                <motion.div
                                transition={{ delay: 0 , duration:0.1}}
                                whileHover={{ scale:1.7, originX:0 }}
                                initial={{ x: 0 }}
                                > <Link to='' className='text-left text-blue-900 cursor-pointer hover:font-thin hover:text-red-700'>Home</Link></motion.div>
                                <motion.div transition={{ delay: 0 , duration:0.1}}
                                whileHover={{ scale:1.7, originX:0 }}
                                initial={{ x: 0 }}>
                                    <Link to='/aboutus' className='text-left text-blue-900 cursor-pointer hover:font-thin hover:text-red-700'> About Us</Link> </motion.div>
                                <motion.div transition={{ delay: 0 , duration:0.1}}
                                whileHover={{ scale:1.7, originX:0 }}
                                initial={{ x: 0 }}>
                                    <Link to='/Admission' className=' text-left text-blue-900 cursor-pointer hover:font-thin hover:text-red-700'> Admission</Link></motion.div>
                                <motion.div transition={{ delay: 0 , duration:0.1}}
                                whileHover={{ scale:1.7, originX:0 }}
                                initial={{ x: 0 }}>
                                    <Link to='/Academic' className='text-left text-blue-900 cursor-pointer hover:font-thin hover:text-red-700 '>Academic</Link></motion.div>
                                <motion.div transition={{ delay: 0 , duration:0.1}}
                                whileHover={{ scale:1.7, originX:0 }}
                                initial={{ x: 0 }}>
                                    <Link to='/Achievement' className='text-left text-blue-900 cursor-pointer hover:font-thin hover:text-red-700 '> Achievement</Link></motion.div>
                                <motion.div transition={{ delay: 0 , duration:0.1}}
                                whileHover={{ scale:1.7, originX:0 }}
                                initial={{ x: 0 }}>
                                    <Link to='/Infrastructure' className=' text-left text-blue-900 cursor-pointer hover:font-thin hover:text-red-700'>Infrastructure </Link></motion.div>
                                <motion.div transition={{ delay: 0 , duration:0.1}}
                                whileHover={{ scale:1.7, originX:0 }}
                                initial={{ x: 0 }}>
                                    <Link to='/Gallery' className='text-left text-blue-900 cursor-pointer hover:font-thin hover:text-red-700'> Gallery</Link></motion.div>
                                <motion.div transition={{ delay: 0 , duration:0.1}}
                                whileHover={{ scale:1.7, originX:0 }}
                                initial={{ x: 0 }}>
                                    <Link to='/Contactus' className='text-left text-blue-900 cursor-pointer hover:font-thin hover:text-red-700'> Contact Us</Link></motion.div>






                            </div>
                        </p>
                    </div>
                    <div className='leading-loose'>
                        <h3 className='text-left text-red-700 text-2xl font-semibold underline underline-offset-8 decoration-gray-300 pb-5 pl-10'>Follow Us</h3>
                        <div className=' flex flex-row items-start justify-start pl-10'>
                            <a href=" https://www.facebook.com/BhondawePatilPublicSchool/" className='w-10 h-10 mr-1 cursor-pointer  hover:w-14 hover:h-14 ease-in duration-500 transform: none; transform-origin: 0% 50% 0px;'  >
                                <img src={Fb} alt="" />
                            </a>

                            <a href="https://www.instagram.com/bhondawepatilpublicschool/?igshid=YmMyMTA2M2Y=" className='w-10 h-10 mr-1  hover:w-14 hover:h-14 ease-in duration-500'>
                                <img src={In} alt="" />
                            </a>

                            <a href="https://www.youtube.com/channel/UC5tvVecGAKXlkVE8UZiTjpA" className='w-10 h-10  hover:w-14 hover:h-14 ease-in duration-500'>
                                <img src={Yt} alt="" />
                            </a>

                        </div>


                    </div>
                </div>
                <div className='bg-red-700'>
                    <div className='container mx-auto flex justify-center items-center py-2 mt-6 text-sm text-white'>
                        <div className='hidden md:block '>
                            "All Rights Reserved With Bhondawe Patil Public School"
                        </div>

                    </div>

                </div>


            </div>

        </div>
    )
}

export default Footer
