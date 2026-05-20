const HeaderPromoBar = () => {
  const handleChatClick = () => {
    window.open('https://m.me/1160453107144286', '_blank');
  };

  return (
    <div className="sticky top-0 z-50 border-b border-red-100/80 bg-white/92 px-4 py-2.5 text-gray-950 shadow-[0_8px_24px_rgba(15,23,42,0.06)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </span>
          <div className="min-w-0">
            <p className="truncate text-xs font-black uppercase tracking-[0.14em] text-red-600">
              ALKAMILK BONTIN-MK7
            </p>
            <p className="truncate text-[11px] font-semibold text-gray-500 md:text-xs">
              ส่งไต้หวัน • คนไทยดูแล • ตอบแชทเร็ว
            </p>
          </div>
        </div>
        <button
          onClick={handleChatClick}
          className="flex-shrink-0 rounded-full border border-red-100 bg-red-50 px-3.5 py-2 text-xs font-black text-red-600 shadow-sm transition-all hover:bg-red-100 active:scale-95 md:px-4"
        >
          ดูโปรวันนี้
        </button>
      </div>
    </div>
  );
};

export default HeaderPromoBar;
