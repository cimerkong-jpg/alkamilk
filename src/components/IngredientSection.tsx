import { ingredients } from '../data';

const IngredientSection = () => {
  return (
    <section className="py-10 md:py-14 px-4 bg-gradient-to-b from-white via-blue-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Header - Simple & Clear */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Không chỉ là
            <span className="text-red-600"> canxi thông thường</span>
          </h2>
          <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Công thức đặc biệt 6 thành phần quan trọng
            <br />
            Để chăm sóc xương khớp toàn diện
          </p>
        </div>

        {/* Ingredient Image */}
        <div className="mb-8">
          <img 
            src="/src/assets/thành phần.png" 
            alt="Ingredients" 
            className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl"
            loading="lazy"
          />
        </div>

        {/* Ingredient Cards - Icon-Based, Mobile Friendly */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {ingredients.map((ingredient) => (
            <div
              key={ingredient.id}
              className="bg-white rounded-2xl p-5 md:p-6 shadow-lg hover:shadow-xl transition-all border-2 border-blue-100 hover:border-blue-300 transform hover:scale-[1.02]"
            >
              {/* Large Icon */}
              <div className="text-5xl md:text-6xl mb-3 text-center">{ingredient.icon}</div>
              
              {/* Name */}
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1 text-center">
                {ingredient.name}
              </h3>
              <p className="text-sm text-gray-500 mb-3 text-center font-semibold">
                {ingredient.nameEn}
              </p>
              
              {/* Simple Benefit */}
              <p className="text-sm md:text-base text-gray-700 text-center leading-relaxed">
                {ingredient.description}
              </p>
            </div>
          ))}
        </div>

        {/* Simple CTA */}
        <div className="mt-8 md:mt-10 text-center">
          <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-6 md:p-8 border-2 border-blue-300 max-w-3xl mx-auto">
            <p className="text-lg md:text-xl font-bold text-gray-900 mb-4">
              ✨ Công thức đầy đủ, chăm sóc toàn diện, không cần uống nhiều loại
            </p>
            <button
              onClick={() => window.open('https://m.me/1160453107144286', '_blank')}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 md:px-12 py-4 md:py-5 rounded-2xl text-base md:text-lg font-bold hover:from-blue-700 hover:to-blue-800 transition-all shadow-xl transform hover:scale-105 active:scale-95"
            >
              📩 Nhắn tin hỏi thêm
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IngredientSection;
