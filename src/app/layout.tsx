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
  title: "Podar Prep | JP Nagar 7th Phase",
  description: "Podar Prep Preschool",
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
        <Footer waveBg="bg-white" />
      </body>
    </html>
  );
}