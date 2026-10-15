// ---------------------------------------------------------------------------
// SITE CONTENT   single source of truth for editable facts.
// Everything marked "PLACEHOLDER" is an example value from the brief and
// MUST be confirmed with the real business details before launch
// (see master plan §13 "Facts to confirm before development").
// ---------------------------------------------------------------------------

import { dishImages } from "./images";

export const business = {
  name: "Sigma House Nature Kitchen",
  tagline: "Taste Sri Lanka. Live the Village.",
  phoneDisplay: "+94 76 318 3081",
  whatsappNumber: "94763183081", // digits only, no +
  email: "hasithadhananjaya2020@gmail.com",
  address: "Wahala Kananke, Udakaduruwaka Watta, Imaduwa 80130, Sri Lanka",
  mapsUrl:
    "https://maps.google.com?q=Sigma%20House%20Nature%20Kitchen,%20Wahala%20Kananke,%20Udakaduruwaka%20Watta,%20Imaduwa%2080130&ftid=0x3ae16b018dd9efb7:0x62fee691c6840a61&entry=gps&shh=CAE&lucs=,94297699,94231188,94280568,100821559,47071704,94218641,94282134,100835694,94286869,100820247,100822504,100838877,121816461&g_st=ic",
  instagram: "https://www.instagram.com/sigmahouse.naturekitchen",
  facebook: "https://www.facebook.com/profile.php?id=61594241107827",
  sisterSiteUrl: "https://sri-lanka-one.vercel.app/",
  sisterSiteName: "Sigma House Sri Lanka",
  schedule: {
    display: "Saturdays & Sundays, 10:00 a.m. – 12:00 p.m. (by reservation)",
    note: "Sessions run by reservation   confirm your date before you travel.",
  },
  openingHours: "By reservation   Saturdays & Sundays, 10:00 a.m. – 12:00 p.m.", // PLACEHOLDER   confirm fixed vs. by-reservation
  nearbyLandmark: "in Kananke, Imaduwa",
};

