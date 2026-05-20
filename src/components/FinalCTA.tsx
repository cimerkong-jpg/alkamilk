import milkGlassImage from '../assets/Untitled-2.pngda.png';
import productCanImage from '../assets/z7581638795275_3eb265c3326ec71be9a0b41408d8d40c.pngda.png';
import { getLandingVariant, getPrimaryCtaLabel, handleLandingAction } from '../landingVariant';

const FinalCTA = () => {
  const variant = getLandingVariant();
  const isConversion = variant === 'conversion';

  const handleChatClick = () => {
    handleLandingAction('Quan tâm CTA cuối trang AlkaMilk');
  };

  return (
    <section className="px-4 py-8 md:py-12 bg-gradient-to-b from-red-50 to-white">
      <div className="mx-auto max-w-4xl overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-red-600 to-red-800 shadow-[0_24px_70px_rgba(153,27,27,0.24)]">
        <div className="grid items-center gap-4 p-5 text-white md:grid-cols-[1fr_0.75fr] md:p-7">
          <div>
            <p className="mb-2 inline-flex rounded-full bg-white/14 px-3 py-1 text-xs font-black ring-1 ring-white/20">
              {isConversion ? 'ปรึกษาฟรีก่อนเลือก combo' : 'โปรวันนี้: ซื้อ 4 แถม 2'}
            </p>
            <h2 className="text-2xl font-black leading-tight md:text-4xl">
              {isConversion ? 'Để team tư vấn tình trạng của bạn' : 'Muốn hỏi combo phù hợp?'}
              <br />
              {isConversion ? 'ก่อน khi quyết địnhซื้อ' : 'ทักแชทตอนนี้'}
            </h2>
            <p className="mt-3 text-sm font-medium leading-relaxed text-red-50 md:text-base">
              {isConversion
                ? 'Để lại số điện thoại, nhân viên sẽ gọi/nhắn lại tư vấn miễn phí theo tình trạng thực tế.'
                : 'Team trả lời nhanh, tư vấn cách dùng và hỗ trợ giao hàng tại Đài Loan.'}
            </p>
            <button
              onClick={handleChatClick}
              className="mt-5 flex min-h-14 w-full items-center justify-center rounded-2xl bg-white px-5 text-base font-black text-red-600 shadow-xl transition-all active:scale-[0.98] sm:w-auto sm:px-8"
            >
              {getPrimaryCtaLabel()}
            </button>
          </div>

          <div className="relative min-h-44">
            <div className="absolute bottom-0 left-4 h-36 w-24 md:left-6 md:h-44 md:w-28">
              <img src={milkGlassImage} alt="Ly sữa AlkaMilk" className="h-full w-full object-contain drop-shadow-2xl" loading="lazy" />
            </div>
            <div className="absolute bottom-0 right-3 h-44 w-32 md:right-6 md:h-56 md:w-40">
              <img src={productCanImage} alt="AlkaMilk Bontin-MK7" className="h-full w-full object-contain drop-shadow-2xl" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
