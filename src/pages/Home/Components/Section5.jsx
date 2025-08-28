import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "Torque Toys has transformed my collection! The quality and detail of each piece are simply unmatched.",
    name: "Emily Carter",
    role: "Collector, Enthusiast",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 2,
    text: "The best collectibles I’ve ever purchased! Truly premium and worth every penny.",
    name: "Daniel Smith",
    role: "Toy Collector",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 3,
    text: "Absolutely love the variety and exclusivity. Every new release is a must-have in my collection!",
    name: "Sophia Lee",
    role: "Designer & Collector",
    img: "https://randomuser.me/api/portraits/women/32.jpg",
  },
];

export default function Section5() {
  const [current, setCurrent] = useState(0);

  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Auto change every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 3000);

    return () => clearInterval(timer);
  }, [current]);

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="relative max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-6 sm:p-10 text-center transition-all duration-500">
          
          {/* Left Arrow */}
          <button
            onClick={prevTestimonial}
            className="absolute left-2 sm:-left-16 top-1/2 transform -translate-y-1/2 p-2 sm:p-3 border rounded-full bg-white hover:bg-gray-100 shadow-md"
          >
            <ArrowLeft size={20} />
          </button>

          {/* Testimonial Content */}
          <blockquote className="text-base sm:text-xl md:text-2xl font-medium text-gray-800">
            "{testimonials[current].text}"
          </blockquote>

          {/* User Info */}
          <div className="mt-6 flex flex-col items-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-gray-300">
              <img
                src={testimonials[current].img}
                alt={testimonials[current].name}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-3 font-semibold text-base sm:text-lg text-gray-900">
              {testimonials[current].name}
            </p>
            <p className="text-xs sm:text-sm text-gray-500">{testimonials[current].role}</p>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextTestimonial}
            className="absolute right-2 sm:-right-16 top-1/2 transform -translate-y-1/2 p-2 sm:p-3 border rounded-full bg-white hover:bg-gray-100 shadow-md"
          >
            <ArrowRight size={20} />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all ${
                i === current ? "bg-black scale-110" : "bg-gray-400"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}
