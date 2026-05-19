import type { ReactNode } from 'react';
import { painPoints } from '../data';
import type { PainPoint } from '../types';

const painIconClass = 'h-14 w-14 md:h-16 md:w-16 text-red-600';

const painIcons: Record<PainPoint['icon'], ReactNode> = {
  knee: (
    <svg viewBox="0 0 64 64" className={painIconClass} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="M28 8c5 5 7 12 5 20-1 5-4 9-8 13" strokeWidth="5" />
      <path d="M25 41c5 3 9 7 11 13" strokeWidth="5" />
      <path d="M37 28c7 1 12 4 15 9" strokeWidth="4" />
      <path d="M18 48c4-1 8-1 12 1" strokeWidth="4" />
      <circle cx="33" cy="33" r="5" fill="currentColor" stroke="none" opacity="0.18" />
    </svg>
  ),
  back: (
    <svg viewBox="0 0 64 64" className={painIconClass} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="M33 9c-7 6-9 13-6 21 3 9 3 17-3 25" strokeWidth="5" />
      <path d="M41 14c-4 5-5 10-3 16 2 7 2 14-2 21" strokeWidth="4" opacity="0.7" />
      <path d="M18 29h20" strokeWidth="4" />
      <path d="m22 21-9 8 9 8" strokeWidth="4" />
      <path d="M43 34c3 2 5 5 6 9" strokeWidth="4" />
    </svg>
  ),
  fatigue: (
    <svg viewBox="0 0 64 64" className={painIconClass} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="32" cy="32" r="22" strokeWidth="4" />
      <path d="M22 25c3-3 6-3 9 0" strokeWidth="4" />
      <path d="M33 25c3-3 6-3 9 0" strokeWidth="4" />
      <path d="M23 44c6-6 12-6 18 0" strokeWidth="4" />
      <path d="m20 16-5-5" strokeWidth="3" />
      <path d="m44 16 5-5" strokeWidth="3" />
    </svg>
  ),
  standing: (
    <svg viewBox="0 0 64 64" className={painIconClass} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="32" cy="12" r="6" strokeWidth="4" />
      <path d="M32 20v18" strokeWidth="5" />
      <path d="M22 27h20" strokeWidth="4" />
      <path d="M32 38 23 55" strokeWidth="5" />
      <path d="M32 38 41 55" strokeWidth="5" />
      <path d="M18 55h10" strokeWidth="4" />
      <path d="M36 55h10" strokeWidth="4" />
    </svg>
  ),
  wakePain: (
    <svg viewBox="0 0 64 64" className={painIconClass} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 42h36" strokeWidth="5" />
      <path d="M18 42V29c0-5 4-9 9-9h10c5 0 9 4 9 9v13" strokeWidth="4" />
      <path d="M22 31h13" strokeWidth="4" />
      <path d="M45 14h8l-8 10h8" strokeWidth="3" />
      <path d="M13 16h7l-7 9h7" strokeWidth="3" opacity="0.75" />
      <path d="M25 51c4-2 8-2 12 0" strokeWidth="4" />
    </svg>
  ),
  walking: (
    <svg viewBox="0 0 64 64" className={painIconClass} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="34" cy="11" r="5" strokeWidth="4" />
      <path d="m31 19-7 13 11 5 6-10" strokeWidth="5" />
      <path d="M35 37 28 55" strokeWidth="5" />
      <path d="M36 37 48 52" strokeWidth="5" />
      <path d="M20 32h-7" strokeWidth="4" />
      <path d="m16 27-5 5 5 5" strokeWidth="4" />
    </svg>
  ),
};

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
              <div className="mb-4 flex justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-red-50 ring-1 ring-red-100">
                  {painIcons[pain.icon]}
                </div>
              </div>
              
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
            onClick={() => window.open('https://m.me/1160453107144286', '_blank')}
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
