import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Youtube  from '../assets/Youtube.png' ;

const First = ( { theme,text ,icon , changeTheme}) => {
const [ firstOpen , setFirstOpen ] = useState(false);
const [ secondOpen , setSecondOpen ] = useState(false);
// const [ thirdOpen , setThirdOpen ] = useState(false);   after use 
// const [ fourthOpen , setFourthOpen ] = useState(false);  after use
const navigate = useNavigate();





  return (
    <div id='top' style={{ backgroundColor: theme, color: text}} >

    {/* btn for go back to home page  */}
    <div className='h-24 md:h-32 w-auto px-5 flex flex-col justify-end   ' style={{ background:theme , color: text}}>
            <div onClick={() => navigate("/")} className='h-8 w-20 flex justify-center border-b rounded-md  items-center bg-stone-700 hover:scale-105 hover:bg-stone-800 hover:text-orange-200 hover:cursor-pointer '>Go Back</div>
    </div>


    {/* btn for First year on click extedn the screen and opens the all vdo , notes  */}
    <div onClick={() => setFirstOpen(!firstOpen)} className='mt-20 mb-20 h-10  w-[80%] mx-auto bg-red-900 flex justify-start items-center px-10 rounded-sm hover:scale-95 hover:cursor-pointer  transform  duration-300' >
        First Year 
    </div>

    { firstOpen && (
                // first year 
                <div className=' h-auto  w-[100%] '  >
            
                        <div >
                            <span className='font-gorditas h-10 w-[60] text-[20px] flex justify-center items-center ' >Index</span>
                        </div>
            
            
            
                        <div className='md:flex flex-wrap gap-5 pl-[15%] pr-[15%] md:pr-0 md:pl-[10%] py-5 w-[100%] '>
                            <div className='h-auto mb-5 md:mb-0  w-[100%] md:w-[40%] border border-purple-500 hover:cursor-pointer hover:text-black overflow-hidden  rounded-sm flex justify-center items-center  '>
                                <div className='h-[100%] w-[100%] font-bold  flex-col  transition-transform duration-200 ease-in-out hover:scale-105  '>
                                <h1 className='pl-[15%] bg-purple-300 p-2 border-b' >Basics of Eelctrical Engineering</h1> 
                                <div className='text-[14px] font-outfit text-slate-400 flex  flex-col px-10 py-8 gap-3 ' >
                                    <p>Unit 1 : DC Circuit</p>
                                    <p>Unit 2 : AC Circuit </p>
                                    <p>Unit 3 : Transformer & Machines </p>
                                    <p>Unit 4 : Ele Mesurments & Applicatons </p>
                                </div>
                            </div>
                            </div>
            
                            <div className='h-auto mb-5 md:mb-0  w-auto md:w-[40%] border border-purple-500 hover:cursor-pointer hover:text-black overflow-hidden  rounded-sm flex justify-center items-center  '>
                                <div className='h-[100%] w-[100%] font-bold  flex-col  transition-transform duration-200 ease-in-out hover:scale-105  '>
                                <h1 className='pl-[24%] bg-purple-300 p-2 border-b' >Semiconductor Physics</h1> 
                                <div className='text-[10px] font-outfit text-slate-400 flex  flex-col px-10 py-8 gap-3 ' >
                                <p>Unit 1 : Electronic Materials</p>
                                <p>Unit 2 : Semiconductors </p>
                                <p>Unit 3 : Light-semiconductor interaction </p>
                                <p>Unit 4 : Measurements & Semiconductor Materials </p>
                                </div>
                                </div>
                            </div>
              
              
                            <div className='h-auto mb-5 md:mb-0  w-auto md:w-[40%] border border-purple-500 hover:cursor-pointer hover:text-black overflow-hidden  rounded-sm flex justify-center items-center  '>
                                <div className='h-[100%] w-[100%] font-bold  flex-col  transition-transform duration-200 ease-in-out hover:scale-105  '>
                                <h1 className='pl-[20%] bg-purple-300 p-2 border-b' >M1 : Calculus & Algebra</h1> 
                                <div className='text-[14px] font-outfit text-slate-400 flex  flex-col px-10 py-8 gap-3 ' >
                                <p>Unit 1 : Calculus</p>
                                <p>Unit 2 : Matrices </p>
                                <p>Unit 3 : Vector spaces I </p>
                                <p>Unit 4 : Vector spaces II </p>
                                </div>
                                </div>
                            </div>
              
              
                            <div className='h-auto mb-5 md:mb-0  w-auto md:w-[40%] border border-purple-500 hover:cursor-pointer hover:text-black overflow-hidden  rounded-sm flex justify-center items-center  '>
                                <div className='h-[100%] w-[100%] font-bold  flex-col  transition-transform duration-200 ease-in-out hover:scale-105  '>
                                <h1 className='pl-[15%] bg-purple-300 p-2 border-b' >Engineering Graphics & Design</h1> 
                                <div className='text-[10px] font-outfit text-slate-400 flex  flex-col px-10 py-8 gap-3 ' >
                                <p>Unit 1 : Introduction , Orthographic Projection </p>
                                <p>Unit 2 : Sections & Sectional views   </p>
                                <p>Unit 3 : Overview of Computer Graphics </p>
                                <p>Unit 4 : Demonstration of Team Project  </p>
                                </div>
                                </div>
                            </div>
              
              
                            <div className='h-auto mb-5 md:mb-0  w-auto md:w-[40%] border border-purple-500 hover:cursor-pointer hover:text-black overflow-hidden  rounded-sm flex justify-center items-center  '>
                                <div className='h-[100%] w-[100%] font-bold  flex-col  transition-transform duration-200 ease-in-out hover:scale-110  '>
                                <h1 className='pl-[20%] bg-purple-300 p-2 border-b' >English Language SKills</h1> 
                                <div className='text-[14px] font-outfit text-slate-400 flex  flex-col px-10 py-8 gap-3 ' >
                                <p>Unit 1 : Writing Skills</p>
                                <p>Unit 2 : Vocabulary Building </p>
                                <p>Unit 3 : Phonetics  </p>
                                <p>Unit 4 : Reading & Writing </p>
                                </div>
                                </div>
                            </div>
                         
                            <div className='h-auto mb-5 md:mb-0  w-auto md:w-[40%] border border-purple-500 hover:cursor-pointer hover:text-black overflow-hidden  rounded-sm flex justify-center items-center  '>
                                <div className='h-[100%] w-[100%] font-bold  flex-col  transition-transform duration-400 ease-in-out hover:scale-110  '>
                                <h1 className='pl-[25%] bg-purple-300 p-2 border-b' > C Programming</h1> 
                                <div className='text-[14px] font-outfit text-slate-400 flex  flex-col px-10 py-8 gap-3 ' >
                                <p>Unit 1 : Introduction to C Programming</p>
                                <p>Unit 2 : Control Statements & Loops </p>
                                <p>Unit 3 : Arrays, Strings & Functiuons </p>
                                <p>Unit 4 : Pointer & File Handeling </p>
                                </div>
                                </div>
                            </div>
            
            
                        </div>
            
                            <div className='flex justify-center items-center'>
                              <dvi className=' bg-zinc-900 text-white font-outfit transform duration-300   py-1 my-10 rounded-sm px-16 md:px-10 border border-orange-400 '>Video Lectures </dvi>
                            </div>


                            {/* lectures link  */}
                            <div className='w-[70%]  h-auto  mx-auto flex-col gap-10 mb-10 border border-slate-400 '>

                                <div className='flex flex-col  justify-evenly items-center mx-auto h-auto  gap-3  py-5  w-[100%]' >
                                    <span className=' h-7 flex items-center justify-center  rounded-md w-auto px-8 border border-slate-600'>Basic Electrical Engineering </span>


                                    <div className='h-auto w-[100%] flex justify-evenly md:justify-around  items-center' >
                                        <div  className='flex flex-col justify-start gap-3'  > 
                                              <div  className=' font-coda pb-3 '  >Unit</div>
                                            <div className=' text-slate-600' >AC Circuit</div>
                                            <div className=' text-slate-600' >DC Circuit</div>
                                            <div className='hidden md:block text-slate-600'>Transformer & Machines</div> <div className='md:hidden  text-slate-600'>Transformer</div>
                                            <div className='hidden md:block text-slate-600'>Electrical Measures & Applications</div> <div className='md:hidden  text-slate-600'>Ele. Measure</div>
                                            
                                        </div>
                                        <div  className='flex flex-col justify-center items-center gap-3'  > 
                                             <div className=' font-coda  pb-3'>   Lecture</div>
                                            <div><a href="https://www.youtube.com/playlist?list=PLT3bOBUU3L9iC-ZcBJbQOOdt5uBsEkZJW" target='_blank'>  <img className='size-6 hover:scale-110 ' src={Youtube} alt="" />  </a></div>
                                            <div><a href="https://www.youtube.com/playlist?list=PLT3bOBUU3L9ikq6a7cArc7BDJoz5eEXnt" target='_blank'>  <img className='size-6 hover:scale-110 ' src={Youtube} alt="" />  </a></div>
                                            <div><a href="https://www.youtube.com/playlist?list=PLO02gp43HpvRLQDen1DxaST4imKQF92Xe" target='_blank'>  <img className='size-6 hover:scale-110 ' src={Youtube} alt="" />  </a></div>
                                            <div><a href="https://www.youtube.com/playlist?list=PLJjTN84aEf7lW2JtXC00cxrU-oMmd1oM5" target='_blank'>  <img className='size-6 hover:scale-110 ' src={Youtube} alt="" />  </a></div>
                                        </div>
                                        <div className='flex flex-col justify-center items-center gap-3' > 
                                            <div  className=' font-coda pb-3 '  >PYQ</div>
                                            <a href="https://www.mdustudy.com/papers/btech-1-sem-basic-electrical-engineering-ole-3010-apr-2021.pdf" target='_blank'><div className=' text-slate-600' >Sem1</div> </a>
                                            <a href="https://www.mdustudy.com/papers/btech-1-sem-basic-electrical-engineering-3010-feb-2022.pdf" target='_blank'><div className=' text-slate-600' >Sem1</div></a>
                                            <a href="https://www.mdustudy.com/papers/btech-2-sem-basic-of-electrical-engineering-3010-may-2019.pdf" target='_blank'><div className=' text-slate-600' >Sem1</div> </a>
                                            <a href="https://www.mdustudy.com/papers/btech-1-sem-basic-electrical-engineering-3010-dec-2018.pdf" target='_blank'><div className=' text-slate-600' >Sem1</div></a>
                                            
                                        </div  >

                                    </div>

                               </div>
                                             
                            </div>



                            {/* lectures link  */}
                            <div className='w-[70%]  h-auto  mx-auto flex-col gap-10 mb-10 border border-slate-400 '>

                                <div className='flex flex-col  justify-evenly items-center mx-auto h-auto  gap-3  py-5  w-[90%]' >
                                    <span className=' h-7 flex items-center justify-center  rounded-md w-auto px-8 border border-slate-600'>Semiconductor Physics </span>


                                    <div className='h-auto w-[100%] flex justify-evenly md:justify-around  items-center' >
                                        <div  className='flex flex-col justify-start gap-3'  > 
                                              <div  className=' font-coda pb-3 '  >Unit</div>
                                            <div className=' text-slate-600' >Electronic Material</div>
                                            <div className=' text-slate-600' >Semiconductors</div>
                                            <div className='hidden md:block text-slate-600'>Light semiconductor interaction</div> <div className='md:hidden  text-slate-600'>Light Semi Inter</div>
                                            <div className='hidden md:block text-slate-600'>Measurements & Semicond. Materials</div> <div className='md:hidden  text-slate-600'>Meas. & Semi Mate.</div>
                                            
                                        </div>
                                        <div  className='flex flex-col justify-center items-center gap-3'  > 
                                             <div className=' font-coda  pb-3'>   Lecture</div>
                                            <div><a href="https://www.youtube.com/playlist?list=PLbEcQ5OsD1QWPzPxBFaVTzsHIY1yF0DU6" target='_blank'>  <img className='size-6 hover:scale-110 ' src={Youtube} alt="" />  </a></div>
                                            <div><a href="https://www.youtube.com/playlist?list=PLDB7TZPznYkXfiRBsKZzIoWKPP3fqN46q" target='_blank'>  <img className='size-6 hover:scale-110 ' src={Youtube} alt="" />  </a></div>
                                            <div><a href="https://www.youtube.com/playlist?list=PLwa5llh9Cc4qsyOhvqtXLdOq_54mialV5" target='_blank'>  <img className='size-6 hover:scale-110 ' src={Youtube} alt="" />  </a></div>
                                            <div><a href="https://www.youtube.com/watch?v=b28Kg0o2iT8&list=PL3qvHcrYGy1u112gfsHycdWaLTVRt8ame&index=42" target='_blank'>  <img className='size-6 hover:scale-110 ' src={Youtube} alt="" />  </a></div>
                                        </div>
                                        <div className='flex flex-col justify-center items-center gap-3' > 
                                            <div  className=' font-coda pb-3 '  >PYQ</div>
                                            <a href="https://www.mdustudy.com/papers/btech-1-sem-semiconductor-physics-3003-feb-2022.pdf">  <div className=' text-slate-600' >Sem1</div></a>
                                            <a href="https://www.mdustudy.com/papers/btech-2-sem-semiconductor-physics-3003-jul-2021.pdf">  <div className=' text-slate-600' >Sem1</div></a>
                                            <a href="https://www.mdustudy.com/papers/btech-1-sem-semiconductor-physics-3003-dec-2018.pdf">  <div className=' text-slate-600' >Sem1</div></a>
                                            <a href="">  <div className=' text-slate-600' >Sem1</div></a>
                                        </div  >

                                    </div>

                               </div>
                                             
                            </div>    
                            
                            {/* lectures link  */}
                            <div className='w-[70%]  h-auto  mx-auto flex-col gap-10 mb-10 border border-slate-400 '>

                                <div className='flex flex-col  justify-evenly items-center mx-auto h-auto  gap-3  py-5  w-[90%]' >
                                    <span className=' h-7 flex items-center justify-center  rounded-md w-auto px-8 border border-slate-600'>M1 : Calculus & Algebra </span>


                                    <div className='h-auto w-[100%] flex justify-evenly md:justify-around  items-center' >
                                        <div  className='flex flex-col justify-start gap-3'  > 
                                              <div  className=' font-coda pb-3 '  >Unit</div>
                                            <div className=' text-slate-600' >Calculus</div>
                                            <div className=' text-slate-600' >Matrices</div>
                                            <div className='hidden md:block text-slate-600'>Vector Space I </div> <div className='md:hidden  text-slate-600'>Vector Space I</div>
                                            <div className='hidden md:block text-slate-600'>Vector Space II</div> <div className='md:hidden  text-slate-600'>Vector Space II</div>
                                            
                                        </div>
                                        <div  className='flex flex-col justify-center items-center gap-3'  > 
                                             <div className=' font-coda  pb-3'>   Lecture</div>
                                            <div><a href="https://www.youtube.com/playlist?list=PLT3bOBUU3L9hsRRQi1X_4kn6Lw6K_-9cq" target='_blank'>  <img className='size-6 hover:scale-110 ' src={Youtube} alt="" />  </a></div>
                                            <div><a href="https://www.youtube.com/playlist?list=PLT3bOBUU3L9imMlPeqnVYZqKqycvSK_ms" target='_blank'>  <img className='size-6 hover:scale-110 ' src={Youtube} alt="" />  </a></div>
                                            <div><a href="https://www.youtube.com/playlist?list=PLU6SqdYcYsfJOGZdxUpDk3w9o-w94-RoG" target='_blank'>  <img className='size-6 hover:scale-110 ' src={Youtube} alt="" />  </a></div>
                                            <div><a href="https://www.youtube.com/playlist?list=PLU6SqdYcYsfJOGZdxUpDk3w9o-w94-RoG" target='_blank'>  <img className='size-6 hover:scale-110 ' src={Youtube} alt="" />  </a></div>
                                        </div>
                                        <div className='flex flex-col justify-center items-center gap-3' > 
                                            <div  className=' font-coda pb-3 '  >PYQ</div>
                                            <a href="https://www.mdustudy.com/papers/btech-1-sem-calculus-and-linear-algebra-3008-feb-2022.pdf">  <div className=' text-slate-600' >Sem1</div></a>
                                            <a href="https://www.mdustudy.com/papers/btech-1-sem-math-1-calculus-and-linear-algebra-3008-mar-2021.pdf">  <div className=' text-slate-600' >Sem1</div></a>
                                            <a href="https://www.mdustudy.com/papers/btech-1-sem-mathematics-1-3008-dec-2018.pdf">  <div className=' text-slate-600' >Sem1</div></a>
                                            <a href="https://www.mdustudy.com/papers/btech-me-1-sem-mathematics-1-calculus-and-matrices-3007-dec-2018.pdf">  <div className=' text-slate-600' >Sem1</div></a>
                                        </div  >

                                    </div>

                               </div>
                                             
                            </div>                            {/* lectures link  */}
                            <div className='w-[70%]  h-auto  mx-auto flex-col gap-10 mb-10 border border-slate-400 '>

                                <div className='flex flex-col  justify-evenly items-center mx-auto h-auto  gap-3  py-5  w-[90%]' >
                                    <span className=' h-7 flex items-center justify-center  rounded-md w-auto px-8 border border-slate-600'>Engi. Graphics & Design </span>


                                    <div className='h-auto w-[100%] flex justify-evenly md:justify-around  items-center' >
                                        <div  className='flex flex-col justify-start gap-3'  > 
                                              <div  className=' font-coda pb-3 '  >Unit</div>
                                            <div className=' text-slate-600' >Introduction</div>
                                            <div className=' text-slate-600' >Section & Setoinal</div>
                                            <div className='hidden md:block text-slate-600'>Overview Of Computer Graphics</div> <div className='md:hidden  text-slate-600'>Graphics Overview </div>
                                            <div className='hidden md:block text-slate-600'>Demonstration of Team Project</div> <div className='md:hidden  text-slate-600'>Ele. Measure</div>
                                            
                                        </div>
                                        <div  className='flex flex-col justify-center items-center gap-3'  > 
                                             <div className=' font-coda  pb-3'>   Lecture</div>
                                            <div><a href="https://www.youtube.com/playlist?list=PL5LUX4rRPlvCfHMO6uFtz--dvaSeQyAzL" target='_blank'>  <img className='size-6 hover:scale-110 ' src={Youtube} alt="" />  </a></div>
                                            <div><a href="https://www.youtube.com/playlist?list=PLDN15nk5uLiBrAkdOhEvkmVPs2UtwfGao" target='_blank'>  <img className='size-6 hover:scale-110 ' src={Youtube} alt="" />  </a></div>
                                            <div><a href="https://www.youtube.com/playlist?list=PLYwpaL_SFmcAtxMe7ahYC4ZYjQHun_b-T" target='_blank'>  <img className='size-6 hover:scale-110 ' src={Youtube} alt="" />  </a></div>
                                            <div><a href="" target='_blank'>  <img className='size-6 hover:scale-110 ' src={Youtube} alt="" />  </a></div>
                                        </div>
                                        <div className='flex flex-col justify-center items-center gap-3' > 
                                            <div  className=' font-coda pb-3 '  >PYQ</div>
                                            <a href="">  <div className=' text-slate-600' >Sem1</div></a>
                                            <a href="">  <div className=' text-slate-600' >Sem1</div></a>
                                            <a href="">  <div className=' text-slate-600' >Sem1</div></a>
                                            <a href="">  <div className=' text-slate-600' >Sem1</div></a>
                                        </div  >

                                    </div>

                               </div>
                                             
                            </div>                            {/* lectures link  */}
                            <div className='w-[70%]  h-auto  mx-auto flex-col gap-10 mb-10 border border-slate-400 '>

                                <div className='flex flex-col  justify-evenly items-center mx-auto h-auto  gap-3  py-5  w-[90%]' >
                                    <span className=' h-7 flex items-center justify-center  rounded-md w-auto px-8 border border-slate-600'>English Skills </span>


                                    <div className='h-auto w-[100%] flex justify-evenly md:justify-around  items-center' >
                                        <div  className='flex flex-col justify-start  gap-3'  > 
                                              <div  className=' font-coda pb-3 '  >Unit</div>
                                            <div className=' text-slate-600' >Writing Skills</div>
                                            <div className=' text-slate-600' >Vocabulary Building</div>
                                            <div className=' text-slate-600'>Phonetics </div>
                                            <div className='text-slate-600'>Reading & Writing</div> 
                                            
                                        </div>
                                        <div  className='flex flex-col justify-center items-center gap-3'  > 
                                             <div className=' font-coda  pb-3'>   Lecture</div>
                                            <div><a href="https://www.youtube.com/playlist?list=PLVLoWQFkZbhXpGbcZ83T48qGywkCGyZFu" target='_blank'>  <img className='size-6 hover:scale-110 ' src={Youtube} alt="" />  </a></div>
                                            <div><a href="https://youtu.be/rppxDLUiJ-I?si=-BS-hLhDaRPVTp-N" target='_blank'>  <img className='size-6 hover:scale-110 ' src={Youtube} alt="" />  </a></div>
                                            <div><a href="https://youtu.be/ZPPdRj1BJAs?si=iAoDPDmuQyZRr0t5" target='_blank'>  <img className='size-6 hover:scale-110 ' src={Youtube} alt="" />  </a></div>
                                            <div><a href="https://youtu.be/-jxrZO4Aj54?si=9FzHspCuEpjw-R_X" target='_blank'>  <img className='size-6 hover:scale-110 ' src={Youtube} alt="" />  </a></div>
                                        </div>
                                        <div className='flex flex-col justify-center items-center gap-3' > 
                                            <div  className=' font-coda pb-3 '  >PYQ</div>
                                            <a href="">  <div className=' text-slate-600' >Sem1</div></a>
                                            <a href="">  <div className=' text-slate-600' >Sem1</div></a>
                                            <a href="">  <div className=' text-slate-600' >Sem1</div></a>
                                            <a href="">  <div className=' text-slate-600' >Sem1</div></a>
                                        </div  >

                                    </div>

                               </div>
                                             
                            </div>                            {/* lectures link  */}
                            <div className='w-[70%]  h-auto  mx-auto flex-col gap-10 mb-10 border border-slate-400 '>

                                <div className='flex flex-col  justify-evenly items-center mx-auto h-auto  gap-3  py-5  w-[90%]' >
                                    <span className=' h-7 flex items-center justify-center  rounded-md w-auto px-8 border border-slate-600'>C Programming </span>


                                    <div className='h-auto w-[100%] flex justify-evenly md:justify-around  items-center' >
                                        <div  className='flex flex-col justify-start  gap-3'  > 
                                              <div  className=' font-coda pb-3 '  >Unit</div>
                                            <div className=' text-slate-600' >Introduction</div>
                                            <div className=' text-slate-600' >Control Statements</div>
                                            <div className='hidden md:block text-slate-600'>Arrays , Strings & Functions </div> <div className='md:hidden  text-slate-600'>Arrays, Strings</div>
                                            <div className='hidden md:block text-slate-600'>Pointers & File Handeling</div> <div className='md:hidden  text-slate-600'>File Handeling</div>
                                            
                                        </div>
                                        <div  className='flex flex-col justify-center items-center gap-3'  > 
                                             <div className=' font-coda  pb-3'>   Lecture</div>
                                            <div><a href="https://youtu.be/EjavYOFoJJ0?si=o4_bM9iGB4CYwH8v" target='_blank'>  <img className='size-6 hover:scale-110 ' src={Youtube} alt="" />  </a></div>
                                            <div><a href="https://youtu.be/A_IgufxmIHk?si=T6ugzNz_wW5TuHTw" target='_blank'>  <img className='size-6 hover:scale-110 ' src={Youtube} alt="" />  </a></div>
                                            <div><a href="https://youtu.be/qKFBtCPwjgI?si=43p1c0TMKz9jI1gM" target='_blank'>  <img className='size-6 hover:scale-110 ' src={Youtube} alt="" />  </a></div>
                                            <div><a href="https://youtu.be/IBjGjDbwxSg?si=lw-mRJNIRUoKm96_" target='_blank'>  <img className='size-6 hover:scale-110 ' src={Youtube} alt="" />  </a></div>
                                        </div>
                                        <div className='flex flex-col justify-center items-center gap-3' > 
                                            <div  className=' font-coda pb-3 '  >PYQ</div>
                                            <a href="">  <div className=' text-slate-600' >Sem1</div></a>
                                            <a href="">  <div className=' text-slate-600' >Sem1</div></a>
                                            <a href="">  <div className=' text-slate-600' >Sem1</div></a>
                                            <a href="">  <div className=' text-slate-600' >Sem1</div></a>
                                        </div  >

                                    </div>

                               </div>
                                             
                            </div>


                        <div onClick={() => setFirstOpen(!firstOpen)} className=' h-8 w-[45%] mx-auto rounded-md hover:cursor-pointer hover:bg-slate-800 hover:text-orange-200 hover:scale-105 transform duration-300 bg-slate-700 flex justify-center items-center mb-32'>
                            Close First Year 
                        </div>






                </div>




    )}










{/* btn for First year on click extedn the screen and opens the all vdo , notes  */}
    <div onClick={() => setSecondOpen(!secondOpen)} className=' mb-20 h-10 mt-3 w-[80%] mx-auto bg-red-900 flex justify-start items-center px-10 rounded-sm hover:scale-95 hover:cursor-pointer  transform  duration-300' >
        Second Year 
    </div>    


    { secondOpen && (
                // first year 
                <div className=' h-auto '  >
            
                        <div >
                            <span className='font-gorditas h-10 w-[60] text-[20px] flex justify-center items-center ' >Index</span>
                        </div>
            
            
            
                        <div className='md:flex flex-wrap gap-5 pl-[15%] pr-[15%] md:pr-0 md:pl-[15%] py-5  '>
                            <div className='h-auto mb-5 md:mb-0  w-auto md:w-[40%] border border-purple-500 hover:cursor-pointer hover:text-black overflow-hidden  rounded-sm flex justify-center items-center  '>
                                <div className='h-[100%] w-[100%] font-bold  flex-col  transition-transform duration-200 ease-in-out hover:scale-105  '>
                                <h1 className='pl-[15%] bg-purple-300 p-2 border-b' >Database Management System</h1> 
                                <div className='text-[10px] font-outfit text-slate-400 flex  flex-col px-10 py-8 gap-3 ' >
                                    <p>Unit 1 : DB System Architecture</p>
                                    <p>Unit 2 : Relational Algebra </p>
                                    <p>Unit 3 : Storage Processing </p>
                                    <p>Unit 4 : DB Security </p>
                                </div>
                            </div>
                            </div>
            
                            <div className='h-auto mb-5 md:mb-0  w-auto md:w-[40%] border border-purple-500 hover:cursor-pointer hover:text-black overflow-hidden  rounded-sm flex justify-center items-center  '>
                                <div className='h-[100%] w-[100%] font-bold  flex-col  transition-transform duration-200 ease-in-out hover:scale-105  '>
                                <h1 className='pl-[24%] bg-purple-300 p-2 border-b' >Data Structres & Algorithm</h1> 
                                <div className='text-[10px] font-outfit text-slate-400 flex  flex-col px-10 py-8 gap-3 ' >
                                <p>Unit 1 : Introduction </p>
                                <p>Unit 2 : Stacks & Queues </p>
                                <p>Unit 3 : Linked Lists , Graph </p>
                                <p>Unit 4 : Sorting & Hashing </p>
                                </div>
                                </div>
                            </div>
              
              
                            <div className='h-auto mb-5 md:mb-0  w-auto md:w-[40%] border border-purple-500 hover:cursor-pointer hover:text-black overflow-hidden  rounded-sm flex justify-center items-center  '>
                                <div className='h-[100%] w-[100%] font-bold  flex-col  transition-transform duration-200 ease-in-out hover:scale-105  '>
                                <h1 className='pl-[15%] bg-purple-300 p-2 border-b' >M3: Multivar Calculus & Diff Eqn</h1> 
                                <div className='text-[10px] font-outfit text-slate-400 flex  flex-col px-10 py-8 gap-3 ' >
                                <p>Unit 1 : Multivariable Differential Calculus</p>
                                <p>Unit 2 : Multivariable Integral Calculus </p>
                                <p>Unit 3 : Differential Equation of First Order </p>
                                <p>Unit 4 : Differential Equation of Second & Higher Order </p>
                                </div>
                                </div>
                            </div>
              
              
                            <div className='h-auto mb-5 md:mb-0  w-auto md:w-[40%] border border-purple-500 hover:cursor-pointer hover:text-black overflow-hidden  rounded-sm flex justify-center items-center  '>
                                <div className='h-[100%] w-[100%] font-bold  flex-col  transition-transform duration-200 ease-in-out hover:scale-105  '>
                                <h1 className='pl-[15%] bg-purple-300 p-2 border-b' >Python Programming</h1> 
                                <div className='text-[10px] font-outfit text-slate-400 flex  flex-col px-10 py-8 gap-3 ' >
                                <p>Unit 1 : Introduction </p>
                                <p>Unit 2 : String, Text Files  </p>
                                <p>Unit 3 : List, Dictionary & Design with Function </p>
                                <p>Unit 4 : Object Oriented Concepts  </p>
                                </div>
                                </div>
                            </div>
              
              
                            <div className='h-auto mb-5 md:mb-0  w-auto md:w-[40%] border border-purple-500 hover:cursor-pointer hover:text-black overflow-hidden  rounded-sm flex justify-center items-center  '>
                                <div className='h-[100%] w-[100%] font-bold  flex-col  transition-transform duration-200 ease-in-out hover:scale-110  '>
                                <h1 className='pl-[20%] bg-purple-300 p-2 border-b' >Digital Electronics</h1> 
                                <div className='text-[10px] font-outfit text-slate-400 flex  flex-col px-10 py-8 gap-3 ' >
                                <p>Unit 1 : Fundamentals of DE</p>
                                <p>Unit 2 : Combinational Digital Circuits </p>
                                <p>Unit 3 : Sequential Circuits & Systems  </p>
                                <p>Unit 4 : A/D & D/A Converters </p>
                                </div>
                                </div>
                            </div>
                         
                            <div className='h-auto mb-5 md:mb-0  w-auto md:w-[40%] border border-purple-500 hover:cursor-pointer hover:text-black overflow-hidden  rounded-sm flex justify-center items-center  '>
                                <div className='h-[100%] w-[100%] font-bold  flex-col  transition-transform duration-400 ease-in-out hover:scale-110  '>
                                <h1 className='pl-[25%] bg-purple-300 p-2 border-b' > Economics For Engineering</h1> 
                                <div className='text-[10px] font-outfit text-slate-400 flex  flex-col px-10 py-8 gap-3 ' >
                                <p>Unit 1 : Introduction to Economics </p>
                                <p>Unit 2 : Demand , Production </p>
                                <p>Unit 3 : Market </p>
                                <p>Unit 4 : Indian Economy </p>
                                </div>
                                </div>
                            </div>
            
            
                        </div>
            
                            <div className='flex justify-center items-center'>
                              <dvi className=' bg-zinc-900 text-white font-outfit transform duration-300   py-1 my-10 rounded-sm px-16 md:px-10 border border-orange-400 '>Video Lectures </dvi>
                            </div>


                            {/* lectures link  */}
                            <div className='w-[70%]  h-auto  mx-auto flex-col gap-10 mb-10 border border-slate-400 '>

                                <div className='flex flex-col  justify-evenly items-center mx-auto h-auto  gap-3  py-5  w-[100%]' >
                                    <span className=' h-7 flex items-center justify-center  rounded-md w-auto px-8 border border-slate-600'>DBMS </span>


                                    <div className='h-auto w-[100%] flex justify-evenly md:justify-around  items-center' >
                                        <div  className='flex flex-col justify-start gap-3'  > 
                                              <div  className=' font-coda pb-3 '  >Unit</div>
                                            <div className=' text-slate-600' >DB Sys Architecture</div>
                                            <div className=' text-slate-600' >Relational Algebra</div>
                                            <div className='hidden md:block text-slate-600'>Storage Processing</div> <div className='md:hidden  text-slate-600'>Storage Processing</div>
                                            <div className='hidden md:block text-slate-600'>Database Security</div> <div className='md:hidden  text-slate-600'>DB Security</div>
                                            
                                        </div>
                                        <div  className='flex flex-col justify-center items-center gap-3'  > 
                                             <div className=' font-coda  pb-3'>   Lecture</div>
                                            <div><a href="https://youtu.be/8_W5JT7Jz2Y?si=QOKzYCUMaqHfXzWV" target='_blank'>  <img className='size-6 hover:scale-110 ' src={Youtube} alt="" />  </a></div>
                                            <div><a href="https://www.youtube.com/playlist?list=PLBlnK6fEyqRiXuITH4oB-wk2mjEADVHwU" target='_blank'>  <img className='size-6 hover:scale-110 ' src={Youtube} alt="" />  </a></div>
                                            <div><a href="https://youtu.be/GoQdB_CDBWM?si=dfrDt__4NtOFTZUm" target='_blank'>  <img className='size-6 hover:scale-110 ' src={Youtube} alt="" />  </a></div>
                                            <div><a href="https://youtu.be/uakTCU5Z_pg?si=7N-NUYocSbX2WzVf" target='_blank'>  <img className='size-6 hover:scale-110 ' src={Youtube} alt="" />  </a></div>
                                        </div>
                                        <div className='flex flex-col justify-center items-center gap-3' > 
                                            <div  className=' font-coda pb-3 '  >PYQ</div>
                                            <a href="#" target='_blank'><div className=' text-slate-600' >Sem1</div> </a>
                                            <a href="#" target='_blank'><div className=' text-slate-600' >Sem1</div></a>
                                            <a href="#" target='_blank'><div className=' text-slate-600' >Sem1</div> </a>
                                            <a href="#" target='_blank'><div className=' text-slate-600' >Sem1</div></a>
                                            
                                        </div  >

                                    </div>

                               </div>
                                             
                            </div>

                            {/* lectures link  */}
                            <div className='w-[70%]  h-auto  mx-auto flex-col gap-10 mb-10 border border-slate-400 '>

                                <div className='flex flex-col  justify-evenly items-center mx-auto h-auto  gap-3  py-5  w-[90%]' >
                                    <span className=' h-7 flex items-center justify-center  rounded-md w-auto px-8 border border-slate-600'>Data Sturctures & Algo </span>


                                    <div className='h-auto w-[100%] flex justify-evenly md:justify-around  items-center' >
                                        <div  className='flex flex-col justify-start gap-3'  > 
                                              <div  className=' font-coda pb-3 '  >Unit</div>
                                            <div className=' text-slate-600' >Introduction</div>
                                            <div className=' text-slate-600' >Stacks & Queues</div>
                                            <div className='hidden md:block text-slate-600'>Linked List , Graph</div> <div className='md:hidden  text-slate-600'>Linked List , Graph</div>
                                            <div className='hidden md:block text-slate-600'>Sorting & Hashing </div> <div className='md:hidden  text-slate-600'>Sorting & Hashing</div>
                                            
                                        </div>
                                        <div  className='flex flex-col justify-center items-center gap-3'  > 
                                             <div className=' font-coda  pb-3'>   Lecture</div>
                                            <div><a href="https://youtu.be/cOSTc6qBRQw?si=P3odzWhgFmwercmz" target='_blank'>  <img className='size-6 hover:scale-110 ' src={Youtube} alt="" />  </a></div>
                                            <div><a href="https://youtu.be/0X-fV-1ir9c?si=yGo2JkVKmoOGK_5_" target='_blank'>  <img className='size-6 hover:scale-110 ' src={Youtube} alt="" />  </a></div>
                                            <div><a href="https://youtu.be/LyuuqCVkP5I?si=xWsr3FpMFBQV906j" target='_blank'>  <img className='size-6 hover:scale-110 ' src={Youtube} alt="" />  </a></div>
                                            <div><a href="https://youtu.be/1jCFUv-Xlqo?si=kqBlCmoSLeZ2W4fE" target='_blank'>  <img className='size-6 hover:scale-110 ' src={Youtube} alt="" />  </a></div>
                                        </div>
                                        <div className='flex flex-col justify-center items-center gap-3' > 
                                            <div  className=' font-coda pb-3 '  >PYQ</div>
                                            <a href="#">  <div className=' text-slate-600' >Sem1</div></a>
                                            <a href="#">  <div className=' text-slate-600' >Sem1</div></a>
                                            <a href="#">  <div className=' text-slate-600' >Sem1</div></a>
                                            <a href="#">  <div className=' text-slate-600' >Sem1</div></a>
                                        </div  >

                                    </div>

                               </div>
                                             
                            </div>    
                            
                            {/* lectures link  */}
                            <div className='w-[70%]  h-auto  mx-auto flex-col gap-10 mb-10 border border-slate-400 '>

                                <div className='flex flex-col  justify-evenly items-center mx-auto h-auto  gap-3  py-5  w-[90%]' >
                                    <span className=' h-7 flex items-center justify-center  rounded-md w-auto px-8 border border-slate-600'>Multi Calculus & Diff Eqn </span>


                                    <div className='h-auto w-[100%] flex justify-evenly md:justify-around  items-center' >
                                        <div  className='flex flex-col justify-start gap-3'  > 
                                              <div  className=' font-coda pb-3 '  >Unit</div>
                                            <div className=' text-slate-600' > Diffe Calculus</div>
                                            <div className=' text-slate-600' >Integral Calculus</div>
                                            <div className='hidden md:block text-slate-600'>Differential Equation I order </div> <div className='md:hidden  text-slate-600'>Diff Eqn I</div>
                                            <div className='hidden md:block text-slate-600'>Differential Equation II</div> <div className='md:hidden  text-slate-600'>Diff Eqn II</div>
                                            
                                        </div>
                                        <div  className='flex flex-col justify-center items-center gap-3'  > 
                                             <div className=' font-coda  pb-3'>   Lecture</div>
                                            <div><a href="https://www.youtube.com/playlist?list=PLT3bOBUU3L9hsRRQi1X_4kn6Lw6K_-9cq" target='_blank'>  <img className='size-6 hover:scale-110 ' src={Youtube} alt="" />  </a></div>
                                            <div><a href="https://www.youtube.com/playlist?list=PLT3bOBUU3L9imMlPeqnVYZqKqycvSK_ms" target='_blank'>  <img className='size-6 hover:scale-110 ' src={Youtube} alt="" />  </a></div>
                                            <div><a href="https://www.youtube.com/playlist?list=PLU6SqdYcYsfJOGZdxUpDk3w9o-w94-RoG" target='_blank'>  <img className='size-6 hover:scale-110 ' src={Youtube} alt="" />  </a></div>
                                            <div><a href="https://www.youtube.com/playlist?list=PLU6SqdYcYsfJOGZdxUpDk3w9o-w94-RoG" target='_blank'>  <img className='size-6 hover:scale-110 ' src={Youtube} alt="" />  </a></div>
                                        </div>
                                        <div className='flex flex-col justify-center items-center gap-3' > 
                                            <div  className=' font-coda pb-3 '  >PYQ</div>
                                            <a href="https://www.mdustudy.com/papers/btech-1-sem-calculus-and-linear-algebra-3008-feb-2022.pdf">  <div className=' text-slate-600' >Sem1</div></a>
                                            <a href="https://www.mdustudy.com/papers/btech-1-sem-math-1-calculus-and-linear-algebra-3008-mar-2021.pdf">  <div className=' text-slate-600' >Sem1</div></a>
                                            <a href="https://www.mdustudy.com/papers/btech-1-sem-mathematics-1-3008-dec-2018.pdf">  <div className=' text-slate-600' >Sem1</div></a>
                                            <a href="https://www.mdustudy.com/papers/btech-me-1-sem-mathematics-1-calculus-and-matrices-3007-dec-2018.pdf">  <div className=' text-slate-600' >Sem1</div></a>
                                        </div  >

                                    </div>

                               </div>
                                             
                            </div> 
                            
                            {/* lectures link  */}
                            <div className='w-[70%]  h-auto  mx-auto flex-col gap-10 mb-10 border border-slate-400 '>

                                <div className='flex flex-col  justify-evenly items-center mx-auto h-auto  gap-3  py-5  w-[90%]' >
                                    <span className=' h-7 flex items-center justify-center  rounded-md w-auto px-8 border border-slate-600'>Python Programming </span>


                                    <div className='h-auto w-[100%] flex justify-evenly md:justify-around  items-center' >
                                        <div  className='flex flex-col justify-start gap-3'  > 
                                              <div  className=' font-coda pb-3 '  >Unit</div>
                                            <div className=' text-slate-600' >Introduction</div>
                                            <div className=' text-slate-600' >String , Text Files</div>
                                            <div className='hidden md:block text-slate-600'>List , Dictionary, Function</div> <div className='md:hidden  text-slate-600'>List,Dictionary </div>
                                            <div className='hidden md:block text-slate-600'>Object Oriented Concepts</div> <div className='md:hidden  text-slate-600'>OOPS</div>
                                            
                                        </div>
                                        <div  className='flex flex-col justify-center items-center gap-3'  > 
                                             <div className=' font-coda  pb-3'>   Lecture</div>
                                            <div><a href="https://www.youtube.com/playlist?list=PL5LUX4rRPlvCfHMO6uFtz--dvaSeQyAzL" target='_blank'>  <img className='size-6 hover:scale-110 ' src={Youtube} alt="" />  </a></div>
                                            <div><a href="https://www.youtube.com/playlist?list=PLDN15nk5uLiBrAkdOhEvkmVPs2UtwfGao" target='_blank'>  <img className='size-6 hover:scale-110 ' src={Youtube} alt="" />  </a></div>
                                            <div><a href="https://www.youtube.com/playlist?list=PLYwpaL_SFmcAtxMe7ahYC4ZYjQHun_b-T" target='_blank'>  <img className='size-6 hover:scale-110 ' src={Youtube} alt="" />  </a></div>
                                            <div><a href="" target='_blank'>  <img className='size-6 hover:scale-110 ' src={Youtube} alt="" />  </a></div>
                                        </div>
                                        <div className='flex flex-col justify-center items-center gap-3' > 
                                            <div  className=' font-coda pb-3 '  >PYQ</div>
                                            <a href="">  <div className=' text-slate-600' >Sem1</div></a>
                                            <a href="">  <div className=' text-slate-600' >Sem1</div></a>
                                            <a href="">  <div className=' text-slate-600' >Sem1</div></a>
                                            <a href="">  <div className=' text-slate-600' >Sem1</div></a>
                                        </div  >

                                    </div>

                               </div>
                                             
                            </div> 
                            
                            {/* lectures link  */}
                            <div className='w-[70%]  h-auto  mx-auto flex-col gap-10 mb-10 border border-slate-400 '>

                                <div className='flex flex-col  justify-evenly items-center mx-auto h-auto  gap-3  py-5  w-[90%]' >
                                    <span className=' h-7 flex items-center justify-center  rounded-md w-auto px-8 border border-slate-600'>Digital Electronics </span>


                                    <div className='h-auto w-[100%] flex justify-evenly md:justify-around  items-center' >
                                        <div  className='flex flex-col justify-start  gap-3'  > 
                                              <div  className=' font-coda pb-3 '  >Unit</div>
                                            <div className=' text-slate-600' >Fundamentals of DE</div>
                                            <div className=' text-slate-600' >Combinational Dig. Ckt</div>
                                            <div className=' text-slate-600'>Sequential Dig. Ckt </div>
                                            <div className='text-slate-600'>A/D & D/A Converters</div> 
                                            
                                        </div>
                                        <div  className='flex flex-col justify-center items-center gap-3'  > 
                                             <div className=' font-coda  pb-3'>   Lecture</div>
                                            <div><a href="https://www.youtube.com/playlist?list=PLVLoWQFkZbhXpGbcZ83T48qGywkCGyZFu" target='_blank'>  <img className='size-6 hover:scale-110 ' src={Youtube} alt="" />  </a></div>
                                            <div><a href="https://youtu.be/rppxDLUiJ-I?si=-BS-hLhDaRPVTp-N" target='_blank'>  <img className='size-6 hover:scale-110 ' src={Youtube} alt="" />  </a></div>
                                            <div><a href="https://youtu.be/ZPPdRj1BJAs?si=iAoDPDmuQyZRr0t5" target='_blank'>  <img className='size-6 hover:scale-110 ' src={Youtube} alt="" />  </a></div>
                                            <div><a href="https://youtu.be/-jxrZO4Aj54?si=9FzHspCuEpjw-R_X" target='_blank'>  <img className='size-6 hover:scale-110 ' src={Youtube} alt="" />  </a></div>
                                        </div>
                                        <div className='flex flex-col justify-center items-center gap-3' > 
                                            <div  className=' font-coda pb-3 '  >PYQ</div>
                                            <a href="">  <div className=' text-slate-600' >Sem1</div></a>
                                            <a href="">  <div className=' text-slate-600' >Sem1</div></a>
                                            <a href="">  <div className=' text-slate-600' >Sem1</div></a>
                                            <a href="">  <div className=' text-slate-600' >Sem1</div></a>
                                        </div  >

                                    </div>

                               </div>
                                             
                            </div> 
                            
                            {/* lectures link  */}
                            <div className='w-[70%]  h-auto  mx-auto flex-col gap-10 mb-10 border border-slate-400 '>

                                <div className='flex flex-col  justify-evenly items-center mx-auto h-auto  gap-3  py-5  w-[90%]' >
                                    <span className=' h-7 flex items-center justify-center  rounded-md w-auto px-8 border border-slate-600'>Economics For Engineering </span>


                                    <div className='h-auto w-[100%] flex justify-evenly md:justify-around  items-center' >
                                        <div  className='flex flex-col justify-start  gap-3'  > 
                                              <div  className=' font-coda pb-3 '  >Unit</div>
                                            <div className=' text-slate-600' >Introduction</div>
                                            <div className=' text-slate-600' >Demand , Products</div>
                                            <div className='hidden md:block text-slate-600'>Market  </div> <div className='md:hidden  text-slate-600'>Market </div>
                                            <div className='hidden md:block text-slate-600'>Indian Economy</div> <div className='md:hidden  text-slate-600'>Indian Economy</div>
                                            
                                        </div>
                                        <div  className='flex flex-col justify-center items-center gap-3'  > 
                                             <div className=' font-coda  pb-3'>   Lecture</div>
                                            <div><a href="https://youtu.be/EjavYOFoJJ0?si=o4_bM9iGB4CYwH8v" target='_blank'>  <img className='size-6 hover:scale-110 ' src={Youtube} alt="" />  </a></div>
                                            <div><a href="https://youtu.be/A_IgufxmIHk?si=T6ugzNz_wW5TuHTw" target='_blank'>  <img className='size-6 hover:scale-110 ' src={Youtube} alt="" />  </a></div>
                                            <div><a href="https://youtu.be/qKFBtCPwjgI?si=43p1c0TMKz9jI1gM" target='_blank'>  <img className='size-6 hover:scale-110 ' src={Youtube} alt="" />  </a></div>
                                            <div><a href="https://youtu.be/IBjGjDbwxSg?si=lw-mRJNIRUoKm96_" target='_blank'>  <img className='size-6 hover:scale-110 ' src={Youtube} alt="" />  </a></div>
                                        </div>
                                        <div className='flex flex-col justify-center items-center gap-3' > 
                                            <div  className=' font-coda pb-3 '  >PYQ</div>
                                            <a href="">  <div className=' text-slate-600' >Sem1</div></a>
                                            <a href="">  <div className=' text-slate-600' >Sem1</div></a>
                                            <a href="">  <div className=' text-slate-600' >Sem1</div></a>
                                            <a href="">  <div className=' text-slate-600' >Sem1</div></a>
                                        </div  >

                                    </div>

                               </div>
                                             
                            </div>









                </div>




    )}








{/* btn for First year on click extedn the screen and opens the all vdo , notes  */}
    <div onClick={() => setThirdOpen(!thirdOpen)} className='opacity-50  mb-20   h-10 mt-3 w-[80%] mx-auto bg-red-900 flex justify-start items-center px-10 rounded-sm hover:scale-95 hover:cursor-pointer  transform  duration-300' >
        Third Year 
    </div>

{/* btn for First year on click extedn the screen and opens the all vdo , notes  */}
    <div onClick={() => setFourthOpen(!fourthOpen)} className=' opacity-50  mb-20  h-10  mt-3 w-[80%] mx-auto bg-red-900 flex justify-start items-center px-10 rounded-sm hover:scale-95 hover:cursor-pointer  transform  duration-300' >
        Fourth Year 
    </div>
 

<div className='pb-32 flex justify-center'>
    Thank You !!
</div>



    </div>
  )
}

export default First
