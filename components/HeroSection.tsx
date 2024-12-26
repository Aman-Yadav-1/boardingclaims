'use client'
import { useRouter } from 'next/navigation';
import Image from "next/image";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { useState } from 'react';

export default function Hero() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  
  // In the handleSubmit function
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsLoading(true);
  try {
    await router.push('/claim-form?step=complaint'); // Add step parameter
  } finally {
    setIsLoading(false);
  }
};


  return (
    <section className="relative bg-gradient-to-br from-emerald-50 via-emerald-100 to-emerald-200 min-h-[85vh] pt-16 sm:pt-20">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="z-10 space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-emerald-950 leading-tight">
                Hassle-Free Flight
                <span className="block text-emerald-600">Compensation Claims</span>
              </h1>
              <p className="text-xl text-emerald-800 leading-relaxed">
                Experience seamless flight compensation claims with our expert service. 
                We handle delayed, cancelled, or overbooked flights with a guaranteed success rate.
              </p>
            </div>
            
            {/* Enhanced Claim Form Card */}
            <Card className="bg-white/95 shadow-xl p-8 rounded-2xl border-emerald-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-semibold text-emerald-900 mb-4">Check Your Eligibility</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-emerald-800">Departure Airport</label>
                    <Input 
                      type="text"
                      className="bg-white border-emerald-200 focus:border-emerald-500 text-emerald-900 placeholder:text-emerald-400 h-12"
                      placeholder="e.g., London Heathrow"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-emerald-800">Arrival Airport</label>
                    <Input 
                      type="text"
                      className="bg-white border-emerald-200 focus:border-emerald-500 text-emerald-900 placeholder:text-emerald-400 h-12"
                      placeholder="e.g., Paris CDG"
                    />
                  </div>
                </div>
                <Button 
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold h-12 text-lg transition-all duration-300 rounded-xl group"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    <>
                      Check Your Compensation
                      <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">
                        →
                      </span>
                    </>
                  )}
                </Button>
              </form>
            </Card>

            {/* Enhanced Trust Indicators */}
            <div className="grid grid-cols-3 gap-8">
              {[
                { icon: "✓", text: "98% Success Rate", subtext: "Proven Track Record" },
                { icon: "€", text: "No Win No Fee", subtext: "Risk-Free Claims" },
                { icon: "⚖️", text: "Legal Experts", subtext: "Professional Support" }
              ].map((item, index) => (
                <div key={index} className="text-center p-4 bg-white/80 rounded-xl shadow-sm">
                  <span className="text-2xl mb-2 block">{item.icon}</span>
                  <h3 className="font-semibold text-emerald-900">{item.text}</h3>
                  <p className="text-sm text-emerald-600">{item.subtext}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Right Image Section */}
          <div className="hidden lg:block relative">
            <div className="relative">
              <Image 
                src="/hero-plane.jpg" 
                alt="Airplane in flight" 
                width={700} 
                height={500}
                className="rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-emerald-200 rounded-full opacity-20 z-[-1]" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-emerald-300 rounded-full opacity-20 z-[-1]" />
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
