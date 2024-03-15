import React from 'react';
import { NewLink } from '../Components/contact/NewLink';
import Center from '../animated-components/Center';
import PlaceIcon from '@mui/icons-material/Place';
import FloatPhone from '../Components/contact/FloatPhone';
import ContactCard from '../Components/contact/ContactCard';

const ContactPage = () => {
    return (
        <Center>
            <div className='h-full w-full flex flex-col items-center justify-center gap-8 p-8 px-24'>
                <div className='w-full h-full flex flex-col gap-4'>
                    <div className='h-screen w-full flex flex-col items-center justify-center gap-8'>
                    <div className='text-white text-5xl font-bold grad w-full text-left'>
                        Contact Us
                    </div>
                    <div className='w-full flex items-center justify-between gap-4 '>
                        <div className="py-8 w-[60%] p-4 rounded-xl flex items-center justify-between gap-4">
                            {/* <NewLink /> */}
                            <ContactCard  />
                        </div>
                        <div className='w-[40%]'>
                            <FloatPhone />
                        </div>
                    </div>
                    </div>
                    {/* <div style={{ backdropFilter: "blur(10px)" }} className="w-full bg-opacity-[0.075] border-[0.25px] border-slate-600 bg-white p-4 rounded-xl flex items-center justify-between gap-4">
                        <div className='w-1/2'>
                            <iframe
                                src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30157.16831844859!2d72.836115!3d19.123178!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9d90e067ba9%3A0x16268e5d6bca2e6a!2sBharatiya%20Vidya%20Bhavan&#39;s%20Sardar%20Patel%20Institute%20of%20Technology%20(SPIT)!5e0!3m2!1sen!2sin!4v1710524261737!5m2!1sen!2sin'
                                className='w-full h-[450px]'
                                style={{ borderRadius: '4px' }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                        <div className='w-1/2 h-full flex flex-col items-center justify-center gap-4 p-4'>
                            <div className='text-white w-full h-full flex items-center justify-center gap-0.5 text-5xl font-bold'>
                                <span>
                                    <PlaceIcon sx={{ color: "white", fontSize: '55px' }} />
                                </span>
                                <span>
                                    Location
                                </span>
                            </div>
                            <div className='w-full h-[1px] bg-white mb-4'>
                            </div>
                            <div className='text-white font-semibold text-center'>
                                Bhavans Campus, Old D N Nagar, Munshi Nagar, Andheri West, Mumbai, Maharashtra 400058
                            </div>
                        </div>
                    </div> */}
                    <NewLink />
                </div>
            </div>
        </Center>
    );
};

export default ContactPage;