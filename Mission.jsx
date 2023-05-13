import React,{useEffect}from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Bg from '../assest/bg-1.jpg'

function Mission() {
    useEffect(()=>{
        AOS.init();
    })
    return (
        <div>
              <div className=" absolute container mx-auto grid grid-cols-1 items-center  md:grid-cols-2 px-2 md:px-56" >
                    <div></div>
                    <div className=' text-white opacity-90 bg-blue-800 p-3 my-10 w-[310px] place-content-center	  ' data-aos="fade-in" data-aos-duration="2000" >
                        <h1 className='text-white  text-3xl font-bold '>Our Mission</h1><br />
                        <p className='text-justify' >We seek to make our children confident and creative builders of their future. Our focus is on the child as a whole entity. We work towards an integrated curriculum that reaches across disciplines and age levels. The students will be encouraged to meet academics challenges with openness, enthusiasm and willingness to solve problems. We strive to inspire our students to achieve the highest standards of intellectual and personal development through a satisfactory and stimulating and comprehensive programme. We aim for an atmosphere of cooperation and endeavour to create compassionate, responsible and innovative global citizens, committed to the development of India and the world.</p>
                    </div>
             </div>
            <div >
                <img src={Bg} alt='' className='h-[700px] w-[1440px]' />
                
            </div>

          
          
           
        </div>
    )
}

export default Mission
