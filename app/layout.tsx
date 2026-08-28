import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nagare-composite.example"),
  title: "Nagare Composite — FRP body panels and molds, Aichi, Japan",
  description:
    "Hand-laid fiberglass bodywork for sports cars. Custom molds, replica panels and one-off aero, built in Toyota, Aichi and crated for export.",
  openGraph: {
    title: "Nagare Composite — FRP body panels and molds",
    description:
      "Hand-laid fiberglass bodywork for sports cars, built in Toyota, Aichi and crated for export.",
    locale: "en",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${dmSans.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="flex min-h-full flex-col bg-surface text-ink">
        {children}
      </body>
    </html>
  );
}
