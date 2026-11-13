import type { Metadata } from "next";
import "./globals.css";
import {
  fredoka,
  fredokaCondensed,
  fredokaSemiCondensed,
  fredokaSemiExpanded,
  fredokaExpanded,
  nunito,
} from "@/lib/fonts";
import { Navbar, Footer } from "@/shared/components";

export const metadata: Metadata = {
  title: "Podar Prep | Because the first 6 years prepare your child for life",
  description:
    "A joyful, safe and purposeful preschool where children learn through play, grow with confidence, and build the foundations for a bright future.",
};

const fontVariables = [
  fredoka.variable,
  fredokaCondensed.variable,
  fredokaSemiCondensed.variable,
  fredokaSemiExpanded.variable,
  fredokaExpanded.variable,
  nunito.variable,
].join(" ");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontVariables} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-nunito bg-white text-gray-900 antialiased">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
