import React from 'react'
import  { useState } from "react";
import { Menu, X } from "lucide-react";



const Nav = ({ text,theme } ) => {
  const [open, setOpen] = useState(false);




function navFirst(params) {
  const section =  document.getElementById("first");
  section?.scrollIntoView({ behavior:"smooth" });
}
function navSec(params) {
 const section =  document.getElementById("second");
  section?.scrollIntoView({ behavior:"smooth" }); 
}
function navThird(params) {
  const section =  document.getElementById("third");
  section?.scrollIntoView({ behavior:"smooth" });  
}
function navFourth(params) {
   const section =  document.getElementById("fourth");
  section?.scrollIntoView({ behavior:"smooth" }); 
}





  return (
    <div className=' sm:h-20 w-full fixed top-0 bg-white/10 backdrop-blur-md z-50 font-outfit ' style={{ color: text}}>
      



      {/* MOBILE HAMBURGER ICON */}
      <div className="md:hidden  pl-5  h-12 flex items-center  ">
        <button onClick={() => setOpen(!open)}>
          {open ? <X className='' size={28} /> : <Menu size={28} />}
        </button>
      < div className=' font-protest flex items-center justify-center pl-20 ' style={{ color: text}}  > India's Institute of Technology </ div>


      </div>

      {/* MOBILE MENU */}
      {open && (
        
        <div className="absolute top-16 left-0 w-full bg-gray-100 text-gray-900 flex flex-col items-center gap-5 py-6 font-semibold shadow-lg md:hidden">
          <div onClick={navFirst} className="cursor-pointer hover:text-green-600  ">1st Year</div>
          <div onClick={navSec} className="cursor-pointer hover:text-green-600  ">2nd Year</div>
          <div onClick={navThird} className="cursor-pointer hover:text-green-600  ">3rd Year</div>
          <div onClick={navFourth} className="cursor-pointer hover:text-green-600  ">4th Year</div>
              
        </div>
      )}








        {/* LAPTOP  */}

        <div className='h-10 hidden sm:block   '>

            <div>
              < div className='h-10 w-full flex  justify-evenly items-center font-lobster ' style={{ color: text}}  > India's Institute of Technology </ div> 
            </div>

            <div className='flex justify-evenly items-center h-10 '>
              <div onClick={navFirst} className='hover:text-orange-500 hover:cursor-pointer hover:scale-105 transition-all ease-in-out ' >1st Year</div>
              <div onClick={navSec} className='hover:text-orange-500 hover:cursor-pointer hover:scale-105 transition-all ease-in-out ' >2nd Year</div>
              <div onClick={navThird} className='hover:text-orange-500 hover:cursor-pointer hover:scale-105 transition-all ease-in-out ' >3rd Year</div>
              <div onClick={navFourth} className='hover:text-orange-500 hover:cursor-pointer hover:scale-105 transition-all ease-in-out ' >4th Year</div>
            </div>
        </div>


     



   
    </div>
  )
}

export default Nav
