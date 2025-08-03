const WhyUs = () => {
  return (
    <div>
      <section className="text-center py-12 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-teal-800 mb-4">
          Why Choose Us?
        </h2>
        <p className="text-gray-700 text-lg">
          We don’t just bake cakes — we create edible joy.
        </p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold text-lg">Made to Order</h3>
            <p className="text-gray-600">
              Freshly baked for every order. No freezer, no shortcuts.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Custom Designs</h3>
            <p className="text-gray-600">
              From elegant florals to superhero themes — we make it personal.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Local & Handcrafted</h3>
            <p className="text-gray-600">
              Family-run Hyderabad-based bakery you can trust.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;
