import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";

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
        <div className="h-[48px] w-full text-text bg-bg2 flex items-center justify-center text-[14px]">
          <div className="max-w-screen-xl">
            <div className="space-x-4">
              <p>
                Summer Sale For All Swim Suits And Free Express Delivery - OFF
                50%!
              </p>
              <button className="font-semibold underline">ShopNow</button>
            </div>
            <div>
              <div>
                <span>English</span>
                <img src="" />
              </div>
              <ul>
                <li>Bangla</li>
              </ul>
            </div>
          </div>
        </div>

        {children}
      </body>
    </html>
  );
}
