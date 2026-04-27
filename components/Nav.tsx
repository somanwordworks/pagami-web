"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { NAVY, GOLD, NAV_LINKS } from "@/lib/constants";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 76, behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(254,252,247,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        borderBottom: scrolled ? `1px solid ${GOLD}33` : "none",
      }}
    >
      {/* Wavy top line */}
      {!scrolled && (
        <svg
          className="absolute top-0 left-0 w-full"
          height="3"
          viewBox="0 0 1440 3"
          preserveAspectRatio="none"
        >
          <path
            d="M0,1.5 C200,0.5 400,2.5 600,1.5 C800,0.5 1000,2.5 1200,1.5 L1440,1.5"
            stroke={GOLD}
            strokeWidth="1.5"
            fill="none"
            opacity="0.7"
          />
        </svg>
      )}

      <div className="max-w-6xl mx-auto px-12 h-[90px] flex items-center justify-between">
              <Image
                  src="/pagamigroupmain.png"
                  alt="Pagami Group"
                  width={300}
                  height={100}
                  className="h-[80px] w-auto object-contain"
              />

        <div className="flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="bg-transparent border-none cursor-pointer text-xs tracking-widest transition-colors duration-200"
              style={{ fontFamily: "Cormorant SC, serif", color: NAVY, letterSpacing: "0.18em" }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = GOLD)}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = NAVY)}
            >
              {link.label.toUpperCase()}
            </button>
          ))}

          <button
            onClick={() => scrollTo("#contact")}
            className="text-xs tracking-widest px-4 py-2 transition-all duration-200 cursor-pointer"
            style={{
              fontFamily: "Cormorant SC, serif",
              border: `1px solid ${GOLD}`,
              color: GOLD,
              background: "none",
              letterSpacing: "0.15em",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.background = GOLD;
              el.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.background = "none";
              el.style.color = GOLD;
            }}
          >
            CONTACT
          </button>
        </div>
      </div>
    </nav>
  );
}
