// data/properties.ts
export type Property = {
  slug: string;
  title: string;
  location: string;
  type: "For Sale" | "For Rent";
  price: string;
  priceValue: number;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  gallery: string[]; // optional – add more images later
  fullDescription: string;
  amenities: string[];
};

export const properties: Property[] = [
  {
    slug: "gk2-3bhk-builder-floor",
    title: "3BHK Builder Floor",
    location: "Greater Kailash II",
    type: "For Sale",
    price: "₹4.85 Cr",
    priceValue: 4.85,
    beds: 3,
    baths: 3,
    sqft: 2100,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    gallery: [],
    fullDescription:
      "This stunning 3BHK builder floor in Greater Kailash II offers spacious interiors, premium finishes, and excellent ventilation. The property boasts 24/7 security, power backup, and reserved parking. Located close to GK-2 market and metro station, this home is perfect for families seeking luxury and convenience.",
    amenities: [
      "Power Backup",
      "Parking",
      "Security",
      "Lift",
      "Modular Kitchen",
      "Wooden Flooring",
    ],
  },
  {
    slug: "defence-colony-4bhk",
    title: "4BHK Luxury Floor",
    location: "Defence Colony",
    type: "For Sale",
    price: "₹8.20 Cr",
    priceValue: 8.2,
    beds: 4,
    baths: 4,
    sqft: 3200,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    gallery: [],
    fullDescription:
      "Experience grandeur in this expansive 4BHK floor in Defence Colony. With a private terrace, modern interiors, and ample natural light, this property redefines luxury living. Walking distance to Defence Colony market, schools, and hospitals.",
    amenities: [
      "Private Terrace",
      "Jacuzzi",
      "Smart Home",
      "Parking",
      "Gym Access",
      "Concierge",
    ],
  },
  {
    slug: "lajpat-nagar-rental",
    title: "2BHK Builder Floor",
    location: "Lajpat Nagar",
    type: "For Rent",
    price: "₹55,000/mo",
    priceValue: 0.55,
    beds: 2,
    baths: 2,
    sqft: 1100,
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    gallery: [],
    fullDescription:
      "A well‑maintained 2BHK builder floor in the heart of Lajpat Nagar. Semi‑furnished with modular kitchen and ACs, this rental property offers excellent connectivity to the metro and local markets. Ideal for small families or professionals.",
    amenities: [
      "Semi‑Furnished",
      "Modular Kitchen",
      "AC Installed",
      "Parking",
      "Water Softener",
    ],
  },
  {
    slug: "nfc-premium-floor",
    title: "3BHK Premium Floor",
    location: "New Friends Colony",
    type: "For Sale",
    price: "₹5.60 Cr",
    priceValue: 5.6,
    beds: 3,
    baths: 3,
    sqft: 2400,
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    gallery: [],
    fullDescription:
      "This premium 3BHK floor in New Friends Colony offers a perfect blend of elegance and functionality. With spacious balconies, high ceilings, and premium fittings, this property is a must‑see for discerning buyers. Close to NFC market, schools, and parks.",
    amenities: [
      "High Ceilings",
      "Balconies",
      "Premium Fittings",
      "Parking",
      "Rainwater Harvesting",
    ],
  },
  {
    slug: "lajpat-nagar-rental",
    title: "2BHK Builder Floor",
    location: "Lajpat Nagar",
    type: "For Rent",
    price: "₹55,000/mo",
    priceValue: 0.55,
    beds: 2,
    baths: 2,
    sqft: 1100,
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    gallery: [],
    fullDescription:
      "A well‑maintained 2BHK builder floor in the heart of Lajpat Nagar. Semi‑furnished with modular kitchen and ACs, this rental property offers excellent connectivity to the metro and local markets. Ideal for small families or professionals.",
    amenities: [
      "Semi‑Furnished",
      "Modular Kitchen",
      "AC Installed",
      "Parking",
      "Water Softener",
    ],
  },
  {
    slug: "lajpat-nagar-rental",
    title: "2BHK Builder Floor",
    location: "Lajpat Nagar",
    type: "For Rent",
    price: "₹55,000/mo",
    priceValue: 0.55,
    beds: 2,
    baths: 2,
    sqft: 1100,
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    gallery: [],
    fullDescription:
      "A well‑maintained 2BHK builder floor in the heart of Lajpat Nagar. Semi‑furnished with modular kitchen and ACs, this rental property offers excellent connectivity to the metro and local markets. Ideal for small families or professionals.",
    amenities: [
      "Semi‑Furnished",
      "Modular Kitchen",
      "AC Installed",
      "Parking",
      "Water Softener",
    ],
  },
  {
    slug: "lajpat-nagar-rental",
    title: "2BHK Builder Floor",
    location: "Lajpat Nagar",
    type: "For Rent",
    price: "₹55,000/mo",
    priceValue: 0.55,
    beds: 2,
    baths: 2,
    sqft: 1100,
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    gallery: [],
    fullDescription:
      "A well‑maintained 2BHK builder floor in the heart of Lajpat Nagar. Semi‑furnished with modular kitchen and ACs, this rental property offers excellent connectivity to the metro and local markets. Ideal for small families or professionals.",
    amenities: [
      "Semi‑Furnished",
      "Modular Kitchen",
      "AC Installed",
      "Parking",
      "Water Softener",
    ],
  },
];
