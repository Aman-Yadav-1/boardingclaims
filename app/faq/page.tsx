export default function FAQPage() {
    return (
      <section className="bg-white text-black py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-emerald-600 text-center mb-10">
            Frequently Asked Questions
          </h1>
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-black">
                Who is eligible for flight compensation?
              </h2>
              <p className="text-gray-600 mt-2">
                Any passenger whose flight was delayed, canceled, or overbooked within the past three years may be eligible.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-black">
                How long does the process take?
              </h2>
              <p className="text-gray-600 mt-2">
                The process duration depends on the airline, but BoardingClaims handles all communication to expedite it.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  