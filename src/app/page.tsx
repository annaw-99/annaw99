import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20"
    style={{ fontFamily: 'var(--font-bebas-neue)' }}>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex grid-cols-12 gap-[24px]">
          <div className="custom-shadow w-[45px] h-[45px] bg-[#E8E8E8] rounded-[30px] text-[20px]">A</div>
          <div className="custom-shadow w-[412px] h-[45px] bg-[#E8E8E8] rounded-[30px] text-[16px]">ANNA_WANG@PORTFOLIO</div>
          <div className="custom-shadow w-[242px] h-[45px] bg-[#E8E8E8] rounded-[30px] text-[16px]">/SECLECTED-PROJECTS</div>
          <div className="custom-shadow w-[106px] h-[45px] bg-[#E8E8E8] rounded-[30px] text-[14px]">LIGHT</div>
          <div className="custom-shadow w-[106px] h-[45px] bg-[#E8E8E8] rounded-[30px] text-[14px]">DARK</div>
        </div>
        <div className="flex grid-cols-6 gap-[24px]">
          <div className="flex flex-col gap-[24px]">
            <div className="custom-shadow w-[485px] h-[479px] bg-[#E8E8E8] rounded-[30px] text-[20px]">Profile</div>
            <div className="flex gap-[24px]">
              <button className="custom-shadow w-[99px] h-[42px] bg-[#E8E8E8] rounded-[30px] text-[12px] text-[#616161]">Github</button>
              <button className="custom-shadow w-[99px] h-[42px] bg-[#E8E8E8] rounded-[30px] text-[12px] text-[#616161]">LinkedIn</button>
              <button className="custom-shadow w-[234px] h-[42px] bg-[#E8E8E8] rounded-[30px] text-[12px] text-[#616161]">annawang9909@gmail.com</button>
            </div>
          </div>
          <div className="flex flex-col gap-[24px]">
            <div className="custom-shadow w-[497px] h-[204px] bg-[#E8E8E8] rounded-[30px] text-[16px]">Skills</div>
            <div className="flex gap-[24px]">
              <div className="custom-shadow w-[241px] h-[312px] bg-[#E8E8E8] rounded-[30px] text-[16px]">Tictactoe</div>
              <div className="custom-shadow w-[241px] h-[312px] bg-[#E8E8E8] rounded-[30px] text-[16px]">Weather</div>
            </div>
          </div>
        </div>
       
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center text-[#A6A6A6] text-[12px]">
      © 2025 All Rights Reserved.
      </footer>
    </div>
  );
}
