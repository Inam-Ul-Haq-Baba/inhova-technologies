import React from 'react';
import LogoFull from '../../assets/images/Logo-full.png'
import Expertise from "./home/Expertise";
import WorkPreview from './home/WorkPreview';
import Process from './home/Process';
import ContactCTA from './home/ContactCTA';

export default function Home( {navigateToSection, setActiveSection, setActiveServiceId  } ){
    return(
        <div className='mainDiv my-8 px-5 '>
            <div className='flex flex-col items-center md:flex-row justify-center'>
                <img className='mx-10 w-80 md:w-[400px] lg:w-[500px] xl:w-[600px]' src={LogoFull} alt="" />
                <div className='flex flex-col gap-2'>
                    <p className='text-xl md:text-2xl font-semibold'>Ideas Into Innovation. Technology Into Impact.</p>
                    <p className='font-semibold text-md sm:text-lg text-blue-500'>We Build What's Next.</p>
                    <p className='text-gray-700 text-sm sm:text-base'>Transforming ideas into meaningful digital experiences through modern software development, web and mobile applications, and emerging technologies.</p>
                    <div className='flex gap-2'>
                        <button onClick={() => navigateToSection("services")} className='border-2 text-sm sm:text-base border-blue-500 px-4 py-2 rounded-lg font-semibold text-white bg-blue-500 hover:bg-blue-700'>Explore Our Services →</button>
                        <button onClick={() => navigateToSection("about")} className='border-2 text-sm sm:text-base border-blue-500 px-4 py-2 rounded-lg font-semibold text-blue-500  hover:bg-blue-700 hover:text-white'>Discover Inhova ↗️</button>
                    </div>
                </div>

                
            </div>
            <Expertise setActiveSection={setActiveSection} setActiveServiceId={setActiveServiceId} />
            <WorkPreview />
            <Process />
            <ContactCTA navigateToSection={navigateToSection} />
            
        </div>
    );
}