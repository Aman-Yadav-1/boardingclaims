export default function AboutPage() {
    return (
      <section className="bg-white text-black py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold text-emerald-600 mb-6">
            About BoardingClaims
          </h1>
          <p className="text-lg text-gray-600">
            BoardingClaims is dedicated to simplifying flight compensation for passengers worldwide. 
            Our team of experts ensures you get the compensation you deserve for delayed, canceled, or overbooked flights.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-emerald-50 p-6 rounded-lg shadow">
              <h2 className="text-2xl font-semibold text-emerald-600">
                Our Mission
              </h2>
              <p className="text-gray-700 mt-4">
                To empower passengers by providing hassle-free claims processes and maximizing their compensation.
              </p>
            </div>
            <div className="bg-emerald-50 p-6 rounded-lg shadow">
              <h2 className="text-2xl font-semibold text-emerald-600">
                Our Vision
              </h2>
              <p className="text-gray-700 mt-4">
                A future where air passengers have full confidence in claiming what they are legally owed.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  