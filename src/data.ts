import type { Review, Ingredient, Combo, FAQ, PainPoint } from './types';

export const painPoints: PainPoint[] = [
  { id: 1, text: 'Đau khớp gối', icon: 'knee' },
  { id: 2, text: 'Đau lưng', icon: 'back' },
  { id: 3, text: 'Mỏi cơ tích tụ', icon: 'fatigue' },
  { id: 4, text: 'Đứng lâu mệt mỏi', icon: 'standing' },
  { id: 5, text: 'Thức dậy đau người', icon: 'wakePain' },
  { id: 6, text: 'Đi lại khó khăn', icon: 'walking' },
];

export const ingredients: Ingredient[] = [
  {
    id: 1,
    name: 'MK7',
    nameEn: 'Vitamin K2 MK7',
    description: 'Giúp dẫn canxi vào xương, giảm tích tụ trong mạch máu',
    icon: '💊',
  },
  {
    id: 2,
    name: 'Canxi',
    nameEn: 'Calcium',
    description: 'Giúp xương và răng chắc khỏe',
    icon: '🦴',
  },
  {
    id: 3,
    name: 'Vitamin D3',
    nameEn: 'Vitamin D3',
    description: 'Giúp hấp thu canxi tốt hơn',
    icon: '☀️',
  },
  {
    id: 4,
    name: 'Aquamin F',
    nameEn: 'Aquamin F',
    description: 'Canxi từ tảo biển, dễ hấp thu',
    icon: '🌊',
  },
  {
    id: 5,
    name: 'Ovomet',
    nameEn: 'Ovomet',
    description: 'Hỗ trợ khớp và gân',
    icon: '🥚',
  },
  {
    id: 6,
    name: 'Polycan',
    nameEn: 'Polycan',
    description: 'Tăng cường miễn dịch',
    icon: '🛡️',
  },
];

export const reviews: Review[] = [
  {
    id: 1,
    name: 'กนกชล จิณฤทธิ์',
    location: 'Đài Trung',
    text: 'ทำงานยืนทั้งวัน สนใจโปรนี้ค่ะ ทักไปถามรายละเอียดแล้วตอบไวมาก',
    avatarUrl: '/review-avatars/กนกชล จิณฤทธิ์.jpg',
  },
  {
    id: 2,
    name: 'ชัยชาญ แสงอรุณ',
    location: 'Đào Viên',
    text: 'ซื้อให้แม่ลองดื่ม รสชาติดี ชงง่าย ส่งมาไต้หวันสะดวกครับ',
    avatarUrl: '/review-avatars/ชัยชาญ แสงอรุณ .jpg',
  },
  {
    id: 3,
    name: 'Jitnapaa Deedee',
    location: 'Đài Bắc',
    text: 'ถามเรื่องโปรซื้อ 4 แถม 2 แล้ว แอดมินอธิบายดีมากค่ะ',
    avatarUrl: '/review-avatars/Jitnapaa Deedee .jpg',
  },
  {
    id: 4,
    name: 'Nongluck Chaipanya',
    location: 'Tân Trúc',
    text: 'อยู่ไต้หวันสั่งได้จริง แพ็กของดี ได้รับครบตามโปรค่ะ',
    avatarUrl: '/review-avatars/Nongluck Chaipanya .jpg',
  },
  {
    id: 5,
    name: 'Piyarat Santa',
    location: 'Cao Hùng',
    text: 'ชอบที่มี MK7 ไม่ใช่แคลเซียมธรรมดา ดูคุ้มกว่าหลายตัว',
    avatarUrl: '/review-avatars/Piyarat Santa .jpg',
  },
  {
    id: 6,
    name: 'Ratchaneeboon Punyawong',
    location: 'Đài Nam',
    text: 'ทักไปถามตอนกลางคืนก็มีคนตอบ บริการดีมากค่ะ',
    avatarUrl: '/review-avatars/Ratchaneeboon Punyawong.jpg',
  },
  {
    id: 7,
    name: 'ตา แหลม',
    location: 'Gia Nghĩa',
    text: 'ได้ของไว แอดมินแจ้งรายละเอียดชัดเจน เหมาะกับคนทำงานหนัก',
    avatarUrl: '/review-avatars/ตา แหลม.jpg',
  },
  {
    id: 8,
    name: 'ธิติกาญจน์ โรจพิทักษ์เลิศ',
    location: 'Đào Viên',
    text: 'ซื้อให้คนที่บ้านด้วยค่ะ โปรคุ้มดี ชอบตรงส่งถึงไต้หวัน',
    avatarUrl: '/review-avatars/ธิติกาญจน์ โรจพิทักษ์เลิศ.jpg',
  },
  {
    id: 9,
    name: 'บอย ธีระยุทธ์',
    location: 'Đài Trung',
    text: 'ทำงานโรงงานยืนนาน เลยสั่งมาลอง ทีมงานตอบเร็วครับ',
    avatarUrl: '/review-avatars/บอย ธีระยุทธ์.jpg',
  },
  {
    id: 10,
    name: 'ผ่องศรี กำพร้า',
    location: 'Cao Hùng',
    text: 'ได้รับของเรียบร้อย แพ็กมาดี มีของแถมตามที่แจ้งค่ะ',
    avatarUrl: '/review-avatars/ผ่องศรี กำพร้า .jpg',
  },
];

export const combos: Combo[] = [
  {
    id: 1,
    buy: 3,
    free: 1,
    isBestSeller: false,
    savingsPercent: 25,
  },
  {
    id: 2,
    buy: 4,
    free: 2,
    isBestSeller: true,
    savingsPercent: 33,
  },
  {
    id: 4,
    buy: 10,
    free: 5,
    isBestSeller: false,
    savingsPercent: 33,
  },
];

export const faqs: FAQ[] = [
  {
    id: 1,
    question: 'กินยังไง?',
    answer: 'แนะนำชงดื่มวันละ 1-2 แก้ว หลังอาหารหรือก่อนนอน เพื่อดูแลร่างกายอย่างต่อเนื่อง',
  },
  {
    id: 2,
    question: 'ส่งไต้หวันไหม?',
    answer: 'ส่งถึงไต้หวันได้ ทีมงานแจ้งรายละเอียดโปรและการจัดส่งผ่าน Messenger',
  },
  {
    id: 3,
    question: 'เหมาะกับใคร?',
    answer: 'เหมาะกับคนทำงานหนัก ยืนนาน เดินเยอะ หรือผู้ที่ต้องการดูแลกระดูกและข้อเป็นประจำ',
  },
];

export const distributionAreas = [
  { country: 'Đài Loan', city: 'Đào Viên', flag: '🇹🇼' },
  { country: 'Hàn Quốc', city: 'Sejong-si', flag: '🇰🇷' },
  { country: 'Nhật Bản', city: 'Nagano', flag: '🇯🇵' },
  { country: 'Việt Nam', city: 'Saraburi', flag: '��' },
  { country: 'Malaysia', city: 'Selangor', flag: '🇲🇾' },
  { country: 'Mỹ', city: 'California', flag: '🇺🇸' },
  { country: 'Úc', city: 'NSW', flag: '🇦🇺' },
];
