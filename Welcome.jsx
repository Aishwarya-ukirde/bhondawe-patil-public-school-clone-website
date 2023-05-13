import React ,{useEffect}from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import BgImg from '../assest/home-welcome-1.jpg'
import BgImg2 from '../assest/home-welcome-2.jpg'

function Welcome() {
    useEffect(()=>{
        AOS.init();
    })
    return (
        <div>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 px-2 py-5 md:px-56'>
                <div className=' flex justify-between '>
                    <div className='overflow-hidden '>
                        <img src={BgImg} alt='' className='  pr-4 mr-10 h mt-10 ' data-aos="fade-right" data-aos-duration="1500" data-nimg="intrinsic" data-aos-easing="ease-in-out" />
                    </div>
                   
                    <div className='overflow-clip'>
                        <img src={BgImg2} alt='' className='mr-10'  data-aos="fade-left" data-aos-duration="1500" data-aos-easing="ease-in-out"/>
                    </div>
                </div>
                <div className='p-14 text-center'>
                    <h2 className='text-red-700 text-3xl font-serif font-bold leading-normal mb-2 aos-init aos-animate' data-aos="fade-down" data-aos-duration="2000" data-aos-easing="ease-in-out">Welcome to
                    <br />
                       <span className='text-blue-500'> Bhondawe Patil Public School</span> 
                       </h2>
                    <p className='text-gray-500  aos-init aos-animate' data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-in-out" >
                         Welcome to the abode of intellect where the purpose of education is to equip the child with the most excellent technological proficiency; to empower him with the skills in order to realize his God gifted potential; to creole the light climate so that the child may develop fully as a complete human being At hi BHONDAWE PATIL PUBLIC SCHOOL, one's intellect is I transformed into an illuminated reflection of knowledge and broad outlook towards life.</p>
                </div>

            </div>
        </div>
    )
}

export default Welcome
