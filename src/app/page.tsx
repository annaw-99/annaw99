"use client"

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [activeTheme, setActiveTheme] = useState('light');

  return (
    <div className="flex flex-col items-center flex-1 justify-center min-h-screen pt-6 lg:px-20 lg:pt-12"
    style={{ fontFamily: 'var(--font-bebas-neue)' }}>
      <main className="flex flex-col gap-[24px] row-start-2 items-center">
        
        {/* Header */}
        <div className="flex flex-wrap justify-center gap-[24px]">
          <div className="custom-shadow w-[45px] h-[45px] bg-[#E8E8E8] rounded-[30px] text-[20px]">A</div>
          <div className="custom-shadow custom-button w-[251px] lg:w-[412px] h-[45px] bg-[#E8E8E8] rounded-[30px] text-[16px]">ANNA_WANG@PORTFOLIO</div>
          <div className="custom-shadow custom-button w-[140px] lg:w-[245px] h-[45px] bg-[#E8E8E8] rounded-[30px] text-[16px]">/SELECTED-PROJECTS</div>

          {/* Theme Colors */}
          <div 
            className={`custom-shadow custom-button w-[70px] lg:w-[92px] h-[45px] bg-[#E8E8E8] rounded-[30px] text-[14px] text-[#616161] cursor-pointer ${
              activeTheme === 'light' ? 'pressed-shadow' : ''
            }`}
            onClick={() => setActiveTheme('light')}>
            LIGHT
          </div>
          <div 
            className={`custom-shadow custom-button w-[70px] lg:w-[92px] h-[45px] bg-[#E8E8E8] rounded-[30px] text-[14px] text-[#616161] cursor-pointer ${
              activeTheme === 'dark' ? 'pressed-shadow' : ''
            }`}
            onClick={() => setActiveTheme('dark')}>
            DARK
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-[24px] w-full max-w-[1200px]">
          
          {/* Left Side - Profile + Links */}
          <div className="flex flex-col gap-[24px] mx-auto lg:mx-0">
            <div className="custom-shadow w-[321px] lg:w-[481px] h-[479px] bg-[#E8E8E8] rounded-[30px] text-[20px] mx-auto">Profile</div>
            
            {/* Links */}
            <div className="flex gap-[24px]">
              <Link href="https://github.com/annaw-99" target="_blank" >
                <div className="custom-shadow custom-button w-[70px] lg:w-[99px] h-[42px] bg-[#E8E8E8] rounded-[30px] text-[12px] text-[#616161]">Github</div>
              </Link>
              <Link href="https://www.linkedin.com/in/tungyen-wang" target="_blank">
                <div className="custom-shadow custom-button w-[70px] lg:w-[99px] h-[42px] bg-[#E8E8E8] rounded-[30px] text-[12px] text-[#616161]">LinkedIn</div>
              </Link>
              <Link href="mailto:annawang9909@gmail.com">
                <div className="custom-shadow custom-button w-[140px] lg:w-[235px] h-[45px] bg-[#E8E8E8] rounded-[30px] text-[12px] text-[#616161]">annawang9909@gmail.com</div>
              </Link>            
            </div>
          </div>

          {/* Right Side - Skills + Widgets */}
          <div className="flex flex-col gap-[24px] mx-auto lg:mx-0">
            <div className="custom-shadow w-[321px] lg:w-[481px] h-[204px] bg-[#E8E8E8] rounded-[30px] text-[16px] mx-auto">Skills</div>
            <div className="flex gap-[24px]">
              <div className="custom-shadow w-[150px] lg:w-[228.5px] h-[312px] bg-[#E8E8E8] rounded-[30px] text-[16px]">Tictactoe</div>
              <div className="custom-shadow w-[150px] lg:w-[228.5px] h-[312px] bg-[#E8E8E8] rounded-[30px] text-[16px]">Weather</div>
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