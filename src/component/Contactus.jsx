import React, { useState } from 'react'
import { send } from 'emailjs-com';




const Contactus = () => {
  const [toSend, setToSend] = useState({
    from_name: '',
    from_mobile: '',
    reply_to: '',
    this_subject: '',
    message: '',
  });

  const onSubmit = (e) => {
    e.preventDefault()
      send(
        'service_nlrw8sl',
        'template_hnagm45',
        toSend,
        '0eEI9BNYWD0cQzJEN'
      )
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
        })
        .catch((err) => {
          console.log('FAILED...', err);
        });

  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });

  
  };
    return (
    <div className='bg-gray-100'>
      <div className="bg-gray-100 py-10 shadow-sm mb-10 bg-[url('https://bhondawepatilschool.in/images/subheaderbg.jpg')] "><h1 className=' container mx-auto font-bold text-4xl text-center text-blue-900 '>Contact us</h1>
      </div>

      <div className='  container mx-auto grid grid-cols-1 items-center justify-center space-y-5 py-10'>
        <div className='grid items-center justify-center mx-auto w-full bg-white rounded-md shadow-md pb-10 '>
          <h2 className='font-bold text-blue-900 text-xl md:text-3xl text-center pt-12'>School Address</h2><br />
          <h5 className='text-gray-500 text-center text-lg md:text-xl'>
            <span>Address: Gut No. 49, Bajaj Nagar, MIDC, Waluj, Aurangabad – 431136. (MH).</span><br />
            <span>Contact: 6232616161/ 6232717171</span><br />
            <span>Email: info@bhondawepatilschool.in</span>
          </h5>

        </div>

      </div>
      <div className='w-full space-y-5 md:space-y-0 md:grid md:grid-cols-2 md:justify-between items-center md:space-x-10 pb-4'>


        <div className=' content-center' >
          <iframe className='w-[300px] sm:w-[620px]' width="623" height="402" id="gmap_canvas" src="https://maps.google.com/maps?q=Bhondawe Patil Public School&t=&z=18&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>

        </div>
        <div className='  bg-blue-900 rounded-md shadow-md p-12'>
          <div className='font-play text-2xl md:w-xl text-gray-200 '>
            <span className='text-3xl text-gray-200 font-semibold mb-4'>Send Us a Message</span>
            <form action=" " onSubmit={onSubmit}>
              <div className="grid grid-cols-1 gap-x-8 gap-y-8 my-3">
              <input className='border-b-2 border-gray-200 text-stone-300 outline-none px-4 py-2 sm:text-xl text-base bg-blue-900 col-span-2'
              
                type='text'
                name='from_name'
                placeholder='Name'
                value={toSend.from_name}
                onChange={handleChange}
                autoComplete="off"
                required
              />
              <input className='border-b-2 border-gray-200 text-stone-300 outline-none px-4 py-2 sm:text-xl text-base bg-blue-900 col-span-2'
                type='text'
                name='from_mobile'
                placeholder='Mobile number'
                value={toSend.from_mobile}
                onChange={handleChange}
                autoComplete='off'
                required
              />
              <input className='border-b-2 border-gray-200 text-stone-300 outline-none px-4 py-2 sm:text-xl text-base bg-blue-900 col-span-2'
                type='text'
                name='reply_to'
                placeholder='Email'
                value={toSend.reply_to}
                onChange={handleChange}
                autoComplete='off'
                required
              />
              <input className='border-b-2 border-gray-200 text-stone-300 outline-none px-4 py-2 sm:text-xl text-base bg-blue-900 col-span-2'
                type='text'
                name='this_subject'
                placeholder='subject'
                value={toSend.this_subject}
                onChange={handleChange}
                autoComplete='off'
                required
              />
               <textarea className='border-b-2 border-gray-200 text-stone-300 outline-none px-4 py-2 sm:text-xl text-base bg-blue-900 md:col-span-2 '
                type='text'
                rows="3"
                name='message'
                placeholder='Message'
                value={toSend.message}
                onChange={handleChange}
                autoComplete='off'
                required
               
              />
             
              </div>
              <button type='submit' className='inline-block w-auto  mt-4 px-6 py-2 bg-gradient-to-r from-red-700 to-red-500 rounded-md shadow-md text-sm font-bold text-gray-200'>send</button>
            </form>

          </div>
        </div>


      </div>

    </div>
  )
}

export default Contactus