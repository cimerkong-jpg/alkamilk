import { painPoints } from '../data';

const PainPoints = () => {
  return (
    <section className="py-10 md:py-14 px-4 bg-gradient-to-b from-white via-red-50 to-white">
      <div className="max-w-5xl mx-auto">
        {/* Emotional Header */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            Bạn có những triệu chứng này
            <span className="text-red-600"> thường xuyên không?</span>
          </h2>
          <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Nếu bạn làm việc nặng, đứng lâu, đi nhiều
            <br className="hidden sm:block" />
            <span className="font-semibold text-red-600">Những triệu chứng này có thể xảy ra</span>
          </p>
        </div>

        {/* Pain Cards - Mobile Optimized, Larger Touch Targets */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-8">
          {painPoints.map((pain) => (
            <div
              key={pain.id}
              className="bg-white rounded-2xl p-5 md:p-6 shadow-lg hover:shadow-xl transition-all border-2 border-red-100 hover:border-red-300 transform hover:scale-[1.02]"
            >
              {/* Large Icon for Mobile */}
              <div className="text-5xl md:text-6xl mb-3 text-center">{pain.icon}</div>
              
              {/* Clear, Emotional Text */}
              <h3 className="text-lg md:text-xl font-bold text-gray-900 text-center leading-snug">
                {pain.text}
              </h3>
            </div>
          ))}
        </div>

        {/* Emotional CTA Box */}
        <div className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 rounded-3xl p-6 md:p-8 text-center shadow-2xl">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4 leading-tight">
            Đừng để triệu chứng trở nên tệ hơn
          </h3>
          <p className="text-base md:text-lg text-red-100 mb-5 md:mb-6 leading-relaxed">
            Bắt đầu chăm sóc xương khớp từ hôm nay
            <br />
            <span className="font-semibold text-white">Trước khi quá muộn</span>
          </p>
          <button
            onClick={() => window.open('https://m.me/your-page-id', '_blank')}
            className="bg-white text-red-600 px-8 md:px-12 py-4 md:py-5 rounded-2xl text-base md:text-lg font-bold hover:bg-yellow-50 transition-all shadow-xl transform hover:scale-105 active:scale-95 w-full sm:w-auto"
          >
            📩 Nhắn tin tư vấn miễn phí
          </button>
        </div>

        {/* Social Proof Subtle */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            💬 <span className="font-semibold text-gray-800">Nhiều người Việt tại Đài Loan</span> đã bắt đầu chăm sóc bản thân
          </p>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
