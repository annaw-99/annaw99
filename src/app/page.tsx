"use client"

import Link from 'next/link';
import { useState, useEffect } from 'react'; // Add useEffect
import TicTacToe from './components/game';
import { useTheme } from 'next-themes'; 
import { useWeather } from './hooks/weather';

const cities: string[] = ['Taipei', 'Seattle', 'New York', 'Ithaca', 'San Francisco', 'Tokyo'];

export default function Home() {
  const { theme, setTheme } = useTheme(); 
  const [showProjects, setShowProjects] = useState(false);
  const [ticTacToeStarted, setTicTacToeStarted] = useState(false);
  const [mounted, setMounted] = useState(false); // Add this

  const { 
    weatherData, 
    weatherLoading, 
    nextCity,
    previousCity 
  } = useWeather(cities);

  // Add this useEffect
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex flex-col items-center flex-1 justify-center min-h-screen pt-10 lg:px-20 lg:pt-12 bg-[#E8E8E8]"
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
          {/* <div 
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
          </div> */}
          {/* <div 
            className={`custom-shadow-center custom-button w-[65px] lg:w-[90px] h-[45px] bg-[#E8E8E8] rounded-[30px] text-[14px] text-[#616161] cursor-pointer ${
              theme === 'light' ? 'pressed-shadow' : ''
            }`}
            onClick={() => setTheme('light')}>
            LIGHT
          </div>
          <div 
            className={`custom-shadow-center custom-button w-[65px] lg:w-[90px] h-[45px] bg-[#E8E8E8] rounded-[30px] text-[14px] text-[#616161] cursor-pointer ${
              theme === 'dark' ? 'pressed-shadow' : ''
            }`}
            onClick={() => setTheme('dark')}>
            DARK
          </div> */}
{/* Theme Colors */}
<button 
  className={`custom-shadow-center custom-button w-[65px] lg:w-[90px] h-[45px] bg-[#E8E8E8] rounded-[30px] text-[14px] text-[#616161] cursor-pointer ${
    theme === 'light' ? 'pressed-shadow' : ''
  }`}
  onClick={() => setTheme('light')}>
  LIGHT
</button>
<button 
  className={`custom-shadow-center custom-button w-[65px] lg:w-[90px] h-[45px] bg-[#E8E8E8] rounded-[30px] text-[14px] text-[#616161] cursor-pointer ${
    theme === 'dark' ? 'pressed-shadow' : ''
  }`}
  onClick={() => setTheme('dark')}>
  DARK
</button>
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
                  className="absolute inset-0 custom-shadow-left bg-[#E8E8E8] rounded-[30px] text-[20px] flex flex-col justify-center"
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

                  <p className='text-[#A6A6A6] text-xs mb-4'>An end-to-end e-commerce solution featuring backend API development, 
                    database management, user authentication systems, and frontend optimization for seamless shopping experience.
                  </p>

                  <div className='flex flex-row gap-[10px]'>
                    <Link href="https://the-market-place.azurewebsites.net/shop" target="_blank" rel="noopener noreferrer">
                      <div className="custom-shadow-center custom-button w-[75px] h-[30px] bg-[#E8E8E8] rounded-[30px] text-[14px] text-[#616161]">View Site</div>
                    </Link> 
                    <Link href="https://github.com/annaw-99/e-commerce" target="_blank" rel="noopener noreferrer">
                      <div className="custom-shadow-center custom-button w-[75px] h-[30px] bg-[#E8E8E8] rounded-[30px] text-[14px] text-[#616161]">View Repo</div>
                    </Link> 
                  </div>

                </div>
              </div>
            </div>
            
            {/* Links */}
            <div className="flex gap-[24px]">
              <Link href="https://github.com/annaw-99" target="_blank"rel="noopener noreferrer">
                <div className="custom-shadow-center custom-button w-[65px] lg:w-[70px] 2xl:w-[100px] h-[40px] bg-[#E8E8E8] rounded-[30px] text-[12px] text-[#616161]">Github</div>
              </Link>
              <Link href="https://www.linkedin.com/in/tungyen-wang" target="_blank" rel="noopener noreferrer">
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
                  <div className='flex flex-row justify-between mb-2'>
                    <p className='text-[#616161] text-xs'>Tools I'm most familiar with</p>
                    <p className='text-[#A6A6A6] text-[10px]'>icons from 
                    <Link href="https://icons8.com/" target="_blank" rel="noopener noreferrer" className='hover:text-black'> Icons8</Link></p>
                  </div>
                  {/* Icons */}
                  <div className="flex flex-col mb-2 gap-[10px]">
                    <div className='flex flex-row mb-2 gap-[10px]'>
                      {/* Java */}
                      <div className="group flex flex-col justify-center items-center gap-0.5">
                        <div className="custom-shadow-center custom-button w-[45px] h-[45px] rounded-[30px] flex items-center justify-center relative">
                          <img src="/icons/java.svg" alt="Java" 
                            className="w-6 h-6 opacity-100 group-hover:opacity-0 transition-opacity absolute" />
                          <p className="text-[#616161] text-[10px] opacity-0 group-hover:opacity-100 transition-opacity absolute">
                            Java
                          </p>
                        </div>
                      </div>
                      {/* Python */}
                      <div className="group flex flex-col justify-center items-center gap-0.5">
                        <div className="custom-shadow-center custom-button w-[45px] h-[45px] rounded-[30px] flex items-center justify-center relative">
                          <img src="/icons/python.svg" alt="Python" 
                            className="w-6 h-6 opacity-100 group-hover:opacity-0 transition-opacity absolute" />
                          <p className="text-[#616161] text-[10px] opacity-0 group-hover:opacity-100 transition-opacity absolute">
                            Python
                          </p>
                        </div>
                      </div>
                      {/* SQL */}
                      <div className='custom-shadow-center w-[45px] h-[45px] rounded-[30px] flex items-center justify-center'>
                        SQL
                      </div>
                      {/* JavaScript */}
                      <div className="group flex flex-col justify-center items-center gap-0.5"> 
                        <div className="custom-shadow-center custom-button w-[45px] h-[45px] rounded-[30px] flex items-center justify-center relative">
                          <img src="/icons/javascript.svg" alt="JavaScript" 
                            className="w-6 h-6 opacity-100 group-hover:opacity-0 transition-opacity absolute" />
                          <p className="text-[#616161] text-[10px] opacity-0 group-hover:opacity-100 transition-opacity absolute">
                            JavaScript
                          </p>
                        </div>
                      </div>
                      {/* TypeScript */}
                      <div className="group flex flex-col justify-center items-center gap-0.5">
                        <div className="custom-shadow-center custom-button w-[45px] h-[45px] rounded-[30px] flex items-center justify-center relative">
                          <img src="/icons/typescript.svg" alt="TypeScript" 
                            className="w-6 h-6 opacity-100 group-hover:opacity-0 transition-opacity absolute" />
                          <p className="text-[#616161] text-[10px] opacity-0 group-hover:opacity-100 transition-opacity absolute">
                            TypeScript
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[10px]">
                      {/* React */}
                      <div className="group flex flex-col justify-center items-center gap-0.5">
                        <div className="custom-shadow-center custom-button w-[45px] h-[45px] rounded-[30px] flex items-center justify-center relative">
                          <img src="/icons/react.svg" alt="React" 
                            className="w-6 h-6 opacity-100 group-hover:opacity-0 transition-opacity absolute" />
                          <p className="text-[#616161] text-[10px] opacity-0 group-hover:opacity-100 transition-opacity absolute">
                            React
                          </p>
                        </div>
                      </div>
                      {/* Next.js */}
                      <div className="group flex flex-col justify-center items-center gap-0.5">
                        <div className="custom-shadow-center custom-button w-[45px] h-[45px] rounded-[30px] flex items-center justify-center relative">
                          <img src="/icons/next.svg" alt="Next.js" 
                            className="w-6 h-6 opacity-100 group-hover:opacity-0 transition-opacity absolute" />
                          <p className="text-[#616161] text-[10px] opacity-0 group-hover:opacity-100 transition-opacity absolute">
                            Next.js
                          </p>
                        </div>
                      </div>
                      {/* AWS */}
                      <div className="group flex flex-col justify-center items-center gap-0.5">
                        <div className="custom-shadow-center custom-button w-[45px] h-[45px] rounded-[30px] flex items-center justify-center relative">
                          <img src="/icons/aws.svg" alt="AWS" 
                            className="w-6 h-6 opacity-100 group-hover:opacity-0 transition-opacity absolute" />
                          <p className="text-[#616161] text-[10px] opacity-0 group-hover:opacity-100 transition-opacity absolute">
                            AWS
                          </p>
                        </div>
                      </div>
                      {/* PostgreSQL */}
                      <div className="group flex flex-col justify-center items-center gap-0.5">
                        <div className="custom-shadow-center custom-button w-[45px] h-[45px] rounded-[30px] flex items-center justify-center relative">
                          <img src="/icons/postgresql.svg" alt="PostgreSQL" 
                            className="w-6 h-6 opacity-100 group-hover:opacity-0 transition-opacity absolute" />
                          <p className="text-[#616161] text-[10px] opacity-0 group-hover:opacity-100 transition-opacity absolute">
                            PostgreSQL
                          </p>
                        </div>
                      </div>
                      {/* Docker */}
                      <div className="group flex flex-col justify-center items-center gap-0.5">
                        <div className="custom-shadow-center custom-button w-[45px] h-[45px] rounded-[30px] flex items-center justify-center relative">
                          <img src="/icons/docker.svg" alt="Docker" 
                            className="w-6 h-6 opacity-100 group-hover:opacity-0 transition-opacity absolute" />
                          <p className="text-[#616161] text-[10px] opacity-0 group-hover:opacity-100 transition-opacity absolute">
                            Docker
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
                {/* Back - Project Two */}
                <div 
                  className="absolute inset-0 custom-shadow-left bg-[#E8E8E8] rounded-[30px] text-[16px] flex flex-col"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}>
                    <p className='text-[#616161] text-xs mb-6'>Full-Stack Retaurant Waitlist System</p>

                    <div className='flex flex-row gap-[20px]'>
                      <div>
                        <p className='heading-one text-[65px] lg:text-[80px] leading-none mb-2'>HUEY</p>
                      </div>

                      <div>
                        <p className='text-[#A6A6A6] text-xs mb-4'>(hugh - eey) A unified waitlist platform that allows customers to join queues 
                          at different restaurants through a centralized interface.</p>
                        <div className='flex flex-row gap-[10px]'>
                          <Link href="https://nextjs-hack.vercel.app/" target="_blank" rel="noopener noreferrer" className='hidden lg:flex'>
                          <div className="custom-shadow-center custom-button w-[75px] h-[30px] bg-[#E8E8E8] rounded-[30px] text-[14px] text-[#616161]">View Site</div>
                          </Link> 
                          <Link href="https://github.com/annaw-99/nextjs-hackathon" rel="noopener noreferrer" target="_blank">
                            <div className="custom-shadow-center custom-button w-[75px] h-[30px] bg-[#E8E8E8] rounded-[30px] text-[14px] text-[#616161]">View Repo</div>
                          </Link> 
                        </div>
                      </div>

                    </div>

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
                    {!ticTacToeStarted ? (
                      <div className='flex flex-col gap-[30px]'>
                        <p className='text-[#616161] text-xs mb-2'>Tictactoe</p>

                        <div className="flex flex-col items-center justify-center">
                          <p className='text-xs text-[#616161] mb-4'>Click <span className='text-[24px] text-[#CA0000]'>PLAY</span> to start!</p>
                          <button onClick={() => setTicTacToeStarted(true)}
                            className='custom-shadow-center custom-button w-[80px] px-4 py-1.5 bg-[#E8E8E8] rounded-[30px] text-[12px] text-[#616161]'>
                            PLAY
                          </button>
                        </div>
                      </div>
                    ) : (
                      <TicTacToe />
                    )}
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
                    <p className='heading-one text-[65px] lg:text-[80px] leading-none mb-2'><span className='text-[25px] lg:text-[40px]'>RAG</span>BOT</p>

                    <p className='text-[#A6A6A6] text-xs mb-4'>A Q&A chatbot that processes .pdf and .txt files for context-aware responses.</p>

                    <Link href="https://github.com/annaw-99/RAG-chatbot" target="_blank" rel="noopener noreferrer">
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
                      {weatherLoading ? (
                        <div className='text-[#A6A6A6] text-xs'>Loading...</div>
                      ) : weatherData ? (
                        <>
                          <p className='text-[#616161] text-md mb-2'>{weatherData.location.name}</p>
                          <div className='flex flex-row items-center justify-center gap-[15px] mb-4'>
                            <button 
                              onClick={previousCity}
                              className='custom-shadow-center custom-button  w-[25px] h-[25px] rounded-[30px] flex items-center justify-center text-sm cursor-pointer'
                            >
                            </button>
                            <div className='relative'>
                              <p className='heading-one text-[80px] leading-none'>{Math.round(weatherData.current.temp_c)}</p>
                              <span className='absolute top-0 text-[#616161] text-xs' style={{ right: '-10px' }}>°C</span>
                              </div>                        
                            <button 
                              onClick={nextCity}
                              className='custom-shadow-center custom-button w-[25px] h-[25px] rounded-[30px] flex items-center justify-center text-sm cursor-pointer'
                            >
                            </button>
                          </div>
                          <div className='custom-shadow-center w-[150px] text-[#616161] px-4 py-2 rounded-[30px] text-xs text-center'>
                            {weatherData.current.condition.text}
                          </div>
                        </>
                      ) : (
                        <div className='text-[#616161] text-xs'>Weather unavailable</div>
                      )}
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
                    <p className='heading-one text-[65px] lg:text-[80px] leading-none mb-2'><span className='text-[25px] lg:text-[40px]'>Insta</span>QR</p>

                    <p className='text-[#A6A6A6] text-xs mb-4'>A web tool that allows users to quickly create customized QR codes.</p>

                    <div className='flex flex-row gap-[10px]'>
                      <Link href="https://insta-qr-ten.vercel.app/" target="_blank" rel="noopener noreferrer" className='hidden lg:flex'>
                      <div className="custom-shadow-center custom-button w-[75px] h-[30px] bg-[#E8E8E8] rounded-[30px] text-[14px] text-[#616161]">View Site</div>
                      </Link> 
                      <Link href="https://github.com/annaw-99/qr-code" target="_blank" rel="noopener noreferrer">
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