export function whatsappLink(message: string) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${business.whatsappNumber}?text=${text}`;
}

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/cooking-experience", label: "Cooking Class" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/location", label: "Contact" },
];

// Pages that exist but live outside the main nav   reachable from the
// footer and from in-page links (e.g. "See the full menu" buttons).
export const secondaryPages = [
  { href: "/menu", label: "Menu & Dishes" },
  { href: "/garden-to-kitchen", label: "Garden to Kitchen" },
  { href: "/groups", label: "For Groups" },
  { href: "/faq", label: "FAQ" },
];

export const heroCopy = {
  eyebrow: "Learn · Cook · Taste · Enjoy",
  headline: "Taste Sri Lanka. Live the Village.",
  sub: "Join a hands-on Sri Lankan village cooking experience with local ingredients, traditional techniques, and a meal you help create.",
  primaryCta: "Reserve Your Experience",
  secondaryCta: "See How It Works",
};

export const promises = [
  {
    title: "Cook",
    description:
      "Work side by side with your host over an open flame, grinding spices and shaping hoppers with your own hands.",
    icon: "ChefHat",
  },
  {
    title: "Learn",
    description:
      "Understand the why behind each dish   spice pairing, coconut milk, and techniques passed down through generations.",
    icon: "BookOpen",
  },
  {
    title: "Taste",
    description:
      "Sit down together and share the rice-and-curry spread you just prepared, family-style, in the garden.",
    icon: "Utensils",
  },
];

export const journeySteps = [
  {
    step: "01",
    title: "Welcome King Coconut",
    description:
      "Arrive to a chilled king coconut and a short introduction to the kitchen, the garden, and your host.",
  },
  {
    step: "02",
    title: "Meet the Spices",
    description:
      "Smell, touch, and taste the cinnamon, cardamom, curry leaves, and chillies that define Sri Lankan cooking.",
  },
  {
    step: "03",
    title: "Prepare Together",
    description:
      "Scrape coconut, grind a tempered curry paste, and prep vegetables the traditional way   hands-on, start to finish.",
  },
  {
    step: "04",
    title: "Cook Over Fire",
    description:
      "Cook rice, two or three curries, and a sambol on the clay hearth, guided by your host at every step.",
  },
  {
    step: "05",
    title: "Sit Down & Enjoy",
    description:
      "Share the meal you made together at the garden table   the best part of the whole experience.",
  },
];

export const inclusions = [
  "Welcome herbal or king coconut drink",
  "Introduction to Sri Lankan spices and ingredients",
  "Hands-on coconut scraping and milk extraction",
  "Guided rice and curry cooking lesson",
  "Traditional sambol and dessert preparation",
  "Full sit-down meal of everything you cook",
  "Dietary and allergen guidance on request",
  "Digital recipe notes sent after your session",
];

export const pricingTiers = [
  { guests: "1 guest", pricePerPerson: "15", note: "" },
  { guests: "2 guests", pricePerPerson: "12", note: "" },
  { guests: "3–4 guests", pricePerPerson: "10", note: "" },
  { guests: "5–8 guests", pricePerPerson: "8–9", note: "" },
];

export const pricingNote =
  "Contact us for family rates, larger groups, and private experiences.";

export const dishes = [
  {
    name: "Coconut Sambol (Pol Sambol)",
    description: "Fresh scraped coconut, chilli, lime, and dried fish or vegetarian alternative.",
    tags: ["Vegetarian option", "Spicy"],
    allergens: "Contains fish (optional) and coconut",
    image: dishImages.coconutSambol,
  },
  {
    name: "Dhal Curry (Parippu)",
    description: "Red lentils simmered in coconut milk with turmeric, curry leaves, and garlic.",
    tags: ["Vegan", "Mild"],
    allergens: "Contains coconut",
    image: dishImages.dhalCurry,
  },
  {
    name: "Jackfruit Curry",
    description: "Young jackfruit slow-cooked in a roasted curry powder base   a chicken option is also available.",
    tags: ["Vegan", "Medium"],
    allergens: "Ask about the chicken alternative",
    image: dishImages.jackfruitCurry,
  },
  {
    name: "Egg Hoppers",
    description: "Bowl-shaped fermented rice-and-coconut pancakes with an egg cooked into the centre.",
    tags: ["Vegetarian", "Mild"],
    allergens: "Contains rice flour, coconut, and egg",
    image: dishImages.eggHoppers,
  },
  {
    name: "Papadam & Fried Chilli",
    description: "Crisp lentil papadam served with fried dried chillies   the everyday side dish.",
    tags: ["Vegan", "Spicy"],
    allergens: "Contains lentils",
    image: dishImages.papadamAndChilli,
  },
];

export const faqs = [
  {
    question: "How long is the cooking experience?",
    answer:
      "The full session runs around 2.5–3 hours, from welcome drink through to the shared meal.",
  },
  {
    question: "Is it suitable for vegetarians or vegans?",
    answer:
      "Yes   tell us your dietary needs when you reserve and we'll adjust the menu accordingly.",
  },
  {
    question: "Can children join?",
    answer:
      "Children are welcome with adult supervision. Let us know ages when you message us so we can plan safely around the open fire and hot oil.",
  },
  {
    question: "Do you offer transport?",
    answer:
      "Ask us on WhatsApp   transport availability depends on your location and group size.",
  },
  {
    question: "Is the schedule fixed?",
    answer: business.schedule.note,
  },
  {
    question: "How do I confirm my booking?",
    answer:
      "Send your preferred date, group size, and dietary needs via WhatsApp or the contact form. Your host will confirm availability, final price, and the meeting point.",
  },
];

export const policies = {
  cancellation:
    "Full refund for cancellations made at least 48 hours before your session. Within 48 hours, the deposit is non-refundable. PLACEHOLDER   confirm final terms before publishing.",
  lateArrival:
    "Please arrive on time   sessions begin promptly as ingredients are prepared in advance. Let us know on WhatsApp if you expect to be delayed.",
  dietary:
    "Tell us about allergies or dietary needs when you reserve. We accommodate vegetarian and vegan guests; please confirm other allergies directly as not all ingredients can be substituted.",
  children:
    "Children are welcome with adult supervision at all times, particularly near the open fire and hot oil.",
  photography:
    "We may take photos during your session for our gallery and social media. Let your host know if you'd prefer not to be photographed.",
};
