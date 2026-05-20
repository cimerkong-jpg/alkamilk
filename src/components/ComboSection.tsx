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

        {/* Combo Cards - Compact Premium */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 md:gap-4 mb-8">
          {combos.map((combo) => (
            <div
              key={combo.id}
              className={`relative overflow-hidden rounded-2xl bg-white p-4 shadow-[0_14px_36px_rgba(15,23,42,0.10)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_46px_rgba(15,23,42,0.14)] ${
                combo.isBestSeller
                  ? 'border-2 border-red-500 ring-4 ring-red-100'
                  : 'border border-gray-200'
              }`}
            >
              {/* Best Seller Badge */}
              {combo.isBestSeller && (
                <div className="absolute left-4 top-3 z-10 rounded-full bg-gradient-to-r from-red-600 to-orange-500 px-3 py-1 text-[11px] font-bold text-white shadow-lg">
                  Bán chạy nhất
                </div>
              )}

              {/* Savings Badge */}
              {combo.savingsPercent && (
                <div className="absolute right-3 top-3 z-10 rounded-full bg-amber-500 px-3 py-1 text-xs font-black text-white shadow-md">
                  -{combo.savingsPercent}%
                </div>
              )}

              {/* Content */}
              <div className={`relative z-10 ${combo.isBestSeller ? 'pt-8' : 'pt-7'}`}>
                <div className="mb-4 flex items-center gap-3">
                  <div className={`grid h-12 w-12 flex-shrink-0 place-items-center rounded-2xl ${
                    combo.isBestSeller ? 'bg-red-50 text-red-600' : 'bg-amber-50 text-amber-600'
                  }`}>
                    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" aria-hidden="true">
                      <path d="M7 4.5h10l-1 15H8L7 4.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                      <path d="M8 8h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      <path d="M9 13.5c1.4.9 4.6.9 6 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-gray-400">
                      Combo ưu đãi
                    </p>
                    <h3 className="text-2xl font-black tracking-tight text-gray-950 md:text-3xl">
                      Mua {combo.buy} <span className="text-red-600">+{combo.free}</span>
                    </h3>
                  </div>
                </div>

                <div className="mb-4 grid grid-cols-2 overflow-hidden rounded-2xl border border-gray-100 bg-gray-50">
                  <div className="border-r border-gray-200 px-3 py-3">
                    <p className="text-[11px] font-bold text-gray-500">Thanh toán</p>
                    <p className="text-lg font-black text-gray-900">{combo.buy} hộp</p>
                  </div>
                  <div className="px-3 py-3">
                    <p className="text-[11px] font-bold text-gray-500">Nhận đủ</p>
                    <p className="text-lg font-black text-red-600">{combo.buy + combo.free} hộp</p>
                  </div>
                </div>

                {combo.isBestSeller && (
                  <div className="mb-4 rounded-xl bg-red-50 px-3 py-2 text-xs font-bold text-red-700 ring-1 ring-red-100">
                    Nhiều khách chọn nhất vì tiết kiệm hơn.
                  </div>
                )}

                <button
                  onClick={() => handleOrderClick(combo)}
                  className={`flex min-h-12 w-full items-center justify-center rounded-xl px-4 text-sm font-black transition-all shadow-lg active:scale-[0.98] ${
                    combo.isBestSeller
                      ? 'bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800'
                      : 'bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-600 hover:to-amber-700'
                  }`}
                >
                  Nhắn tin đặt combo
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
