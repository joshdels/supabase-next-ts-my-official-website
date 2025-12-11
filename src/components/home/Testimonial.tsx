export default function Testimonial() {
  const testimonials = [
    {
      name: "Alice Johnson",
      role: "Farm Manager",
      text: "Joshua transformed the way we manage our crops. The insights are fast, accurate, and easy to act on.",
    },
    {
      name: "Mark Thompson",
      role: "Real Estate Analyst",
      text: "Huge datasets used to crash my system, but Joshua handles everything smoothly. Highly recommend!",
    },
    {
      name: "Sofia Reyes",
      role: "Logistics Coordinator",
      text: "Their geospatial analysis saved us time and money. Operations are now optimized like never before.",
    },
    {
      name: "David Lee",
      role: "Data Scientist",
      text: "Processing big spatial datasets has never been easier. Smooth performance every time.",
    },
  ];

  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold mb-6">What Clients Say</h2>
      <div className="flex">
        <div className="overflow-x-auto scroll-smooth snap-x snap-mandatory flex gap-6 py-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="shrink-0 w-110 border border-gray-300 rounded-xl p-6 shadow hover:shadow-md transition-shadow duration-300 snap-start"
            >
              <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
              <h3 className="font-semibold">{testimonial.name}</h3>
              <span className="text-sm text-gray-500">{testimonial.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
