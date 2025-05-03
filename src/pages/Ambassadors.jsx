import React from 'react'
import AmbassadorsTable from '../components/AmbassadorsTable'

function Ambassadors() {
  return (
    <div className='mt-22 '>
      <h1 className='text-4xl font-Zumme font-bold text-center pt-6'>Our Ambassadors</h1>
      <div className='pb-12'>
            <AmbassadorsTable/>
      </div>
            <div class="mt-10 h-[15px] bg-daBrown w-full"></div>
      
    </div>
  )
}

export default Ambassadors
