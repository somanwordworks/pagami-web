"use client";

import Image from "next/image";
import { NAVY, GOLD, PARCH, FOOTER_LINKS } from "@/lib/constants";
import SketchDivider from "./sketch/SketchDivider";
import Birds from "./sketch/Birds";

export default function Footer() {
  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 76, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden py-14 px-16" style={{ background: NAVY }}>
      {/* Sketch birds */}
      <svg className="absolute top-4 right-16 opacity-15" width="200" height="40" viewBox="0 0 200 40">
        <Birds color={PARCH} count={8} x0={10} y0={20} spread={180} />
      </svg>

      {/* Gold wash */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <radialGradient id="fw1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={GOLD} stopOpacity="0.05" />
            <stop offset="100%" stopColor={GOLD} stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx="80%" cy="50%" rx="25%" ry="60%" fill="url(#fw1)" />
      </svg>

      <div className="max-w-5xl mx-auto relative z-10">
        <SketchDivider color={PARCH} gold={GOLD} showBirds={false} />

        <div className="flex justify-between items-center mt-6 mb-6">
                  <Image
                      src="/pagamigroupmain-white.png"
                      alt="Pagami Group"
                      width={200}
                      height={80}
                      className="h-[60px] w-auto object-contain"
                  />

          <div className="flex gap-6 items-center">
            {FOOTER_LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="bg-transparent border-none cursor-pointer text-xs tracking-widest transition-colors duration-200"
                style={{
                  fontFamily: "Cormorant SC, serif",
                  color: "rgba(255,255,255,0.27)",
                  letterSpacing: "0.2em",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = GOLD)}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.27)")}
              >
                {link.label.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="h-px mb-5" style={{ background: `${GOLD}22` }} />

        <div className="flex justify-between items-center">
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
            © 2026 Pagami Group. All rights reserved.
          </p>
          <p
            className="text-xs tracking-widest"
            style={{ fontFamily: "Cormorant SC, serif", color: GOLD, letterSpacing: "0.25em" }}
          >
            INTELLIGENCE · VISION · INNOVATION
          </p>
        </div>
      </div>
    </footer>
  );
}
