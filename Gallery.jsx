import React from 'react'

function Gallery() {
    return (
        <div >
            <div className='bg-gray-100'>
                <div className="bg-gray-100 py-10 shadow-sm mb-10 bg-[url('https://bhondawepatilschool.in/images/subheaderbg.jpg')] "><h1 className=' container mx-auto font-bold text-4xl text-center text-blue-900 'data-aos="fade-down">Event Gallery</h1>
                </div> 
                <div className='container mx-auto py-10'>
                    <div className='mx-auto  grid grid-cols-1 md:grid-cols-3 items-between justify-center'>
                        <div className='p-5'><img src='/images/02 (1).jpg ' height="500" width="960" alt=''  className='w-full h-full border rounded-md' data-aos="zoom-in-up" data-aos-delay="50" data-aos-duration="1500"/></div>
                        <div className='p-5'><img src='/images/03.jpg ' height="500" width="960" alt=''className='w-full h-full border rounded-md' data-aos="zoom-in-up" data-aos-delay="50" data-aos-duration="1500"/></div>
                        <div className='p-5'><img src='/images/04.jpg ' height="500" width="960" alt=''className='w-full h-full border rounded-md' data-aos="zoom-in-up" data-aos-delay="50" data-aos-duration="1500"/></div>
                        <div className='p-5'><img src='/images/05.jpg ' height="500" width="960" alt=''  className='w-full h-full border rounded-md' data-aos="zoom-in-up" data-aos-delay="50" data-aos-duration="1500"/></div>
                        <div className='p-5'><img src='/images/07.jpg ' height="500" width="960" alt=''className='w-full h-full border rounded-md' data-aos="zoom-in-up" data-aos-delay="50" data-aos-duration="1500"/></div>
                        <div className='p-5'><img src='/images/08.jpg ' height="500" width="960" alt=''className='w-full h-full border rounded-md' data-aos="zoom-in-up" data-aos-delay="50" data-aos-duration="1500"/></div>
                        <div className='p-5'><img src='/images/09.jpg ' height="500" width="960" alt=''  className='w-full h-full border rounded-md' data-aos="zoom-in-up" data-aos-delay="50" data-aos-duration="1500"/></div>
                        <div className='p-5'><img src='/images/10.jpg ' height="500" width="960" alt=''className='w-full h-full border rounded-md' data-aos="zoom-in-up" data-aos-delay="50" data-aos-duration="1500"/></div>
                        <div className='p-5'><img src='/images/11.jpg ' height="500" width="960" alt=''className='w-full h-full border rounded-md' data-aos="zoom-in-up" data-aos-delay="50" data-aos-duration="1500"/></div>
                        <div className='p-5'><img src='/images/12.jpg ' height="500" width="960" alt=''  className='w-full h-full border rounded-md' data-aos="zoom-in-up" data-aos-delay="50" data-aos-duration="1500"/></div>
                        <div className='p-5'><img src='/images/13.jpg ' height="500" width="960" alt=''className='w-full h-full border rounded-md' data-aos="zoom-in-up" data-aos-delay="50" data-aos-duration="1500"/></div>
                        <div className='p-5'><img src='/images/14.jpg ' height="500" width="960" alt=''className='w-full h-full border rounded-md' data-aos="zoom-in-up" data-aos-delay="50" data-aos-duration="1500"/></div>
                    </div>

                </div>

            
        </div>
        </div>
    )
}

export default Gallery
