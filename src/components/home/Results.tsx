export default function Results() {
  const benefits = [
    {
      title: "Real Estate & Agriculture Insights",
      description:
        "Struggling to make sense of scattered land or crop data? I turn messy spatial information into clear insights for better property and farm decisions.",
    },
    {
      title: "Big Data Analysis",
      description:
        "Overwhelmed by massive datasets that slow down your system or risk crashing your hard drive? I process big geospatial data efficiently, delivering actionable insights without the lag.",
    },
    {
      title: "Cost Optimization & Performance",
      description:
        "High operational costs eating into your budget? I streamline workflows and optimize geospatial processing to save time and reduce expenses.",
    },
  ];

  return (
    <section className="pt-20 bg-gray-50">

      <div className="mx-auto flex flex-col">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-3">Why Choose Me?</h2>
          <h3 className="text-lg font-medium mb-4">Your everyday geospatial problem solver</h3>
          <p className="text-gray-700">
            Here's how I help businesses save time, reduce costs, and make smarter decisions with geospatial data in urban and agriculture.
          </p>
        </div>

        <div className="flex flex-wrap gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex-1 border border-gray-300  rounded-xl p-8 shadow hover:shadow-md transition-shadow duration-300 bg-white min-w-[260px]"
            >
              <h3 className="text-xl font-semibold mb-5">{benefit.title}</h3>
              <p className="text-gray-700">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
