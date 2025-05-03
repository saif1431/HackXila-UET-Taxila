import React from 'react'
import image1 from '/module/1.png'


function HackIdeaCompetition() {
  return (
    <div className='grid grid-col-1 lg:grid-cols-2 gap-8  lg:px-12 lg:py-12 py-6'>
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
<li> Relevance to the theme</li>
<li> Creativity and originality</li>
<li> Feasibility & scalability</li>
<li> Clarity of thought and presentation</li>
<li> Team collaboration and execution</li>
</div>
      </div>
      <div className='grid grid-col-1 md:grid-cols-2 gap-6'>
      <div className='3 space-y-3'>
           <h1 className='lg:text-4xl text-2xl text-daBrown font-extrabold font-Zumme'>PRIZE POOL</h1> 
        <div className='space-y-2'>
        <h6 className='lg:text-2xl text-xl text-daBrown font-extrabold font-Zumme'> Registration Fee:
         </h6>
         <li className='font-poppins  text-lg '> PKR 1500
         </li>
        </div>
      </div>
      <div className='4'>
   <h1 className='lg:text-4xl text-2xl text-daBrown font-extrabold font-Zumme'>Winner Prize</h1>
<div className='px-4 mt-4 font-poppins  text-lg'>
<li> Winner: PKR 15,000
</li>
<li> Runner up: PKR 5,000
</li>
</div>
      </div>
      </div>
      <div className='5'>
      <h1 className='lg:text-4xl text-2xl text-daBrown font-extrabold font-Zumme'>FORMAT:</h1> 
     <div className='grid grid-cols-1 md:grid-cols-2  mt-4'>
     <div className='px-4'>
            <h6 className='font-Zumme text-2xl text-daBrown'>Time given:</h6>
            <li className='font-poppins  text-lg'>10 minute</li>
      </div>
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

export default HackIdeaCompetition
