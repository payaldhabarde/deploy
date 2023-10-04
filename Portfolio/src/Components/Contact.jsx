import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Footer from './Footer';
const Contact = () => {
  return (
   <>
    <div  className='md:hidden bg-[#546676] md:h-screen  text-white  px-6 py-4 border-gray-300 md:flex block w-full justify-between gap-5 px-8 mt-5 cover'>
      

      <div style={{backgroundImage: `url(${'./img1/animate.gif'})`}} className='hidden md:block  h-full w-1/2 justify-center items-center flex-1 bg-no-repeat pl-9 ' >
      
      <div className='mt-5 ml-5 font-medium '>
        <h1 className='text-gray-400'>Contact Number</h1>
        <strong><PhoneIcon/> 9890582762</strong>
        
      
            <h1 className='text-gray-400'>E-mail</h1>
            <strong><EmailIcon/> dhabardepayal@gmail.com</strong>
            </div>

            
      </div>
      <div className='flex-1 mt-1'>
          <a href='./img/cv.pdf' ><button class="bg-cyan-500 hover:bg-gray-400 text-white-800 font-bold py-2 px-4 rounded inline-flex items-center w-full h-25">
  <svg class="fill-current w-6 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
  <span >My_CV</span>
</button></a> 

<img src='./img1/coder.gif' className='h-96 w-full mt-12'/>
           
            </div>
<div />
    
  
    </div>
    </>
   
  )
}

export default Contact
