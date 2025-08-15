"use client"

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [activeTheme, setActiveTheme] = useState('light');
  const [showProjects, setShowProjects] = useState(false);

  return (
    <div className="flex flex-col items-center flex-1 justify-center min-h-screen pt-10 lg:px-20 lg:pt-12"
    style={{ fontFamily: 'var(--font-bebas-neue)' }}>
      <main className="flex flex-col gap-[24px] row-start-2 items-center">
        
        {/* Header */}
        <div className="flex flex-wrap justify-center gap-[25px]">
          <div className="custom-shadow-center w-[45px] h-[45px] bg-[#E8E8E8] rounded-[30px] text-[20px]">A</div>
          <div className="custom-shadow-center w-[250px] lg:w-[300px] 2xl:w-[410px] h-[45px] bg-[#E8E8E8] rounded-[30px] text-[16px]">ANNA_WANG@PORTFOLIO</div>
          <div 
            className={`custom-shadow-center custom-button w-[140px] lg:w-[200px] 2xl:w-[245px] h-[45px] bg-[#E8E8E8] rounded-[30px] text-[16px] text-[#616161] cursor-pointer ${
              showProjects ? 'pressed-shadow' : ''
            }`}
            onClick={() => setShowProjects(!showProjects)}>
            /SELECTED-PROJECTS
          </div>

          {/* Theme Colors */}
          <div 
            className={`custom-shadow-center custom-button w-[65px] lg:w-[90px] h-[45px] bg-[#E8E8E8] rounded-[30px] text-[14px] text-[#616161] cursor-pointer ${
              activeTheme === 'light' ? 'pressed-shadow' : ''
            }`}
            onClick={() => setActiveTheme('light')}>
            LIGHT
          </div>
          <div 
            className={`custom-shadow-center custom-button w-[65px] lg:w-[90px] h-[45px] bg-[#E8E8E8] rounded-[30px] text-[14px] text-[#616161] cursor-pointer ${
              activeTheme === 'dark' ? 'pressed-shadow' : ''
            }`}
            onClick={() => setActiveTheme('dark')}>
            DARK
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-[25px] w-full max-w-[1200px]">
          
          {/* Left Portion */}
          <div className="flex flex-col gap-[25px] mx-auto">
            <div className="w-[320px] lg:w-[370px] 2xl:w-[481px] h-[400px] lg:h-[380px] 2xl:h-[479px] mx-auto"
                style={{ perspective: '1000px' }}>
              <div 
                className="w-full h-full relative transition-transform duration-700 ease-in-out"
                style={{ 
                  transformStyle: 'preserve-3d',
                  transform: showProjects ? 'rotateY(180deg)' : 'rotateY(0deg)'
                }}>
                {/* Front - Profile */}
                <div 
                  className="absolute inset-0 custom-shadow-left bg-[#E8E8E8] rounded-[30px] text-[20px] flex flex-col"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden'
                  }}>
                  <p className='text-[#A6A6A6] text-xs mb-2'>Hi! My name is <span className='text-[#616161]'>Anna (Tung-Yen)</span> and I'm a</p>
                  <p className='heading-one text-[80px] leading-none mb-6'>Software Developer.</p>
                  <p className='text-[#A6A6A6] text-xs'>Based in <span className='text-[#616161]'>New York City</span>.</p>

                  <p className='text-[#A6A6A6] text-xs'>Graduated from <span className='text-[#616161]'>Cornell</span> with a
                  <span className='text-[#616161]'> Master's </span>in <span className='text-[#616161]'>Information Science</span>.</p>

                  <p className='text-[#A6A6A6] text-xs'>Specialize in <span className='text-[#616161]'>Full-Stack Development</span> and 
                  <span className='text-[#616161]'> Data Analysis</span>.</p>
                  
                  <p className='text-[#A6A6A6] text-xs mb-6'>Currently learning more about <span className='text-[#616161]'>NLP</span> and 
                  <span className='text-[#616161]'> Machine Learning</span>.</p>

                  <p className='text-[#616161] text-xs'>Let's Connect!</p>
                </div>
                {/* Back - Project One */}
                <div 
                  className="absolute inset-0 custom-shadow-left bg-[#E8E8E8] rounded-[30px] text-[20px] flex flex-col justify-center"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}>
                  <p className='text-[#616161] text-xs mb-2'>Full-Stack E-Commerce Site</p>
                  <p className='heading-one text-[80px] leading-none mb-2'>The Skin Store</p>

                  <div className='flex flex-row mb-4 gap-[10px]'>
                    <div className='custom-shadow-center rounded-[30px] w-[35px] h-[25px] text-[#616161] text-sm'>C#</div>
                    <div className='custom-shadow-center rounded-[30px] w-[45px] text-[#616161] text-sm'>.NET</div>
                    <div className='custom-shadow-center rounded-[30px] w-[60px] text-[#616161] text-sm'>Angular</div>
                    <div className='custom-shadow-center rounded-[30px] w-[50px] text-[#616161] text-sm'>Azure</div>
                    <div className='custom-shadow-center rounded-[30px] w-[50px] text-[#616161] text-sm'>Stripe</div>
                  </div>

                  <p className='text-[#A6A6A6] text-xs mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua.</p>

                  <div className='flex flex-row gap-[10px]'>
                    <Link href="https://the-market-place.azurewebsites.net/shop" target="_blank">
                      <div className="custom-shadow-center custom-button w-[75px] h-[30px] bg-[#E8E8E8] rounded-[30px] text-[14px] text-[#616161]">View Site</div>
                    </Link> 
                    <Link href="https://github.com/annaw-99/e-commerce" target="_blank">
                      <div className="custom-shadow-center custom-button w-[75px] h-[30px] bg-[#E8E8E8] rounded-[30px] text-[14px] text-[#616161]">View Repo</div>
                    </Link> 
                  </div>

                </div>
              </div>
            </div>
            
            {/* Links */}
            <div className="flex gap-[24px]">
              <Link href="https://github.com/annaw-99" target="_blank" >
                <div className="custom-shadow-center custom-button w-[65px] lg:w-[70px] 2xl:w-[100px] h-[40px] bg-[#E8E8E8] rounded-[30px] text-[12px] text-[#616161]">Github</div>
              </Link>
              <Link href="https://www.linkedin.com/in/tungyen-wang" target="_blank">
                <div className="custom-shadow-center custom-button w-[65px] lg:w-[70px] 2xl:w-[100px] h-[40px] bg-[#E8E8E8] rounded-[30px] text-[12px] text-[#616161]">LinkedIn</div>
              </Link>
              <Link href="mailto:annawang9909@gmail.com">
                <div className="custom-shadow-center custom-button w-[140px] lg:w-[180px] 2xl:w-[235px] h-[40px] bg-[#E8E8E8] rounded-[30px] text-[12px] text-[#616161]">annawang9909@gmail.com</div>
              </Link>            
            </div>
          </div>

          {/* Right Portion */}
          <div className="flex flex-col gap-[25px] mx-auto lg:mx-0">
            <div className="w-[320px] lg:w-[430px] 2xl:w-[481px] h-[200px] lg:h-[180px] 2xl:h-[205px] mx-auto"
                style={{ perspective: '1000px' }}>
              <div 
                className="w-full h-full relative transition-transform duration-700 ease-in-out"
                style={{ 
                  transformStyle: 'preserve-3d',
                  transform: showProjects ? 'rotateY(180deg)' : 'rotateY(0deg)'
                }}>
                {/* Front - Skills */}
                <div 
                  className="absolute inset-0 custom-shadow-left bg-[#E8E8E8] rounded-[30px] text-[16px] flex flex-col"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden'
                  }}>
                  <p className='text-[#616161] text-xs mb-2'>Tools I'm most familiar with</p>
                  {/* Icons */}
                  <div className='flex flex-row mb-2 gap-[10px]'>
                    <div className='custom-shadow-center w-[45px] h-[45px] rounded-[30px]'>Java</div>
                    <div className='custom-shadow-center w-[45px] h-[45px] rounded-[30px]'>Java</div>
                    <div className='custom-shadow-center w-[45px] h-[45px] rounded-[30px]'>Java</div>
                    <div className='custom-shadow-center w-[45px] h-[45px] rounded-[30px]'>Java</div>
                    <div className='custom-shadow-center w-[45px] h-[45px] rounded-[30px]'>Java</div>
                  </div>
                  <div className='flex flex-row gap-[10px]'>
                    <div className='custom-shadow-center w-[45px] h-[45px] rounded-[30px]'>Java</div>
                    <div className='custom-shadow-center w-[45px] h-[45px] rounded-[30px]'>Java</div>
                    <div className='custom-shadow-center w-[45px] h-[45px] rounded-[30px]'>Java</div>
                    <div className='custom-shadow-center w-[45px] h-[45px] rounded-[30px]'>Java</div>
                    <div className='custom-shadow-center w-[45px] h-[45px] rounded-[30px]'>Java</div>
                  </div>


                </div>
                {/* Back - Project Two */}
                <div 
                  className="absolute inset-0 custom-shadow-left bg-[#E8E8E8] rounded-[30px] text-[16px] flex items-center justify-center"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}>
                  Project Two
                </div>
              </div>
            </div>
            <div className="flex gap-[25px]">
              <div className="w-[147.5px] lg:w-[202.5px] 2xl:w-[228.5px] h-[240px] 2xl:h-[310px]"
                  style={{ perspective: '1000px' }}>
                <div 
                  className="w-full h-full relative transition-transform duration-700 ease-in-out"
                  style={{ 
                    transformStyle: 'preserve-3d',
                    transform: showProjects ? 'rotateY(180deg)' : 'rotateY(0deg)'
                  }}>
                  {/* Front - Tictactoe */}
                  <div 
                    className="absolute inset-0 custom-shadow-left bg-[#E8E8E8] rounded-[30px] text-[16px] flex flex-col"
                    style={{ 
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden'
                    }}>
                    <p className='text-[#616161] text-xs mb-2'>Tictactoe</p>
                  </div>
                  {/* Back - Project Three */}
                  <div 
                    className="absolute inset-0 custom-shadow-left bg-[#E8E8E8] rounded-[30px] text-[16px] flex flex-col"
                    style={{ 
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)'
                    }}>
                    <p className='text-[#616161] text-xs mb-2'>AI RAG Chatbot</p>
                    <p className='heading-one text-[80px] leading-none mb-2'><span className='text-[40px]'>RAG</span>BOT</p>

                    {/* TODO: Include this part in description */}
                    {/* <div className='flex flex-row mb-4 gap-[10px]'>
                      <div className='custom-shadow-center rounded-[30px] w-[60px] h-[25px] text-[#616161] text-sm'>Python</div>
                      <div className='custom-shadow-center rounded-[30px] w-[60px] text-[#616161] text-sm'>OpenAI</div>
                    </div> */}

                    <p className='text-[#A6A6A6] text-xs mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                    <Link href="https://github.com/annaw-99/RAG-chatbot" target="_blank">
                      <div className="custom-shadow-center custom-button w-[75px] h-[30px] bg-[#E8E8E8] rounded-[30px] text-[14px] text-[#616161]">View Repo</div>
                    </Link> 

                  </div>
                </div>
              </div>
              <div className="w-[147.5px] lg:w-[202.5px] 2xl:w-[228.5px] h-[240px] 2xl:h-[310px]"
                  style={{ perspective: '1000px' }}>
                <div 
                  className="w-full h-full relative transition-transform duration-700 ease-in-out"
                  style={{ 
                    transformStyle: 'preserve-3d',
                    transform: showProjects ? 'rotateY(180deg)' : 'rotateY(0deg)'
                  }}>
                  {/* Front - Weather */}
                  <div 
                    className="absolute inset-0 custom-shadow-left bg-[#E8E8E8] rounded-[30px] text-[16px] flex flex-col"
                    style={{ 
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden'
                    }}>
                    <p className='text-[#616161] text-xs mb-4'>Weather <span className='text-[#A6A6A6]'>in places I've been to</span></p>
                    
                    <div className='flex flex-col items-center justify-center'>
                      {/* TODO: Integrate API */}
                      <p className='text-[#616161] text-md mb-2'>Seattle</p>
                      <div className='flex flex-row items-center justify-center gap-[20px] mb-4'>
                        <div className='custom-shadow-center w-[30px] h-[30px] rounded-[30px]'></div>
                        <div className='relative'>
                          <p className='text-[#616161] text-[80px] leading-none'>23</p>
                          <span className='absolute top-0 right-0 text-[#616161] text-xs'>°C</span>
                        </div>                        
                        <div className='custom-shadow-center w-[30px] h-[30px] rounded-[30px]'></div>
                      </div>
                      <div className='custom-shadow-center w-[150px] text-[#616161] px-4 py-2 rounded-[30px] text-xs'>Write something here.</div>

                    </div>

                  </div>
                  {/* Back - Project Four */}
                  <div 
                    className="absolute inset-0 custom-shadow-left bg-[#E8E8E8] rounded-[30px] text-[16px] flex flex-col"
                    style={{ 
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)'
                    }}>
                    <p className='text-[#616161] text-xs mb-2'>QR code generator</p>
                    <p className='heading-one text-[80px] leading-none mb-2'><span className='text-[40px]'>Insta</span>QR</p>

                    {/* TODO: Include this part in description */}
                    {/* <div className='flex flex-row mb-4 gap-[10px]'>
                      <div className='custom-shadow-center rounded-[30px] w-[60px] h-[25px] text-[#616161] text-sm'>NextJs</div>
                      <div className='custom-shadow-center rounded-[30px] w-[60px] text-[#616161] text-sm'>ShadcnUI</div>
                    </div> */}

                    <p className='text-[#A6A6A6] text-xs mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                    <div className='flex flex-row gap-[10px]'>
                      <Link href="https://insta-qr-ten.vercel.app/" target="_blank">
                        <div className="custom-shadow-center custom-button w-[75px] h-[30px] bg-[#E8E8E8] rounded-[30px] text-[14px] text-[#616161]">View Site</div>
                      </Link> 
                      <Link href="https://github.com/annaw-99/qr-code" target="_blank">
                        <div className="custom-shadow-center custom-button w-[75px] h-[30px] bg-[#E8E8E8] rounded-[30px] text-[14px] text-[#616161]">View Repo</div>
                      </Link> 
                    </div>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="flex flex-wrap mt-12 mb-4 items-center justify-center text-[#A6A6A6] text-[12px]">
        © 2025 ALL RIGHTS RESERVED.
      </footer>
    </div>
  );
}