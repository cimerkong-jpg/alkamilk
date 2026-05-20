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
        <ComboSection />
        <IngredientSection />
        <LiveProofSection />
        <ReviewSection />
        <TrustSection />
        <FAQSection />
        <FinalCTA />
      </main>

      {/* Mini Footer */}
      <footer className="bg-gray-950 px-4 py-6 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-lg font-black">ALKAMILK BONTIN-MK7</h3>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-semibold text-gray-300">
            <span>📩 Messenger</span>
            <span>🇹🇼 Taiwan shipping</span>
            <span>🕐 Support 24/7</span>
          </div>
          <p className="mt-4 text-[11px] text-gray-500">
            ผลิตภัณฑ์เสริมอาหาร ไม่ใช่ยา ไม่มีสรรพคุณในการป้องกันหรือรักษาโรค
          </p>
        </div>
      </footer>

      {/* Floating CTA Buttons */}
      <FloatingCTA />
    </div>
  );
}

export default App;
