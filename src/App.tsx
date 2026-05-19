import HeaderPromoBar from './components/HeaderPromoBar';
import HeroSection from './components/HeroSection';
import PainPoints from './components/PainPoints';
import IngredientSection from './components/IngredientSection';
import ReviewSection from './components/ReviewSection';
import LiveProofSection from './components/LiveProofSection';
import ComboSection from './components/ComboSection';
import TrustSection from './components/TrustSection';
import FAQSection from './components/FAQSection';
import FinalCTA from './components/FinalCTA';
import FloatingCTA from './components/FloatingCTA';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Header Promo Bar */}
      <HeaderPromoBar />

      {/* Main Content */}
      <main>
        <HeroSection />
        <PainPoints />
        <IngredientSection />
        <ReviewSection />
        <LiveProofSection />
        <ComboSection />
        <TrustSection />
        <FAQSection />
        <FinalCTA />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">ALKAMILK BONTIN-MK7</h3>
            <p className="text-gray-400">ดูแลกระดูกและข้อต่อ สำหรับคนทำงานหนัก</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-6 text-sm">
            <div>
              <h4 className="font-bold mb-2">ติดต่อเรา</h4>
              <p className="text-gray-400">📩 Messenger</p>
              <p className="text-gray-400">💬 LINE</p>
              <p className="text-gray-400">⏰ 24/7 Support</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">พื้นที่จัดส่ง</h4>
              <p className="text-gray-400">🇹🇼 ไต้หวัน</p>
              <p className="text-gray-400">🇹🇭 ไทย</p>
              <p className="text-gray-400">🌏 และอื่นๆ</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">โปรโมชั่น</h4>
              <p className="text-gray-400">🔥 ซื้อ 4 แถม 2</p>
              <p className="text-gray-400">🎁 ของแถมพิเศษ</p>
              <p className="text-gray-400">📦 จัดส่งฟรี</p>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-500 text-sm">
              © 2025 ALKAMILK BONTIN-MK7. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs mt-2">
              ผลิตภัณฑ์เสริมอาหาร ไม่ใช่ยา ไม่มีสรรพคุณในการป้องกันหรือรักษาโรค
            </p>
          </div>
        </div>
      </footer>

      {/* Floating CTA Buttons */}
      <FloatingCTA />
    </div>
  );
}

export default App;
