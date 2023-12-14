import { Header } from "@/components/header";
import { dbConfig as config } from "@/db";

import { ThemeProvider } from "@/providers/";
import "@/styles/globals.css";
import { Inter, Outfit } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata = {
  title: config.meta.company + " - " + config.meta.title,
  description: config.meta.description,
  keywords: config.meta.keywords,
  author: config.meta.author,
  company: config.meta.company,
  robots: config.meta.robots,
};
export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal?: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div>
            <Header />
            <main className="bg-slate-50 relative">
              {children}
              {modal}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
