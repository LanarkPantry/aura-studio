import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aura Studio",
  description: "Mobile-first AI product experiences for modern brands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-white antialiased">{children}</body>
    </html>
  );
}
