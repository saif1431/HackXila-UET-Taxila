import React from 'react';
// import Image from 'next/image'; // If using Next.js

function About() {
  return (
      <div className="flex flex-col w-full px-16 space-y-4 mt-6">
        <h2 className="font-Zumme text-3xl sm:text-5xl md:text-7xl text-daBrown">Why HackXila?</h2>
 <div className='1'>
  <h6 className='text-2xl text-daBrown font-extrabold font-Zumme'>Innovation Under Pressure</h6>
  <p className='mt-2 text-lg font-poppins '>A dynamic platform where participants turn ideas into solutions within 4 hours, tackling surprise problem statements through  rapid prototyping and creative thinking.</p>
 </div>
 <div className='2'>
  <h6 className='text-2xl text-daBrown font-extrabold font-Zumme'>Skills That Matter</h6>
<li className='mt-2 text-lg font-poppins'><span className='text-daBrown  font-bold font-poppins '>Technical Growth:</span>        Hands-on experience in AI, prompt engineering, and problem-solving

</li>
<li className='mt-2 text-lg font-poppins'><span className='text-daBrown  font-bold font-poppins '>Collaboration:</span>        Team-based challenges (2-4 members) fostering teamwork

</li>
<li className='mt-2 text-lg font-poppins'><span className='text-daBrown  font-bold font-poppins '>Competitive Edge:</span>        Quizzes on DSA, OS, and AI (25 seconds/question) to test knowledge under pressure
</li>
 </div>
 <div className='3'>
  <h6 className='text-2xl text-daBrown font-extrabold font-Zumme'>Prove Your Talent</h6>
<li className='mt-2 text-lg font-poppins'><span className='text-daBrown  font-bold font-poppins '>Speed Typing:</span>        Measure precision and speed (WPM-based scoring)

</li>
<li className='mt-2 text-lg font-poppins'><span className='text-daBrown  font-bold font-poppins '>Prompt Engineering:</span>        Craft AI-generated solutions in 10 minutes

</li>
<li className='mt-2 text-lg font-poppins'><span className='text-daBrown  font-bold font-poppins '>Pitch Perfect:</span>        Present ideas to judges in 7-8 minutes
</li>
 </div>
 <div className='4'>
  <h6 className='text-2xl text-daBrown font-extrabold font-Zumme'>Rewards & Recognition</h6>
<li className='mt-2 text-lg font-poppins'><span className='text-daBrown  font-bold font-poppins '>Prize Pool:</span>        Up to PKR 15,000 for winners</li>
<li className='mt-2 text-lg font-poppins'><span className='text-daBrown  font-bold font-poppins '>Networking:</span>       Connect with experts and peers in tech
</li>
</div>
 <div className='5'>
  <h6 className='text-2xl text-daBrown font-extrabold font-Zumme'>Inspired by Real-World Impact</h6>
<p className=' text-lg font-poppins italic'>"This isn’t just about coding—it’s about thinking big."</p>
<p className='mt-2 text-lg font-poppins'>HackXila bridges classroom learning with real-world applications, preparing participants for future tech challenges.</p>
</div>
 </div>

    
  );
}

export default About;