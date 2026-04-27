"use client";

import { useState } from "react";
import { NAVY, GOLD, PARCH, PARCH2, MODULES, METRICS } from "@/lib/constants";
import EyeSketch from "./sketch/EyeSketch";
import SketchDivider from "./sketch/SketchDivider";
import SketchLabel from "./sketch/SketchLabel";

export default function ThirdEyeSection() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="3rd-eye"
      className="py-24"
      style={{ background: PARCH2, borderTop: `1px solid ${GOLD}22` }}
    >
      <div className="max-w-5xl mx-auto px-16">
        <SketchLabel text="A PAGAMI GROUP PRODUCT" gold={GOLD} color={NAVY} />

        {/* Hero grid */}
        <div
          className="grid gap-16 items-start mb-14"
          style={{ gridTemplateColumns: "1fr 1fr" }}
        >
          {/* Left */}
          <div>
            <EyeSketch size={100} color={NAVY} gold={GOLD} />
            <div className="w-px h-8 my-4" style={{ background: `${GOLD}44` }} />
            <h2
              className="font-light leading-none mb-5"
              style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 58, color: NAVY }}
            >
              3rdEye —
              <br />
              <em style={{ color: GOLD }}>The Intelligent</em>
              <br />
              Eye That
              <br />
              Never Blinks.
            </h2>
            <SketchDivider color={NAVY} gold={GOLD} showBirds />
            <p
              className="font-light mt-4 mb-7 max-w-sm"
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: 20,
                color: `${NAVY}99`,
                lineHeight: 1.85,
              }}
            >
              A next-generation AI-powered security platform — combining facial
              recognition, visitor management, and smart HR into one unified
              system.
            </p>
            <a
              href="https://3rdeyeapp.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xs tracking-widest px-7 py-3 transition-all duration-200"
              style={{
                fontFamily: "Cormorant SC, serif",
                border: `1px solid ${NAVY}`,
                color: NAVY,
                textDecoration: "none",
                letterSpacing: "0.2em",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.background = NAVY;
                el.style.color = PARCH;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.background = "none";
                el.style.color = NAVY;
              }}
            >
              VISIT 3RDEYEAPP.IN →
            </a>
          </div>

          {/* Right — metrics */}
          <div>
            <div
              className="mb-5 tracking-widest"
              style={{ fontFamily: "Cormorant SC, serif", fontSize: 10, color: GOLD, letterSpacing: "0.25em" }}
            >
              PLATFORM METRICS
            </div>
            {METRICS.map(({ value, label }, i) => (
              <div key={label}>
                <div className="grid pb-4 mb-4" style={{ gridTemplateColumns: "110px 1fr" }}>
                  <div
                    className="font-light leading-none"
                    style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 38, color: GOLD }}
                  >
                    {value}
                  </div>
                  <div
                    className="text-xs pl-4 pt-1.5 leading-snug"
                    style={{
                      color: `${NAVY}77`,
                      borderLeft: `1px solid ${GOLD}22`,
                      lineHeight: 1.5,
                    }}
                  >
                    {label}
                  </div>
                </div>
                {i < 3 && <SketchDivider color={NAVY} gold={GOLD} showBirds={false} />}
              </div>
            ))}
            <div
              className="mt-3 p-4"
              style={{ border: `1px solid ${GOLD}22`, background: `${GOLD}05` }}
            >
              <div
                className="mb-1 tracking-widest"
                style={{ fontFamily: "Cormorant SC, serif", fontSize: 10, color: GOLD, letterSpacing: "0.2em" }}
              >
                AI ENGINE
              </div>
              <div
                className="font-light italic"
                style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 16, color: NAVY }}
              >
                DeepFace · Facenet512 · pgvector on Neon
              </div>
            </div>
          </div>
        </div>

        {/* Module tabs */}
        <div>
          <div className="flex" style={{ borderBottom: `1px solid ${GOLD}33` }}>
            {MODULES.map((m, i) => (
              <button
                key={m.id}
                onClick={() => setActive(i)}
                className="flex-1 text-left px-5 py-4 border-none cursor-pointer transition-all duration-200"
                style={{
                  background: i === active ? `${GOLD}08` : "transparent",
                  borderBottom: `2px solid ${i === active ? GOLD : "transparent"}`,
                  marginBottom: -1,
                }}
              >
                <div
                  className="italic mb-0.5"
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: 20,
                    color: i === active ? GOLD : NAVY,
                  }}
                >
                  {m.id}.
                </div>
                <div
                  className="tracking-wide"
                  style={{
                    fontFamily: "Cormorant SC, serif",
                    fontSize: 12,
                    color: i === active ? NAVY : `${NAVY}66`,
                    letterSpacing: "0.08em",
                  }}
                >
                  {m.label}
                </div>
              </button>
            ))}
          </div>

          <div
            className="grid gap-10 p-8"
            style={{
              border: `1px solid ${GOLD}22`,
              borderTop: "none",
              background: `${GOLD}04`,
              gridTemplateColumns: "1fr 1fr",
            }}
          >
            <p
              className="font-light"
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: 19,
                color: `${NAVY}cc`,
                lineHeight: 1.88,
              }}
            >
              {MODULES[active].desc}
            </p>
            <ul className="list-none flex flex-col gap-3">
              {MODULES[active].features.map((f) => (
                <li key={f} className="flex gap-2.5 items-start">
                  <svg width="14" height="14" viewBox="0 0 14 14" className="flex-shrink-0 mt-0.5">
                    <path
                      d="M2,7 Q7,2 12,7 Q7,12 2,7 Z"
                      stroke={GOLD}
                      strokeWidth="0.8"
                      fill={GOLD}
                      fillOpacity="0.15"
                    />
                  </svg>
                  <span className="text-sm leading-loose" style={{ color: `${NAVY}77`, lineHeight: 1.7 }}>
                    {f}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
