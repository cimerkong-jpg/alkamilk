import { handleLandingAction } from '../landingVariant';

const symptomImages = [
  { src: '/pain-icons/DAULUNG.png', label: 'ปวดหลัง' },
  { src: '/pain-icons/DAUKHOPGOI.png', label: 'ปวดเข่า' },
  { src: '/pain-icons/MOICOTICHTU.png', label: 'เมื่อยสะสม' },
  { src: '/pain-icons/DILAIKHOKHAN.png', label: 'เดินลำบาก' },
];

const PainPoints = () => {
  return (
    <section className="px-4 py-8 md:py-10 bg-gradient-to-b from-white via-red-50 to-white">
      <div className="mx-auto max-w-5xl">
        <div className="overflow-hidden rounded-[1.75rem] border border-red-100 bg-white shadow-[0_22px_60px_rgba(127,29,29,0.10)]">
          <div className="grid gap-0 md:grid-cols-[0.95fr_1.05fr]">
            <div className="bg-gradient-to-br from-red-600 to-red-700 p-5 text-white md:p-7">
              <p className="mb-3 inline-flex rounded-full bg-white/14 px-3 py-1 text-xs font-bold ring-1 ring-white/20">
                สำหรับคนทำงานหนักในไต้หวัน
              </p>
              <h2 className="text-2xl font-black leading-tight md:text-4xl">
                Đứng lâu, đau gối, đau lưng?
              </h2>
              <p className="mt-3 text-sm font-medium leading-relaxed text-red-50 md:text-base">
                Nếu cơ thể bắt đầu mỏi nhiều hơn sau mỗi ngày làm việc, hãy bắt đầu chăm sóc xương khớp sớm hơn.
              </p>
              <button
                onClick={() => handleLandingAction('Muốn tư vấn cách dùng AlkaMilk')}
                className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-white px-5 text-sm font-black text-red-600 shadow-lg transition-all active:scale-[0.98] sm:w-auto"
              >
                Nhắn tin hỏi cách dùng
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 bg-red-50/60 p-3 md:p-4">
              {symptomImages.map((symptom) => (
                <div key={symptom.src} className="relative overflow-hidden rounded-2xl bg-white">
                  <img
                    src={symptom.src}
                    alt={symptom.label}
                    className="aspect-[1.22/1] w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-2">
                    <p className="text-xs font-bold text-white md:text-sm">{symptom.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
