import React from 'react';
import image1 from '/module/4.png';

function QuizCompetition() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:px-12 lg:py-12 py-6'>
      {/* Image - shows first on large screens, last on small screens */}
      <div className='lg:order-2 order-1'>
        <img 
          src={image1} 
          alt="Quiz competition illustration" 
          className='w-full h-auto object-contain'
        />
      </div>

      {/* Text content - shows last on large screens, first on small screens */}
      <div className='space-y-6 lg:order-1 order-2'>
        <div>
          <h1 className='lg:text-4xl text-2xl text-daBrown font-extrabold font-Zumme'>DESCRIPTION</h1>
          <p className='mt-2 text-lg font-poppins text-justify'>
            You'll be given a theme or requirement, and your job is to
            write an optimized prompt using any AI image generation tool to
            bring your vision to life. 10 Minutes to finalize and submit your
            prompt and generated image.
          </p>
        </div>
        
        <div>
          <h1 className='lg:text-4xl text-2xl text-daBrown font-extrabold font-Zumme'>CRITERIA:</h1>
          <div className='px-4 mt-4 font-poppins text-lg'>
            <li>Accuracy of Answers – Correctness of the responses given.</li>
            <li>Time Management – Responses submitted within the 10-second limit.</li>
            <li>Consistency Across Rounds – Steady performance throughout all 4 rounds.</li>
          </div>
        </div>
        
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='space-y-3'>
            <h1 className='lg:text-4xl text-2xl text-daBrown font-extrabold font-Zumme'>PRIZE POOL</h1>
            <div className='space-y-2'>
              <h6 className='lg:text-2xl text-xl text-daBrown font-extrabold font-Zumme'>Registration Fee:</h6>
              <li className='font-poppins text-lg'>PKR 1000</li>
            </div>
          </div>
          <div>
            <h1 className='lg:text-4xl text-2xl text-daBrown font-extrabold font-Zumme'>Winner Prize</h1>
            <div className='px-4 mt-4 font-poppins text-lg'>
              <li>Winner: PKR 5000</li>
            </div>
          </div>
        </div>
        
        <div>
          <h1 className='lg:text-4xl text-2xl text-daBrown font-extrabold font-Zumme'>FORMAT:</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 mt-4'>
            <div className='px-4'>
              <h6 className='font-Zumme lg:text-2xl text-xl text-daBrown'>Time given:</h6>
              <li className='font-poppins text-lg'>10 minute</li>
            </div>
            <div className='px-4'>
              <h6 className='font-Zumme lg:text-2xl text-xl text-daBrown'>Team Size:</h6>
              <li className='font-poppins text-lg'>Individual Participation Only</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizCompetition;