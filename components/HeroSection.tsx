import { Button } from "./ui/button";

export default function HeroSection() {
  return (
    <section className="bg-white text-emerald-600 flex items-center justify-center min-h-[90vh] px-6">
      <div className="text-center max-w-4xl space-y-8">
        <h1 className="text-5xl font-extrabold tracking-tight md:text-6xl text-black">
          Hassle-Free Flight Compensation
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          Get compensated for your delayed, canceled, or denied flights with a process as simple as it gets.
        </p>
        <div className="flex justify-center space-x-4">
          <Button className="bg-emerald-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow hover:bg-emerald-700 transition">
            Start Your Claim
          </Button>
          <Button className="border border-emerald-600 text-emerald-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-emerald-50 transition">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
