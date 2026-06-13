import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "CampusImpact Workshop 2025 – Master the Craft",
  description:
    "A 2-day intensive creative workshop across colleges. Learn Direction, Acting, Photography, Videography & Modeling — then compete in the Reel Competition for ₹9,500 in prizes.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
