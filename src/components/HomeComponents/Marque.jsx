import React from 'react'

function Marque() {
  return (
    <div className="bg-gradient-to-r from-poorple to-daBrown py-4">
      <marquee 
        behavior="scroll" 
        direction="left" 
        scrollamount="5" 
        className="text-white text-2xl font-bold"
      >
        Tickets for Concert, Mushaira & Qawwali Are Now Live! &nbsp;&nbsp;&nbsp;
        Tickets for Concert, Mushaira & Qawwali Are Now Live! &nbsp;&nbsp;&nbsp;
        Tickets for Concert, Mushaira & Qawwali Are Now Live! &nbsp;&nbsp;&nbsp;
        Tickets for Concert, Mushaira & Qawwali Are Now Live! &nbsp;&nbsp;&nbsp;
      </marquee>
    </div>
  )
}

export default Marque