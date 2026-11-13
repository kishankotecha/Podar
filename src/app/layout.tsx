import type { Metadata } from "next";
import { nunito, fredoka, fredokaExpanded } from "@/lib/fonts";
import { Navbar, Footer } from "@/domains/home/components";
import "./globals.css";

export const metadata: Metadata = {
  title: "Podar Prep | JP Nagar 7th Phase",
  description: "Podar Prep Preschool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} ${fredoka.variable} ${fredokaExpanded.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-nunito bg-white text-gray-900 antialiased">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer waveBg="bg-white" />
      </body>
    </html>
  );
}
