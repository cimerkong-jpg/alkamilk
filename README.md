# ALKAMILK BONTIN-MK7 Landing Page

## 🎯 Overview
Landing page conversion-focused cho sản phẩm ALKAMILK BONTIN-MK7, target người Thái tại Đài Loan.

**Funnel:** Facebook Ads → Landing Page → Messenger/LINE → Sales Team

## ✨ Key Features

### 🎨 Design Philosophy
- **Thai Social Commerce Style** - Không phải corporate, là social commerce premium
- **Mobile-First** - Tối ưu cho mobile traffic từ Facebook
- **Conversion-Focused** - Mọi element đều hướng đến Messenger conversion
- **Social Proof Heavy** - Trust badges, reviews, live selling feel

### 📱 Mobile Optimization
- Thumb-friendly buttons (min 44px touch targets)
- Large, readable fonts
- Generous spacing
- Fast loading on 4G
- Smooth scrolling
- Responsive images

### 🔥 Conversion Elements
- **Sticky Promo Bar** - Always visible promotion
- **Multiple CTAs** - Throughout the page
- **Floating Messenger Button** - With pulse animation & unread badge
- **Mobile Bottom Bar** - Alternative CTA for small screens
- **Social Proof** - Reviews, stats, live selling feel
- **FOMO Elements** - Limited time offers, best seller badges

## 🚀 Tech Stack
- **React 18** with TypeScript
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first styling
- **Mobile-First** responsive design

## 📦 Installation

```bash
cd alkamilk-landing
npm install
```

## 🛠️ Development

```bash
npm run dev
```
Server runs at: http://localhost:5173

## 🏗️ Build

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/
│   ├── HeaderPromoBar.tsx      # Sticky top promo
│   ├── HeroSection.tsx          # Pain-focused hero
│   ├── PainPoints.tsx           # Emotional pain points
│   ├── IngredientSection.tsx    # Simple ingredients
│   ├── ReviewSection.tsx        # Facebook-style reviews
│   ├── LiveProofSection.tsx     # Social commerce feel
│   ├── ComboSection.tsx         # FOMO combo deals
│   ├── TrustSection.tsx         # Trust elements
│   ├── FAQSection.tsx           # Short FAQs
│   ├── FinalCTA.tsx             # Strong closing
│   └── FloatingCTA.tsx          # Sticky Messenger button
├── data.ts                      # All content data
├── types.ts                     # TypeScript types
└── App.tsx                      # Main app

```

## 🎨 Color Palette
- **Primary Red:** #DC2626 (red-600)
- **Accent Gold:** #F59E0B (amber-500)
- **Trust Blue:** #2563EB (blue-600)
- **Success Green:** #10B981 (green-500)
- **Background:** Gradients with red-50, amber-50, blue-50

## 📝 Content Guidelines

### ✅ DO:
- Use emotional, relatable language
- Focus on pain points first
- Show social proof everywhere
- Use Thai language naturally
- Keep text short and scannable
- Use emojis for visual breaks
- Emphasize "คนไทยในไต้หวัน"

### ❌ DON'T:
- Make medical claims (รักษา, หายขาด)
- Use corporate/pharma tone
- Write long paragraphs
- Use technical jargon
- Make it look like western supplement site

## 🔗 Integration Points

### Messenger Integration
Update Messenger link in all components:
```typescript
window.open('https://m.me/1160453107144286', '_blank');
```

### LINE Integration
Update LINE link in FloatingCTA:
```typescript
window.open('https://line.me/ti/p/YOUR-LINE-ID', '_blank');
```

### Facebook Pixel (Optional)
Add to `index.html` for tracking:
```html
<!-- Facebook Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR-PIXEL-ID');
  fbq('track', 'PageView');
</script>
```

## 📊 Conversion Tracking

Track these events:
- Page View
- Scroll Depth (25%, 50%, 75%, 100%)
- CTA Clicks
- Messenger Opens
- Review Section Views
- Combo Section Views

## 🎯 Target Audience
- **Demographics:** Thai people in Taiwan, 35-55 years old
- **Occupation:** Factory workers, caregivers, manual labor
- **Pain Points:** Knee pain, back pain, fatigue from standing
- **Behavior:** Active on Facebook, trust social proof, prefer Messenger

## 📱 Mobile Performance
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Lighthouse Score: 90+

## 🔄 Content Updates

### Update Reviews
Edit `src/data.ts`:
```typescript
export const reviews: Review[] = [
  {
    id: 1,
    name: 'พี่นุ้ย',
    location: 'Taoyuan',
    text: 'Your review text...',
    avatar: '👩',
  },
  // Add more...
];
```

### Update Combos
```typescript
export const combos: Combo[] = [
  {
    id: 1,
    buy: 4,
    free: 2,
    isBestSeller: true,
    savingsPercent: 33,
  },
  // Add more...
];
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

## 📈 A/B Testing Ideas
- Different hero headlines
- CTA button colors
- Combo positioning
- Review section placement
- Social proof intensity

## 🎨 Brand Voice
- **Tone:** Warm, caring, trustworthy
- **Style:** Conversational, not salesy
- **Language:** Simple Thai, avoid medical terms
- **Emotion:** Empathy for pain, hope for relief

## 📞 Support
For questions about the landing page, contact the development team.

---

**Built with ❤️ for Thai community in Taiwan**
