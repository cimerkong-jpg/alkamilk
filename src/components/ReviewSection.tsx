import { useRef, useState } from 'react';
import { reviews } from '../data';
import { getPrimaryCtaLabel, handleLandingAction } from '../landingVariant';

const reviewHighlights = [
  {
    imageSrc: '/review-images/review3.jpg',
    name: 'Chị Mai',
    location: 'Đài Trung',
    quote: 'Tôi dùng thấy rất hợp, sau vài ngày cơ thể nhẹ hơn và đỡ mỏi khi đứng lâu.',
    tag: 'Cảm nhận sau 3 ngày',
  },
  {
    imageSrc: '/review-images/review4.jpg',
    name: 'Cô Lan',
    location: 'Tân Bắc',
    quote: 'Pha uống dễ, vị không ngấy. Tôi mua thêm cho mẹ vì thấy sinh hoạt thoải mái hơn.',
    tag: 'Mua lại lần 2',
  },
  {
    imageSrc: '/review-images/review6.jpg',
    name: 'Anh Hùng',
    location: 'Đào Viên',
    quote: 'Làm ca đứng nhiều nên hay mỏi gối. Dùng đều thấy buổi tối dễ chịu hơn trước.',
    tag: 'Người làm việc đứng lâu',
  },
  {
    imageSrc: '/review-images/review8.jpg',
    name: 'Chú Minh',
    location: 'Cao Hùng',
    quote: 'Tôi thích nhất là dễ pha, uống đều mỗi ngày. Cảm giác khớp linh hoạt hơn khi đi lại.',
    tag: 'Dùng hằng ngày',
  },
  {
    imageSrc: '/review-images/review9.jpg',
    name: 'Chị Hạnh',
    location: 'Đài Bắc',
    quote: 'Sau 3 ngày tôi thấy người bớt nặng nề, sáng dậy đi lại cũng dễ hơn.',
    tag: 'Feedback thật',
  },
  {
    imageSrc: '/review-images/review10.jpg',
    name: 'Anh Tuấn',
    location: 'Tân Trúc',
    quote: 'Tư vấn kỹ, giao nhanh. Sản phẩm phù hợp cho người lớn tuổi trong nhà tôi.',
    tag: 'Gia đình tin dùng',
  },
];

