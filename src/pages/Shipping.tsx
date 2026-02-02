import React from 'react';
import { useNavigate } from 'react-router-dom';

const Shipping: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Floating Back Button */}
      <button
        onClick={handleGoBack}
        className="fixed top-6 left-6 z-50 bg-white hover:bg-gray-100 text-gray-700 p-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-500"
        aria-label="Go back"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
      </button>
      <div className="max-w-4xl mx-auto p-4 sm:p-8 lg:p-12">
        {/* Header */}
        <div className="border-b border-gray-200 pb-6 mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Shipping Policy
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Last updated: January 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Order Processing Times */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
              Order Processing Times
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We aim to process and dispatch all orders within 1-2 business days from the time your order is placed. Orders placed on weekends or public holidays will be processed on the next business day.
            </p>
          </section>

          {/* Shipping Methods and Delivery Times */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
              Shipping Methods and Delivery Times
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We offer reliable standard shipping across Australia. The estimated delivery times are as follows:
            </p>
            <div className="bg-gray-50 rounded-lg p-4 sm:p-6 space-y-3">
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <div>
                  <span className="font-medium text-gray-800">Metro Areas:</span>
                  <span className="text-gray-700 ml-2">3-5 business days</span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <div>
                  <span className="font-medium text-gray-800">Regional Areas:</span>
                  <span className="text-gray-700 ml-2">5-7 business days</span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <div>
                  <span className="font-medium text-gray-800">Remote Areas:</span>
                  <span className="text-gray-700 ml-2">Up to 10 business days</span>
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-sm mt-4 italic">
              Please note that delivery times are estimates and may vary due to factors beyond our control, such as carrier delays or public holidays.
            </p>
          </section>

          {/* Shipping Costs */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
              Shipping Costs
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Shipping costs are calculated at checkout and depend on your location and the size of your order.{' '}
              <span className="font-semibold text-green-600">
                Orders over $50.00 qualify for free standard shipping.
              </span>
            </p>
          </section>

          {/* Order Tracking */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
              Order Tracking
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Once your order is dispatched, you will receive a shipping confirmation email with a tracking number so you can monitor your order's progress.
            </p>
          </section>

          {/* Delivery Issues */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
              Delivery Issues
            </h2>
            <p className="text-gray-700 leading-relaxed">
              If you experience any issues with your delivery, such as delays or lost items, please contact us at{' '}
              <a
                href="mailto:Vegafoods.enquiry@gmail.com"
                className="text-blue-600 hover:text-blue-800 underline transition-colors"
              >
                Vegafoods.enquiry@gmail.com
              </a>
              . We will work with the courier to resolve the issue promptly.
            </p>
          </section>

          {/* Incorrect Address */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
              Incorrect Address
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Please ensure your shipping address is entered correctly at checkout. VeGa Foods is not responsible for orders shipped to incorrect addresses provided by the customer.
            </p>
          </section>

          {/* Damaged or Missing Items */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
              Damaged or Missing Items
            </h2>
            <p className="text-gray-700 leading-relaxed">
              If your order arrives damaged or items are missing, please contact us within 7 days of receiving your order at{' '}
              <a
                href="mailto:Vegafoods.enquiry@gmail.com"
                className="text-blue-600 hover:text-blue-800 underline transition-colors"
              >
                Vegafoods.enquiry@gmail.com
              </a>
              . We may request photos of the damaged items to assist with resolving the issue.
            </p>
          </section>

          {/* International Shipping */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
              International Shipping
            </h2>
            <p className="text-gray-700 leading-relaxed">
              At this time, we only ship within Australia.
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-700 text-center">
            Thank you for shopping with <span className="font-semibold">VeGa Foods</span>! If you have any questions about our shipping policy, please reach out to us at{' '}
            <a
              href="mailto:Vegafoods.enquiry@gmail.com"
              className="text-blue-600 hover:text-blue-800 underline transition-colors"
            >
              Vegafoods.enquiry@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Shipping;