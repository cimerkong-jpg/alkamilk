const HeaderPromoBar = () => {
  const handleChatClick = () => {
    window.open('https://m.me/your-page-id', '_blank');
  };

  return (
    <div className="sticky top-0 z-50 bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white py-3 px-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-sm md:text-base font-bold truncate animate-pulse">
            🔥 Khuyến mãi đặc biệt hôm nay Mua 4 Tặng 2 kèm quà tặng
          </p>
        </div>
        <button
          onClick={handleChatClick}
          className="bg-white text-red-600 px-4 md:px-6 py-2 rounded-full text-sm md:text-base font-bold hover:bg-yellow-50 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 flex-shrink-0"
        >
          Nhắn tin 💬
        </button>
      </div>
    </div>
  );
};

export default HeaderPromoBar;
