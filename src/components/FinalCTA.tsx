const FinalCTA = () => {
  const handleChatClick = () => {
    window.open('https://m.me/1160453107144286', '_blank');
  };

  return (
    <section className="py-12 md:py-16 px-4 bg-gradient-to-b from-red-50 to-white">
      <div className="max-w-4xl mx-auto">
        {/* Product Images */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <img 
            src="/src/assets/Untitled-1.pngsa.png" 
            alt="Product Image 1" 
            className="w-full rounded-2xl shadow-xl hover:shadow-2xl transition-shadow"
          />
          <img 
            src="/src/assets/Untitled-2.pngda.png" 
            alt="Product Image 2" 
            className="w-full rounded-2xl shadow-xl hover:shadow-2xl transition-shadow"
          />
          <img 
            src="/src/assets/z7581638795275_3eb265c3326ec71be9a0b41408d8d40c.pngda.png" 
            alt="Product Image 3" 
            className="w-full rounded-2xl shadow-xl hover:shadow-2xl transition-shadow"
          />
        </div>

        <div className="text-center">
        {/* Main Message */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Đừng để cơ thể
            <br />
            <span className="text-red-600">phản ứng nặng hơn nữa</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 mb-4">
            Bắt đầu chăm sóc xương khớp của bạn từ hôm nay
          </p>
          <p className="text-lg text-gray-600">
            Làm việc vất vả suốt, cơ thể xứng đáng được chăm sóc tốt
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button
            onClick={handleChatClick}
            className="bg-gradient-to-r from-red-600 to-red-700 text-white px-12 py-5 rounded-full text-xl font-bold hover:from-red-700 hover:to-red-800 transition-all shadow-2xl hover:shadow-3xl transform hover:scale-105"
          >
            📩 Nhắn tin nhận khuyến mãi
          </button>
          <button
            onClick={handleChatClick}
            className="bg-gradient-to-r from-green-500 to-green-600 text-white px-12 py-5 rounded-full text-xl font-bold hover:from-green-600 hover:to-green-700 transition-all shadow-2xl hover:shadow-3xl transform hover:scale-105"
          >
            💬 Hỏi team 24 giờ
          </button>
        </div>

        {/* Benefits Reminder */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-4xl mb-3">🎁</div>
            <h3 className="font-bold text-gray-900 mb-2">Khuyến mãi đặc biệt</h3>
            <p className="text-gray-600 text-sm">Mua 4 Tặng 2 tiết kiệm nhất</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-4xl mb-3">🚚</div>
            <h3 className="font-bold text-gray-900 mb-2">Giao hàng nhanh</h3>
            <p className="text-gray-600 text-sm">Giao tận tay tại Đài Loan</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-4xl mb-3">💬</div>
            <h3 className="font-bold text-gray-900 mb-2">Chăm sóc 24/7</h3>
            <p className="text-gray-600 text-sm">Team sẵn sàng tư vấn</p>
          </div>
        </div>

        {/* Trust Message */}
        <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-6 border-2 border-amber-300">
          <p className="text-gray-800 text-lg">
            <span className="font-bold text-amber-700">✨ Hơn 500+ người</span>
            <br />
            Chọn ALKAMILK BONTIN-MK7 để chăm sóc xương khớp
            <br />
            <span className="text-red-600 font-semibold">Bạn cũng có thể bắt đầu hôm nay</span>
          </p>
        </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
