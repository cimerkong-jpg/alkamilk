const keyIngredients = [
  { name: 'MK7', description: 'ช่วยพาแคลเซียมเข้าสู่กระดูก' },
  { name: 'Aquamin F', description: 'แคลเซียมจากสาหร่ายทะเล' },
  { name: 'Ovomet', description: 'ดูแลข้อต่อและเส้นเอ็น' },
  { name: 'Polycan', description: 'เสริมการดูแลร่างกาย' },
];

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
                className="rounded-2xl border border-blue-100 bg-white p-4 shadow-[0_10px_28px_rgba(15,23,42,0.06)]"
              >
                <p className="text-lg font-black text-gray-950">{ingredient.name}</p>
                <p className="mt-1 text-sm font-medium text-gray-600">{ingredient.description}</p>
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
