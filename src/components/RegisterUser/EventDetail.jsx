import React from 'react';
// import Image from 'next/image';

const eventData = [
  {
    id: "048261a8-1c32-4f82-9ed6-740504cdb1a9",
    title: "HACK THE IDEA",
    fee: "1500 PKR",
    maxParticipants: "3",
    description: "Test your tech knowledge in this fast-paced quiz with 3 rounds of DSA, OS, DB, Networks, and AI challenges - just 25 seconds per question!",
    image: "https://nascon.s3.ap-south-1.amazonaws.com/event-logos/048261a8-1c32-4f82-9ed6-740504cdb1a9-1739471444880-AI%20hackathon.png",
  },
  {
    id: "2",
    title: "QUIZ COMPETITION",
    fee: "1000",
    maxParticipants: "Individual",
    description: "Transform themes into AI-generated images by crafting perfect prompts - you'll have just 10 minutes to create and submit your masterpiece!....",
    image: "https://example.com/web-dev.png",
  },
  {
    id: "3",
    title: " PROMPT ENGINEERING",
    fee: "250",
    maxParticipants: "Individual",
    description: " Participants will face a surprise paragraph and must type it out as fast and accurately as...",
    image: "https://example.com/data-science.png",
  },
  {
    id: "4",
    title: "  SPEED TYPING",
    fee: "250",
    maxParticipants: "Individual",
    description: " Participants will face a surprise paragraph and must type it out as fast and accurately as...",
    image: "https://example.com/data-science.png",
  },
];

function EventCard({ event }) {
  return (
    <div className=" border-2 py-1 px-1 border-black">
      <div className="w-full flex flex-col gap-5 border-2 border-daBrown justify-between p-5  h-full hover:shadow-[0_0_15px_rgb(96,45,118)]">
        <div className="space-y-3">
          <div className="top flex items-center justify-between">
            <h3 className="font-eb font-bold text-daBrown text-2xl">{event.title}</h3>
          </div>
          <div className="flex justify-between">
            <div className="font-bold text-daBrown">Fee: {event.fee}</div>
            <div className="font-bold text-daBrown">Team Size: {event.maxParticipants}</div>
          </div>
          <div 
            className="body font-eb" 
            style={{ maxHeight: '100px', maxWidth: '500px', overflow: 'hidden' }}
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
          <a target='_blank' href='https://docs.google.com/forms/d/e/1FAIpQLSd8f37_C7V_18h_P89e3SE7zdY5ljBJfPBFjzdyywM0ZTiVWQ/viewform?pli=1&fbclid=PAY2xjawJzSLpleHRuA2FlbQIxMAABp6R4CL8qOLm41FSWQbOBA1GSSD-ohhnJocLJe2BpJAeWs0XYrwV6lKO6-B4t_aem_4G4qWT71mnSKSf2Al9kVFA' className='bg-[#504b38] py-2 px-4 rounded-md hover:bg-[#504b45] hover:scale-x-75 font-poppins font-semibold'>
      Register
          </a>
        </div>
      </div>
    </div>
  );
}

function EventDetail() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4 justify-center px-12">
      {eventData.map(event => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}

export default EventDetail;