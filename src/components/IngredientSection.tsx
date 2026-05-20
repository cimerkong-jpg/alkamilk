const keyIngredients = [
  {
    name: 'MK7',
    description: 'ช่วยพาแคลเซียมเข้าสู่กระดูก',
    icon: 'bone',
    iconClass: 'from-amber-50 to-orange-100 text-amber-700 ring-amber-200',
  },
  {
    name: 'Aquamin F',
    description: 'แคลเซียมจากสาหร่ายทะเล',
    icon: 'coral',
    iconClass: 'from-cyan-50 to-sky-100 text-cyan-700 ring-cyan-200',
  },
  {
    name: 'Ovomet',
    description: 'ดูแลข้อต่อและเส้นเอ็น',
    icon: 'joint',
    iconClass: 'from-violet-50 to-purple-100 text-violet-700 ring-violet-200',
  },
  {
    name: 'Polycan',
    description: 'เสริมการดูแลร่างกาย',
    icon: 'immune',
    iconClass: 'from-emerald-50 to-green-100 text-emerald-700 ring-emerald-200',
  },
];

const IngredientIcon = ({ type }: { type: string }) => {
  if (type === 'coral') {
    return (
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none" aria-hidden="true">
        <path d="M16 25V9" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M16 16c-4.3-.3-7.2-2.4-8.5-6.2" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M16 18.5c4.4-.2 7.2-2.5 8.4-6.6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M11.3 22.2c1.8.9 7.7.9 9.5 0" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M6 26c3.2-1.8 16.8-1.8 20 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".45" />
      </svg>
    );
  }

  if (type === 'joint') {
    return (
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none" aria-hidden="true">
        <circle cx="11" cy="12" r="4.5" fill="currentColor" opacity=".16" />
        <circle cx="21" cy="20" r="4.5" fill="currentColor" opacity=".16" />
        <path d="M14.2 15.2 17 18" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        <circle cx="11" cy="12" r="3.3" stroke="currentColor" strokeWidth="2.2" />
        <circle cx="21" cy="20" r="3.3" stroke="currentColor" strokeWidth="2.2" />
        <path d="M8 22c4.5 3 11.5 3 16 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".45" />
      </svg>
    );
  }

  if (type === 'immune') {
    return (
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none" aria-hidden="true">
        <path d="M16 4.5 25 8v6.8c0 5.8-3.6 10.7-9 12.7-5.4-2-9-6.9-9-12.7V8l9-3.5Z" fill="currentColor" opacity=".14" />
        <path d="M16 4.5 25 8v6.8c0 5.8-3.6 10.7-9 12.7-5.4-2-9-6.9-9-12.7V8l9-3.5Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
        <path d="m11.2 16 3.1 3.1 6.5-6.8" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none" aria-hidden="true">
      <path d="M10.2 20.8c-2.1 0-3.8-1.7-3.8-3.8s1.7-3.8 3.8-3.8h1.2v-1.2c0-2.1 1.7-3.8 3.8-3.8S19 9.9 19 12v1.2h1.2c2.1 0 3.8 1.7 3.8 3.8s-1.7 3.8-3.8 3.8H19V22c0 2.1-1.7 3.8-3.8 3.8s-3.8-1.7-3.8-3.8v-1.2h-1.2Z" fill="currentColor" opacity=".15" />
      <path d="M10.2 20.8c-2.1 0-3.8-1.7-3.8-3.8s1.7-3.8 3.8-3.8h1.2v-1.2c0-2.1 1.7-3.8 3.8-3.8S19 9.9 19 12v1.2h1.2c2.1 0 3.8 1.7 3.8 3.8s-1.7 3.8-3.8 3.8H19V22c0 2.1-1.7 3.8-3.8 3.8s-3.8-1.7-3.8-3.8v-1.2h-1.2Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M16 12.5v9M11.5 17h9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
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
                <div className={`grid h-12 w-12 flex-shrink-0 place-items-center rounded-2xl bg-gradient-to-br shadow-sm ring-1 ${ingredient.iconClass}`}>
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
