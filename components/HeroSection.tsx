"use client";

import Image from "next/image";
import { NAVY, GOLD, PARCH } from "@/lib/constants";
import BuildingSketch from "./sketch/BuildingSketch";
import SketchDivider from "./sketch/SketchDivider";
import BirdRow from "./sketch/BirdRow";

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.offsetTop - 76, behavior: "smooth" });
};

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen grid pt-[70px] relative overflow-hidden"
      style={{
        background: PARCH,
        gridTemplateColumns: "1fr 1fr",
        alignItems: "center",
      }}
    >
      {/* Background washes */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="hw1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={GOLD} stopOpacity="0.06" />
            <stop offset="100%" stopColor={GOLD} stopOpacity="0" />
          </radialGradient>
          <radialGradient id="hw2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={NAVY} stopOpacity="0.025" />
            <stop offset="100%" stopColor={NAVY} stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx="65%" cy="42%" rx="30%" ry="38%" fill="url(#hw1)" />
        <ellipse cx="20%" cy="80%" rx="18%" ry="12%" fill="url(#hw2)" />
      </svg>

      {/* Left — text */}
      <div className="relative z-10 px-20 py-20">
        <div className="mb-4">
          <BirdRow color={NAVY} count={7} />
        </div>

        <p
          className="text-xs tracking-widest mb-6"
          style={{ fontFamily: "Cormorant SC, serif", color: GOLD, letterSpacing: "0.3em" }}
        >
          INTELLIGENCE · VISION · INNOVATION
        </p>

        <h1
          className="font-light leading-none mb-6"
          style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "clamp(48px, 5.5vw, 88px)",
            color: NAVY,
            letterSpacing: "-0.01em",
          }}
        >
          Where Ideas
          <br />
          <em style={{ color: GOLD }}>Shape</em>
          <br />
          the Future.
        </h1>

        <SketchDivider color={NAVY} gold={GOLD} showBirds={false} />

        <p
          className="font-light mt-5 mb-10 max-w-md"
          style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: 21,
            color: `${NAVY}aa`,
            lineHeight: 1.85,
          }}
        >
          Pagami Group is a technology holding company — building intelligent
          platforms that redefine how institutions see, manage, and secure their
          world.
        </p>

        <div className="flex gap-4 flex-wrap mb-10">
          <button
            onClick={() => scrollTo("3rd-eye")}
            className="text-xs tracking-widest px-8 py-3 transition-all duration-200 cursor-pointer"
            style={{
              fontFamily: "Cormorant SC, serif",
              background: NAVY,
              color: PARCH,
              border: `1px solid ${NAVY}`,
              letterSpacing: "0.2em",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.background = GOLD;
              el.style.borderColor = GOLD;
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.background = NAVY;
              el.style.borderColor = NAVY;
            }}
          >
            EXPLORE 3RDEYE
          </button>
          <button
            onClick={() => scrollTo("about")}
            className="text-xs tracking-widest px-8 py-3 transition-all duration-200 cursor-pointer"
            style={{
              fontFamily: "Cormorant SC, serif",
              background: "transparent",
              color: NAVY,
              border: `1px solid ${GOLD}55`,
              letterSpacing: "0.2em",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = GOLD;
              el.style.color = GOLD;
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = `${GOLD}55`;
              el.style.color = NAVY;
            }}
          >
            OUR STORY
          </button>
        </div>

        <Image
          src="/pagamigroupmain.png"
          alt="Pagami Group"
          width={120}
          height={34}
          style={{ height: 34, width: "auto", opacity: 0.6 }}
        />
      </div>

      {/* Right — building sketch */}
      <div className="relative flex items-center justify-center h-screen overflow-hidden">
        <BuildingSketch width={520} height={540} color={NAVY} gold={GOLD} />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center whitespace-nowrap">
          <p
            className="text-xs italic"
            style={{ fontFamily: "DM Sans", color: `${NAVY}44`, letterSpacing: "0.15em" }}
          >
            Pagami Group — Building the Future
          </p>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-7 left-20 flex items-center gap-3">
        <div className="w-8 h-px" style={{ background: `${GOLD}77` }} />
        <span
          className="text-xs tracking-widest"
          style={{ fontFamily: "Cormorant SC, serif", color: `${NAVY}55`, letterSpacing: "0.25em" }}
        >
          SCROLL
        </span>
      </div>
    </section>
  );
}
