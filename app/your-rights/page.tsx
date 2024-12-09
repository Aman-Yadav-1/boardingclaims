export default function YourRightsPage() {
    return (
      <section className="bg-white text-black py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-emerald-600 text-center mb-10">
            Your Passenger Rights
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            As a passenger, you are entitled to certain rights under EU Regulation 261/2004 and other global frameworks. 
            BoardingClaims ensures that these rights are respected and enforced.
          </p>
          <ul className="space-y-6">
            <li className="bg-emerald-50 p-6 rounded-lg shadow">
              <h2 className="text-2xl font-semibold text-emerald-600">
                Right to Compensation
              </h2>
              <p className="text-gray-700 mt-2">
                Passengers are eligible for compensation up to €600 for flight disruptions such as delays or cancellations.
              </p>
            </li>
            <li className="bg-emerald-50 p-6 rounded-lg shadow">
              <h2 className="text-2xl font-semibold text-emerald-600">
                Right to Care
              </h2>
              <p className="text-gray-700 mt-2">
                Airlines must provide meals, refreshments, and accommodation in case of long delays or cancellations.
              </p>
            </li>
            <li className="bg-emerald-50 p-6 rounded-lg shadow">
              <h2 className="text-2xl font-semibold text-emerald-600">
                Right to Refund or Rebooking
              </h2>
              <p className="text-gray-700 mt-2">
                You can request a full refund or a rebooked flight if your flight is canceled.
              </p>
            </li>
          </ul>
        </div>
      </section>
    );
  }
  