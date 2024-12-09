const FAQSection = () => {
  const faqItems = [
    {
      question: "How much compensation can I claim?",
      answer: "Depending on your flight distance and delay duration, you can claim up to €600 per passenger. Short flights (up to 1,500km) qualify for €250, medium flights (1,500-3,500km) for €400, and long flights (over 3,500km) for €600."
    },
    {
      question: "What documents do I need?",
      answer: "You'll need your boarding pass, flight details, and any communication from the airline regarding the delay or cancellation. Additional documents like receipts for expenses during the delay can strengthen your claim."
    },
    {
      question: "How long does the claim process take?",
      answer: "Most claims are processed within 4-8 weeks. Complex cases might take longer if additional documentation is required or if the airline contests the claim."
    },
    {
      question: "Am I eligible to claim?",
      answer: "You're eligible if your flight was delayed by more than 3 hours, cancelled, or if you were denied boarding. The flight must have departed from the EU or been operated by an EU-based airline flying into the EU."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Get answers to common questions about flight compensation claims
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqItems.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
