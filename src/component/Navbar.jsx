import React ,{useState} from 'react'
import '../css/styles2.css'
import {
    HiX,
    HiMenu
} from 'react-icons/hi'
import Img1 from '../assest/logo.jpg'
import Img2 from '../assest/big-logo.jpg'
import { Link } from 'react-router-dom'
import Contactus from './Contactus'
import Academic from './Academic'

function Navbar() {
     
    
    const [nav,setNav] = useState (false)
    const handleClick = () => {setNav(!nav)

    }
    return (
        <div>
            <div className='bg-red-700'>
                <div className='container mx-auto py-1 flex  items-center justify-between text-white text-sm '>
                    <div className='hidden md:block'>info@bhondawepatilschool.in</div>
                    <div className='hidden md:block'>Facebook</div>
                </div>
            </div>
            <div className=' mx-auto flex justify-between items-center py-2  bg-white'>
                <div className='text-center md:hidden block justify-center w-full'>
                    <img src={Img1} alt="" />
                </div>
                <div className='text-center hidden md:block' >
                    <img src={Img2} alt="" />
                </div>
                <div className='block md:hidden'  onClick={handleClick }>
                    {!nav ? <HiMenu size={29} /> : <HiX size={29}/>}
                   
                    
                </div>
            </div>
            <div className={!nav ? 'hidden' : 'md:flex md:items-center md:pb-0 pb-5 absolute md:static z-10 bg-blue-900 md:z-auto  left-0 w-full md:w-auto md:pl-0 md:pr-0 pl-7 pr-7 text-white'}>
            <header>
            <ul className='pt-24 uppercse md:hidden px-20'>
                <li className='p-4  border-b-2 border-l-white cursor-pointer block md:hidden' onClick={handleClick}> <Link to=''>Home</Link></li>
                                <li className='p-4  border-b-2 border-l-white  cursor-pointer block md:hidden' onClick={handleClick}><Link to='/aboutus '> About Us</Link></li>
                                <li className='p-4  border-b-2 border-l-white cursor-pointer block md:hidden 'onClick={handleClick}><Link to='/Admission'> Admission</Link></li>
                                <li className='p-4  border-b-2 border-l-white cursor-pointer block md:hidden'onClick={handleClick}><Link to='/Academic'>Academic</Link></li>
                                <li className='p-4  border-b-2 border-l-white cursor-pointer block md:hidden'onClick={handleClick}><Link to='/Achievement'> Achievement</Link></li>
                                <li className='p-4  border-b-2 border-l-white cursor-pointer block md:hidden'onClick={handleClick}><Link to='/Infrastructure'>Infrastructure </Link></li>
                                <li className='p-4  border-b-2 border-l-white cursor-pointer block md:hidden'onClick={handleClick}><Link to='/Gallery'> Gallery</Link></li>
                                <li className='p-4  border-b-2 border-l-white cursor-pointer block md:hidden'onClick={handleClick}><Link to='/Contactus'> Contact Us</Link></li>
                </ul>
                </header>
            </div>


            <div className='bg-blue-900'>
                <div className='container mx-auto flex justify-between items-center py-3 text-white'>
                    <div className='flex items-center'>



                        <div className='md:flex md:items-center md:pb-0 pb-5 absolute md:static z-10 bg-blue-900 md:z-auto  left-0 w-full md:w-auto md:pl-0 md:pr-0 pl-7 pr-7 transition-all   duration-500 ease-in top-[-500px] '>
                           <header>
                            <ul className='md:flex justify-between divide-y-2 md:divide-y-0 font-semibold text-sm'>
                                <li className='md:py-0 py-3 px-4 cursor-pointer ' id='linke'><Link to=''>Home</Link></li>
                                <li className='md:py-0 py-3 px-4 cursor-pointer'id='linke'><Link to='/aboutus'> About Us</Link></li>
                                <li className='md:py-0 py-3 px-4 cursor-pointer'id='linke'><Link to='/Admission'>Admission</Link></li>
                                <li className='md:py-0 py-3 px-4 cursor-pointer'id='linke'><Link to='/Academic'>Academic</Link></li>
                                <li className='md:py-0 py-3 px-4 cursor-pointer'id='linke'><Link to='/Achievement'> Achievement</Link></li>
                                <li classname='md:py-0 py-3 px-4 cursor-pointer'id='linke'><Link to='/Infrastructure'>Infrastructure </Link></li>
                                <li className='md:py-0 py-3 px-4 cursor-pointer'id='linke'><Link to='/Gallery'> Gallery</Link></li>
                                <li className='md:py-0 py-3 px-4 cursor-pointer'id='linke'><Link to='/Contactus'> Contact Us</Link></li>
                            </ul>
                            </header>
                        </div>

                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default Navbar
