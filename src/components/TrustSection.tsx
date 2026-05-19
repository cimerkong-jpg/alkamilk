import { distributionAreas } from '../data';

const TrustSection = () => {
  return (
    <section className="py-12 md:py-16 px-4 bg-gradient-to-b from-red-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Giao hàng và chăm sóc khách hàng nhiều khu vực
          </h2>
          <p className="text-lg text-gray-700">
            Đáng tin cậy, có khách hàng trên toàn thế giới
          </p>
        </div>

        {/* Distribution Areas */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-12">
          {distributionAreas.map((area, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 text-center shadow-lg hover:shadow-xl transition-shadow border-2 border-gray-100 hover:border-red-300"
            >
              <div className="text-4xl mb-2">{area.flag}</div>
              <p className="font-bold text-gray-900 text-sm mb-1">{area.country}</p>
              <p className="text-xs text-gray-500">{area.city}</p>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 text-center shadow-lg border-2 border-blue-200">
            <div className="text-5xl mb-3">⭐</div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">Công thức cao cấp</h3>
            <p className="text-gray-700 text-sm">Công thức premium, chất lượng cao</p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 text-center shadow-lg border-2 border-green-200">
            <div className="text-5xl mb-3">💬</div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">Hỗ trợ 24/7</h3>
            <p className="text-gray-700 text-sm">Chăm sóc khách hàng suốt 24 giờ</p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 text-center shadow-lg border-2 border-purple-200">
            <div className="text-5xl mb-3">📱</div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">Tư vấn Messenger</h3>
            <p className="text-gray-700 text-sm">Tư vấn qua Messenger/LINE</p>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-6 text-center shadow-lg border-2 border-amber-200">
            <div className="text-5xl mb-3">🚚</div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">Giao hàng nhanh</h3>
            <p className="text-gray-700 text-sm">Giao hàng nhanh chóng, đáng tin cậy</p>
          </div>
        </div>

        {/* Additional Trust Elements */}
        <div className="mt-12 bg-white rounded-2xl p-8 shadow-xl border-2 border-red-100">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Tại sao chọn ALKAMILK BONTIN-MK7?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl">✓</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Công thức đặc biệt</h4>
                    <p className="text-sm text-gray-600">Canxi + MK7 + Vitamin D3 và nhiều thành phần khác</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl">✓</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Dành riêng cho người Việt</h4>
                    <p className="text-sm text-gray-600">Hiểu nhu cầu của người làm việc nặng tại Đài Loan</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl">✓</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Đã được tin dùng</h4>
                    <p className="text-sm text-gray-600">Hơn 500+ khách hàng hài lòng</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
