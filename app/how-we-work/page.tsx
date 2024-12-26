export default function HowWeWork() {
  return (
    <div className="min-h-screen bg-emerald-50 pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="px-6 py-16 container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-emerald-700 text-center mb-8">
          How BoardingClaims Works For You
        </h1>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
          We simplify the process of claiming compensation for flight delays, cancellations, and boarding issues. Our expert team handles everything while you sit back.
        </p>
      </section>

      {/* Process Steps */}
      <section className="px-6 py-12 container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-emerald-700 font-bold text-xl">1</span>
            </div>
            <h3 className="text-xl font-bold text-emerald-700 mb-3">Submit Your Claim</h3>
            <p className="text-gray-600">
              Fill out our simple claim form with your flight details. It takes less than 3 minutes, and we'll immediately check if you're eligible for compensation.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-emerald-700 font-bold text-xl">2</span>
            </div>
            <h3 className="text-xl font-bold text-emerald-700 mb-3">We Handle Everything</h3>
            <p className="text-gray-600">
              Our legal experts process your claim, handle all communication with the airline, and fight for your rights. We have a 98% success rate in court if needed.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-emerald-700 font-bold text-xl">3</span>
            </div>
            <h3 className="text-xl font-bold text-emerald-700 mb-3">Get Compensated</h3>
            <p className="text-gray-600">
              Receive your compensation directly to your account. We only charge our success fee (25%) when you get paid. No win, no fee guaranteed.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-6 py-12 container mx-auto">
        <h2 className="text-3xl font-bold text-emerald-700 mb-8 text-center">Why Choose BoardingClaims?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-emerald-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="font-semibold text-lg text-emerald-700">Expert Legal Team</h3>
                <p className="text-gray-600">Specialized in EU air passenger rights and regulations</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-emerald-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="font-semibold text-lg text-emerald-700">No Win, No Fee</h3>
                <p className="text-gray-600">You only pay if we successfully secure your compensation</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-emerald-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="font-semibold text-lg text-emerald-700">98% Success Rate</h3>
                <p className="text-gray-600">Proven track record in securing passenger compensation</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-emerald-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="font-semibold text-lg text-emerald-700">Fast Processing</h3>
                <p className="text-gray-600">Average claim processing time of just 4-6 weeks</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-emerald-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="font-semibold text-lg text-emerald-700">Transparent Process</h3>
                <p className="text-gray-600">Track your claim status 24/7 through our platform</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-emerald-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="font-semibold text-lg text-emerald-700">Multilingual Support</h3>
                <p className="text-gray-600">Customer service available in multiple languages</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
