const keyIngredients = [
  { name: 'MK7', description: 'ช่วยพาแคลเซียมเข้าสู่กระดูก', icon: 'pill' },
  { name: 'Aquamin F', description: 'แคลเซียมจากสาหร่ายทะเล', icon: 'wave' },
  { name: 'Ovomet', description: 'ดูแลข้อต่อและเส้นเอ็น', icon: 'egg' },
  { name: 'Polycan', description: 'เสริมการดูแลร่างกาย', icon: 'shield' },
];

const IngredientIcon = ({ type }: { type: string }) => {
  if (type === 'wave') {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <path d="M3 15c2.4 0 2.4-2 4.8-2s2.4 2 4.8 2 2.4-2 4.8-2S19.8 15 22 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M5 9c1.7-2.6 4-3.9 7-3.9s5.3 1.3 7 3.9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === 'egg') {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <path d="M12 21c4 0 7-3.1 7-7.4C19 9 15.6 3 12 3S5 9 5 13.6C5 17.9 8 21 12 21Z" stroke="currentColor" strokeWidth="2" />
        <path d="M9 14.5c1.5 1.2 4.5 1.2 6 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === 'shield') {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <path d="M12 3 19 6v5.2c0 4.5-2.8 8.3-7 9.8-4.2-1.5-7-5.3-7-9.8V6l7-3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="m8.8 12 2.1 2.1 4.5-4.7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <path d="M8.2 14.9 14.9 8.2a3.4 3.4 0 0 1 4.8 4.8L13 19.8A3.4 3.4 0 0 1 8.2 15Z" stroke="currentColor" strokeWidth="2" />
      <path d="m11.4 11.6 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
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
                <div className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-2xl bg-blue-50 text-blue-700 ring-1 ring-blue-100">
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
