// components/contact/ContactLocation.tsx
import Image from 'next/image';

export default function ContactLocation() {
  return (
    <section className="px-6 my-20 max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left side: Map Image */}
        <div className="lg:w-1/2 relative rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/path/to/map-image.jpg" // Replace with actual map image, e.g., assets.hero_product_img1 or Google Maps static
            alt="Store Location Map"
            width={600}
            height={400}
            className="w-full h-96 object-cover"
          />
          <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-md text-sm font-medium text-slate-800 shadow-md">
            📍 Watch Haven
          </div>
        </div>
        {/* Right side: Location Details */}
        <div className="lg:w-1/2 space-y-4">
          <h2 className="text-3xl font-semibold text-slate-800">Our Location</h2>
          <h3 className="text-xl font-medium text-slate-800">Connecting Near and Far</h3>
          <div className="space-y-2">
            <p className="text-slate-600">
              <strong>Headquarters:</strong> GUM Shopping Center, 3rd Floor
            </p>
            <p className="text-slate-600">
              From the escalator, turn right to our elegant vitrine.
            </p>
            <p className="text-slate-600">
              Moscow, Russia
            </p>
          </div>
          <button className="flex items-center gap-2 text-blue-500 text-sm font-medium mt-4">
            Open in Maps
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 10h3v11H1z"></path>
              <path d="M9 10h3v11H9z"></path>
              <path d="M17 10h3v11h-3z"></path>
              <path d="M3 10V6a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v4"></path>
              <line x1="12" y1="5" x2="12" y2="5"></line>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}