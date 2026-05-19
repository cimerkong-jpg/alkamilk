import { combos } from '../data';

const ComboSection = () => {
  const handleOrderClick = (combo: { buy: number; free: number }) => {
    window.open(`https://m.me/1160453107144286?text=Quan tâm combo Mua ${combo.buy} Tặng ${combo.free}`, '_blank');
  };

  return (
    <section className="py-10 md:py-14 px-4 bg-gradient-to-b from-white via-red-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-red-200 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-200 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header - FOMO Style */}
        <div className="text-center mb-8 md:mb-10">
          <div className="inline-block bg-red-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-4 animate-pulse">
            🔥 Khuyến mãi đặc biệt - Số lượng có hạn!
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Mua càng nhiều
            <span className="text-red-600"> càng tiết kiệm!</span>
          </h2>
          <p className="text-base md:text-lg text-gray-700 font-semibold">
            🎁 Mua hôm nay nhận quà tặng đặc biệt
          </p>
        </div>

        {/* Nutrition Info Image */}
        <div className="mb-8">
          <img 
            src="/src/assets/ddinh duong.png" 
            alt="Nutrition Information" 
            className="w-full max-w-3xl mx-auto rounded-2xl shadow-2xl"
            loading="lazy"
          />
        </div>

        {/* Combo Cards - Mobile Optimized */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-8">
          {combos.map((combo) => (
            <div
              key={combo.id}
              className={`relative bg-white rounded-3xl p-5 md:p-6 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 ${
                combo.isBestSeller
                  ? 'border-4 border-red-500 ring-4 ring-red-200'
                  : 'border-2 border-gray-200'
              }`}
            >
              {/* Best Seller Badge */}
              {combo.isBestSeller && (
                <>
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-5 py-2 rounded-full shadow-xl font-bold text-sm animate-pulse">
                      ⭐ Bán chạy nhất
                    </div>
                  </div>
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-3xl animate-pulse"></div>
                </>
              )}

              {/* Savings Badge */}
              {combo.savingsPercent && (
                <div className="absolute -top-2 -right-2 bg-gradient-to-br from-amber-400 to-amber-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-xl transform rotate-12 z-10">
                  <div className="text-center">
                    <div className="text-xs font-bold leading-tight">Tiết kiệm</div>
                    <div className="text-lg font-bold leading-tight">{combo.savingsPercent}%</div>
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="text-center mt-6 relative z-10">
                <div className="text-6xl mb-4">🥛</div>
                
                <div className="mb-4">
                  <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">
                    Mua {combo.buy}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-amber-600">
                    Tặng {combo.free}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-4 mb-4 border-2 border-gray-200">
                  <p className="text-sm text-gray-600 mb-1 font-semibold">Nhận thực tế</p>
                  <p className="text-3xl md:text-4xl font-bold text-gray-900">
                    {combo.buy + combo.free} <span className="text-lg">hộp</span>
                  </p>
                </div>

                {combo.isBestSeller && (
                  <div className="bg-gradient-to-r from-red-100 to-orange-100 text-red-700 px-4 py-2 rounded-xl mb-4 text-sm font-bold border-2 border-red-300">
                    🔥 Nhiều người đặt nhất!
                  </div>
                )}

                <button
                  onClick={() => handleOrderClick(combo)}
                  className={`w-full py-4 rounded-2xl font-bold text-base md:text-lg transition-all shadow-xl hover:shadow-2xl transform hover:scale-105 active:scale-95 ${
                    combo.isBestSeller
                      ? 'bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800'
                      : 'bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-600 hover:to-amber-700'
                  }`}
                >
                  📩 Nhắn tin đặt combo này
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-3xl p-6 md:p-8 text-center border-2 border-purple-200 shadow-xl">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            🎁 Quà tặng đặc biệt khi đặt hôm nay
          </h3>
          <div className="flex flex-wrap gap-3 justify-center mb-4">
            <span className="bg-white px-5 py-3 rounded-full text-sm md:text-base font-bold text-gray-700 shadow-md border-2 border-purple-200">
              📦 Giao hàng miễn phí
            </span>
            <span className="bg-white px-5 py-3 rounded-full text-sm md:text-base font-bold text-gray-700 shadow-md border-2 border-purple-200">
              🎁 Quà tặng đặc biệt
            </span>
            <span className="bg-white px-5 py-3 rounded-full text-sm md:text-base font-bold text-gray-700 shadow-md border-2 border-purple-200">
              💬 Tư vấn miễn phí 24/7
            </span>
          </div>
          <p className="text-sm text-gray-600">
            ⏰ Khuyến mãi có số lượng giới hạn, đặt ngay hôm nay!
          </p>
        </div>

        {/* Social Proof */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            🔥 <span className="font-bold text-red-600">Nhiều người đặt combo Mua 4 Tặng 2 nhất</span> vì tiết kiệm nhất!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComboSection;
