export default function X() {
    return (
      <div className="w-7 h-7 lg:w-8 lg:h-8 2xl:w-9 2xl:h-9 relative flex items-center justify-center">
        <div className="absolute top-1/2 left-1/2 bg-gradient-to-b from-blue-400 to-blue-600 rounded-sm transform rotate-45 -translate-x-1/2 -translate-y-1/2 
        w-1.5 h-6 lg:h-7 2xl:h-8 shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.1),inset_2px_2px_4px_rgba(255,255,255,0.8)]"></div>
        <div className="absolute top-1/2 left-1/2 bg-gradient-to-b from-blue-400 to-blue-600 rounded-sm transform -rotate-45 -translate-x-1/2 -translate-y-1/2 
        w-1.5 h-6 lg:h-7 2xl:h-8 shadow-[inset_-2px_2px_4px_rgba(255,255,255,0.8)]"></div>
      </div>
    );
  }