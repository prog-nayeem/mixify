import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import TopNewsHeader from "@/components/nav/top-news-header";
import Header from "@/components/nav/header";
import Line from "@/components/ui/line";
import Footer from "@/components/shared/footer/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Mixify",
  description: "Mixify is a dynamic and versatile e-commerce platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <TopNewsHeader />
        <Header />
        <Line className="mt-4" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
