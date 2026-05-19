import { useEffect, useRef, useState } from 'react';

const MESSENGER_URL = 'https://m.me/1160453107144286';
const LIVE_VIDEO_SRC = '/live-loop.mp4';
const LIVE_POSTER_SRC = '/live-poster.jpg';

const LIVE_COMMENTS = [
  'ส่งไต้หวันกี่วันคะ',
  'ซื้อ 4 แถม 2 ยังมีไหม',
  'ปวดเข่ากินได้ไหมคะ',
  'ทำงานยืนทั้งวัน สนใจค่ะ',
  'ขอรายละเอียดโปรหน่อยค่ะ',
  'แม่ที่ไทยกินได้ไหมคะ',
  'ทักไปแล้วนะคะ',
  'อยู่เถาหยวนส่งได้ไหม',
];

const COMMENT_NAMES = ['Nuch', 'Ploy', 'May', 'Ning', 'Ann', 'Dao', 'Fon', 'Kae'];
const REACTIONS = ['❤️', '👍', '😍', '😮'];

interface LiveComment {
  id: number;
  name: string;
  text: string;
}

interface FloatingReaction {
  id: number;
  icon: string;
  right: number;
  size: number;
}

const getRandomItem = <T,>(items: T[]) => items[Math.floor(Math.random() * items.length)];

const LiveProofSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [hasVideoError, setHasVideoError] = useState(false);
  const [viewerCount, setViewerCount] = useState(4860);
  const [comments, setComments] = useState<LiveComment[]>([]);
  const [reactions, setReactions] = useState<FloatingReaction[]>([]);

  const shouldPlayVideo = isInView && !prefersReducedMotion && !hasVideoError;

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotionPreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updateMotionPreference();
    mediaQuery.addEventListener('change', updateMotionPreference);

    return () => mediaQuery.removeEventListener('change', updateMotionPreference);
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '180px 0px', threshold: 0.2 },
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView || prefersReducedMotion) return;

    const intervalId = window.setInterval(() => {
      setViewerCount(Math.floor(4800 + Math.random() * 201));
    }, 3500);

    return () => window.clearInterval(intervalId);
  }, [isInView, prefersReducedMotion]);

  useEffect(() => {
    if (!isInView || prefersReducedMotion) return;

    let timeoutId: number;

    const pushComment = () => {
      setComments((currentComments) => [
        ...currentComments.slice(-2),
        {
          id: Date.now(),
          name: getRandomItem(COMMENT_NAMES),
          text: getRandomItem(LIVE_COMMENTS),
        },
      ]);

      timeoutId = window.setTimeout(pushComment, 2000 + Math.random() * 2000);
    };

    timeoutId = window.setTimeout(pushComment, 900);
    return () => window.clearTimeout(timeoutId);
  }, [isInView, prefersReducedMotion]);

  useEffect(() => {
    if (!isInView || prefersReducedMotion) return;

    let timeoutId: number;

    const pushReaction = () => {
      const id = Date.now();

      setReactions((currentReactions) => [
        ...currentReactions.slice(-3),
        {
          id,
          icon: getRandomItem(REACTIONS),
          right: 10 + Math.random() * 18,
          size: 22 + Math.random() * 8,
        },
      ]);

      window.setTimeout(() => {
        setReactions((currentReactions) => currentReactions.filter((reaction) => reaction.id !== id));
      }, 3200);

      timeoutId = window.setTimeout(pushReaction, 1700 + Math.random() * 1300);
    };

    timeoutId = window.setTimeout(pushReaction, 1200);
    return () => window.clearTimeout(timeoutId);
  }, [isInView, prefersReducedMotion]);

  const handleMessengerClick = () => {
    window.open(MESSENGER_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <section ref={sectionRef} className="py-12 md:py-16 px-4 bg-gradient-to-b from-white via-red-50 to-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 leading-tight">
            กำลังเป็นที่นิยมในกลุ่มคนไทยที่ไต้หวัน
          </h2>
          <p className="text-base md:text-lg text-gray-700">
            ดูบรรยากาศไลฟ์และข้อความจากลูกค้าจริง
          </p>
        </div>

        <div className="max-w-[430px] mx-auto">
          <div className="overflow-hidden rounded-2xl bg-gray-950 shadow-2xl ring-1 ring-red-200">
            <div className="flex items-center justify-between gap-3 bg-gradient-to-r from-red-700 to-red-600 px-4 py-3 text-white">
              <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-60"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-white"></span>
                </span>
                <span className="text-sm font-black tracking-wide">LIVE</span>
              </div>
              <span className="text-sm font-bold text-white/95">
                👁 {(viewerCount / 1000).toFixed(1)}K กำลังดู
              </span>
            </div>

            <div className="relative aspect-[9/16] bg-gray-900">
              {shouldPlayVideo ? (
                <video
                  className="h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="none"
                  poster={LIVE_POSTER_SRC}
                  src={LIVE_VIDEO_SRC}
                  onError={() => setHasVideoError(true)}
                />
              ) : (
                <img
                  src={LIVE_POSTER_SRC}
                  alt="ALKAMILK BONTIN-MK7 live replay"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              )}

              <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/35 to-transparent"></div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/55 via-black/15 to-transparent"></div>

              <div className="absolute left-3 top-3 rounded-full bg-black/45 px-3 py-1.5 text-xs font-bold text-white backdrop-blur">
                ALKAMILK BONTIN-MK7
              </div>

              {!shouldPlayVideo && prefersReducedMotion && (
                <div className="absolute inset-x-5 top-1/2 -translate-y-1/2 rounded-2xl bg-black/55 px-4 py-3 text-center text-sm font-semibold text-white backdrop-blur">
                  เปิดโหมดลดการเคลื่อนไหวอยู่
                </div>
              )}

              <div className="absolute bottom-4 left-3 right-14 space-y-2">
                {comments.map((comment) => (
                  <div key={comment.id} className="live-comment-enter flex items-start gap-2">
                    <div className="mt-1 h-7 w-7 flex-shrink-0 rounded-full bg-gradient-to-br from-red-300 to-amber-200 text-center text-sm leading-7 shadow">
                      {comment.name.charAt(0)}
                    </div>
                    <div className="max-w-[92%] rounded-2xl bg-white/92 px-3 py-2 text-left shadow-lg backdrop-blur">
                      <p className="text-[11px] font-bold leading-none text-gray-900">{comment.name}</p>
                      <p className="mt-1 text-sm leading-snug text-gray-800">{comment.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pointer-events-none absolute bottom-5 right-3 top-20 w-12 overflow-hidden">
                {reactions.map((reaction) => (
                  <span
                    key={reaction.id}
                    className="live-reaction-float absolute bottom-0 drop-shadow-lg"
                    style={{
                      right: `${reaction.right}px`,
                      fontSize: `${reaction.size}px`,
                    }}
                  >
                    {reaction.icon}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white p-3">
              <div className="flex items-center gap-2 rounded-2xl border border-gray-200 bg-gray-50 p-2 shadow-inner">
                <div className="min-w-0 flex-1 px-2 text-sm text-gray-500">
                  พิมพ์ข้อความเพื่อรับโปรโมชัน...
                </div>
                <button
                  onClick={handleMessengerClick}
                  className="min-h-12 flex-shrink-0 rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-4 py-3 text-sm font-black text-white shadow-lg transition hover:from-red-700 hover:to-red-800 active:scale-95"
                >
                  📩 ทักแชทรับโปรโมชั่น
                </button>
              </div>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-2 text-center">
            <div className="rounded-xl bg-white px-3 py-3 shadow-md ring-1 ring-red-100">
              <p className="text-lg font-black text-red-600">4+2</p>
              <p className="text-xs font-semibold text-gray-600">โปรขายดี</p>
            </div>
            <div className="rounded-xl bg-white px-3 py-3 shadow-md ring-1 ring-amber-100">
              <p className="text-lg font-black text-amber-600">24 ชม.</p>
              <p className="text-xs font-semibold text-gray-600">ตอบแชท</p>
            </div>
            <div className="rounded-xl bg-white px-3 py-3 shadow-md ring-1 ring-green-100">
              <p className="text-lg font-black text-green-600">ไต้หวัน</p>
              <p className="text-xs font-semibold text-gray-600">จัดส่งได้</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveProofSection;
