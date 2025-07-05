import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/providers";

export const metadata: Metadata = {
  title: "فاضل کاشانی | گرافیست و طراح وب",
  description: "Portfolio of Fazel Kasani - graphic designer and web developer ",
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
