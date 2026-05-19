import { useState, useEffect } from 'react';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMessengerClick = () => {
    window.open('https://m.me/1160453107144286', '_blank');
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Floating Messenger Button - Primary */}
      <div className="fixed bottom-20 right-4 z-50">
        <button
          onClick={handleMessengerClick}
          className="group relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-red-600 to-red-700 text-white shadow-2xl shadow-red-600/35 ring-8 ring-red-500/14 transition hover:scale-105 hover:shadow-red-600/45 active:scale-95"
          aria-label="ทักแชท Messenger เพื่อรับโปรโมชั่น"
        >
          <span className="absolute inset-0 rounded-full bg-red-500/35 animate-ping"></span>
          <span className="absolute inset-1 rounded-full bg-white/10"></span>
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="relative h-8 w-8"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" />
            <path d="M8.5 12h.01" />
            <path d="M12 12h.01" />
            <path d="M15.5 12h.01" />
          </svg>

          <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-amber-400 text-xs font-black text-white shadow-lg ring-2 ring-white">
            1
          </span>

          <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-gray-950 px-4 py-2 text-sm font-bold text-white opacity-0 shadow-xl transition group-hover:opacity-100 md:block">
            ทักแชทรับโปร 4 แถม 2
          </span>
        </button>
      </div>

      {/* Mobile Bottom Bar - Alternative for very small screens */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-r from-red-600 to-red-700 text-white p-3 shadow-2xl md:hidden">
        <div className="flex items-center justify-between max-w-screen-xl mx-auto">
          <div className="flex-1">
            <p className="text-sm font-bold">🔥 Khuyến mãi đặc biệt hôm nay!</p>
            <p className="text-xs text-red-100">Mua 4 Tặng 2</p>
          </div>
          <button
            onClick={handleMessengerClick}
            className="bg-white text-red-600 px-6 py-3 rounded-full text-sm font-bold shadow-lg active:scale-95 transition-transform"
          >
            Nhắn tin 💬
          </button>
        </div>
      </div>
    </>
  );
};

export default FloatingCTA;
