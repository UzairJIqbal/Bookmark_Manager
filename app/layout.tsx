import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export const metadata: Metadata = {
  title: "Bookmark manager",
  description: "Managed the bookmark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <main className="h-screen flex bg-[#e6eef7]">
        <Navbar />

        <div className="flex w-full">
          <Sidebar />
          <section className="lex-1 flex flex-col min-h-screen pt-20 lg:pt-24 px-4 sm:px-6 lg:px-8 w-full overflow-x-hidden">
            <body>{children}</body>
          </section>
        </div>
      </main>
    </html>
  );
}
