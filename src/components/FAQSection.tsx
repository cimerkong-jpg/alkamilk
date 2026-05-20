import { useState } from 'react';
import { faqs } from '../data';

const FAQSection = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <section className="py-8 md:py-10 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
            FAQ สั้นๆ ก่อนทักแชท
          </h2>
          <p className="text-sm md:text-base text-gray-600">
            3 câu khách hỏi nhiều nhất
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-gradient-to-r from-red-50 to-amber-50 rounded-2xl border border-red-100 overflow-hidden shadow-sm transition-all"
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full px-4 py-4 text-left flex items-center justify-between hover:bg-red-100 transition-colors"
              >
                <span className="font-bold text-gray-900 text-base pr-4 md:text-lg">
                  {faq.question}
                </span>
                <span className="text-2xl text-red-600 flex-shrink-0">
                  {openId === faq.id ? '−' : '+'}
                </span>
              </button>
              {openId === faq.id && (
                <div className="px-4 pb-4 pt-1">
                  <p className="text-sm text-gray-700 leading-relaxed md:text-base">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
