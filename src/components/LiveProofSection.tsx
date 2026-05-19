const LiveProofSection = () => {
  return (
    <section className="py-12 md:py-16 px-4 bg-gradient-to-b from-purple-50 via-pink-50 to-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-red-600">Bán chạy</span> trong cộng đồng người Việt tại Đài Loan
          </h2>
          <p className="text-lg text-gray-700">
            💬 Nhiều người tin dùng và giới thiệu cho bạn bè
          </p>
        </div>

        {/* Mock Live Frame */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-red-200 mb-8">
          {/* Live Header */}
          <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              <span className="font-bold text-lg">ĐANG LIVE</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm">👁️ 234 người đang xem</span>
            </div>
          </div>

          {/* Live Content Area */}
          <div className="relative bg-gradient-to-br from-red-50 to-pink-50 p-8 md:p-12">
            {/* Product Display */}
            <div className="text-center mb-6">
              <div className="inline-block bg-white rounded-3xl p-8 shadow-2xl border-4 border-red-200">
                <div className="text-8xl mb-4">🥛</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  ALKAMILK BONTIN-MK7
                </h3>
                <p className="text-red-600 font-bold text-xl">
                  🔥 Mua 4 Tặng 2 - Hôm nay!
                </p>
              </div>
            </div>

            {/* Floating Reactions */}
            <div className="absolute top-4 right-4 flex flex-col gap-2">
              <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg animate-bounce">
                ❤️
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg animate-bounce" style={{ animationDelay: '0.2s' }}>
                👍
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg animate-bounce" style={{ animationDelay: '0.4s' }}>
                😍
              </div>
            </div>

            {/* Mock Comments */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 space-y-3 max-w-md mx-auto">
              <div className="flex items-start gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-red-400 to-pink-400 rounded-full flex items-center justify-center flex-shrink-0">
                  👩
                </div>
                <div className="flex-1 bg-gray-100 rounded-2xl px-4 py-2">
                  <p className="font-bold text-sm text-gray-900">Chị Mai</p>
                  <p className="text-sm text-gray-700">Mình đặt combo 4 tặng 2 nha! 🔥</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center flex-shrink-0">
                  👨
                </div>
                <div className="flex-1 bg-gray-100 rounded-2xl px-4 py-2">
                  <p className="font-bold text-sm text-gray-900">Anh Tuấn</p>
                  <p className="text-sm text-gray-700">Giao đến Đài Trung được không ạ?</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-teal-400 rounded-full flex items-center justify-center flex-shrink-0">
                  👩
                </div>
                <div className="flex-1 bg-gray-100 rounded-2xl px-4 py-2">
                  <p className="font-bold text-sm text-gray-900">Chị Lan</p>
                  <p className="text-sm text-gray-700">Uống bao lâu thấy hiệu quả vậy chị? 😊</p>
                </div>
              </div>
            </div>
          </div>

          {/* Live Footer - CTA */}
          <div className="bg-gradient-to-r from-red-600 to-pink-600 p-5">
            <button
              onClick={() => window.open('https://m.me/your-page-id', '_blank')}
              className="w-full bg-white text-red-600 py-4 rounded-2xl font-bold text-lg hover:bg-yellow-50 transition-all shadow-xl transform hover:scale-105 active:scale-95"
            >
              💬 Nhắn tin đặt hàng ngay
            </button>
          </div>
        </div>

        {/* Support Info */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-purple-200 text-center">
            <div className="text-5xl mb-3">👥</div>
            <h3 className="font-bold text-gray-900 text-xl mb-2">
              Team sẵn sàng tư vấn
            </h3>
            <p className="text-gray-700 mb-4">
              Trả lời nhanh, tư vấn nhiệt tình, hỗ trợ 24/7
            </p>
            <div className="flex gap-2 justify-center">
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold">
                Messenger
              </span>
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold">
                LINE
              </span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-amber-200 text-center">
            <div className="text-5xl mb-3">📦</div>
            <h3 className="font-bold text-gray-900 text-xl mb-2">
              Giao hàng nhanh chóng
            </h3>
            <p className="text-gray-700 mb-4">
              Giao tận tay tại Đài Loan, đóng gói cẩn thận
            </p>
            <div className="flex gap-2 justify-center flex-wrap">
              <span className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-bold">
                Đài Bắc
              </span>
              <span className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-bold">
                Đài Trung
              </span>
              <span className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-bold">
                Đào Viên
              </span>
            </div>
          </div>
        </div>

        {/* Final Push */}
        <div className="mt-8 text-center bg-gradient-to-r from-red-100 via-pink-100 to-purple-100 rounded-2xl p-6 border-2 border-red-300">
          <p className="text-lg font-bold text-gray-900">
            🔥 <span className="text-red-600">Hơn 50 người</span> đã đặt hàng hôm nay!
            <br />
            <span className="text-gray-700">Đừng bỏ lỡ khuyến mãi đặc biệt</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LiveProofSection;
