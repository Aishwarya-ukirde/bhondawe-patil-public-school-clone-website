import React from 'react'
 import ch from '../assest/chairman.jpg'
function Chairman() {
  return (
    <div>
       <div className='p-4 grid mx-auto md:col-span-6 md:row-span-2 border-2 rounded-md bg-white' data-aos="fade-in" data-aos-duration="2000">
        <img src={ch} alt="" />
        <p className='font-semibold text-center text-lg text-blue-900 pt-2 '>SHRI. HANUMAN BHONDAWE PATIL</p>
       <p className='text-gray-500 text-center pt-1'>Chairman</p>
        <div>
          <h2 className=' text-xl md:text-3xl font-bold text-blue-900 text-center pt-5'>Words of our Chairmain</h2>
          <p>
            
          <h3 className='text-blue-500  font-semibold text-center '>"AFFORDABLE AND QUALITY EDUCATION FOR ONE AND ALL"</h3>
          <span className='text-gray-500 text-lg '>
          Bhondawe Patil Public School is started with a focused mission to Inculcate a passion for lifelong learning among students and empower them to learn and excel, so that they can face the practical life situation with confidence and determination: standing true and tall to our vision of facilitating overall personality grooming, academic excellence as one of the primary objectives of our institution.
Our spacious, ventilated and smart classrooms, highly proficient faculty, professional & experienced management, balanced curriculum with ample space for co-curricular activities, social and value based education etc; make our schooling experience a distinct and unique one.
I wish every learner for an empowered learning and excellence In school and all facets of life.
Best Wishes & Warm Regards          </span>
          </p>
        </div>

      </div>
    </div>
  )
}

export default Chairman
