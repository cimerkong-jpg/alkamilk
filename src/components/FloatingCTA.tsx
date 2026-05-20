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

      {/* Mobile Bottom Action Tray */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/20 bg-gray-950/92 px-3 pb-[calc(env(safe-area-inset-bottom)+10px)] pt-3 text-white shadow-[0_-18px_48px_rgba(15,23,42,0.28)] backdrop-blur-xl md:hidden">
        <div className="mx-auto flex max-w-screen-xl items-center gap-3">
          <div className="min-w-0 flex-1">
            <div className="mb-1 flex items-center gap-2">
              <span className="rounded-full bg-red-500 px-2 py-0.5 text-[10px] font-black uppercase tracking-[0.08em]">
                Hot combo
              </span>
              <span className="text-[11px] font-semibold text-gray-300">วันนี้</span>
            </div>
            <p className="truncate text-sm font-black">ซื้อ 4 แถม 2</p>
            <p className="truncate text-xs font-medium text-gray-300">รับคำแนะนำก่อนสั่งซื้อ</p>
          </div>
          <button
            onClick={handleMessengerClick}
            className="inline-flex min-h-12 flex-shrink-0 items-center justify-center gap-2 rounded-full bg-[#0084FF] px-5 text-sm font-black text-white shadow-[0_10px_28px_rgba(0,132,255,0.32)] transition-transform active:scale-95"
          >
            <svg viewBox="0 0 36 36" aria-hidden="true" className="h-5 w-5" fill="currentColor">
              <path d="M18 3.6C9.8 3.6 3.4 9.6 3.4 17.7c0 4.2 1.7 7.8 4.6 10.3v5.1l5-2.8c1.6.5 3.2.8 5 .8 8.2 0 14.6-6 14.6-14.1S26.2 3.6 18 3.6Zm1.4 18.9-3.7-4-7.2 4 7.9-8.4 3.8 4 7.1-4-7.9 8.4Z" />
            </svg>
            ทักแชท
          </button>
        </div>
      </div>
    </>
  );
};

export default FloatingCTA;
