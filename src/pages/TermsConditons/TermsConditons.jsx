import React from "react";

export default function TermsOfService() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-gray-100 via-white to-gray-100 py-16 shadow-md">
        <h1 className="text-5xl font-extrabold text-center tracking-wide text-gray-900">
          Terms & Conditions
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
              title: "1. General Information",
              content:
                "Torque Toyzz is an RC toys retail business that sells remote-controlled cars, drones, and accessories. By using our website or placing an order, you confirm that you are at least 18 years old or have parental/guardian consent.",
            },
            {
              title: "2. Products & Orders",
              content:
                "We strive to provide accurate product descriptions, images, and pricing. However, we do not guarantee that all details are always error-free. Orders are confirmed once payment is received. We reserve the right to cancel or refuse any order at our discretion.",
            },
            {
              title: "3. Pricing & Payment",
              content:
                "Cash on Delivery (COD) is available. For COD orders, you must pay: The product price, and ₹150 for cash handling charge to the courier person. Prepaid payments also accepted via UPI.",
            },
            {
              title: "4. Shipping & Delivery",
              content:
                "All orders are shipped within a working days after confirmation.Delivery takes 1–3 working days depending on your location.Tracking details will be shared once the order is dispatched.We are not responsible for delays caused by courier companies.",
            },
            {
              title: "5. Returns & Refunds",
              content:
                "Return available only for damaged or wrong items received. Raise a return request within 24 hours of delivery with photo/video proof. Return shipping is customer’s responsibility unless it’s our mistake. No returns for used, mishandled, or physically damaged items.",
            },
            {
              title: "6. Warranty & Repair",
              content:
                "We also provide repair services for any issues in the product. Customers should courier the product to our address, and we will repair it and courier it back.",
            },
            {
              title: "7. User Responsibilities",
              content:
                "You agree not to misuse our website or products. All content (images, text, logos) belongs to Torque Toyzz and cannot be used without permission.",
            },
            {
              title: "8. Limitation of Liability",
              content:
                "We are not liable for damages caused by product misuse, delivery delays, or website downtime.",
            },
            {
              title: "9. Changes to Terms",
              content:
                "Torque Toyzz reserves the right to update these Terms anytime. Updates will be posted on this page.",
            },
            {
              title: "10. Contact Us",
              content:
                "For any questions or support, contact us at 📧 torquetoyzz@gmail.com or 📞 +91 96001 42392",
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
