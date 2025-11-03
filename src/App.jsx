import { useState } from 'react'
import './App.css'
import './index.css'
import SmokeTrail from './Smoke/SmokeTrail'
import { BrowserRouter , Routes, Route, NavLink , useLocation} from "react-router-dom";

import Nav from './Comp/Nav';
import Body from './Comp/Body';
import First from './Comp/First';



import { GoDotFill } from "react-icons/go";
import { FaCommentDots } from "react-icons/fa";
import Up  from './assets/Up.png';
import Insta from './assets/Insta.png'
import X from './assets/X.png'
import Linkedin from './assets/Linkedin.png'
import { FaMoon, FaSun } from "react-icons/fa";



function App(  ) {
const [ theme , setTheme ] = useState("black");
const [ text , setText ] = useState("white");
const [ icon , setIcon ]= useState(<FaSun />)
const [ open, setOpen ] = useState(false);



function openMessage() {
     setOpen(!open);
}

//  go to top
function navUp() {
    const section = document.getElementById("top");
    section?.scrollIntoView({ behavior:"smooth" });
} 

function  changeTheme () {  
  if(theme == "black"){
      setTheme("white");
      setText("black");
      setIcon(<FaMoon  />);
  } else {
    setTheme("black");
    setText("white");
    setIcon(<FaSun  />);
    
  }
}





  return (
    <>
   
    <BrowserRouter>
    <SmokeTrail />
    <Nav theme={theme} text={text}  />

    
      <Routes>
          <Route path='/' element={ <Body theme={theme} text={text} changeTheme={changeTheme} icon={icon}  /> } />
          <Route path='/first' element={ <First theme={theme} text={text} changeTheme={changeTheme} icon={icon} /> } />
      </Routes>
    </BrowserRouter>





      {/* Floating btn  */}
           <div className='fixed bottom-10 left-1/2 -translate-x-1/2 z-50 gap-4 border border-orange-100 rounded-full flex justify-center items-center  h-12 w-auto px-10  backdrop-blur-sm  bg-black/10'> 
        
              <button
                onClick={openMessage }
                className=" h-7 w-7 flex justify-center items-center hover:bg-violet-500 border  border-yellow-200 text-white p-1 rounded-full shadow-lg  transition-transform hover:scale-90">
                <FaCommentDots className="text-l"  />
              </button>
              <div className=' fixed bottom-7 left-10 h-1 animate-ping rounded-full w-1 bg-red-500 '> .</div>
        
              <button className=' p-1 hover:animate-spin-slow  border rounded-full h-7 w-7 flex justify-center items-center border-yellow-200 hover:bg-violet-500   ' style={{ color:text }}  onClick={changeTheme} > {icon }  </button> 
        
              {/* Go to top floating btn  */}
              <div onClick={navUp} className='h-7 w-7 border border-yellow-200 rounded-full flex justify-center items-center hover:cursor-pointer hover:bg-violet-500  transition-transform hover:scale-90 p-2 '>
                 <img className='h-4 w-4 hover:scale-90' src={Up} alt="" />
              </div>
            </div>

            
                    {/* FLoating Message  */}
            
                        { open && ( 
                            <div className='fixed bottom-40  md:left-20  h-auto w-[80%] md:w-[50%] py-10 px-5 ml-10 md:ml-0 rounded-md pl-10 text-[14px] flex flex-col gap-5 bg-black/30 border border-cyan-300 backdrop-blur-md z-50 transition-all duration-300 animate-fadeIn ' style={{  color: text}}>
                                <div className='flex gap-3' >
                                    <GoDotFill className="text-pink-500 text-xl animate-pulse" />
                                    <p> Do value YourSelf, your Profession , your College </p>
                                </div>
                                
                                <div className='flex gap-3  ' >
                                    <GoDotFill className="text-pink-500 text-xl animate-pulse" />
                                        <div>
                                            <p > If you're not in so good college , you’ve got a chance </p>
                                            <p className='font-bold'> to rise with less competition & low pressure.</p>
                                        </div>
                                </div>            
                                
                                <div className='flex gap-3' >
                                    <GoDotFill className="text-pink-500 text-xl animate-pulse" />
                                    <p>Always find the positive in everything</p>
                                </div>
            
                                <div className='flex gap-3' >
                                    <GoDotFill className="text-pink-500 text-xl animate-pulse" />
                                    <p>Be Thank full to god , for whatever we have . </p>
                                </div>  
            
                                <div className='flex justify-center items-center gap-5  '>
                                    <a href="https://www.instagram.com/yash_yachwad/" target='_blank'> <img className='size-5 border border-black rounded-md p-0 hover:scale-105 bg-black  hover:cursor-pointer'  src={Insta} alt="" />  </a>
                                    
                                    <a href="https://www.linkedin.com/in/yashyachwad" target='_blank'>  <img className='size-5 border border-black rounded-sm p-0 hover:scale-105 bg-black  hover:cursor-pointer'  src={Linkedin} alt="" /></a>
                                    
                                    <a href="https://x.com/yashyachwad?t=c16HeKrHGEgd_el2X3_FaQ&s=09" target='_blank'>  <img className='size-5 border border-black rounded-sm p-0 hover:scale-105 bg-black  hover:cursor-pointer'  src={X} alt="" /></a>
                                    
                                </div>          
                                <p className=' flex justify-end text-yellow-200'> ~ yash yachwad</p>
            
                            </div>
                            )}
            




    </>


        
   
  )
}

export default App
