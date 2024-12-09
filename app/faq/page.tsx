import Link from "next/link";

const FAQPage = () => {
  const faqCategories = [
    {
      title: "Compensation Basics",
      items: [
        {
          question: "How much compensation can I claim?",
          answer: "Under EU Regulation 261/2004, you can claim:\n• €250 for flights up to 1,500km\n• €400 for flights between 1,500-3,500km\n• €600 for flights over 3,500km\nThe exact amount depends on your flight distance and the length of delay."
        },
        {
          question: "Am I eligible to claim?",
          answer: "You're eligible if:\n• Your flight was delayed by 3+ hours\n• Your flight was cancelled\n• You were denied boarding\n• The flight departed from EU or was operated by an EU airline flying to EU\n• The disruption occurred within the last 6 years"
        }
      ]
    },
    {
      title: "Claim Process",
      items: [
        {
          question: "What documents do I need?",
          answer: "Essential documents include:\n• Booking confirmation\n• Boarding pass/e-ticket\n• Any communication from airline\n• Receipts for expenses (if applicable)\n• Passport/ID copy"
        },
        {
          question: "How long does the process take?",
          answer: "Typical timeframes:\n• Simple claims: 4-8 weeks\n• Airline response: 2-4 weeks\n• Complex cases: 3-6 months\n• Court proceedings (if needed): 6-12 months"
        }
      ]
    },
    {
      title: "Special Circumstances",
      items: [
        {
          question: "What if the airline claims extraordinary circumstances?",
          answer: "Airlines often cite 'extraordinary circumstances' to avoid paying compensation. However, many common issues like technical problems or staff shortages are NOT considered extraordinary. We'll assess your case and challenge incorrect airline responses."
        },
        {
          question: "Can I claim for connecting flights?",
          answer: "Yes, if booked under one reservation and the delay caused you to miss your connection, resulting in arrival delay of 3+ hours at final destination. This applies even if different airlines operated the flights."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-emerald-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-center max-w-2xl mx-auto">
            Get answers to common questions about flight compensation claims and your passenger rights
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mt-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search FAQ..."
                className="w-full px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {category.title}
                </h2>
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <details
                      key={itemIndex}
                      className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      <summary className="p-6 cursor-pointer font-semibold text-lg">
                        {item.question}
                      </summary>
                      <div className="px-6 pb-6">
                        <p className="text-gray-600 whitespace-pre-line">
                          {item.answer}
                        </p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h2>
          <p className="text-gray-600 mb-8">
            Our team is here to help you with your claim
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/contact"
              className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/claim"
              className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-medium border-2 border-emerald-600 hover:bg-emerald-50 transition-colors"
            >
              Start Your Claim
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
