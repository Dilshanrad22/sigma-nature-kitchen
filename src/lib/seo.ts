// ---------------------------------------------------------------------------
// SEO   site URL, target keywords, per-page metadata and structured data.
// Keywords come from the website brief (§11 "SEO" and §14 "SEO metadata
// examples") plus the dishes, spices and location already used in site copy.
// ---------------------------------------------------------------------------

import type { Metadata } from "next";
import { business, faqs } from "./content";
import { bannerImages } from "./images";

// Production domain for canonical URLs, sitemap.xml and social previews.
// NEXT_PUBLIC_SITE_URL overrides it (e.g. for a preview deployment).
//
// Keyword split with the main Sigma House Sri Lanka site: this site targets
// cooking-class searches only. Stay, homestay and general village-experience
// searches belong to the main site.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://naturekitchen.sigmahousesl.com"
).replace(/\/$/, "");
export const defaultDescription =
  "Authentic Sri Lankan cooking class with a local family in Kananke, near Galle. Learn local spices, cook rice and curry over an open fire and share a real taste of village life.";

// Brief keywords plus the client keyword list (Oct 2026), limited to the
// ones that describe the cooking class. Google ignores the keywords meta tag,
// so these phrases are also used in titles and descriptions.
export const keywords = [
  // Primary
  "cooking class",
  "Sri Lankan cooking class",
  "Sri Lankan village cooking experience",
  "cooking class in Sri Lanka",
  "Sri Lanka cooking experience",
  "traditional Sri Lankan cooking",
  "Sigma House Nature Kitchen",
  "Sigma House Sri Lanka",
  // Location
  "cooking class Kananke",
  "cooking class Imaduwa",
  "cooking class near Galle",
  "cooking class Weligama",
  "cooking class Ahangama",
  "cooking class down south Sri Lanka",
  // Experience
  "authentic Sri Lankan food",
  "authentic food experience Sri Lanka",
  "cook with a local family Sri Lanka",
  "village life Sri Lanka",
  "local experience Sri Lanka",
  "Sri Lanka food traditions",
  "cultural cooking class Sri Lanka",
  "hands-on cooking class Sri Lanka",
  "Sri Lankan spices",
  "rice and curry cooking class",
  "open-fire cooking",
  "garden to kitchen",
  "private cooking class Sri Lanka",
  "family cooking class Sri Lanka",
  "vegetarian Sri Lankan cooking",
  "vegan Sri Lankan cooking",
  // Dishes
  "pol sambol",
  "dhal curry",
  "jackfruit curry",
  "egg hoppers",
];

const defaultOgImage = {
  url: bannerImages.cookingTogether,
  alt: "Guests cooking together at Sigma House Nature Kitchen in Sri Lanka",
};

// Builds a page's metadata with a canonical URL and matching social cards.
// openGraph/twitter are rebuilt per page because Next.js replaces (does not
// merge) those objects from the root layout.
export function pageMetadata({
  title,
  description,
  path,
  image,
  extraKeywords = [],
  absoluteTitle = false,
  noIndex = false,
}: {
  title: string;
  description: string;
  path: string;
  image?: { url: string; alt: string };
  extraKeywords?: string[];
  absoluteTitle?: boolean;
  noIndex?: boolean;
}): Metadata {
  const ogImage = image ?? defaultOgImage;
  const fullTitle = absoluteTitle ? title : `${title} | ${business.name}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords: [...extraKeywords, ...keywords],
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_GB",
      siteName: business.name,
      url: path,
      title: fullTitle,
      description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage.url],
    },
    ...(noIndex && { robots: { index: false, follow: true } }),
  };
}

// Indexable routes for sitemap.xml. /reviews stays out until real,
// permissioned reviews replace the placeholders.
export const sitemapRoutes = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/cooking-experience", priority: 0.9, changeFrequency: "monthly" },
  { path: "/menu", priority: 0.8, changeFrequency: "monthly" },
  { path: "/location", priority: 0.8, changeFrequency: "monthly" },
  { path: "/groups", priority: 0.7, changeFrequency: "monthly" },
  { path: "/garden-to-kitchen", priority: 0.7, changeFrequency: "monthly" },
  { path: "/about", priority: 0.6, changeFrequency: "yearly" },
  { path: "/gallery", priority: 0.6, changeFrequency: "monthly" },
  { path: "/faq", priority: 0.6, changeFrequency: "monthly" },
  { path: "/policies", priority: 0.3, changeFrequency: "yearly" },
] as const;

// LocalBusiness structured data   only facts already confirmed in
// content.ts. Do not add ratings or reviews until they are real.
export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#business`,
  name: business.name,
  description: defaultDescription,
  url: siteUrl,
  logo: `${siteUrl}/logo.jpeg`,
  image: [
    `${siteUrl}${bannerImages.cookingTogether}`,
    `${siteUrl}${bannerImages.platedFeast}`,
    `${siteUrl}${bannerImages.kitchenPavilion}`,
  ],
  telephone: business.phoneDisplay.replace(/\s/g, ""),
  email: business.email,
  priceRange: "$8–$15 per person",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Wahala Kananke, Udakaduruwaka Watta",
    addressLocality: "Imaduwa",
    postalCode: "80130",
    addressCountry: "LK",
  },
  hasMap: business.mapsUrl,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "10:00",
      closes: "12:00",
    },
  ],
  sameAs: [business.instagram, business.facebook],
  knowsLanguage: "en",
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: business.name,
  url: siteUrl,
  inLanguage: "en",
  publisher: { "@id": `${siteUrl}/#business` },
};

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

// Serialises JSON-LD for a <script> tag, escaping "<" to avoid XSS.
export function jsonLdScript(data: object) {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") };
}
