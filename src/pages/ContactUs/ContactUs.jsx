import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactUs() {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ loading: false, ok: false, error: "" });
  const [errors, setErrors] = useState({});

  const validateForm = (formData) => {
    const newErrors = {};

    // Name validation (only letters and spaces)
    if (!formData.from_name.trim()) {
      newErrors.from_name = "Name is required.";
    } else if (!/^[A-Za-z\s]+$/.test(formData.from_name)) {
      newErrors.from_name = "Name should only contain letters and spaces.";
    }

    // Email validation
    if (!formData.from_email.trim()) {
      newErrors.from_email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.from_email)) {
      newErrors.from_email = "Enter a valid email address.";
    }

    // Phone validation (only numbers, optional +, -, spaces)
    if (formData.from_phone) {
      if (!/^\+?[0-9\s-]{7,15}$/.test(formData.from_phone)) {
        newErrors.from_phone = "Enter a valid phone number with numbers only.";
      }
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      from_name: e.target.from_name.value,
      from_email: e.target.from_email.value,
      from_phone: e.target.from_phone.value,
      message: e.target.message.value,
    };

    if (!validateForm(formData)) return;

    setStatus({ loading: true, ok: false, error: "" });

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );

      setStatus({ loading: false, ok: true, error: "" });
      formRef.current.reset();
    } catch (err) {
      setStatus({
        loading: false,
        ok: false,
        error: err?.text || "Failed to send. Please try again.",
      });
    }
  };

  return (
    <section className="bg-white">
      {/* Contact Section */}
      <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-8 container mx-auto px-6 py-16">
        {/* Left Side - Image */}
        <div className="flex justify-center items-center">
          <div className="w-full max-w-md bg-white">
            <img
              src="/logo.png"
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

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6"
              autoComplete="off"
            >
              {/* Honeypot */}
              <input
                type="text"
                name="company"
                tabIndex="-1"
                className="hidden"
                autoComplete="off"
              />

              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Your Name
                </label>
                <input
                  name="from_name"
                  type="text"
                  placeholder="John Doe"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition ${
                    errors.from_name
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-black"
                  }`}
                />
                {errors.from_name && (
                  <p className="text-red-600 text-sm">{errors.from_name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Email
                </label>
                <input
                  name="from_email"
                  type="email"
                  placeholder="you@example.com"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition ${
                    errors.from_email
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-black"
                  }`}
                />
                {errors.from_email && (
                  <p className="text-red-600 text-sm">{errors.from_email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Phone Number
                </label>
                <input
                  name="from_phone"
                  type="tel"
                  placeholder="+1 234 567 890"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition ${
                    errors.from_phone
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-black"
                  }`}
                />
                {errors.from_phone && (
                  <p className="text-red-600 text-sm">{errors.from_phone}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  placeholder="Write your message..."
                  rows="4"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition ${
                    errors.message
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-black"
                  }`}
                ></textarea>
                {errors.message && (
                  <p className="text-red-600 text-sm">{errors.message}</p>
                )}
              </div>

              {/* Status messages */}
              {status.ok && (
                <p className="text-green-600 text-sm">
                  ✅ Thanks! Your message was sent. We'll reply soon.
                </p>
              )}
              {status.error && (
                <p className="text-red-600 text-sm">❌ {status.error}</p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status.loading}
                className="w-full py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition disabled:opacity-60"
              >
                {status.loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="container mx-auto px-6 pb-16">
        <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3885.681456731774!2d80.225281!3d13.119354999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDA3JzA5LjciTiA4MMKwMTMnMzEuMCJF!5e0!3m2!1sen!2sin!4v1757090447568!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            className="border-0"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
