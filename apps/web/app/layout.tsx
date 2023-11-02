import "./globals.css";

import { Inter } from "next/font/google";

import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";

import type { Metadata } from "next";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EssayPilot",
  description: "AI assistance for writing essays",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-1 p-4 flex relative">{children}</div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
