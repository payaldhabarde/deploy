import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import Footer from './Footer'
import Contact from './Contact'
import TeckSkills from './TeckSkills'
const Portfolio = () => {
const [show,setShow] = useState(false)
const navigate = useNavigate()
  return (
    <>
      
      <nav className='bg-[#404040] text-white px-6 py-4 border-gray-300 md:px-12 md:py-6 flex relative justify-between '>
        <div >

        <button  type="button" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Payal Dhabarde</button>
        </div>
        <div className=' gap-7 hidden md:flex'>
           
        <button onClick={()=>navigate('/TeckSkills')} type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">TechSkills</button>

           <button onClick={()=>navigate('/Project')} type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Project</button>

           <button onClick={()=>navigate('/contact')}  type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Contact Me</button>

        </div>
        <div className='w-12 h-12 md:hidden bg-orange-500 block ' onClick={()=>setShow(!show)}>
       
        </div>
     
      </nav>


    {show?  <div className='absolute top-18 h-20 w-34 bg-green-100  md:hidden z-[1] border-solid font-medium text-pink-400'>
    
          <a href='/TeckSkills'>  <h3>Tech Skills</h3> </a>
          <a href='/project'> <h3>Project</h3></a>
          <a href='/contact'> <h3 >Contact Me</h3></a>
</div>:null}


<div className='md:flex block w-full h-screen  bg-[#415453] justify-between gap-5 px-8 mt-5'>

    <div className='hidden md:block  h-full w-1/2 bg-[#413253] justify-center items-center flex'>
        <img src="/img1/me11.png" alt='img' className='h-full w-full resize-both'/>
      
    </div>

    <div className='h-full md:w-1/2 bg-cyan-800 justify-center items-center flex w-full '>
      <div className='text-white'>

        <h1><strong><i>Front-End
Software
Developer</i></strong></h1>
        <p> Resolving design problems, building smart user interfaces and</p><p> useful interactions, developing rich web applications and seamless</p> web experiences,
       frontend designs.
      
        </div>
    </div>
</div>

<TeckSkills/>
<Contact/>
 <Footer/> 
    </>
  )
}

export default Portfolio
