import { combos } from '../data';
import milkGlassImage from '../assets/Untitled-2.pngda.png';
import productCanImage from '../assets/z7581638795275_3eb265c3326ec71be9a0b41408d8d40c.pngda.png';
import { getLandingVariant, handleLandingAction } from '../landingVariant';

const ComboSection = () => {
  const handleOrderClick = (combo: { buy: number; free: number }) => {
    handleLandingAction(`Quan tâm combo Mua ${combo.buy} Tặng ${combo.free}`);
  };

  const variant = getLandingVariant();

  return (
    <section className="py-8 md:py-12 px-4 bg-gradient-to-b from-white via-red-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-red-200 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-200 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header - FOMO Style */}
        <div className="text-center mb-6 md:mb-8">
          <div className="inline-block bg-red-600 text-white px-5 py-2 rounded-full text-xs font-bold mb-3 animate-pulse md:text-sm">
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

        {/* Combo Cards - Compact Premium */}
        <div className="grid gap-3 md:grid-cols-3 md:gap-4">
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
                    <img
                      src={milkGlassImage}
                      alt="Ly sữa AlkaMilk"
                      className="h-10 w-8 object-contain drop-shadow-sm"
                      loading="lazy"
                    />
                  </div>
                  <div className="min-w-0 pr-16">
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-gray-400">
                      Combo ưu đãi
                    </p>
                    <h3 className="text-2xl font-black tracking-tight text-gray-950 md:text-3xl">
                      Mua {combo.buy} <span className="text-red-600">+{combo.free}</span>
                    </h3>
                  </div>
                </div>

                <div className="absolute right-0 top-10 z-20 flex h-20 w-16 items-end justify-center rounded-2xl bg-gradient-to-b from-white to-amber-50/80 ring-1 ring-amber-100">
                  <img
                    src={productCanImage}
                    alt="AlkaMilk Bontin-MK7"
                    className="h-20 w-14 object-contain drop-shadow-[0_10px_16px_rgba(15,23,42,0.18)]"
                    loading="lazy"
                  />
                </div>

                <div className="mb-4 rounded-2xl border border-amber-100 bg-gradient-to-r from-amber-50 to-white px-3 py-2 pr-16">
                  <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-amber-700">
                    AlkaMilk Bontin-MK7
                  </p>
                  <p className="text-xs font-semibold text-gray-500">
                    Hộp 400g - công thức Canxi + MK7
                  </p>
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
                  {variant === 'alkamilk-sale' ? 'Chọn combo này' : variant === 'conversion' ? 'Đăng ký tư vấn' : 'Nhắn tin đặt combo'}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs font-bold text-gray-700">
          <span className="rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-red-100">🎁 ส่งฟรี</span>
          <span className="rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-red-100">🎁 มีของแถม</span>
          <span className="rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-red-100">💬 ทีมตอบแชทไทย</span>
        </div>
      </div>
    </section>
  );
};

export default ComboSection;
