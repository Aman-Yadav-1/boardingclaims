export default function HowWeWorkPage() {
    return (
      <section className="bg-white text-black py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-emerald-600 text-center mb-10">
            How We Work
          </h1>
          <ol className="space-y-8">
            <li className="flex items-start space-x-4">
              <div className="bg-emerald-600 text-white rounded-full h-12 w-12 flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h2 className="text-xl font-semibold">Submit Your Claim</h2>
                <p className="text-gray-600">
                  Fill out our online form with your flight details and the issue you faced.
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-4">
              <div className="bg-emerald-600 text-white rounded-full h-12 w-12 flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h2 className="text-xl font-semibold">We Process Your Case</h2>
                <p className="text-gray-600">
                  Our team of experts reviews your case and contacts the airline on your behalf.
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-4">
              <div className="bg-emerald-600 text-white rounded-full h-12 w-12 flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div>
                <h2 className="text-xl font-semibold">Receive Your Compensation</h2>
                <p className="text-gray-600">
                  Once your claim is approved, you'll receive your compensation directly to your account.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>
    );
  }
  