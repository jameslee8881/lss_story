import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "보관남 | 보험관리해주는남자",
  description:
    "보험을 어려움 없이, 이해하기 쉽게. 보험관리해주는남자 보관남과 함께하세요.",
  keywords: "보험, 보관남, 보험관리, 보험상담, 금융, 재테크",
  authors: [{ name: "보관남" }],
  openGraph: {
    title: "보관남 | 보험관리해주는남자",
    description: "보험을 어려움 없이, 이해하기 쉽게",
    type: "website",
    locale: "ko_KR",
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  );
}
