export type LandingVariant = 'messenger' | 'conversion' | 'alkamilk-sale';

const MESSENGER_URL = 'https://m.me/1160453107144286';

export const getLandingVariant = (): LandingVariant => {
  if (typeof window === 'undefined') return 'messenger';

  const path = window.location.pathname.replace(/\/+$/, '');

  if (path.endsWith('/conversion')) return 'conversion';
  if (path.endsWith('/alkamilk-sale')) return 'alkamilk-sale';

  return 'messenger';
};

export const getVariantSource = () => getLandingVariant();

export const getMessengerUrl = (message = 'Quan tâm AlkaMilk Bontin-MK7') => {
  const source = getVariantSource();
  const text = `${message} | Source: ${source}`;
  return `${MESSENGER_URL}?text=${encodeURIComponent(text)}`;
};

export const getPrimaryCtaLabel = () => {
  const variant = getLandingVariant();

  if (variant === 'conversion') return 'Đăng ký tư vấn';
  if (variant === 'alkamilk-sale') return 'Đặt combo ngay';

  return 'Nhắn Messenger nhận ưu đãi';
};

export const getBottomCtaLabel = () => {
  const variant = getLandingVariant();

  if (variant === 'conversion') return 'รับคำปรึกษา';
  if (variant === 'alkamilk-sale') return 'สั่งซื้อ';

  return 'ทักแชท';
};

export const getBottomHeadline = () => {
  const variant = getLandingVariant();

  if (variant === 'conversion') return 'กรอกเบอร์ให้ทีมโทรกลับ';
  if (variant === 'alkamilk-sale') return 'เลือก combo แล้วให้ทีมยืนยัน';

  return 'ซื้อ 4 แถม 2';
};

export const getBottomSubline = () => {
  const variant = getLandingVariant();

  if (variant === 'conversion') return 'แจ้งอาการ + เบอร์โทร';
  if (variant === 'alkamilk-sale') return 'ลงทะเบียนสั่งซื้อให้ครบ';

  return 'รับคำแนะนำก่อนสั่งซื้อ';
};

export const getLeadTargetId = () => {
  const variant = getLandingVariant();
  return variant === 'alkamilk-sale' ? 'order-form' : 'lead-form';
};

export const handleLandingAction = (message?: string) => {
  const variant = getLandingVariant();

  if (variant === 'messenger') {
    window.open(getMessengerUrl(message), '_blank', 'noopener,noreferrer');
    return;
  }

  document.getElementById(getLeadTargetId())?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};
