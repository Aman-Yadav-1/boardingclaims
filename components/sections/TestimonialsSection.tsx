const TestimonialsSection = () => {
    const testimonials = [
      {
        rating: 5,
        text: "After my flight was delayed by 6 hours, BoardingClaims helped me secure €600 in compensation. Their process was seamless and professional.",
        author: "Sarah Mitchell",
        location: "London, UK",
        claimType: "Flight Delay"
      },
      {
        rating: 5,
        text: "When my luggage was lost during my international flight, BoardingClaims stepped in and handled everything. I received compensation within weeks!",
        author: "Marcus Weber",
        location: "Berlin, Germany",
        claimType: "Lost Baggage"
      },
      {
        rating: 5,
        text: "My flight was overbooked and I was denied boarding. Thanks to BoardingClaims, I received full compensation and learned about my passenger rights.",
        author: "Elena Rodriguez",
        location: "Madrid, Spain",
        claimType: "Denied Boarding"
      }
    ];
  
    return (
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Join thousands of satisfied customers who successfully claimed their compensation with our help
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div 
                key={i} 
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-yellow-400 text-xl">
                    {'★'.repeat(testimonial.rating)}
                  </div>
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {testimonial.claimType}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default TestimonialsSection;
  