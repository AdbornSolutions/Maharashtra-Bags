import React from "react";

export default function TermsCondition() {
  return (
    <div className="pt-16">
      <section className="bg-orange-400 min-h-screen w-full px-4 py-8 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-lg px-4 sm:px-6 md:px-8 lg:px-10 py-6 md:py-8 lg:py-10 mt-12">
          {/* Main Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
            Terms and Conditions
          </h1>

          {/* Intro */}
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 md:mb-8">
            Maharashtra Bags offers these Terms and Conditions to govern the
            purchase of BOPP, canvas, jute, and non-woven bags through
            maharashtrabags.com. By using our website, you agree to fair trade
            practices and compliance with Indian e-commerce laws, including the
            Consumer Protection Act, 2019.
          </p>

          {/* Agreement */}
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mt-6 mb-3">
            Acceptance of Terms
          </h2>
          <p className="text-gray-700 text-sm sm:text-base mb-6">
            By accessing or using our website, you agree to be bound by these
            Terms and Conditions. We reserve the right to update them
            periodically, and continued use of the site constitutes acceptance
            of any changes.
          </p>

          {/* Orders */}
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mt-6 mb-3">
            Orders and Pricing
          </h2>
          <p className="text-gray-700 text-sm sm:text-base mb-4">
            All prices are listed in INR and exclude GST (18% applicable).
            Prices are subject to change without prior notice.
          </p>
          <p className="text-gray-700 text-sm sm:text-base mb-6">
            Orders are confirmed only after successful payment via secure
            gateways (UPI, cards, net banking). Bulk or customized orders
            require a 50% advance payment. We reserve the right to cancel orders
            due to stock issues or pricing errors, with a full refund if payment
            has been made.
          </p>

          {/* Shipping */}
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mt-6 mb-3">
            Shipping and Delivery
          </h2>
          <p className="text-gray-700 text-sm sm:text-base mb-4">
            We offer PAN-India delivery through trusted courier partners.
            Delivery typically takes 3–7 working days.
          </p>
          <p className="text-gray-700 text-sm sm:text-base mb-6">
            Free shipping is available on orders above ₹5,000 within
            Maharashtra. Delivery delays due to weather, strikes, or external
            factors are beyond our control.
          </p>

          {/* Returns */}
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mt-6 mb-3">
            Returns and Refunds
          </h2>
          <p className="text-gray-700 text-sm sm:text-base mb-4">
            Standard products may be returned within 7 days if unused and in
            original packaging. A restocking fee may apply.
          </p>
          <p className="text-gray-700 text-sm sm:text-base mb-6">
            Customized products are non-returnable. Refunds, if applicable, are
            processed within 5–7 working days to the original payment method.
          </p>

          {/* Quality */}
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mt-6 mb-3">
            Product Quality and Warranty
          </h2>
          <p className="text-gray-700 text-sm sm:text-base mb-6">
            All products comply with applicable Indian standards. A limited
            warranty applies to manufacturing defects only and excludes normal
            wear, misuse, or damage after delivery.
          </p>

          {/* Prohibited */}
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mt-6 mb-3">
            Prohibited Use
          </h2>
          <p className="text-gray-700 text-sm sm:text-base mb-6">
            Unauthorized copying of content, misuse of the website, spamming, or
            fraudulent activity is strictly prohibited and may result in legal
            action.
          </p>

          {/* Liability */}
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mt-6 mb-3">
            Liability and Dispute Resolution
          </h2>
          <p className="text-gray-700 text-sm sm:text-base">
            Our liability is limited to the value of the order placed. These
            Terms are governed by Indian law, and disputes shall be subject to
            Mumbai jurisdiction or arbitration under the Arbitration and
            Conciliation Act, 1996.
          </p>
        </div>
      </section>
    </div>
  );
}
