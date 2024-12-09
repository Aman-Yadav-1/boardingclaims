import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function YourRightsPage() {
  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <section className="bg-emerald-50 py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-600 mb-6">
            Know Your Air Passenger Rights
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Under EU Regulation 261/2004, you are protected when traveling by air. Learn about your rights and how we can help you claim compensation.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Key Rights Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-emerald-600 mb-8">Your Key Rights</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md border border-emerald-100">
                <h3 className="text-xl font-semibold text-emerald-600 mb-4">Flight Delays</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• 3+ hours delay: Up to €600 compensation</li>
                  <li>• Right to meals and refreshments</li>
                  <li>• Free phone calls or emails</li>
                  <li>• Hotel accommodation if necessary</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-emerald-100">
                <h3 className="text-xl font-semibold text-emerald-600 mb-4">Flight Cancellations</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Up to €600 compensation</li>
                  <li>• Choice of refund or re-routing</li>
                  <li>• Right to care and assistance</li>
                  <li>• Alternative transport arrangements</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Compensation Table */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-emerald-600 mb-8">Compensation Amounts</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-emerald-50">
                    <th className="border p-4 text-left">Flight Distance</th>
                    <th className="border p-4 text-left">Delay Length</th>
                    <th className="border p-4 text-left">Compensation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-4">Up to 1500km</td>
                    <td className="border p-4">3+ hours</td>
                    <td className="border p-4">€250</td>
                  </tr>
                  <tr>
                    <td className="border p-4">1500km to 3500km</td>
                    <td className="border p-4">3+ hours</td>
                    <td className="border p-4">€400</td>
                  </tr>
                  <tr>
                    <td className="border p-4">Over 3500km</td>
                    <td className="border p-4">4+ hours</td>
                    <td className="border p-4">€600</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Additional Rights */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-emerald-600 mb-8">Additional Rights</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md border border-emerald-100">
                <h3 className="text-xl font-semibold text-emerald-600 mb-4">Denied Boarding</h3>
                <p className="text-gray-700">
                  If you're denied boarding due to overbooking, you're entitled to immediate compensation and a choice between a refund or alternative flight.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-emerald-100">
                <h3 className="text-xl font-semibold text-emerald-600 mb-4">Lost or Damaged Baggage</h3>
                <p className="text-gray-700">
                  Under the Montreal Convention, you can claim up to 1,288 SDR (approximately €1,500) for lost, damaged or delayed baggage.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-emerald-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-emerald-600 mb-4">Ready to Claim Your Compensation?</h2>
            <p className="text-gray-700 mb-6">
              Our expert team will handle your claim from start to finish, ensuring you get the compensation you deserve.
            </p>
            <Button asChild className="bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors">
              <Link href="/claim-form">
                Start Your Claim Now
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
