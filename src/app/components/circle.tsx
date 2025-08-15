export default function Circle() {
    return (
      <div className="w-6 h-6 lg:w-7 lg:h-7 2xl:w-8 2xl:h-8 relative flex items-center justify-center">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 lg:w-7 lg:h-7 2xl:w-8 2xl:h-8 rounded-full 
        bg-[#CA0000] shadow-[inset_-3px_-3px_10px_rgba(255,255,255,0.7),inset_3px_3px_10px_rgba(174,174,192,0.2)]"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 lg:w-4 lg:h-4 2xl:w-5 2xl:h-5 rounded-full bg-[#E8E8E8]"></div>
      </div>
    );
  }