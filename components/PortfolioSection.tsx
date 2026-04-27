"use client";

import { NAVY, GOLD, PARCH, PORTFOLIO_ITEMS } from "@/lib/constants";
import SketchLabel from "./sketch/SketchLabel";
import BirdRow from "./sketch/BirdRow";

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="py-24"
      style={{ background: PARCH, borderTop: `1px solid ${GOLD}22` }}
    >
      <div className="max-w-5xl mx-auto px-16">
        <SketchLabel text="THE PORTFOLIO" gold={GOLD} color={NAVY} />

        <h2
          className="font-light leading-tight text-center mb-4"
          style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 48, color: NAVY }}
        >
          Products Built to{" "}
          <em style={{ color: GOLD }}>Define Categories.</em>
        </h2>

        <div className="flex justify-center mb-12">
          <BirdRow color={NAVY} count={9} />
        </div>

        <div className="grid gap-px" style={{ gridTemplateColumns: "1fr 1fr 1fr" }}>
          {PORTFOLIO_ITEMS.map(({ name, tag, status, desc, link, roman }, i) => (
            <div
              key={roman}
              className="relative p-10"
              style={{
                border: `1px solid ${GOLD}22`,
                borderLeft: i === 0 ? `3px solid ${GOLD}` : `1px solid ${GOLD}22`,
                background: i === 0 ? `${GOLD}04` : "transparent",
              }}
            >
              {/* Watermark numeral */}
              <div
                className="absolute top-3 right-4 font-semibold pointer-events-none select-none"
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: 52,
                  color: GOLD,
                  opacity: 0.07,
                }}
              >
                {roman}
              </div>

              <div
                className="mb-3 tracking-widest"
                style={{ fontFamily: "Cormorant SC, serif", fontSize: 10, color: GOLD, letterSpacing: "0.25em" }}
              >
                {tag}
              </div>

              <div
                className="mb-3 font-light"
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: 34,
                  color: NAVY,
                  fontStyle: i > 0 ? "italic" : "normal",
                }}
              >
                {name}
              </div>

              <div
                className="inline-block mb-4 px-2.5 py-0.5 tracking-wider"
                style={{
                  fontFamily: "Cormorant SC, serif",
                  fontSize: 10,
                  color: status === "LIVE" ? "#4a9e6d" : `${NAVY}55`,
                  border: `1px solid ${status === "LIVE" ? "#4a9e6d55" : `${NAVY}22`}`,
                  letterSpacing: "0.1em",
                }}
              >
                {status}
              </div>

              <p className="text-sm leading-loose" style={{ color: `${NAVY}77`, lineHeight: 1.85 }}>
                {desc}
              </p>

              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-xs tracking-widest no-underline transition-opacity duration-200 hover:opacity-70"
                  style={{
                    fontFamily: "Cormorant SC, serif",
                    color: GOLD,
                    letterSpacing: "0.2em",
                    textDecoration: "none",
                  }}
                >
                  EXPLORE →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
