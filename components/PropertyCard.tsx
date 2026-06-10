// components/PropertyCard.tsx (rename from .jsx to .tsx)
import Link from "next/link";
import Image from "next/image";
import { Bed, Bath, Square, MapPin } from "lucide-react";

export default function PropertyCard({ property }: { property: any }) {
  return (
    <Link href={`/properties/${property.slug}`} className="group block h-full">
      <div className="rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={property.image}
            alt={property.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-medium">
            {property.type}
          </div>
        </div>

        <div className="h-5"></div>
        <div className="p-5 flex flex-col flex-1">
          <h3 className="text-xl font-semibold text-[#0F1923]">
            {property.title}
          </h3>
          <div className="flex items-center text-[#667085] text-sm mt-2">
            <MapPin className="w-4 h-4 mr-1 shrink-0" />
            {property.location}
          </div>
          <div className="h-3"></div>

          <div className="text-2xl font-bold text-[#C9A84C] mt-4">
            {property.price}
          </div>
          <div className="h-5"></div>

          <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-100 text-[#475467] text-sm">
            <div className="flex items-center gap-1">
              <Bed className="w-4 h-4" />
              <span>{property.beds} Beds</span>
            </div>
            <div className="flex items-center gap-1">
              <Bath className="w-4 h-4" />
              <span>{property.baths} Baths</span>
            </div>
            <div className="flex items-center gap-1">
              <Square className="w-4 h-4" />
              <span>{property.sqft} sqft</span>
            </div>
          </div>
          <div className="h-5"></div>
        </div>
      </div>
    </Link>
  );
}