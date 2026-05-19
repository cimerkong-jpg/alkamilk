const HeroSection = () => {
  const handleCTAClick = () => {
    window.open('https://m.me/your-page-id', '_blank');
  };

  const handleReviewClick = () => {
    document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-b from-red-50 via-white to-amber-50 pt-3 pb-6 md:pt-6 md:pb-10 px-3 md:px-4 overflow-hidden">
      {/* Background Decoration - Subtle */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-200 rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-200 rounded-full blur-3xl opacity-10"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center">
          {/* Left: Content */}
          <div className="text-center md:text-left order-2 md:order-1 px-2 md:px-0">
            {/* Pain-Focused Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 md:mb-5 leading-tight">
              Đứng lâu, đau gối,
              <br />
              <span className="text-red-600">đau lưng?</span>
            </h1>

            {/* Emotional Subheadline */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-5 md:mb-7 leading-relaxed font-semibold">
              Bắt đầu chăm sóc xương khớp
              <br className="hidden sm:block" />
              từ hôm nay
            </p>

            {/* Product Positioning */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 md:p-5 mb-5 md:mb-7 shadow-lg border border-red-200">
              <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                <span className="font-bold text-red-600">ALKAMILK BONTIN-MK7</span>
                <br />
                Công thức Canxi + MK7
                <br />
                Dành cho người làm việc nặng tại Đài Loan
              </p>
            </div>

            {/* CTA Buttons - Mobile Optimized */}
            <div className="flex flex-col sm:flex-row gap-3 mb-5 md:mb-7">
              <button
                onClick={handleCTAClick}
                className="bg-gradient-to-r from-red-600 to-red-700 text-white px-7 md:px-10 py-4 md:py-5 rounded-xl text-base md:text-lg font-bold hover:from-red-700 hover:to-red-800 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105 active:scale-95 flex-1 sm:flex-initial"
              >
                📩 Nhắn tin nhận khuyến mãi
              </button>
              <button
                onClick={handleReviewClick}
                className="bg-white text-gray-700 px-7 md:px-10 py-4 md:py-5 rounded-xl text-base md:text-lg font-bold hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl border border-gray-300 transform hover:scale-105 active:scale-95 flex-1 sm:flex-initial"
              >
                👀 Xem đánh giá thực tế
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              <span className="bg-gradient-to-r from-red-100 to-red-200 text-red-700 px-3 py-1.5 rounded-full text-sm font-bold border border-red-300 shadow-sm">
                ✓ MK7
              </span>
              <span className="bg-gradient-to-r from-amber-100 to-amber-200 text-amber-700 px-3 py-1.5 rounded-full text-sm font-bold border border-amber-300 shadow-sm">
                ✓ Canxi
              </span>
              <span className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 px-3 py-1.5 rounded-full text-sm font-bold border border-blue-300 shadow-sm">
                ✓ Công thức cao cấp
              </span>
              <span className="bg-gradient-to-r from-green-100 to-green-200 text-green-700 px-3 py-1.5 rounded-full text-sm font-bold border border-green-300 shadow-sm">
                ✓ Cho người Việt tại Đài Loan
              </span>
            </div>
          </div>

          {/* Right: Visual - Clean & Prominent */}
          <div className="order-1 md:order-2 relative px-2 md:px-0">
            {/* Product Image - Clean Frame */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-red-100 via-amber-100 to-red-100 rounded-2xl shadow-xl flex items-center justify-center overflow-hidden border border-white/50">
                <img 
                  src="/src/assets/HERO_IMAGE.png" 
                  alt="ALKAMILK BONTIN-MK7" 
                  className="w-full h-full object-contain p-3"
                />
              </div>

              {/* Floating Badge - Best Seller */}
              <div className="absolute -top-3 -right-3 bg-gradient-to-br from-red-500 to-red-600 text-white px-5 py-2.5 rounded-xl shadow-xl transform rotate-12 animate-bounce">
                <p className="text-sm font-bold">🔥 Bán chạy!</p>
              </div>

              {/* Floating Badge - Social Proof */}
              <div className="absolute -bottom-3 -left-3 bg-white px-5 py-3 rounded-xl shadow-xl border border-amber-300">
                <p className="text-xs text-gray-600 mb-0.5">Đã tin dùng</p>
                <p className="text-xl font-bold text-red-600">500+ người</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof Stats - Below Hero */}
        <div className="grid grid-cols-3 gap-3 mt-8 md:mt-12 max-w-4xl mx-auto px-2 md:px-0">
          <div className="bg-white rounded-xl p-3 md:p-5 text-center shadow-lg border border-red-100 transform hover:scale-105 transition-all">
            <div className="text-2xl md:text-4xl font-bold text-red-600 mb-0.5">500+</div>
            <p className="text-xs md:text-sm text-gray-600 font-semibold">Khách hàng tại Đài Loan</p>
          </div>
          <div className="bg-white rounded-xl p-3 md:p-5 text-center shadow-lg border border-amber-100 transform hover:scale-105 transition-all">
            <div className="text-2xl md:text-4xl font-bold text-amber-600 mb-0.5">4.8⭐</div>
            <p className="text-xs md:text-sm text-gray-600 font-semibold">Đánh giá trung bình</p>
          </div>
          <div className="bg-white rounded-xl p-3 md:p-5 text-center shadow-lg border border-green-100 transform hover:scale-105 transition-all">
            <div className="text-2xl md:text-4xl font-bold text-green-600 mb-0.5">95%</div>
            <p className="text-xs md:text-sm text-gray-600 font-semibold">Mua lại</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
