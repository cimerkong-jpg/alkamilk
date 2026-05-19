import { reviews } from '../data';

const ReviewSection = () => {
  return (
    <section id="reviews" className="py-10 md:py-14 px-4 bg-gradient-to-b from-white via-amber-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Header - Social Commerce Style */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            <span className="text-red-600">Người Việt tại Đài Loan</span>
            <br />
            Dùng rồi đều nói tốt
          </h2>
          <p className="text-base md:text-lg text-gray-700">
            💬 Đánh giá từ người dùng thực, không phải quảng cáo
          </p>
        </div>

        {/* Review Images - Facebook Style */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-8">
          <div className="relative group">
            <img 
              src="/src/assets/chị thoa 6-3.png" 
              alt="Customer Review" 
              className="w-full rounded-2xl shadow-xl hover:shadow-2xl transition-all"
              loading="lazy"
            />
            <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <p className="text-sm font-semibold text-gray-800">✅ Người dùng thực</p>
            </div>
          </div>
          <div className="relative group">
            <img 
              src="/src/assets/Untitled-1-01.jpg" 
              alt="Customer Review" 
              className="w-full rounded-2xl shadow-xl hover:shadow-2xl transition-all"
              loading="lazy"
            />
            <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <p className="text-sm font-semibold text-gray-800">✅ Người dùng thực</p>
            </div>
          </div>
        </div>

        {/* Facebook-Style Review Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all border border-gray-200"
            >
              {/* Header - Facebook Comment Style */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-orange-400 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                  {review.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-gray-900 truncate">{review.name}</h4>
                  <p className="text-sm text-gray-500 flex items-center gap-1">
                    📍 {review.location}
                  </p>
                </div>
              </div>

              {/* Review Text - Natural Feel */}
              <div className="bg-gray-50 rounded-xl p-4 mb-3">
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  "{review.text}"
                </p>
              </div>

              {/* Rating */}
              <div className="flex items-center justify-between">
                <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>
                <span className="text-xs text-gray-400">Người dùng thực</span>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Stats - Mobile Optimized */}
        <div className="grid grid-cols-3 gap-3 md:gap-4 max-w-3xl mx-auto mb-8">
          <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-4 md:p-6 text-center shadow-xl">
            <div className="text-3xl md:text-4xl font-bold text-white mb-1">500+</div>
            <p className="text-red-100 text-xs md:text-sm font-semibold">Khách hàng tại Đài Loan</p>
          </div>
          <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl p-4 md:p-6 text-center shadow-xl">
            <div className="text-3xl md:text-4xl font-bold text-white mb-1">4.8⭐</div>
            <p className="text-amber-100 text-xs md:text-sm font-semibold">Điểm trung bình</p>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-4 md:p-6 text-center shadow-xl">
            <div className="text-3xl md:text-4xl font-bold text-white mb-1">95%</div>
            <p className="text-green-100 text-xs md:text-sm font-semibold">Mua lại</p>
          </div>
        </div>

        {/* CTA - Thumb Friendly */}
        <div className="text-center">
          <button
            onClick={() => window.open('https://m.me/1160453107144286', '_blank')}
            className="bg-gradient-to-r from-red-600 to-red-700 text-white px-10 md:px-12 py-5 rounded-2xl text-lg md:text-xl font-bold hover:from-red-700 hover:to-red-800 transition-all shadow-2xl hover:shadow-3xl transform hover:scale-105 active:scale-95 w-full sm:w-auto"
          >
            📩 Nhắn tin để đặt hàng
          </button>
          <p className="mt-4 text-sm text-gray-600">
            💬 Team trả lời nhanh, chăm sóc tốt, 24 giờ
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
