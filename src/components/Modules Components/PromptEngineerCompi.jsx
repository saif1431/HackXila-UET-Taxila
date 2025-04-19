import React from 'react'
import image1 from '/module/2.png'
function PromptEngineerCompi() {
  return (
    <div className='grid grid-col-1 lg:grid-cols-2 gap-8  lg:px-12 lg:py-12 py-6'>

   <div className='space-y-6'>
         <div className='1'>
               <h1 className='text-4xl text-daBrown font-extrabold font-Zumme'>DESCRIPTION</h1>
               <p className='mt-2 text-lg font-poppins text-justify'> Participants will face a surprise
 paragraph and must type it out
 as fast and accurately as
 possible. It's not just about speed
 — it’s about precision under
 pressure.</p>
         </div>
         <div className='2'>
               <h1 className='text-4xl text-daBrown font-extrabold font-Zumme'>CRITERIA:</h1>
   <div className='px-4 mt-4 font-poppins  text-lg'>
   <li>Clarity & Creativity of the
   Prompt</li>
   <li> Visual Appeal & Detail of AI
   Output</li>
   <li>  Prompt Efficiency (Concise yet
      descriptive)</li>
   </div>
         </div>
         <div className='grid grid-col-1 md:grid-cols-2 gap-6'>
         <div className='3 space-y-3'>
              <h1 className='text-4xl text-daBrown font-extrabold font-Zumme'>PRIZE POOL</h1> 
           <div className='space-y-2'>
           <h6 className='text-2xl text-daBrown font-extrabold font-Zumme'> Registration Fee:
            </h6>
            <li className='font-poppins  text-lg '> PKR 250
            </li>
           </div>
         </div>
         <div className='4'>
      <h1 className='text-4xl text-daBrown font-extrabold font-Zumme'>Winner Prize</h1>
   <div className='px-4 mt-4 font-poppins  text-lg'>
   <li> Winner: PKR 2000
   </li>
   </div>
         </div>
         </div>
         <div className='5'>
         <h1 className='text-4xl text-daBrown font-extrabold font-Zumme'>FORMAT:</h1> 
        <div className='mt-4'>
         <div className='px-4'>
               <h6 className='font-Zumme text-2xl text-daBrown'>Team Size:
               </h6>
               <li className='font-poppins  text-lg'>Individual Participation Only</li>
         </div>
        </div>
         </div>
   </div>
   <div className=''>
         <img src={image1} alt="" />
   </div>
       </div>
  )
}

export default PromptEngineerCompi
