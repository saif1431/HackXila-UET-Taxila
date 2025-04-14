import React from 'react';
// import Image from 'next/image';

const eventData = [
  {
    id: "048261a8-1c32-4f82-9ed6-740504cdb1a9",
    title: "AI Hackathon",
    fee: "1000",
    maxParticipants: "1",
    description: "AI Hackathon: Innovate, Compete, Dominate! Tackle real-world challenges...",
    image: "https://nascon.s3.ap-south-1.amazonaws.com/event-logos/048261a8-1c32-4f82-9ed6-740504cdb1a9-1739471444880-AI%20hackathon.png",
  },
  {
    id: "2",
    title: "Web Development Workshop",
    fee: "500",
    maxParticipants: "3",
    description: "Learn modern web development techniques from industry experts...",
    image: "https://example.com/web-dev.png",
  },
  {
    id: "3",
    title: "Data Science Challenge",
    fee: "750",
    maxParticipants: "2",
    description: "Put your data analysis skills to the test in this intensive competition...",
    image: "https://example.com/data-science.png",
  },
];

function EventCard({ event }) {
  return (
    <div className="border-2 py-1 px-1 border-black">
      <div className="flex flex-col gap-5 border-2 border-daBrown justify-between p-5 w-80 h-full hover:shadow-[0_0_15px_rgb(96,45,118)]">
        <div className="space-y-3">
          <div className="top flex items-center justify-between">
            <h3 className="font-eb font-bold text-daBrown text-2xl">{event.title}</h3>
            {/* <Image 
              alt="event logo" 
              width={50} 
              height={50}
              src={event.image}
              className="color-transparent"
            /> */}
          </div>
          <div className="flex justify-between">
            <div className="font-bold text-daBrown">Fee: {event.fee}</div>
            <div className="font-bold text-daBrown">Max Participants: {event.maxParticipants}</div>
          </div>
          <div 
            className="body font-eb" 
            style={{ maxHeight: '100px', maxWidth: '200px', overflow: 'hidden' }}
          >
            {event.description}
          </div>
        </div>
        <div className="bottom flex justify-between">
          <a 
            color="black" 
            className="flex gap-2 items-center font-eb text-daBrown" 
            href={`/events/${event.id}`}
          >
            Learn More 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z" clipRule="evenodd"></path>
            </svg>
          </a>
          <a href={`/events/register/${event.id}`}>
            <div className="relative inline-block -mt-1">
              <div className="absolute inset-0 border-2 border-daBrown translate-x-1 translate-y-1"></div>
              <button 
                type="button" 
                className="w-full relative px-6 py-2 text-sm font-garamond text-white transition-all duration-300 border-2 border-daBrown group hover:translate-x-1 hover:translate-y-1 bg-gradient-to-tr from-poorple to-daBrown disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-x-0 disabled:hover:translate-y-0 cursor-pointer"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">Register</span>
                <span className="absolute inset-0 w-full h-full bg-poorple -z-0 scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
              </button>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

function EventDetail() {
  return (
    <div className="flex flex-wrap gap-4 p-4 justify-center">
      {eventData.map(event => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}

export default EventDetail;