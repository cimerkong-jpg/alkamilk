import { useEffect, useRef, useState, type CSSProperties } from 'react';

const MESSENGER_URL = 'https://m.me/1160453107144286';
const LIVE_VIDEO_SRC = '/live-loop.mp4';
const LIVE_POSTER_SRC = '/live-poster.jpg';

const LIVE_COMMENT_PROFILES = [
  {
    name: 'Nuch',
    text: 'ส่งไต้หวันกี่วันคะ',
    avatarUrl: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    name: 'Ploy',
    text: 'ซื้อ 4 แถม 2 ยังมีไหม',
    avatarUrl: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    name: 'May',
    text: 'ปวดเข่ากินได้ไหมคะ',
    avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Ning',
    text: 'ทำงานยืนทั้งวัน สนใจค่ะ',
    avatarUrl: 'https://randomuser.me/api/portraits/women/79.jpg',
  },
  {
    name: 'Ann',
    text: 'ขอรายละเอียดโปรหน่อยค่ะ',
    avatarUrl: 'https://randomuser.me/api/portraits/women/52.jpg',
  },
  {
    name: 'Dao',
    text: 'แม่ที่ไทยกินได้ไหมคะ',
    avatarUrl: 'https://randomuser.me/api/portraits/women/33.jpg',
  },
  {
    name: 'Fon',
    text: 'ทักไปแล้วนะคะ',
    avatarUrl: 'https://randomuser.me/api/portraits/women/46.jpg',
  },
  {
    name: 'Kae',
    text: 'อยู่เถาหยวนส่งได้ไหม',
    avatarUrl: 'https://randomuser.me/api/portraits/women/81.jpg',
  },
];

const REACTIONS = ['❤️', '👍', '😍', '😮'];

interface LiveComment {
  id: number;
  name: string;
  text: string;
  avatarUrl: string;
}

interface FloatingReaction {
  id: number;
  icon: string;
  left: number;
  size: number;
  drift: number;
  duration: number;
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
      const id = Date.now();

      setComments((currentComments) => [
        ...currentComments.slice(-2),
        {
          id,
          ...getRandomItem(LIVE_COMMENT_PROFILES),
        },
      ]);

      window.setTimeout(() => {
        setComments((currentComments) => currentComments.filter((comment) => comment.id !== id));
      }, 7600);

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
          left: 45 + Math.random() * 40,
          size: 26 + Math.random() * 12,
          drift: -42 + Math.random() * 64,
          duration: 2800 + Math.random() * 900,
        },
      ]);

      window.setTimeout(() => {
        setReactions((currentReactions) => currentReactions.filter((reaction) => reaction.id !== id));
      }, 3800);

      timeoutId = window.setTimeout(pushReaction, 850 + Math.random() * 900);
    };

    timeoutId = window.setTimeout(pushReaction, 650);
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
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black/70 via-black/22 to-transparent"></div>

              <div className="absolute left-4 top-4 flex overflow-hidden rounded-[4px] text-white shadow-lg">
                <div className="flex items-center gap-1.5 bg-red-600 px-3 py-1.5 text-sm font-black tracking-wide">
                  <span className="h-2 w-2 rounded-full bg-white live-dot-pulse"></span>
                  LIVE
                </div>
                <div className="flex items-center gap-1.5 bg-black/38 px-2.5 py-1.5 text-sm font-bold backdrop-blur-sm">
                  <span className="text-base leading-none">👁</span>
                  {(viewerCount / 1000).toFixed(1)}K
                </div>
              </div>

              {!shouldPlayVideo && prefersReducedMotion && (
                <div className="absolute inset-x-5 top-1/2 -translate-y-1/2 rounded-2xl bg-black/55 px-4 py-3 text-center text-sm font-semibold text-white backdrop-blur">
                  เปิดโหมดลดการเคลื่อนไหวอยู่
                </div>
              )}

              <div className="absolute bottom-20 left-4 right-24 space-y-1.5">
                {comments.map((comment) => (
                  <div key={comment.id} className="live-comment-enter flex max-w-[94%] items-end gap-2">
                    <div className="relative h-7 w-7 flex-shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-red-300 to-amber-200 text-center text-sm font-bold leading-7 text-red-800 shadow ring-2 ring-white/75">
                      {comment.name.charAt(0)}
                      <img
                        src={comment.avatarUrl}
                        alt=""
                        width="28"
                        height="28"
                        className="absolute inset-0 h-full w-full object-cover"
                        loading="lazy"
                        decoding="async"
                        referrerPolicy="no-referrer"
                        onError={(event) => {
                          event.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                    <div className="rounded-[10px] bg-black/43 px-3 py-2 text-left shadow-lg ring-1 ring-white/10 backdrop-blur-[2px]">
                      <p className="text-[11px] font-bold leading-none text-white/90">{comment.name}</p>
                      <p className="mt-1 text-[13px] font-medium leading-snug text-white">{comment.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pointer-events-none absolute bottom-16 right-0 top-16 left-[44%] overflow-hidden">
                {reactions.map((reaction) => (
                  <span
                    key={reaction.id}
                    className="live-reaction-float absolute bottom-0 flex h-11 w-11 items-center justify-center rounded-full bg-white/92 shadow-xl ring-1 ring-white/80 backdrop-blur-sm"
                    style={{
                      left: `${reaction.left}%`,
                      fontSize: `${reaction.size}px`,
                      '--reaction-drift': `${reaction.drift}px`,
                      '--reaction-duration': `${reaction.duration}ms`,
                    } as CSSProperties}
                  >
                    {reaction.icon}
                  </span>
                ))}
              </div>

              <div className="absolute inset-x-3 bottom-3 flex items-center gap-2">
                <button
                  onClick={handleMessengerClick}
                  className="min-h-11 rounded-full bg-white px-5 text-base font-black tracking-wide text-gray-800 shadow-lg active:scale-95"
                >
                  SHARE
                </button>
                <button
                  onClick={handleMessengerClick}
                  className="min-h-11 min-w-0 flex-1 rounded-full bg-black/36 px-4 text-left text-sm font-medium text-white/88 shadow-lg ring-1 ring-white/20 backdrop-blur-md active:scale-[0.99]"
                >
                  แสดงความคิดเห็น...
                </button>
                <div className="flex flex-shrink-0 items-center gap-1.5">
                  <button
                    onClick={handleMessengerClick}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1877F2] text-xl shadow-lg active:scale-95"
                    aria-label="Like"
                  >
                    👍
                  </button>
                  <button
                    onClick={handleMessengerClick}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F02849] text-xl shadow-lg active:scale-95"
                    aria-label="Love"
                  >
                    ❤️
                  </button>
                </div>
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