const ReviewSection = () => {
  const [showAllReviews, setShowAllReviews] = useState(false);
  const reviewCardsRef = useRef<HTMLDivElement>(null);
  const visibleReviews = showAllReviews ? reviews : reviews.slice(0, 4);

  const handleToggleReviews = () => {
    if (!showAllReviews) {
      setShowAllReviews(true);
      return;
    }

    setShowAllReviews(false);

    window.setTimeout(() => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      reviewCardsRef.current?.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        block: 'start',
      });
    }, 0);
  };

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

        {/* Premium Testimonial Reel */}
        <div ref={reviewCardsRef} className="mb-8 scroll-mt-4 md:scroll-mt-6">
          <div className="mb-3 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-600">
                รีวิวจากลูกค้าจริง
              </p>
              <h3 className="mt-1 text-lg font-bold text-gray-900 md:text-2xl">
                Review thật từ khách hàng đang sử dụng
              </h3>
            </div>
            <p className="hidden text-sm font-medium text-gray-500 sm:block">
              Lướt ngang để xem thêm
            </p>
          </div>

          <div className="-mx-4 overflow-x-auto px-4 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex snap-x snap-mandatory gap-3 md:gap-4">
              {reviewHighlights.map((review, index) => (
                <article
                  key={review.imageSrc}
                  className="group relative min-w-[80%] snap-start rounded-[1.45rem] bg-white p-3 shadow-[0_14px_34px_rgba(15,23,42,0.10)] ring-1 ring-amber-100/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(15,23,42,0.14)] sm:min-w-[45%] lg:min-w-[30.5%]"
                >
                  <div className="relative overflow-hidden rounded-[1.2rem] bg-amber-50 ring-1 ring-amber-100">
                    <img
                      src={review.imageSrc}
                      alt={`Ảnh người dùng thực ${review.name}`}
                      className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.035]"
                      loading={index < 2 ? 'eager' : 'lazy'}
                    />
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/45 to-transparent" />
                    <div className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full border border-white/45 bg-white/88 px-2.5 py-1.5 text-[11px] font-bold text-gray-900 shadow-[0_10px_24px_rgba(15,23,42,0.18)] backdrop-blur-xl">
                      <span className="grid h-4 w-4 place-items-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-sm">
                        <svg
                          viewBox="0 0 16 16"
                          className="h-2.5 w-2.5"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M3.5 8.2 6.4 11 12.5 5"
                            stroke="currentColor"
                            strokeWidth="2.1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      Verified customer
                    </div>
                  </div>

                  <div className="space-y-3 px-1 pt-3.5">
                    <p className="inline-flex rounded-full bg-red-50 px-2.5 py-1 text-[11px] font-bold text-red-700 ring-1 ring-red-100">
                      {review.tag}
                    </p>
                    <blockquote className="text-sm font-semibold leading-relaxed text-gray-900 md:text-[15px]">
                      "{review.quote}"
                    </blockquote>
                    <div className="flex items-center justify-between border-t border-amber-100 pt-2.5">
                      <div>
                        <p className="font-bold text-gray-900">{review.name}</p>
                        <p className="text-sm text-gray-500">📍 {review.location}</p>
                      </div>
                      <div className="rounded-full bg-amber-50 px-2.5 py-1 text-xs font-bold text-amber-700 ring-1 ring-amber-200">
                        5.0 ★
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Compact Review Cards */}
        <div className="mb-8">
          <div className="mb-4 flex items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900 md:text-xl">
                Khách hàng nói gì sau khi dùng?
              </h3>
            </div>
            <div className="hidden rounded-full bg-white px-3 py-1.5 text-xs font-bold text-amber-700 shadow-sm ring-1 ring-amber-100 sm:block">
              4.8/5 từ người dùng
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {visibleReviews.map((review) => (
            <div
              key={review.id}
              className="rounded-2xl border border-gray-100 bg-white p-4 shadow-[0_10px_28px_rgba(15,23,42,0.08)] transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(15,23,42,0.12)]"
            >
              {/* Header - Facebook Comment Style */}
              <div className="mb-3 flex items-center gap-3">
                <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-red-100 to-orange-100 ring-2 ring-red-100">
                  <img
                    src={review.avatarUrl}
                    alt={review.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="truncate font-bold text-gray-900">{review.name}</h4>
                  <p className="flex items-center gap-1 text-xs text-gray-500">
                    📍 {review.location}
                  </p>
                </div>
                <span className="rounded-full bg-amber-50 px-2 py-1 text-[11px] font-bold text-amber-700">
                  5★
                </span>
              </div>

              {/* Review Text - Natural Feel */}
              <div className="mb-3 rounded-xl bg-gray-50 p-3">
                <p className="line-clamp-4 text-sm leading-relaxed text-gray-700">
                  "{review.text}"
                </p>
              </div>

              {/* Rating */}
              <div className="flex items-center justify-between">
                <div className="text-sm text-yellow-500">★★★★★</div>
                <span className="text-[11px] font-medium text-gray-400">Verified</span>
              </div>
            </div>
            ))}
          </div>

          {reviews.length > 4 && (
            <div className="mt-5 text-center">
              <button
                type="button"
                onClick={handleToggleReviews}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-red-100 bg-white px-5 text-sm font-bold text-red-600 shadow-sm transition-all hover:border-red-200 hover:bg-red-50 active:scale-95"
                aria-expanded={showAllReviews}
              >
                {showAllReviews ? 'Thu gọn review' : 'Xem thêm review'}
              </button>
            </div>
          )}
        </div>

        {/* Premium Conversion Panel */}
        <div className="mx-auto max-w-4xl rounded-[1.75rem] border border-red-100/80 bg-white/92 p-4 shadow-[0_24px_70px_rgba(127,29,29,0.10)] backdrop-blur md:p-5">
          <div className="grid grid-cols-3 divide-x divide-red-100 overflow-hidden rounded-2xl bg-gradient-to-br from-red-50 via-white to-amber-50 ring-1 ring-red-100/80">
            <div className="px-2 py-4 text-center md:px-5 md:py-5">
              <div className="mx-auto mb-2 grid h-8 w-8 place-items-center rounded-full bg-red-600 text-white shadow-sm md:h-9 md:w-9">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
                  <path d="M16 19v-1.5A3.5 3.5 0 0 0 12.5 14h-5A3.5 3.5 0 0 0 4 17.5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M10 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" stroke="currentColor" strokeWidth="2" />
                  <path d="M17 11.5a2.5 2.5 0 0 0 0-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M20 19v-1a3 3 0 0 0-2-2.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <p className="text-2xl font-black tracking-tight text-gray-950 md:text-4xl">500+</p>
              <p className="mt-1 text-[11px] font-semibold leading-snug text-gray-500 md:text-sm">
                Khách tại Đài Loan
              </p>
            </div>

            <div className="px-2 py-4 text-center md:px-5 md:py-5">
              <div className="mx-auto mb-2 grid h-8 w-8 place-items-center rounded-full bg-amber-500 text-white shadow-sm md:h-9 md:w-9">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="m12 2.8 2.65 5.37 5.93.86-4.29 4.18 1.01 5.9L12 16.32l-5.3 2.79 1.01-5.9-4.29-4.18 5.93-.86L12 2.8Z" />
                </svg>
              </div>
              <p className="text-2xl font-black tracking-tight text-gray-950 md:text-4xl">4.8</p>
              <p className="mt-1 text-[11px] font-semibold leading-snug text-gray-500 md:text-sm">
                Điểm hài lòng
              </p>
            </div>

            <div className="px-2 py-4 text-center md:px-5 md:py-5">
              <div className="mx-auto mb-2 grid h-8 w-8 place-items-center rounded-full bg-emerald-600 text-white shadow-sm md:h-9 md:w-9">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
                  <path d="M20 7 9.5 17.5 4 12" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="text-2xl font-black tracking-tight text-gray-950 md:text-4xl">95%</p>
              <p className="mt-1 text-[11px] font-semibold leading-snug text-gray-500 md:text-sm">
                Tiếp tục dùng
              </p>
            </div>
          </div>

          <div className="mt-4 rounded-[1.35rem] bg-gradient-to-r from-red-600 to-red-700 p-1 shadow-[0_18px_42px_rgba(220,38,38,0.28)]">
            <button
              onClick={() => handleLandingAction('Quan tâm ưu đãi sau khi xem review')}
              className="flex min-h-14 w-full items-center justify-center gap-3 rounded-[1.1rem] bg-gradient-to-r from-red-600 to-red-700 px-5 text-base font-black text-white transition-all hover:from-red-700 hover:to-red-800 active:scale-[0.99] md:min-h-16 md:text-xl"
            >
              <span className="grid h-8 w-8 place-items-center rounded-full bg-white/16 ring-1 ring-white/20">
                <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" aria-hidden="true">
                  <path d="M4.5 6.8h15v10.4h-15V6.8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                  <path d="m5 7.5 7 5.2 7-5.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              {getPrimaryCtaLabel()}
            </button>
          </div>

          <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs font-semibold text-gray-500 md:text-sm">
            <span>Phản hồi nhanh qua Messenger</span>
            <span className="hidden h-1 w-1 rounded-full bg-gray-300 sm:block" />
            <span>Tư vấn cách dùng phù hợp</span>
            <span className="hidden h-1 w-1 rounded-full bg-gray-300 sm:block" />
            <span>Hỗ trợ khách Việt tại Đài Loan</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
