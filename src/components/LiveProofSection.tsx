import { useEffect, useRef, useState } from 'react';

const MESSENGER_URL = 'https://m.me/1160453107144286';
const LIVE_VIDEO_SRC = '/live-loop.mp4';
const LIVE_POSTER_SRC = '/live-poster.jpg';

const LiveProofSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [hasVideoError, setHasVideoError] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

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

  const handleMessengerClick = () => {
    window.open(MESSENGER_URL, '_blank', 'noopener,noreferrer');
  };

  const handleToggleMute = () => {
    setIsMuted((currentMuted) => {
      const nextMuted = !currentMuted;

      if (videoRef.current) {
        videoRef.current.muted = nextMuted;
        if (!nextMuted) {
          void videoRef.current.play();
        }
      }

      return nextMuted;
    });
  };

  return (
    <section ref={sectionRef} className="py-12 md:py-16 px-4 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-7 md:mb-9">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-red-600">Live replay</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-950 mb-3 leading-tight">
            กำลังเป็นที่นิยมในกลุ่มคนไทยที่ไต้หวัน
          </h2>
          <p className="text-base md:text-lg text-gray-700">
            ดูบรรยากาศไลฟ์และข้อความจากลูกค้าจริง
          </p>
        </div>

        <div className="mx-auto max-w-[460px]">
          <div className="rounded-[30px] bg-white/90 p-3 shadow-[0_24px_80px_rgba(15,23,42,0.14)] ring-1 ring-black/5 backdrop-blur">
            <div className="overflow-hidden rounded-[24px] bg-gray-950 shadow-inner ring-1 ring-black/10">
              <div className="relative aspect-[9/16] bg-gray-900">
                {shouldPlayVideo ? (
                  <video
                    ref={videoRef}
                    className="h-full w-full object-cover"
                    autoPlay
                    muted={isMuted}
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

                {shouldPlayVideo && (
                  <button
                    type="button"
                    onClick={handleToggleMute}
                    className="absolute right-3 top-3 flex min-h-10 items-center gap-2 rounded-full bg-white/86 px-3 py-2 text-xs font-bold text-gray-950 shadow-lg ring-1 ring-black/10 backdrop-blur-xl transition hover:bg-white active:scale-95"
                    aria-label={isMuted ? 'เปิดเสียงวิดีโอ' : 'ปิดเสียงวิดีโอ'}
                    aria-pressed={!isMuted}
                  >
                    <span className="text-base leading-none">{isMuted ? '🔇' : '🔊'}</span>
                    <span>{isMuted ? 'เปิดเสียง' : 'ปิดเสียง'}</span>
                  </button>
                )}

                {!shouldPlayVideo && prefersReducedMotion && (
                  <div className="absolute inset-x-5 top-1/2 -translate-y-1/2 rounded-2xl bg-black/55 px-4 py-3 text-center text-sm font-semibold text-white backdrop-blur">
                    เปิดโหมดลดการเคลื่อนไหวอยู่
                  </div>
                )}
              </div>
            </div>

            <div className="px-1 pb-1 pt-4">
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-sm font-bold text-gray-950">ALKAMILK BONTIN-MK7 Live</p>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">
                    วิดีโอไลฟ์จริงพร้อมคอมเมนต์และรีแอคชันในคลิป
                  </p>
                </div>
                <div className="flex flex-shrink-0 items-center gap-1 rounded-full bg-gray-100 px-3 py-2 text-sm font-black text-gray-900 ring-1 ring-black/5">
                  <span className="h-2 w-2 rounded-full bg-red-600"></span>
                  4.8K+
                </div>
              </div>

              <button
                onClick={handleMessengerClick}
                className="mt-4 min-h-12 w-full rounded-2xl bg-gray-950 px-5 py-3 text-base font-black text-white shadow-lg transition hover:bg-black active:scale-[0.98]"
              >
                📩 ทักแชทรับโปรโมชั่น
              </button>

              <div className="mt-4 grid grid-cols-3 divide-x divide-gray-200 rounded-2xl bg-gray-50 py-3 text-center ring-1 ring-black/5">
                <div className="px-2">
                  <p className="text-base font-black text-gray-950">4+2</p>
                  <p className="text-[11px] font-semibold text-gray-500">โปรขายดี</p>
                </div>
                <div className="px-2">
                  <p className="text-base font-black text-gray-950">24 ชม.</p>
                  <p className="text-[11px] font-semibold text-gray-500">ตอบแชท</p>
                </div>
                <div className="px-2">
                  <p className="text-base font-black text-gray-950">ไต้หวัน</p>
                  <p className="text-[11px] font-semibold text-gray-500">จัดส่งได้</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveProofSection;
