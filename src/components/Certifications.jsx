import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Award } from "lucide-react";

export default function Certifications({ certifications = [] }) {
  const scrollerRef = useRef(null);

  // drag-to-scroll (desktop)
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const scrollByCards = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;

    const firstCard = el.querySelector("[data-cert-card]");
    const cardWidth = firstCard?.offsetWidth || 320;
    const gap = 24; // gap-6 = 24px
    el.scrollBy({ left: dir * (cardWidth + gap), behavior: "smooth" });
  };

  const onMouseDown = (e) => {
    const el = scrollerRef.current;
    if (!el) return;
    isDown.current = true;
    startX.current = e.pageX - el.offsetLeft;
    scrollLeft.current = el.scrollLeft;
  };

  const onMouseLeave = () => (isDown.current = false);
  const onMouseUp = () => (isDown.current = false);

  const onMouseMove = (e) => {
    const el = scrollerRef.current;
    if (!el || !isDown.current) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startX.current) * 1.2; // feel
    el.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <section
      id="certifications"
      className="min-h-screen flex"
    >
      <div className="absolute inset-0 bg-[#171c22]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-16 bg-[#00bd95]" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
               <span className="text-white">Certifications</span>
            </h2>
            <div className="h-px w-16 bg-[#00bd95]" />
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Swipe / drag to explore my certificates
          </p>
        </div>

        <div className="relative">
          {/* Left/Right buttons */}
          <button
            type="button"
            aria-label="Scroll left"
            onClick={() => scrollByCards(-1)}
            className="hidden md:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 z-20
                       w-11 h-11 rounded-full bg-[#20272f] border border-[#00bd95]/30
                       hover:border-[#00bd95] hover:shadow-lg hover:shadow-[#00bd95]/20 transition"
          >
            <ChevronLeft className="w-5 h-5 text-[#00bd95]" />
          </button>

          <button
            type="button"
            aria-label="Scroll right"
            onClick={() => scrollByCards(1)}
            className="hidden md:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 z-20
                       w-11 h-11 rounded-full bg-[#20272f] border border-[#00bd95]/30
                       hover:border-[#00bd95] hover:shadow-lg hover:shadow-[#00bd95]/20 transition"
          >
            <ChevronRight className="w-5 h-5 text-[#00bd95]" />
          </button>

          {/* Fade edges (nice touch) */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-[#171c22] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-[#171c22] to-transparent z-10" />

          {/* Scroller */}
          <div
            ref={scrollerRef}
            className="no-scrollbar flex gap-6 overflow-x-auto pb-6 scroll-smooth snap-x snap-mandatory
                       cursor-grab active:cursor-grabbing"
            onMouseDown={onMouseDown}
            onMouseLeave={onMouseLeave}
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMove}
          >
            {certifications.map((c) => (
              <article
                key={`${c.title}-${c.issuer}`}
                data-cert-card
                className="snap-start shrink-0 w-[280px] sm:w-[330px] md:w-[360px]
                           bg-[#20272f] p-5 rounded-2xl border border-[#00bd95]/20
                           hover:border-[#00bd95] transition-all duration-300
                           hover:shadow-xl hover:shadow-[#00bd95]/20"
              >
                {/* Image */}
                <div className="rounded-xl bg-[#171c22] border border-[#00bd95]/20 overflow-hidden">
                  {c.image ? (
                    <img
                      src={c.image}
                      alt={c.title}
                      className="w-full h-[190px] object-cover"
                      loading="lazy"
                      draggable={false}
                    />
                  ) : (
                    <div className="w-full h-[190px] flex items-center justify-center">
                      <Award className="w-10 h-10 text-[#00bd95]" />
                    </div>
                  )}
                </div>

                {/* Text */}
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-white leading-snug">
                    {c.title}
                  </h3>
                  <div className="mt-2 flex items-center justify-between text-sm text-gray-400">
                    <span>{c.issuer}</span>
                    <span>{c.date}</span>
                  </div>

                  {c.credentialUrl && c.credentialUrl !== "#" && (
                    <a
                      href={c.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 mt-4 text-sm text-[#00bd95]
                                 hover:text-white transition"
                    >
                      View Credential <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
