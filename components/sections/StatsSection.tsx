const StatsSection = () => {
  return (
    <section className="py-20 bg-emerald-600 text-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">€600</div>
            <p>Maximum Compensation</p>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">98%</div>
            <p>Success Rate</p>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">2k+</div>
            <p>Satisfied Customers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
