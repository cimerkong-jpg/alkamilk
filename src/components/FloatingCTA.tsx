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

  const handleLineClick = () => {
    window.open('https://line.me/ti/p/your-line-id', '_blank');
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Floating Messenger Button - Primary */}
      <div className="fixed bottom-20 right-4 z-50 animate-bounce">
        <button
          onClick={handleMessengerClick}
          className="relative bg-gradient-to-r from-red-600 to-red-700 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 active:scale-95 transition-all group"
          aria-label="Chat on Messenger"
        >
          {/* Pulse Ring */}
          <div className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-75"></div>
          
          {/* Icon */}
          <div className="relative text-2xl">💬</div>
          
          {/* Unread Badge */}
          <div className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center animate-pulse">
            1
          </div>
          
          {/* Tooltip */}
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Nhắn tin nhận khuyến mãi 🔥
          </div>
        </button>
      </div>

      {/* Floating LINE Button - Secondary */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={handleLineClick}
          className="relative bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 active:scale-95 transition-all group"
          aria-label="Chat on LINE"
        >
          {/* Icon */}
          <div className="text-2xl">📱</div>
          
          {/* Tooltip */}
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            LINE: @alkamilk
          </div>
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
