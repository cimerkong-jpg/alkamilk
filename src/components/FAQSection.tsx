import { useState } from 'react';
import { faqs } from '../data';

const FAQSection = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <section className="py-12 md:py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Câu hỏi thường gặp
          </h2>
          <p className="text-lg text-gray-700">
            Những câu hỏi khách hàng hay hỏi nhất
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-gradient-to-r from-red-50 to-amber-50 rounded-2xl border-2 border-red-100 overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-red-100 transition-colors"
              >
                <span className="font-bold text-gray-900 text-lg pr-4">
                  {faq.question}
                </span>
                <span className="text-2xl text-red-600 flex-shrink-0">
                  {openId === faq.id ? '−' : '+'}
                </span>
              </button>
              {openId === faq.id && (
                <div className="px-6 pb-5 pt-2">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border-2 border-blue-200">
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Còn câu hỏi khác?
          </h3>
          <p className="text-gray-700 mb-6">
            Team chúng tôi sẵn sàng trả lời mọi thắc mắc của bạn
          </p>
          <button
            onClick={() => window.open('https://m.me/1160453107144286', '_blank')}
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-4 rounded-full text-lg font-bold hover:from-blue-700 hover:to-blue-800 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            💬 Nhắn tin hỏi ngay
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
