import { ourproductpage } from "../../../data/productsData";

export default function Section1() {
  // Duplicate images for infinite scroll
  const scrollingImages = [...ourproductpage.section1.images, ...ourproductpage.section1.images];

  return (
    <section className="py-12 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {ourproductpage.section1.heading}
          </h2>
          <p className="mt-2 text-gray-600 italic">{ourproductpage.section1.subheading}</p>
        </div>

        {/* Infinite Scrolling Images */}
        <div className="relative w-full overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-gray-50 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-gray-50 to-transparent z-10" />

          <div className="flex animate-scroll">
            {scrollingImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`scrolling-item-${index}`}
                className="w-80 h-52 object-cover rounded-xl mx-4"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Tailwind Custom Animation */}
      <style jsx>{`
        .animate-scroll {
          display: flex;
          animation: scroll 20s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
