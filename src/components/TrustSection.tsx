const trustItems = [
  'ส่งไต้หวัน',
  'คนไทยดูแล',
  'ตอบแชทเร็ว',
  'สูตรพรีเมียม',
];

const TrustSection = () => {
  return (
    <section className="px-4 py-5 bg-white">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-2 gap-2 rounded-[1.4rem] border border-red-100 bg-gradient-to-r from-red-50 via-white to-amber-50 p-3 shadow-[0_16px_42px_rgba(127,29,29,0.08)] sm:grid-cols-4">
          {trustItems.map((item) => (
            <div key={item} className="flex items-center justify-center gap-2 rounded-2xl bg-white px-3 py-3 text-sm font-black text-gray-900 shadow-sm">
              <span className="grid h-5 w-5 place-items-center rounded-full bg-emerald-500 text-xs text-white">✓</span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
