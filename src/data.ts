import type { Review, Ingredient, Combo, FAQ, PainPoint } from './types';

export const painPoints: PainPoint[] = [
  { id: 1, text: 'Đau khớp gối', icon: '🦵' },
  { id: 2, text: 'Đau lưng', icon: '🔙' },
  { id: 3, text: 'Mỏi cơ tích tụ', icon: '😫' },
  { id: 4, text: 'Đứng lâu mệt mỏi', icon: '🧍' },
  { id: 5, text: 'Thức dậy đau người', icon: '😴' },
  { id: 6, text: 'Đi lại khó khăn', icon: '🚶' },
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
    name: 'Chị Hoa',
    location: 'Đài Trung',
    text: 'Làm việc đứng cả ngày, uống liên tục cảm thấy nhẹ người hơn, không đau gối như trước',
    avatar: '👩',
  },
  {
    id: 2,
    name: 'Anh Tuấn',
    location: 'Đào Viên',
    text: 'Lúc đầu không tin lắm, nhưng thử rồi thấy đi lại thoải mái hơn, lên cầu thang không mệt như trước',
    avatar: '👨',
  },
  {
    id: 3,
    name: 'Chị Lan',
    location: 'Đài Bắc',
    text: 'Mua cho mẹ ở nhà luôn, mẹ bảo uống xong thấy khỏe hơn',
    avatar: '👩',
  },
  {
    id: 4,
    name: 'Anh Minh',
    location: 'Tân Trúc',
    text: 'Làm nhà máy đứng đi cả ngày, uống được 2 tháng thấy người không mỏi như trước',
    avatar: '👨',
  },
  {
    id: 5,
    name: 'Chị Mai',
    location: 'Cao Hùng',
    text: 'Thích vì có MK7, không phải canxi thường, cảm thấy đáng tiền',
    avatar: '👩',
  },
  {
    id: 6,
    name: 'Anh Hùng',
    location: 'Đài Nam',
    text: 'Đặt nhiều lần rồi, team chăm sóc tốt lắm, trả lời nhanh, giao hàng nhanh',
    avatar: '👨',
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
    id: 3,
    buy: 6,
    free: 3,
    isBestSeller: false,
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
    question: 'Uống mỗi ngày bao nhiêu ly?',
    answer: 'Nên uống 1-2 ly mỗi ngày, uống sau bữa sáng hoặc trước khi ngủ để hấp thu tốt nhất',
  },
  {
    id: 2,
    question: 'Phù hợp với ai?',
    answer: 'Phù hợp với người làm việc nặng, đứng lâu, đi nhiều, hoặc muốn chăm sóc xương khớp, đặc biệt từ 30 tuổi trở lên',
  },
  {
    id: 3,
    question: 'Phải uống bao lâu?',
    answer: 'Nên uống liên tục ít nhất 1-2 tháng để cơ thể nhận đủ dinh dưỡng đều đặn',
  },
  {
    id: 4,
    question: 'Có khuyến mãi gì hiện tại?',
    answer: 'Hiện có khuyến mãi đặc biệt Mua 4 Tặng 2 - Tiết kiệm nhất! Nhắn tin để hỏi thêm về khuyến mãi',
  },
  {
    id: 5,
    question: 'Đặt hàng như thế nào?',
    answer: 'Rất đơn giản! Bấm nút "Nhắn tin nhận khuyến mãi" và team sẽ hỗ trợ bạn 24/7',
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
