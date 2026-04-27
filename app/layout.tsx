import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pagami Group — Intelligence · Vision · Innovation",
  description:
    "Pagami Group is a technology holding company building intelligent platforms — from AI-powered security (3rdEye) to transformative enterprise tools.",
  keywords: ["Pagami Group", "3rdEye", "AI security", "facial recognition", "visitor management", "technology"],
  openGraph: {
    title: "Pagami Group",
    description: "Where Ideas Shape the Future.",
    type: "website",
    locale: "en_IN",
  },
  icons: { icon: "/pagamigroupmain.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
