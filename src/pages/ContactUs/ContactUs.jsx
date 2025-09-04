import React from "react";

export default function ContactUs() {
  return (
    <section className="bg-white">
      {/* Contact Section */}
      <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-8 container mx-auto px-6 py-16">
        
        {/* Left Side - Image in Stylish Card */}
        <div className="flex justify-center items-center">
          <div className="w-full max-w-md bg-white ">
            <img
              src="/logo.png" // Replace with your image
              alt="Contact Us"
              className="w-full h-auto rounded-xl object-cover"
            />
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="flex flex-col justify-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600 mb-8">
              Have a question or want to share your thoughts? Fill out the form
              and we'll get back to you as soon as possible.
            </p>

            <form className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+1 234 567 890"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Your Message
                </label>
                <textarea
                  placeholder="Write your message..."
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition"
                ></textarea>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="w-full h-96">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345085726!2d144.95373531531573!3d-37.81627917975139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43fdfb1bff%3A0xf5777d6e91b5b!2sVictoria!5e0!3m2!1sen!2sau!4v1638171901874!5m2!1sen!2sau"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          className="border-0 "
        ></iframe>
      </div>
    </section>
  );
}
