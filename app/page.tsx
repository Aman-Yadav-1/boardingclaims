import HeroSection from "@/components/HeroSection";

const HomePage: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white">
      <HeroSection />
      <main className="py-16">
        <section className="container mx-auto px-6 lg:px-20">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose BoardingClaims?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-emerald-400 mb-4">Fast Process</h3>
              <p className="text-gray-300">
                Our streamlined process ensures that you get your compensation quickly and easily.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-emerald-400 mb-4">Legal Experts</h3>
              <p className="text-gray-300">
                Work with experienced lawyers who specialize in aviation compensation.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-emerald-400 mb-4">Transparent Fees</h3>
              <p className="text-gray-300">
                No hidden costs—pay only if we win your case.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
