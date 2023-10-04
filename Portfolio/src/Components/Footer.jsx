import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import PhoneIcon from '@mui/icons-material/Phone';
const Footer = () => {
  return (
    <>
    
    <div className='md:w-full text-white bg-cyan-700 py-5  gap-4 mt-5 ... ring-2 ring-cyan-500 mb-8  px-6 py-4 border-gray-300 md:px-12 md:py-6 flex relative justify-between'>

      
            <div className='gap-9 hidden md:flex p-3 letter-spacing: 0.1em on'>
           

                        <ul className='md:mt-2 md:gap-4'>
                      <li>
                        <a href="/" className="active"><HomeIcon />&nbsp;
                           Home
                        </a>
                      </li>
                      <li>
                        <a href="/"> <InfoIcon/> &nbsp;About</a>
                      </li>
                      <li>
                        <a href="/TeckSkills"><CodeOffIcon/>&nbsp; Skill</a>
                      </li>
                     
                      <li>
                        <a href="/contact"><PhoneIcon/>&nbsp; Contact</a>
                      </li>
                    </ul>

                
        
    </div>

    <div className='gap-7 hidden md:flex'>
           

      <img src='./img1/binary.gif' className='h-40 w-96'/>

                
        
    </div>
    <div className='md:px-12 md:py-6 md:flex relative justify-between gap-7'>
    
            <a href='www.instagram.com' ><InstagramIcon/></a>
            <a href='www.facebook.com' ><FacebookIcon/></a>

            
            <a href='https://www.linkedin.com/in/payal-dhabarde-7a5584218/' ><LinkedInIcon/></a>
            <a href='www.mail.com' > <EmailIcon/></a>
            
    </div>
</div>
    </>
  )
}

export default Footer
