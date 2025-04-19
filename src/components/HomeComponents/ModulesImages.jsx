import React from 'react'
import image1 from '/module/1.png'
import image2 from '/module/2.png'
import image3 from '/module/3.png'
import image4 from '/module/4.png'
import { NavLink } from 'react-router-dom'
import Button from './Button'



function ModulesImages() {
  return (
    <div className='px-10 mt-8'>
      <h1 className='text-4xl text-daBrown font-extrabold font-Zumme text-center'>Our Modules</h1>

      <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mt-10 '>
<img className='h-fit' src={image1} alt="" />
<img className='h-fit'  src={image2} alt="" />
<img className='h-fit'  src={image3} alt="" />
<img className='h-fit'   src={image4} alt="" />
      </div>
      <div className='flex items-center justify-center mt-12 gap-4 '>
   <Button marginTop='mt-0'/>
   <a target='_blank' href="https://www.canva.com/design/DAGj7xMTCbI/U2GpWtVI3aNkyP9DvHxGDA/edit?utm_content=DAGj7xMTCbI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" rel="noopener noreferrer" className='bg-[#504b38] py-2 px-4 rounded-md hover:bg-[#504b45] hover:scale-x-75 font-poppins font-semibold'>Rule Book</a>
      </div>
    </div>
  )
}

export default ModulesImages
