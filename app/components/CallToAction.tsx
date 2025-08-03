import Link from "next/link";
const phone = "919500984449";
const message = encodeURIComponent("Hello, I would like to order a cake!");

const CallToAction = () => {
  return (
    <div>
      <section className="bg-teal-700 text-white py-10 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Need a Cake This Weekend?
        </h2>
        <p className="mb-4">
          Slots fill up quickly! Book your cake today for pickup or delivery.
        </p>
        <Link href={`https://wa.me/${phone}?text=${message}`}>
          <button className="bg-white text-teal-800 px-6 py-2 font-bold rounded shadow hover:bg-gray-100 cursor-pointer transition">
            Order Now
          </button>
        </Link>
      </section>
    </div>
  );
};

export default CallToAction;
