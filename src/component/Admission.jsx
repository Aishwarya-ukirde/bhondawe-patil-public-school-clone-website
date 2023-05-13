import React,{useState} from 'react'
import building from '../assest/building.jpg'
import { send } from 'emailjs-com';



const Admission = () => {
 
    const [toSends, setToSend] = useState({
        from_name :'',
        for_grade:'',
        parentName:'',
        number:'',
        to_email:'',
        address:'',
      });
    
      const onSubmit = (e) => {
        e.preventDefault()
          send(
            'service_19kvgwv',
            'template_h65r7pm',
            toSends,
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
        setToSend({ ...toSends, [e.target.name]: e.target.value });
    
      
      };
    
    return (
        <div>
            <div>
                <div className="bg-gray-100 py-10 shadow-sm mb-10 bg-[url('https://bhondawepatilschool.in/images/subheaderbg.jpg')] "><h1 className=' container mx-auto font-bold text-4xl text-center text-blue-900 'data-aos="fade-down">Admission</h1>
                </div>
               
                    <div className="container mx-auto grid grid-cols-1 bg-gray-100 md:grid-cols-2 py-10 space-x-0 md:space-x-3">

                        <div className='grid order-2 md:order-1 items-center justify-center m-5'>
                            <img src={building} alt="" />
                        </div>
                        <div className=' grid order-1 md:order-2 m-5 '>
                            <p>
                                <h1 className='font-bold text-xl md:text-3xl text-blue-900 text-center'>Our Aim</h1>
                                <ul className='list-disc text-lg py-5 space-y-1 px-1 text-gray-500	'>
                                    <li>To accept and respect all individuals without any bias or prejudice irrespective of differences in origin, religion, ethnicity or otherwise and create an inclusive learning community.</li>
                                    <li>To help learners exploit their potential to the fullest and help them improve and grow both academically and personally.</li>
                                    <li>To provide a dynamic and broad spectrum learning environment that will faster critical thinking skills in a students and help them become life long learners.</li>
                                    <li>To create and awareness among the learners of the social responsibilities and equip them with the skills to adapt to the changing needs of a global environment</li>
                                </ul>
                            </p>
                        </div>

                    </div>



             

               
                    <div className="grid grid-cols-1 md:grid-cols-2 items-start justify-between ">

                    <div className=' container mx-auto'>
                            <p>
                            <h1 className='text-xl md:text-3xl font-bold text-center text-blue-900'>Our Distinctions</h1>
                                <ul className='list-disc text-lg py-5 space-y-1 px-4 text-gray-500'>
                                    <li>Celebrate of culture of excellence in academics and the all round development of children.</li>
                                    <li>Individual attention to each child to cater to their diverse learning needs</li>
                                    <li>Talented, experienced, and dedicated teachers with linguistic and cultural diversity</li>
                                    <li>Inclusive education with a committed team of a student care professionals.</li>
                                    <li>Offers and integrated curriculum from LKJ to class VIII. drawing upon the best of national and international curriculum.</li>
                                    <li>Wide range and depth of community service for program starting from class III</li>
                                    <li>Upholds Indian culture and values, whilst fostering global citizenship.</li>
                                    <li>A safe and secure learning environment with focus on student well being.</li>
                                
                                </ul> 
                            </p>
                        </div>

                        <div className=' bg-blue-900 rounded-md shadow-md p-12 m-5'>
                            <div className='font-play text-2xl md:w-xl text-gray-200 '>
                              <span className='text-3xl text-gray-200 font-semibold mb-4'>Please fill the Form below to Place Admission Enquiry</span>
                              <form onSubmit={onSubmit}>
              <div className="grid grid-cols-1 gap-x-8 gap-y-8 my-3">
              <input className='border-b-2 border-gray-200 text-stone-300 outline-none px-4 py-2 sm:text-xl text-base bg-blue-900 col-span-2'
              
                type='text'
                name='from_name'
                placeholder='Name of Student'
                value={toSends.from_name}
                onChange={handleChange}
                autoComplete="off"
                required
              />
              <input className='border-b-2 border-gray-200 text-stone-300 outline-none px-4 py-2 sm:text-xl text-base bg-blue-900 col-span-2'
                type='text'
                name='for_grade'
                placeholder='Admission Required fro which Grade '
                value={toSends.for_grade}
                onChange={handleChange}
                autoComplete='off'
                required
              />
              <input className='border-b-2 border-gray-200 text-stone-300 outline-none px-4 py-2 sm:text-xl text-base bg-blue-900 col-span-2'
                type='text'
                name='parentName'
                placeholder='parent Name'
                value={toSends.parentName}
                onChange={handleChange}
                autoComplete='off'
                required
              />
              <input className='border-b-2 border-gray-200 text-stone-300 outline-none px-4 py-2 sm:text-xl text-base bg-blue-900 col-span-2'
                type='tel'
                name='number'
                placeholder='contact Number'
                value={toSends.number}
                onChange={handleChange}
                autoComplete='off'
                required
              />
               <input className='border-b-2 border-gray-200 text-stone-300 outline-none px-4 py-2 sm:text-xl text-base bg-blue-900 md:col-span-2 '
                type='email'
                
                name='to_email'
                placeholder='Email Id'
                value={toSends.to_email}
                onChange={handleChange}
                autoComplete='off'
                required
                min='10'
              />
              <textarea className='border-b-2 border-gray-200 text-stone-300 outline-none px-4 py-2 sm:text-xl text-base bg-blue-900 col-span-2'
                type='text'
                rows='2'
                name='address'
                placeholder='Residential Address'
                value={toSends.address}
                onChange={handleChange}
                autoComplete='off'
                required
              />
             
              </div>
              <button type='submit' className='inline-block w-auto  mt-4 px-6 py-2 bg-gradient-to-r from-red-700 to-red-500 rounded-md shadow-md text-sm font-bold text-gray-200'>Submit</button>
            </form>

                            </div>
                        </div>

                    </div>




            </div>
        </div>
    )
}

export default Admission
