import React from 'react';
import googlePlay from '../assets/google-play.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
  return (
    <footer className="bottom-0 left-0 w-full bg-primary-dark bg-opacity-90 text-white py-8 flex justify-center z-[999]">
      <div className='container mx-auto w-full flex flex-col items-center justify-center gap-4'>
        <div className='z-[1000] w-full flex-1 flex flex-col md:flex-row items-center md:items-start justify-around gap-4 md:gap-2'>
          <div className='flex flex-col items-center justify-center gap-2'>
            <div className='text-lg font-bold tracking-wide'>
              Social Links
            </div>
            <div className='flex flex-col items-center gap-1'>
              <div className='flex items-center gap-4'>
                <a
                href='https://www.instagram.com/o.c.u.l.u.s_s.p.i.t/'  
                target='_blank'
                className='flex items-center gap-1 font-semibold opacity-70 hover:opacity-100 cursor-pointer'>
                  <InstagramIcon sx={{
                    fontSize: 20
                  }} /> Instagram
                </a>
                <a
                href='https://www.linkedin.com/company/oculusseesall/'  
                target='_blank' 
                className='flex items-center gap-1 font-semibold opacity-70 hover:opacity-100 cursor-pointer'>
                  <LinkedInIcon sx={{
                    fontSize: 20
                  }} /> LinkedIn
                </a>
              </div>
              <div className='flex items-center gap-4'>
              <a
                href='https://twitter.com/oculusseesall?s=11&t=31V3U_6dN4dxqr_7A3vyaA'  
                target='_blank' 
                className='flex items-center gap-1 font-semibold opacity-70 hover:opacity-100 cursor-pointer' >
                  <XIcon sx={{
                    fontSize: 18
                  }} /> X (Twitter)
                </a>
                <a
                href='https://www.youtube.com/@oculuss.p.i.t209'  
                target='_blank' 
                className='flex items-center gap-1 font-semibold opacity-70 hover:opacity-100 cursor-pointer'>
                  <YouTubeIcon sx={{
                    fontSize: 20
                  }} /> YouTube
                </a>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-center justify-center gap-2'>
            <div className='text-lg font-bold tracking-wide'>
              Mobile App
            </div>
            <button>
              <img
                src={googlePlay}
                alt="Play Store"
                width={150}
              />
            </button>
          </div>
          <div className='flex flex-col items-center justify-center gap-2'>
            <div className='text-lg font-bold tracking-wide'>
              Legal
            </div>
            <div className='flex flex-col items-center justify-center'>
              <a 
              href='/privacy-policy'
              // target='_blank'
              className='cursor-pointer opacity-75 hover:opacity-100 hover:text-secondary-purple font-semibold'
              >Privacy Policy</a>
              <a 
              href='/terms-and-conditions'
              // target='_blank'
              className='cursor-pointer opacity-75 hover:opacity-100 hover:text-secondary-purple font-semibold'
              >Terms and Conditions</a>
              <a 
              href='/refund-policy'
              // target='_blank'
              className='cursor-pointer opacity-75 hover:opacity-100 hover:text-secondary-purple font-semibold'
              >Refund Policy</a>
            </div>
          </div>
        </div>
        <hr
          className='w-[90%] opacity-20' 
        />
        <div className='mb-[-10px]'>
          <div className='opacity-60 max-xs:text-sm w-full '>
            © Oculus The Fest 2024. All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
