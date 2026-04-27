"use client";

import { NAVY, GOLD, PARCH, PILLARS } from "@/lib/constants";
import EyeSketch from "./sketch/EyeSketch";
import SketchDivider from "./sketch/SketchDivider";
import SketchLabel from "./sketch/SketchLabel";
import BirdRow from "./sketch/BirdRow";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24"
      style={{ background: PARCH, borderTop: `1px solid ${GOLD}22` }}
    >
      <div className="max-w-5xl mx-auto px-16">
        <SketchLabel text="ABOUT PAGAMI GROUP" gold={GOLD} color={NAVY} />

        <div className="grid gap-16" style={{ gridTemplateColumns: "1fr 300px" }}>
          {/* Left */}
          <div>
            <h2
              className="font-light leading-tight mb-6"
              style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 54, color: NAVY }}
            >
              A Holding Group
              <br />
              Built on{" "}
              <em style={{ color: GOLD }}>Bold</em> Ideas.
            </h2>

            <SketchDivider color={NAVY} gold={GOLD} showBirds={false} />

            {/* Drop cap paragraph */}
            <div className="mt-6 mb-5 overflow-hidden">
              <span
                style={{
                  float: "left",
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: 88,
                  lineHeight: 0.78,
                  marginRight: 6,
                  marginTop: 8,
                  color: GOLD,
                  fontWeight: 600,
                }}
              >
                F
              </span>
              <p
                className="font-light"
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: 20,
                  color: `${NAVY}cc`,
                  lineHeight: 1.88,
                }}
              >
                ounded with the conviction that technology should not merely
                automate — it should illuminate. Pagami Group builds platforms
                that give institutions the clarity, control, and confidence to
                operate at their highest potential.
              </p>
            </div>

            <p
              className="text-sm leading-loose mt-5"
              style={{ color: `${NAVY}77`, lineHeight: 1.9 }}
            >
              From AI-driven security ecosystems to enterprise intelligence
              tools, every Pagami product is engineered with precision thinking
              applied to real-world problems.
            </p>

            {/* Pillars */}
            <div className="mt-11 flex flex-col">
              {PILLARS.map(({ n, title, body }, i) => (
                <div key={n}>
                  <div className="grid gap-4 py-6" style={{ gridTemplateColumns: "44px 1fr" }}>
                    <div
                      style={{
                        fontFamily: "Cormorant Garamond, serif",
                        fontSize: 30,
                        fontWeight: 300,
                        color: GOLD,
                        lineHeight: 1,
                      }}
                    >
                      {n}
                    </div>
                    <div>
                      <div
                        className="mb-1.5 tracking-wide"
                        style={{ fontFamily: "Cormorant SC, serif", fontSize: 13, color: NAVY }}
                      >
                        {title}
                      </div>
                      <p className="text-sm leading-loose" style={{ color: `${NAVY}77`, lineHeight: 1.85 }}>
                        {body}
                      </p>
                    </div>
                  </div>
                  {i < 2 && <SketchDivider color={NAVY} gold={GOLD} showBirds={false} />}
                </div>
              ))}
            </div>
          </div>

          {/* Right — decorative */}
          <div className="flex flex-col items-center pt-5 gap-6">
            <EyeSketch size={220} color={NAVY} gold={GOLD} />
            <div
              className="text-center tracking-widest"
              style={{ fontFamily: "Cormorant SC, serif", fontSize: 10, color: `${NAVY}55`, letterSpacing: "0.25em" }}
            >
              3RDEYE PLATFORM
            </div>
            <BirdRow color={NAVY} count={5} />
            <div
              className="w-full p-6"
              style={{ border: `1px solid ${GOLD}33`, background: `${GOLD}05` }}
            >
              <div
                className="mb-2 tracking-widest"
                style={{ fontFamily: "Cormorant SC, serif", fontSize: 10, color: GOLD, letterSpacing: "0.2em" }}
              >
                FOUNDED
              </div>
              <div
                className="font-light"
                style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 32, color: NAVY }}
              >
                2020
              </div>
              <div className="w-6 h-px my-3" style={{ background: `${GOLD}55` }} />
              <p className="text-xs leading-loose" style={{ color: `${NAVY}66`, lineHeight: 1.8 }}>
                Technology holding company — building the next generation of
                intelligent enterprise platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
