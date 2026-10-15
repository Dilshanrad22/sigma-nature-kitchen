import type { Metadata } from "next";
import { Manrope, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Splash from "@/components/Splash";
import { business } from "@/lib/content";
import {
  defaultDescription,
  jsonLdScript,
  keywords,
  localBusinessJsonLd,
  siteUrl,
  websiteJsonLd,
} from "@/lib/seo";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${business.name} | Sri Lankan Village Cooking Experience`,
    template: `%s | ${business.name}`,
  },
  description: defaultDescription,
  keywords,
  applicationName: business.name,
  category: "travel",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: business.name,
    url: "/",
    title: `${business.name} | Sri Lankan Village Cooking Experience`,
    description: defaultDescription,
  },
  twitter: { card: "summary_large_image" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${dmSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-charcoal text-ivory">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript([localBusinessJsonLd, websiteJsonLd])}
        />
        <Splash />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
