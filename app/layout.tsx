import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Royal Siyaram Estate | Trusted Property Agent in South Delhi",
  description:
    "Royal Siyaram Estate – Trusted estate agent for builder floors, residential & commercial properties in South Delhi.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              name: "Royal Siyaram Estate",
              telephone: "+919818077956",
            }),
          }}
        />
      </head>
      <body className={dmSans.className}>
        {children}
      </body>
    </html>
  );
}