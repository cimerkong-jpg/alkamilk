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
          className="group relative flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#0084FF] text-white shadow-[0_8px_24px_rgba(0,132,255,0.35)] ring-8 ring-[#0084FF]/12 transition hover:scale-105 hover:bg-[#0078E8] active:scale-95"
          aria-label="ทักแชท Messenger เพื่อรับโปรโมชั่น"
        >
          <span className="absolute inset-0 rounded-full bg-[#0084FF]/25 animate-ping"></span>
          <svg
            viewBox="0 0 36 36"
            aria-hidden="true"
            className="relative h-9 w-9"
            fill="currentColor"
          >
            <path d="M18 3.6C9.8 3.6 3.4 9.6 3.4 17.7c0 4.2 1.7 7.8 4.6 10.3v5.1l5-2.8c1.6.5 3.2.8 5 .8 8.2 0 14.6-6 14.6-14.1S26.2 3.6 18 3.6Zm1.4 18.9-3.7-4-7.2 4 7.9-8.4 3.8 4 7.1-4-7.9 8.4Z" />
          </svg>

          <span className="absolute -right-0.5 -top-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#FF3B30] text-[11px] font-black text-white shadow-lg ring-2 ring-white">
            1
          </span>

          <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-white px-4 py-2 text-sm font-bold text-gray-900 opacity-0 shadow-xl ring-1 ring-black/5 transition group-hover:opacity-100 md:block">
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
