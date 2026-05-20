import { reviews } from '../data';

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
        <div className="mb-8">
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
                    <div className="absolute bottom-3 left-3 rounded-full bg-white/94 px-3 py-1.5 text-[11px] font-bold text-gray-900 shadow-md backdrop-blur-md">
                      ✅ Ảnh thật từ khách hàng
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

        {/* Facebook-Style Review Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all border border-gray-200"
            >
              {/* Header - Facebook Comment Style */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full flex-shrink-0 overflow-hidden bg-gradient-to-br from-red-100 to-orange-100 ring-2 ring-red-100">
                  <img
                    src={review.avatarUrl}
                    alt={review.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
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
