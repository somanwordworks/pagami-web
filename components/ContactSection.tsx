"use client";

import { useState } from "react";
import { NAVY, GOLD, PARCH, PARCH2 } from "@/lib/constants";
import EyeSketch from "./sketch/EyeSketch";
import SketchDivider from "./sketch/SketchDivider";
import SketchLabel from "./sketch/SketchLabel";

interface FormState {
  name: string;
  email: string;
  message: string;
}

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: PARCH,
    border: `1px solid ${GOLD}33`,
    borderBottom: `1px solid ${GOLD}77`,
    color: NAVY,
    fontFamily: "Cormorant Garamond, serif",
    fontSize: 18,
    padding: "10px 14px",
    outline: "none",
    fontWeight: 300,
  };

  return (
    <section
      id="contact"
      className="py-24"
      style={{ background: PARCH2, borderTop: `1px solid ${GOLD}22` }}
    >
      <div className="max-w-5xl mx-auto px-16">
        <SketchLabel text="GET IN TOUCH" gold={GOLD} color={NAVY} />

        <div className="grid gap-20 items-start" style={{ gridTemplateColumns: "1fr 1fr" }}>
          {/* Left */}
          <div>
            <h2
              className="font-light leading-tight mb-5"
              style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 52, color: NAVY }}
            >
              Let&apos;s Build
              <br />
              <em style={{ color: GOLD }}>Something</em>
              <br />
              Together.
            </h2>
            <SketchDivider color={NAVY} gold={GOLD} showBirds />
            <p
              className="font-light mt-5 mb-8"
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: 20,
                color: `${NAVY}99`,
                lineHeight: 1.85,
              }}
            >
              Whether you&apos;re interested in deploying 3rdEye, exploring a
              partnership, or simply learning more about Pagami Group — we
              welcome your correspondence.
            </p>
            <div className="flex flex-col gap-3">
              {[
                ["Product Enquiry", "3rdeyeapp.in"],
                ["General", "pagamigroup.com"],
              ].map(([lbl, site]) => (
                <div
                  key={lbl}
                  className="p-4"
                  style={{ border: `1px solid ${GOLD}22`, background: `${GOLD}05` }}
                >
                  <div
                    className="mb-1 tracking-widest"
                    style={{ fontFamily: "Cormorant SC, serif", fontSize: 10, color: GOLD, letterSpacing: "0.2em" }}
                  >
                    {lbl}
                  </div>
                  <div
                    className="italic font-light"
                    style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 18, color: NAVY }}
                  >
                    {site}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form or confirmation */}
          {sent ? (
            <div
              className="flex flex-col items-center justify-center p-16 text-center gap-4"
              style={{ border: `1px solid ${GOLD}33`, background: `${GOLD}05` }}
            >
              <EyeSketch size={100} color={NAVY} gold={GOLD} />
              <div
                className="font-light"
                style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 32, color: NAVY }}
              >
                Message Received.
              </div>
              <p className="text-sm leading-loose" style={{ color: `${NAVY}66`, lineHeight: 1.8 }}>
                We shall be in correspondence within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {(["name", "email"] as const).map((key) => (
                <div key={key}>
                  <label
                    className="block mb-1.5 tracking-widest"
                    style={{
                      fontFamily: "Cormorant SC, serif",
                      fontSize: 10,
                      color: `${NAVY}66`,
                      letterSpacing: "0.2em",
                    }}
                  >
                    {key.toUpperCase()}
                  </label>
                  <input
                    type={key === "email" ? "email" : "text"}
                    value={form[key]}
                    required
                    onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = GOLD)}
                    onBlur={(e) => (e.target.style.borderColor = `${GOLD}33`)}
                  />
                </div>
              ))}
              <div>
                <label
                  className="block mb-1.5 tracking-widest"
                  style={{
                    fontFamily: "Cormorant SC, serif",
                    fontSize: 10,
                    color: `${NAVY}66`,
                    letterSpacing: "0.2em",
                  }}
                >
                  MESSAGE
                </label>
                <textarea
                  value={form.message}
                  required
                  rows={5}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  style={{ ...inputStyle, resize: "none" }}
                />
              </div>
              <button
                type="submit"
                className="self-start text-xs tracking-widest px-8 py-3.5 cursor-pointer transition-all duration-200"
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
                SEND CORRESPONDENCE
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
