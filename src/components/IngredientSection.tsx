const keyIngredients = [
  {
    name: 'MK7',
    description: 'ช่วยพาแคลเซียมเข้าสู่กระดูก',
    icon: 'bone',
    iconClass: 'from-amber-50 to-orange-100 ring-amber-200',
  },
  {
    name: 'Aquamin F',
    description: 'แคลเซียมจากสาหร่ายทะเล',
    icon: 'coral',
    iconClass: 'from-cyan-50 to-sky-100 ring-cyan-200',
  },
  {
    name: 'Ovomet',
    description: 'ดูแลข้อต่อและเส้นเอ็น',
    icon: 'joint',
    iconClass: 'from-violet-50 to-purple-100 ring-violet-200',
  },
  {
    name: 'Polycan',
    description: 'เสริมการดูแลร่างกาย',
    icon: 'immune',
    iconClass: 'from-emerald-50 to-green-100 ring-emerald-200',
  },
];

const IngredientIcon = ({ type }: { type: string }) => {
  if (type === 'coral') {
    return (
      <svg viewBox="0 0 40 40" className="h-9 w-9" fill="none" aria-hidden="true">
        <circle cx="20" cy="20" r="17" fill="#E0F7FA" />
        <path d="M8 27c3.3-2.5 6.7-2.5 10 0s6.7 2.5 10 0 3.8-2.5 4-2.5" stroke="#0891B2" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M20 27V12" stroke="#0E7490" strokeWidth="2.6" strokeLinecap="round" />
        <path d="M20 18c-4-.3-6.7-2.2-8-5.8" stroke="#06B6D4" strokeWidth="2.6" strokeLinecap="round" />
        <path d="M20 20.3c4-.3 6.6-2.3 7.8-6" stroke="#06B6D4" strokeWidth="2.6" strokeLinecap="round" />
        <circle cx="12" cy="12" r="2.2" fill="#38BDF8" />
        <circle cx="28" cy="14" r="1.8" fill="#67E8F9" />
      </svg>
    );
  }

  if (type === 'joint') {
    return (
      <svg viewBox="0 0 40 40" className="h-9 w-9" fill="none" aria-hidden="true">
        <circle cx="20" cy="20" r="17" fill="#F3E8FF" />
        <path d="M12 22c0-5.8 3.6-10.5 8-10.5s8 4.7 8 10.5c0 4.7-3 8-8 8s-8-3.3-8-8Z" fill="#F8FAFC" stroke="#7C3AED" strokeWidth="2.3" />
        <path d="M14 17.5c2.8 1.6 9.2 1.6 12 0" stroke="#A855F7" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M15 23c2.2 1.5 7.8 1.5 10 0" stroke="#7C3AED" strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="15" cy="10" r="2" fill="#C084FC" />
        <circle cx="26" cy="11" r="1.7" fill="#DDD6FE" />
      </svg>
    );
  }

  if (type === 'immune') {
    return (
      <svg viewBox="0 0 40 40" className="h-9 w-9" fill="none" aria-hidden="true">
        <circle cx="20" cy="20" r="17" fill="#DCFCE7" />
        <path d="M20 8 30 12v7.2c0 6.1-4 10.7-10 13-6-2.3-10-6.9-10-13V12l10-4Z" fill="#ECFDF5" stroke="#059669" strokeWidth="2.3" strokeLinejoin="round" />
        <path d="m14.5 20 3.7 3.7 7.8-8.2" stroke="#10B981" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="11" r="1.8" fill="#86EFAC" />
        <circle cx="29" cy="26" r="2.1" fill="#34D399" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 40 40" className="h-9 w-9" fill="none" aria-hidden="true">
      <circle cx="20" cy="20" r="17" fill="#FFF7ED" />
      <path d="M12.5 16.2c-1.7-1.7-1.7-4.4 0-6.1s4.5-1.7 6.2 0l11.2 11.2c1.7 1.7 1.7 4.5 0 6.2s-4.5 1.7-6.2 0L12.5 16.2Z" fill="#FDBA74" stroke="#C2410C" strokeWidth="2.2" />
      <path d="M18 15.5 24.5 22" stroke="#FFF7ED" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M8.5 27c4.3-2.7 9.8-2.7 14 0" stroke="#F59E0B" strokeWidth="2.3" strokeLinecap="round" />
      <text x="20" y="33.4" textAnchor="middle" className="fill-amber-800 text-[7px] font-black">K2</text>
    </svg>
  );
};

const IngredientSection = () => {
  return (
    <section className="px-4 py-8 md:py-12 bg-gradient-to-b from-white via-blue-50 to-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 text-center">
          <p className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-red-600">
            Premium formula
          </p>
          <h2 className="text-2xl font-black leading-tight text-gray-950 md:text-4xl">
            สูตรสำหรับคนทำงานหนักในไต้หวัน
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm font-medium leading-relaxed text-gray-600 md:text-base">
            Công thức Canxi + MK7 kết hợp các thành phần hỗ trợ xương khớp, gọn hơn nhưng đủ lý do để hỏi tư vấn.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-[1.15fr_0.85fr] md:items-center">
          <div className="overflow-hidden rounded-[1.5rem] bg-white shadow-[0_22px_60px_rgba(15,23,42,0.10)] ring-1 ring-blue-100">
            <img
              src="/src/assets/thành phần.png"
              alt="Thành phần AlkaMilk Bontin-MK7"
              className="w-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="space-y-3">
            {keyIngredients.map((ingredient) => (
              <div
                key={ingredient.name}
                className="flex items-center gap-3 rounded-2xl border border-blue-100 bg-white p-4 shadow-[0_10px_28px_rgba(15,23,42,0.06)]"
              >
                <div className={`grid h-14 w-14 flex-shrink-0 place-items-center rounded-2xl bg-gradient-to-br shadow-sm ring-1 ${ingredient.iconClass}`}>
                  <IngredientIcon type={ingredient.icon} />
                </div>
                <div>
                  <p className="text-lg font-black text-gray-950">{ingredient.name}</p>
                  <p className="mt-1 text-sm font-medium text-gray-600">{ingredient.description}</p>
                </div>
              </div>
            ))}

            <div className="rounded-2xl bg-gradient-to-r from-red-600 to-red-700 p-4 text-white shadow-lg">
              <p className="text-sm font-bold">500+ người đã hỏi tư vấn và đặt dùng tại Đài Loan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IngredientSection;
