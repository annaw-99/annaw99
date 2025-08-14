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
          <div className="custom-shadow w-[45px] h-[45px] bg-[#E8E8E8] rounded-[30px] text-[20px]">A</div>
          <div className="custom-shadow custom-button w-[250px] lg:w-[300px] 2xl:w-[410px] h-[45px] bg-[#E8E8E8] rounded-[30px] text-[16px]">ANNA_WANG@PORTFOLIO</div>
          <div 
            className={`custom-shadow custom-button w-[140px] lg:w-[200px] 2xl:w-[245px] h-[45px] bg-[#E8E8E8] rounded-[30px] text-[16px] cursor-pointer ${
              showProjects ? 'pressed-shadow' : ''
            }`}
            onClick={() => setShowProjects(!showProjects)}>
            /SELECTED-PROJECTS
          </div>

          {/* Theme Colors */}
          <div 
            className={`custom-shadow custom-button w-[65px] lg:w-[90px] h-[45px] bg-[#E8E8E8] rounded-[30px] text-[14px] text-[#616161] cursor-pointer ${
              activeTheme === 'light' ? 'pressed-shadow' : ''
            }`}
            onClick={() => setActiveTheme('light')}>
            LIGHT
          </div>
          <div 
            className={`custom-shadow custom-button w-[65px] lg:w-[90px] h-[45px] bg-[#E8E8E8] rounded-[30px] text-[14px] text-[#616161] cursor-pointer ${
              activeTheme === 'dark' ? 'pressed-shadow' : ''
            }`}
            onClick={() => setActiveTheme('dark')}>
            DARK
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-[25px] w-full max-w-[1200px]">
          
          {/* Left Side - Profile/Project One + Links */}
          <div className="flex flex-col gap-[25px] mx-auto">
            <div className="w-[320px] lg:w-[370px] 2xl:w-[481px] h-[400px] lg:h-[380px] 2xl:h-[479px] mx-auto"
                style={{ perspective: '1000px' }}>
              <div 
                className="w-full h-full relative transition-transform duration-700 ease-in-out"
                style={{ 
                  transformStyle: 'preserve-3d',
                  transform: showProjects ? 'rotateY(180deg)' : 'rotateY(0deg)'
                }}>
                {/* Front Side - Profile */}
                <div 
                  className="absolute inset-0 custom-shadow bg-[#E8E8E8] rounded-[30px] text-[20px] flex items-center justify-center"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden'
                  }}>
                  Profile
                </div>
                {/* Back Side - Project One */}
                <div 
                  className="absolute inset-0 custom-shadow bg-[#E8E8E8] rounded-[30px] text-[20px] flex items-center justify-center"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}>
                  Project One
                </div>
              </div>
            </div>
            
            {/* Links */}
            <div className="flex gap-[24px]">
              <Link href="https://github.com/annaw-99" target="_blank" >
                <div className="custom-shadow custom-button w-[65px] lg:w-[70px] 2xl:w-[100px] h-[40px] bg-[#E8E8E8] rounded-[30px] text-[12px] text-[#616161]">Github</div>
              </Link>
              <Link href="https://www.linkedin.com/in/tungyen-wang" target="_blank">
                <div className="custom-shadow custom-button w-[65px] lg:w-[70px] 2xl:w-[100px] h-[40px] bg-[#E8E8E8] rounded-[30px] text-[12px] text-[#616161]">LinkedIn</div>
              </Link>
              <Link href="mailto:annawang9909@gmail.com">
                <div className="custom-shadow custom-button w-[140px] lg:w-[180px] 2xl:w-[235px] h-[40px] bg-[#E8E8E8] rounded-[30px] text-[12px] text-[#616161]">annawang9909@gmail.com</div>
              </Link>            
            </div>
          </div>

          {/* Right Side - Skills/Project Two + Widgets/Project Three & Four */}
          <div className="flex flex-col gap-[25px] mx-auto lg:mx-0">
            <div className="w-[320px] lg:w-[430px] 2xl:w-[481px] h-[200px] lg:h-[180px] 2xl:h-[205px] mx-auto"
                style={{ perspective: '1000px' }}>
              <div 
                className="w-full h-full relative transition-transform duration-700 ease-in-out"
                style={{ 
                  transformStyle: 'preserve-3d',
                  transform: showProjects ? 'rotateY(180deg)' : 'rotateY(0deg)'
                }}>
                {/* Front Side - Skills */}
                <div 
                  className="absolute inset-0 custom-shadow bg-[#E8E8E8] rounded-[30px] text-[16px] flex items-center justify-center"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden'
                  }}>
                  Skills
                </div>
                {/* Back Side - Project Two */}
                <div 
                  className="absolute inset-0 custom-shadow bg-[#E8E8E8] rounded-[30px] text-[16px] flex items-center justify-center"
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
                  {/* Front Side - Tictactoe */}
                  <div 
                    className="absolute inset-0 custom-shadow bg-[#E8E8E8] rounded-[30px] text-[16px] flex items-center justify-center"
                    style={{ 
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden'
                    }}>
                    Tictactoe
                  </div>
                  {/* Back Side - Project Three */}
                  <div 
                    className="absolute inset-0 custom-shadow bg-[#E8E8E8] rounded-[30px] text-[16px] flex items-center justify-center"
                    style={{ 
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)'
                    }}>
                    Project Three
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
                  {/* Front Side - Weather */}
                  <div 
                    className="absolute inset-0 custom-shadow bg-[#E8E8E8] rounded-[30px] text-[16px] flex items-center justify-center"
                    style={{ 
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden'
                    }}>
                    Weather
                  </div>
                  {/* Back Side - Project Four */}
                  <div 
                    className="absolute inset-0 custom-shadow bg-[#E8E8E8] rounded-[30px] text-[16px] flex items-center justify-center"
                    style={{ 
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)'
                    }}>
                    Project Four
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