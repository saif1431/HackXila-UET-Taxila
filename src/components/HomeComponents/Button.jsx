import React from 'react'
import { NavLink } from 'react-router-dom'

function Button({marginTop = 'mt-12'  }) {
  return (
      <div className={`flex items-center justify-center mt-12 ${marginTop}`}>
      <NavLink to='/registration' className=' bg-[#504b38] py-2 px-4 rounded-md hover:bg-[#504b45] hover:scale-x-75 font-poppins font-semibold'>Register Now</NavLink>
        </div>
  )
}

export default Button
