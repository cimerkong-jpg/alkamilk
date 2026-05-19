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
          <div className="relative rounded-[28px] bg-gradient-to-br from-red-500 via-amber-300 to-red-100 p-[3px] shadow-2xl shadow-red-200/70">
            <div className="absolute -inset-4 -z-10 rounded-[36px] bg-red-300/20 blur-2xl"></div>
            <div className="overflow-hidden rounded-[25px] bg-gray-950 ring-1 ring-white/70">
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
                    className="absolute right-3 top-3 flex min-h-11 items-center gap-2 rounded-full bg-black/55 px-3.5 py-2 text-sm font-bold text-white shadow-lg ring-1 ring-white/20 backdrop-blur-md transition hover:bg-black/70 active:scale-95"
                    aria-label={isMuted ? 'เปิดเสียงวิดีโอ' : 'ปิดเสียงวิดีโอ'}
                    aria-pressed={!isMuted}
                  >
                    <span className="text-lg leading-none">{isMuted ? '🔇' : '🔊'}</span>
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
          </div>

          <div className="mt-5 rounded-2xl bg-white p-4 shadow-xl ring-1 ring-red-100">
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="text-sm font-bold text-red-600">LIVE REPLAY</p>
                <p className="mt-1 text-sm text-gray-600">
                  วิดีโอไลฟ์จริงพร้อมคอมเมนต์และรีแอคชันในคลิป
                </p>
              </div>
              <div className="flex flex-shrink-0 items-center gap-1 rounded-full bg-red-50 px-3 py-2 text-sm font-black text-red-600">
                <span className="h-2 w-2 rounded-full bg-red-600"></span>
                4.8K+
              </div>
            </div>

            <button
              onClick={handleMessengerClick}
              className="mt-4 min-h-12 w-full rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-5 py-3 text-base font-black text-white shadow-lg transition hover:from-red-700 hover:to-red-800 active:scale-[0.98]"
            >
              📩 ทักแชทรับโปรโมชั่น
            </button>
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
