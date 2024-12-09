export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-emerald-50 py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold text-emerald-600 mb-6">
            BoardingClaims
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Your trusted partner in securing fair compensation for flight disruptions. 
            We've helped thousands of passengers claim their rights and receive the compensation they deserve.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-emerald-50 p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-emerald-600 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-700">
                To empower air passengers by simplifying the complex process of flight compensation claims, 
                ensuring they receive fair treatment and just compensation for their travel disruptions.
              </p>
            </div>
            <div className="bg-emerald-50 p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-emerald-600 mb-4">
                Our Vision
              </h2>
              <p className="text-gray-700">
                To create a world where every air passenger knows and can easily exercise their rights, 
                making air travel more accountable and passenger-friendly.
              </p>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-emerald-600 mb-8">
              Why Choose BoardingClaims?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="text-emerald-600 text-4xl mb-4">✓</div>
                <h3 className="text-xl font-semibold mb-3">Expert Knowledge</h3>
                <p className="text-gray-600">
                  Deep understanding of air passenger rights and regulations across different jurisdictions.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="text-emerald-600 text-4xl mb-4">💼</div>
                <h3 className="text-xl font-semibold mb-3">No Win, No Fee</h3>
                <p className="text-gray-600">
                  We only charge a fee when we successfully secure your compensation.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="text-emerald-600 text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold mb-3">Quick Process</h3>
                <p className="text-gray-600">
                  Streamlined claim process with minimal effort required from your side.
                </p>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="bg-emerald-50 rounded-lg p-8 shadow-md">
            <h2 className="text-3xl font-bold text-center text-emerald-600 mb-8">
              Our Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-emerald-600 mb-2">98%</div>
                <p className="text-gray-700">Success Rate</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-emerald-600 mb-2">2k+</div>
                <p className="text-gray-700">Claims Processed</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-emerald-600 mb-2">€5500+</div>
                <p className="text-gray-700">Compensation Secured</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
