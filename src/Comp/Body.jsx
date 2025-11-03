import React , {useState , useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import lap from '../assets/lap.png'

import Insta from '../assets/Insta.png'
import X from '../assets/X.png'
import Linkedin from '../assets/Linkedin.png'
import AOS from 'aos';
import "aos/dist/aos.css";


const Body = ( { theme,text ,icon , changeTheme} ) => {
const navigate = useNavigate();



  useEffect(() => {
    AOS.init({
      startEvent: 'DOMContentLoaded',  
      duration: 2000, // animation duration in ms
      once: false, // animate only once
      offset: 100, // offset (in px) from the original trigger point
    });
  }, []);

//  go to top
// function navUp() {
//     const section = document.getElementById("top");
//     section?.scrollIntoView({ behavior:"smooth" });
// } 

useEffect(() => {
  const hasShownAlert = localStorage.getItem("alertShown");

  if (!hasShownAlert) {
    const timer = setTimeout(() => {
      alert("Open Video Lectures to Explore More");
      localStorage.setItem("alertShown", "true");
    }, 4000);

    return () => clearTimeout(timer);
  }
}, []);






  return (
    <div  className=' w-full ' style={{ backgroundColor: theme, color: text}}>
      
  

{/*  HOME Screen */}

    <div  id="top"  className='md:flex min-h-screen w-full justify-start  items-center'>

        <div className='md:h-full pt-[20%] md:pl-16 sm:pt-[16%] md:w-[25%] flex justify-center md:gap-16 md:grid ' >
            <img className='h-32 md:pl-10'  src={lap} alt="" />
            <h1 className='font-protest text-[60px] pl-10 md:pl-2 animate-pulse hover:text-green-400' >EngiGo</h1>
        </div>


        <div className='h-full w-full pt-[1%] md:pt-[10%] p-10 text-justify font-outfit gap-5'>
            <p>Engineering students often find confusing about — new subjects, unfamiliar fields, and lots of study material scattered everywhere. </p> <br />
            <p>Thats why this website is designed especially for  engineering students, to make their academic journey simpler and more organized. </p> <br />
            <p> [ some of the content is not added yet , will be added soon ]</p> <br />

            <div  className='border border-slate-800  rounded-sm h-80   sm:h-40 grid sm:flex  justify-evenly items-center ' >

                <button  onClick={ () => navigate("/first")} className='border h-16 sm:h-12 border-purple-500 hover:border-green-600 font-outfit px-3 hover:cursor-pointer rounded-md hover:scale-105  ' >Video Lectures</button>
                <button onClick={()=> alert("PYQ also given in Video lectures section")} className='border h-16 sm:h-12 border-purple-500 hover:border-green-600 font-outfit px-3 hover:cursor-pointer rounded-md hover:scale-105  ' >Previous Year Q. Paper</button>
                <button onClick={()=> alert("🚧 Coming Soon 🚧")} className='border h-16 sm:h-12 border-purple-500 hover:border-green-600 font-outfit px-3 hover:cursor-pointer rounded-md hover:scale-105  ' >Year & Branch based Resources</button>
            </div>
        </div>

    </div>

        {/* separation line */}
        <div id='first'  className=' h-[1px] w-[90%] bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto '></div>




        {/* First Year  */}
        <div  className='w-[90%] m-auto md:pb-20 pt-14 '> 
                            <span className='font-gorditas h-16 w-[60] flex justify-center items-center text-[25px] my-5 ' >First Year</span>
            <div className='md:flex   overflow-x-hidden'>
                <div data-aos="fade-left" className='h-auto w-[92%] mx-auto md:w-[49%] border border-red-200 rounded-sm my-2 md:my-0 py-10 px-5  md:text-[20px] ' > 
                          <h1 className='h-8 w-[100%]  flex justify-center mb-5 items-center font-outfit font-bold text-black  bg-pink-300 '>First Sem</h1>  
                          <p className='border-l pl-3 rounded-md border-gray-400'  >C Programming</p>
                          <p className='border-l pl-3 rounded-md border-gray-400'  >Semiconductor Physics</p>
                          <p className='border-l pl-3 rounded-md border-gray-400'  >Basics of Electrical Engineering</p>
                          <p className='border-l pl-3 rounded-md border-gray-400'  >M1: Calculus & Algebra</p>
                          <p className='border-l pl-3 rounded-md border-gray-400'  >Engineering Graphics & Design</p>                   
                </div>
                <div data-aos="fade-right" className='h-auto w-[92%] mx-auto md:w-[49%] border border-red-200 rounded-sm my-2 md:my-0 py-10 px-5 md:text-[20px] ' > 
                          <h1 className='h-8 w-[100%] flex justify-center mb-5 items-center font-outfit font-bold text-black  bg-pink-300 '>Second Sem</h1>                               
                          <p className='border-l pl-3 rounded-md border-gray-400'  >Workshop Technology</p>
                          <p className='border-l pl-3 rounded-md border-gray-400'  >M2:Probability & Statistics</p>
                          <p className='border-l pl-3 rounded-md border-gray-400'  >Programming for Problem Solving</p>
                          <p className='border-l pl-3 rounded-md border-gray-400'  >Chemistry</p>
                </div>
            </div>
            {/* <button data-aos="fade-up" className='h-8 w-[100%]  font-bold rounded-sm  my-10 border border-red-300 bg-zinc-700  hover:border-green-400 hover:text-[15px] transform ease-in-out duration-200 ' > Lectures & PYQ's </button> */}

        </div>

        {/* separation line */}
         <div id='second' className=' h-[1px] w-[90%] bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto '></div>





        {/* Second Year  */}
        <div className='w-[90%] m-auto pb-20 pt-8 md:pt-16'> 
                            <span className='font-gorditas h-16 w-[60] flex justify-center items-center text-[25px] my-5 ' >Second Year / CSE</span>
            <div className='md:flex   overflow-x-hidden'>
                <div data-aos="fade-left" className='h-auto w-[92%] mx-auto md:w-[49%] border border-red-200 rounded-sm my-2 md:my-0 py-10 px-5 md:text-[20px] ' > 
                          <h1 className='h-8 w-[100%]  flex justify-center mb-5 items-center font-outfit font-bold text-black  bg-pink-300 '>Third Sem</h1>  
                          <p className='border-l pl-3 rounded-md border-gray-400'  >Data Structures & Algorithm</p>
                          <p className='border-l pl-3 rounded-md border-gray-400'  >Python Programming</p>
                          <p className='border-l pl-3 rounded-md border-gray-400'  >Economics for Engineering</p>
                          <p className='border-l pl-3 rounded-md border-gray-400'  >M3 : Mutlivariable calculus & Diff. Eqn</p>
                          <p className='border-l pl-3 rounded-md border-gray-400'  >Database Management System</p>                   
                          <p className='border-l pl-3 rounded-md border-gray-400'  >Degitial Electronics</p>                   
                </div>
                <div data-aos="fade-right" className='h-auto w-[92%] mx-auto md:w-[49%] border border-red-200 rounded-sm my-2 md:my-0 py-10 px-5 md:text-[20px] ' > 
                          <h1 className='h-8 w-[100%] flex justify-center mb-5 items-center font-outfit font-bold text-black  bg-pink-300 '>Fourth Sem</h1>                               
                          <p className='border-l pl-3 rounded-md border-gray-400'  >Discrete Mathematics</p>
                          <p className='border-l pl-3 rounded-md border-gray-400'  >Web Technologies</p>
                          <p className='border-l pl-3 rounded-md border-gray-400'  >Operating System</p>
                          <p className='border-l pl-3 rounded-md border-gray-400'  >Object Oriented Programming</p>
                          <p className='border-l pl-3 rounded-md border-gray-400'  >Computer Organisation & Architecture</p>
                          <p className='border-l pl-3 rounded-md border-gray-400'  >Organizational Behaviour</p>
                          <p className='border-l pl-3 rounded-md border-gray-400'  >Environmental Science</p>
                </div>
            </div>
            {/* <button  data-aos="fade-up"  className='h-8 w-[100%]  font-bold rounded-sm  my-10 border border-red-300 bg-zinc-700  hover:border-green-400 hover:text-[15px] transform ease-in-out duration-200 ' > Lectures & PYQ's </button> */}

        </div>

        {/* separation line */}
        <div id='third' className=' h-[1px] w-[90%] bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto '></div>





        {/* Third Year  */}
        <div  className='w-[90%] m-auto pt-16 pb-16 opacity-50 pointer-events-none select-none relative '> 
                            <span className='font-gorditas h-16 w-[60] flex justify-center items-center text-[25px] my-5 ' >Third Year</span>


                {/* Optional overlay “Coming Soon” */}
                <div className="absolute inset-0 flex justify-center items-start mt-32 z-10">
                    <p className="  backdrop-blur-md bg-black/70 text-white px-4 py-2 rounded-md text-sm md:text-base">
                    🚧 Coming Soon 🚧
                    </p>
                </div>


            <div className='md:flex   overflow-x-hidden'>
                <div data-aos="fade-left" className='h-auto w-[92%] mx-auto md:w-[49%] border border-red-200 rounded-sm my-2 md:my-0 py-10 px-5  md:text-[20px] ' > 
                          <h1 className='h-8 w-[100%]  flex justify-center mb-5 items-center font-outfit font-bold text-black  bg-pink-300 '>Fifth Sem</h1>  
                          <p className='border-l pl-3 rounded-md border-gray-400'  >-NA-</p>
                          <p className='border-l pl-3 rounded-md border-gray-400'  >-NA-</p>
                          <p className='border-l pl-3 rounded-md border-gray-400'  >-NA-</p>
                          <p className='border-l pl-3 rounded-md border-gray-400'  >-NA-</p>
                          <p className='border-l pl-3 rounded-md border-gray-400'  >-NA-</p>                   
                </div>
                <div data-aos="fade-right" className='h-auto w-[92%] mx-auto md:w-[49%] border border-red-200 rounded-sm my-2 md:my-0 py-10 px-5 md:text-[20px] ' > 
                          <h1 className='h-8 w-[100%] flex justify-center mb-5 items-center font-outfit font-bold text-black  bg-pink-300 '>Sixth Sem</h1>                               
                          <p className='border-l pl-3 rounded-md border-gray-400'  >-NA-</p>
                          <p className='border-l pl-3 rounded-md border-gray-400'  >-NA-</p>
                          <p className='border-l pl-3 rounded-md border-gray-400'  >-NA-</p>
                          <p className='border-l pl-3 rounded-md border-gray-400'  >-NA-</p>
                </div>
            </div>
            {/* <button   data-aos="fade-up" className='h-8 w-[100%]  font-bold rounded-sm  my-10 border border-red-300 bg-zinc-700  hover:border-green-400 hover:text-[15px] transform ease-in-out duration-200 ' > Lectures & PYQ's </button> */}

        </div>

         {/* separation line */}
         <div id='fourth' className=' h-[1px] w-[90%] bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto '></div>







        {/* fourth Year  */}
        <div  className='w-[90%] m-auto pb-16 pt-16 opacity-50 pointer-events-none select-none relative  '> 
                            <span className=' font-gorditas h-16 w-[60] flex justify-center items-center text-[25px] my-5 ' >Fourth Year</span>


                {/* Optional overlay “Coming Soon” */}
                <div className="absolute inset-0 flex justify-center items-start mt-32 z-10">
                    <p className="  backdrop-blur-md bg-black/70 text-white px-4 py-2 rounded-md text-sm md:text-base">
                    🚧 Coming Soon 🚧
                    </p>
                </div>


            <div className='md:flex   overflow-x-hidden'>
                <div data-aos="fade-left" className='h-auto w-[92%] mx-auto md:w-[49%] border border-red-200 rounded-sm my-2 md:my-0 py-10 px-5  md:text-[20px] ' > 
                          <h1 className='h-8 w-[100%]  flex justify-center mb-5 items-center font-outfit font-bold text-black  bg-pink-300 '>Seventh Sem</h1>  
                          <p className='border-l pl-3 rounded-md border-gray-400'  >-NA-</p>
                          <p className='border-l pl-3 rounded-md border-gray-400'  >-NA-</p>
                          <p className='border-l pl-3 rounded-md border-gray-400'  >-NA-</p>
                          <p className='border-l pl-3 rounded-md border-gray-400'  >-NA-</p>
                          <p className='border-l pl-3 rounded-md border-gray-400'  >-NA-</p>                   
                </div>
                <div data-aos="fade-right" className='h-auto w-[92%] mx-auto md:w-[49%] border border-red-200 rounded-sm my-2 md:my-0 py-10 px-5 md:text-[20px] ' > 
                          <h1 className='h-8 w-[100%] flex justify-center mb-5 items-center font-outfit font-bold text-black  bg-pink-300 '>Eighth Sem</h1>                               
                          <p className='border-l pl-3 rounded-md border-gray-400'  >-NA-</p>
                          <p className='border-l pl-3 rounded-md border-gray-400'  >-NA-</p>
                          <p className='border-l pl-3 rounded-md border-gray-400'  >-NA-</p>
                          <p className='border-l pl-3 rounded-md border-gray-400'  >-NA-</p>
                </div>
            </div>
            {/* <button    data-aos="fade-up" className='h-8 w-[100%]  font-bold rounded-sm  my-10 border border-red-300 bg-zinc-700  hover:border-green-400 hover:text-[15px] transform ease-in-out duration-200 ' > Lectures & PYQ's </button> */}

        </div>
        
         <h1 className='w-[100%] flex justify-center'>Thank You  ❤️ </h1>
         
         {/* separation line */}
         <div className=' h-[1px] w-[90%] mb-10 bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto '></div>

        







                {/* fotter */}
                <div className='h-72 w-full bg-slate-900 md:bg-slate-950 text-center select-none ' >
                    <h1 className='text-[20px] py-5 font-bold'>Reach ME</h1>

                    <div className='flex justify-center items-center gap-5'>
                        <a href="https://instagram.com/yash_yachwad/" target='_blank'> <img className='size-6' src={Insta} alt="" /> </a>
                        <a href="https://x.com/yashyachwad" target='_blank'> <img className='size-6' src={X} alt="" /> </a>
                        <a href="https://www.linkedin.com/in/yashyachwad/" target='_blank'> <img className='size-6' src={Linkedin} alt="" /> </a>
                    </div>
                    <a href="https://www.google.com/search?q=yash+yachwad&rlz=1C1RXQR_enIN1117IN1117&oq=yash+y&gs_lcrp=EgZjaHJvbWUqCAgAEEUYJxg7MggIABBFGCcYOzIGCAEQRRg5MgYIAhBFGDsyBggDECMYJzIHCAQQABiABDIGCAUQRRg8MgYIBhBFGDwyBggHEEUYPNIBCDIzNTZqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8" target='_blank'><span className='h-8 py-3  flex justify-center hover:text-yellow-300 '> @yashyachwad   </span></a>
                </div>


    </div>
  )
}

export default Body
