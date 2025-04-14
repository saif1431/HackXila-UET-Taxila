import React, { useState, useEffect } from 'react';

function EventDate() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Set your event date here (April 18, 2025)
  const calculateTimeLeft = () => {
    const eventDate = new Date('April 18, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const difference = eventDate - now;

    if (difference > 0) {
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      });
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div className="text-center py-14 pb-20">
        <h1 className="mb-7 font-extrabold text-xl sm:text-3xl md:text-5xl text-daBrown">
          Mark Your Calendars
        </h1>
        <div className="w-full bg-gradient-to-r from-poorple to-daBrown p-4 text-white">
          <h1 className="font-garamond font-bold dates text-4xl md:text-4xl lg:text-6xl">
            April 18 - April 20
          </h1>
          <h1 className="font-garamond mt-5 font-bold dates text-4xl md:text-4xl lg:text-6xl">
            2025
          </h1>
        </div>
      </div>
      
      <div className="section-countdown flex justify-center flex-col items-center text-daBrown">
        <h1 className="font-black text-xl sm:text-2xl md:text-4xl text-daBrown my-10">
          The Wait is Almost Over...
        </h1>
        <div className="w-full max-w-md">
          <div className="countdown font-garamond grid grid-cols-4 gap-4 px-4">
            <div className="countdown__item flex flex-col items-center">
              <div className="countdown__item--number border-2 border-daBrown bg-[#404040] text-white rounded-lg p-4 w-full text-center">
                <h4 className="text-white text-3xl md:text-5xl font-bold">{timeLeft.days}</h4>
              </div>
              <div className="countdown__item--text mt-2">
                <p className="text-lg md:text-xl font-semibold">Days</p>
              </div>
            </div>
            
            <div className="countdown__item flex flex-col items-center">
              <div className="countdown__item--number border-2 border-daBrown rounded-lg p-4 w-full text-center bg-[#404040]">
                <h4 className="text-white text-3xl md:text-5xl font-bold">{timeLeft.hours}</h4>
              </div>
              <div className="countdown__item--text mt-2">
                <p className="text-lg md:text-xl font-semibold">Hours</p>
              </div>
            </div>
            
            <div className="countdown__item flex flex-col items-center">
              <div className="countdown__item--number border-2 border-daBrown rounded-lg p-4 w-full text-center bg-[#404040] text-white">
                <h4 className="text-white text-3xl md:text-5xl font-bold">{timeLeft.minutes}</h4>
              </div>
              <div className="countdown__item--text mt-2">
                <p className="text-lg md:text-xl font-semibold">Minutes</p>
              </div>
            </div>
            
            <div className="countdown__item flex flex-col items-center">
              <div className="countdown__item--number border-2 border-daBrown rounded-lg p-4 w-full text-center bg-[#404040]">
                <h4 className="text-white text-3xl md:text-5xl font-bold">{timeLeft.seconds}</h4>
              </div>
              <div className="countdown__item--text mt-2">
                <p className="text-lg md:text-xl font-semibold">Seconds</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDate;