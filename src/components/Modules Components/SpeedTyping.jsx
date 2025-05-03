import React from 'react'
import image1 from '/module/3.png'


function SpeedTyping() {
  return (
 <div className='grid grid-col-1 lg:grid-cols-2 gap-8  lg:px-12 lg:py-12 py-6'>
      <div className=''>
      <img src={image1} alt="" />
</div>
<div className='space-y-6'>
      <div className='1'>
            <h1 className='lg:text-4xl text-2xl text-daBrown font-extrabold font-Zumme'>DESCRIPTION</h1>
            <p className='mt-2 text-lg font-poppins text-justify'>You’ll be given a theme or
 requirement, and your job is to
 write an optimized prompt using
 any AI image generation tool to
 bring your vision to life. 10 Minutes
 to finalize and submit your
 prompt and generated image.</p>
      </div>
      <div className='2'>
            <h1 className='lg:text-4xl text-2xl text-daBrown font-extrabold font-Zumme'>CRITERIA:</h1>
<div className='px-4 mt-4 font-poppins  text-lg'>
<li>  Words Per Minute (WPM)</li>
<li> Accuracy Percentage</li>
<li>  Minimal Typos = More
 Points
</li>
</div>
      </div>
      <div className='grid grid-col-1 md:grid-cols-2 gap-6'>
      <div className='3 space-y-3'>
           <h1 className='lg:text-4xl text-2xl text-daBrown font-extrabold font-Zumme'>PRIZE POOL</h1> 
        <div className='space-y-2'>
        <h6 className='lg:text-2xl text-xl text-daBrown font-extrabold font-Zumme'> Registration Fee:
         </h6>
         <li className='font-poppins text-lg '> PKR 250
         </li>
        </div>
      </div>
      <div className='4'>
   <h1 className='lg:text-4xl text-2xl text-daBrown font-extrabold font-Zumme'>Winner Prize</h1>
<div className='px-4 mt-4 font-poppins  text-lg'>
<li> Winner: PKR 2000
</li>

</div>
      </div>
      </div>
      <div className='5'>
      <h1 className='lg:text-4xl text-2xl text-daBrown font-extrabold font-Zumme'>FORMAT:</h1> 
     <div className='grid grid-cols-1 md:grid-cols-2  mt-4'>
     <div className='px-4'>
            <h6 className='font-Zumme lg:text-2xl text-xl text-daBrown'>Time given:</h6>
            <li className='font-poppins  text-lg'>10 minute</li>
      </div>
      <div className='px-4'>
            <h6 className='font-Zumme lg:text-2xl text-xl text-daBrown'>Team Size:
            </h6>
            <li className='font-poppins  text-lg'>Individual Participation Only</li>
      </div>
     </div>
      </div>
</div>

    </div>
  )
}

export default SpeedTyping
