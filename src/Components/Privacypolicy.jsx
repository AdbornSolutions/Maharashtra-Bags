import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="pt-16">
      {" "}
      {/* Added pt-16 to start below navbar */}
      <section className="bg-orange-400 min-h-screen  w-full px-4 py-8 md:px-4 lg:px-12">
        <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-lg px-6 sm:px-6 md:px-8 lg:px-10 py-6 md:py-8 lg:py-10 mt-12 md:mt-8 lg:mt-12">
          {/* Main Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
            Privacy Policy
          </h1>

          {/* Intro */}
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed sm:leading-loose mb-6 md:mb-8">
            Maharashtra Bags, a manufacturer of BOPP, canvas, jute, and
            non-woven bags, values customer trust and transparency. This Privacy
            Policy and Terms of Service explain how we handle personal data and
            site usage in compliance with Indian laws, including the DPDP Act
            2023.
          </p>

          {/* Section */}
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mt-6 md:mt-8 mb-3 md:mb-4">
            Information We Collect
          </h2>
          <div className="space-y-3 md:space-y-4">
            <p className="text-gray-700 text-sm sm:text-base">
              <strong className="font-semibold">Personal Details:</strong> Name,
              email, phone number, shipping address, and payment details
              (processed securely via payment gateways).
            </p>
            <p className="text-gray-700 text-sm sm:text-base">
              <strong className="font-semibold">Usage Data:</strong> IP address,
              browser type, pages visited, and cookies to improve user
              experience.
            </p>
            <p className="text-gray-700 text-sm sm:text-base">
              <strong className="font-semibold">Optional Information:</strong>{" "}
              Marketing preferences for promotions on bulk or customized bag
              orders.
            </p>
          </div>

          {/* Section */}
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mt-6 md:mt-8 mb-3 md:mb-4">
            How We Use Your Data
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6 md:mb-8">
            Your information helps us process orders, provide delivery updates,
            customer support, and personalized offers. We may also use data for
            analytics, legal compliance, or fraud prevention.
          </p>

          {/* Section */}
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mt-6 md:mt-8 mb-3 md:mb-4">
            Data Sharing and Security
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6 md:mb-8">
            Data is shared only with trusted logistics and payment partners
            under strict confidentiality agreements. We use SSL encryption,
            firewalls, and regular audits to protect your data. You may request
            access or deletion by emailing{" "}
            <strong className="font-semibold break-words">
              info@maharashtrabags.com
            </strong>
            .
          </p>

          {/* Section */}
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mt-6 md:mt-8 mb-3 md:mb-4">
            Cookies and Your Rights
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6 md:mb-8">
            We use essential cookies for website functionality and analytics.
            Users have rights to withdraw consent, data portability, and
            grievance redressal under Indian IT Rules 2021.
          </p>

          {/* Terms of Service */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-8 md:mt-12 mb-4 md:mb-6 leading-tight">
            Terms of Service
          </h1>

          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mt-4 md:mt-6 mb-3 md:mb-4">
            Orders and Payments
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6 md:mb-8">
            Prices exclude GST. Full payment is required upfront. Bulk orders
            require 50% advance payment. Customized orders take additional time
            and are non-refundable.
          </p>

          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mt-4 md:mt-6 mb-3 md:mb-4">
            Shipping and Delivery
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6 md:mb-8">
            Free shipping on orders above ₹5,000 within Maharashtra. PAN-India
            delivery typically takes 3–7 working days. Delays due to external
            factors are not our liability.
          </p>

          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mt-4 md:mt-6 mb-3 md:mb-4">
            Intellectual Property & Liability
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            All content and images are the property of Maharashtra Bags.
            Products comply with Indian standards. Disputes are subject to
            Mumbai jurisdiction, and liability is limited to the order value.
          </p>
        </div>
      </section>
    </div>
  );
}
