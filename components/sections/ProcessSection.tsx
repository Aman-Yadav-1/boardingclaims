const ProcessSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple 3-Step Process
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get your flight compensation in three easy steps. We make the process simple and hassle-free.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connecting lines between steps */}
          <div className="hidden md:block absolute top-24 left-1/3 w-1/3 h-0.5 bg-emerald-200"></div>
          <div className="hidden md:block absolute top-24 right-1/3 w-1/3 h-0.5 bg-emerald-200"></div>

          {/* Step 1 */}
          <div className="relative group hover:transform hover:scale-105 transition-all duration-300">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold group-hover:bg-emerald-700 transition-colors">
                1
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Check Your Claim</h3>
              <p className="text-gray-600 leading-relaxed">
                Simply enter your flight details and our smart system will instantly verify your eligibility for compensation.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative group hover:transform hover:scale-105 transition-all duration-300">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold group-hover:bg-emerald-700 transition-colors">
                2
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Submit Documents</h3>
              <p className="text-gray-600 leading-relaxed">
                Upload your required documents securely. We'll guide you through exactly what's needed.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative group hover:transform hover:scale-105 transition-all duration-300">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold group-hover:bg-emerald-700 transition-colors">
                3
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Receive Compensation</h3>
              <p className="text-gray-600 leading-relaxed">
                Sit back and relax while we process your claim. Get your compensation directly to your preferred payment method.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
