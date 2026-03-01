import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meteora DexScreener",
  description: "High performance DexScreener for trading new Meteora pools in real time",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="bg-background text-white">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}