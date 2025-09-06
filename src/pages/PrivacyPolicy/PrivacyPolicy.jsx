import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-gray-100 via-white to-gray-100 py-16 shadow-md">
        <h1 className="text-5xl font-extrabold text-center tracking-wide text-gray-900">
          Privacy Policy
        </h1>
        <p className="text-gray-600 text-center mt-4 text-lg">
          Effective Date: 06/09/2025
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-16">
        <div className="grid gap-10">
          {[
            {
              title: "1. Information We Collect",
              content:
                "We may collect your personal details (name, email, address, payment info) and non-personal data (device info, cookies) to improve our services.",
            },
            {
              title: "2. How We Use Your Information",
              content:
                "We use this data to process orders, deliver products, send updates, and improve your experience. You may opt out of promotional emails anytime.",
            },
            {
              title: "3. Data Security",
              content:
                "We use secure servers and encryption to protect your data. However, no platform is 100% secure.",
            },
            {
              title: "4. Sharing of Data",
              content:
                "We do not sell your personal data. We may share necessary information with shipping partners, payment gateways, or legal authorities if required.",
            },
            {
              title: "5. Cookies",
              content:
                "Our site uses cookies to enhance your experience. You can disable them in your browser settings.",
            },
            {
              title: "6. Third-Party Services",
              content:
                "We may link to third-party websites. We are not responsible for their privacy policies or practices.",
            },
            {
              title: "7. Children’s Privacy",
              content:
                "We do not knowingly collect data from children under 13 years old.",
            },
            {
              title: "8. Your Rights",
              content:
                "You can request access, updates, or deletion of your data anytime by contacting us.",
            },
            {
              title: "9. Changes to Policy",
              content:
                "We may update this Privacy Policy from time to time. Changes will be posted on this page.",
            },
            {
              title: "10. Contact Us",
              content:
                "For any privacy-related queries, contact us at 📧 torquetoyzz@gmail.com or 📞 +91 96001 42392",
            },
          ].map((section, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-2xl shadow-md border border-gray-200 transform hover:scale-[1.02] transition-all duration-300"
            >
              <h2 className="text-2xl font-semibold mb-3">{section.title}</h2>
              <p className="text-gray-700 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-white via-gray-100 to-white py-6 mt-16 border-t border-gray-200">
        <p className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Torque Toyzz. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
