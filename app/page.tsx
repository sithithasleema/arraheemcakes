import Image from "next/image";
import Link from "next/link";
import WhyUs from "./WhyUs";
import CallToAction from "./components/CallToAction";
import FeaturedCategories from "./components/FeaturedCategories";

export default function Home() {
  return (
    <div>
      <div className="w-full">
        {/* Banner Section */}
        <div className="relative w-full h-[400px]">
          <Image
            src="/banner1.jpg"
            alt="Product banner"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/40">
            <h1 className="text-gray-100 text-4xl md:text-5xl font-bold mb-2">
              Ar Raheem Cakes
            </h1>
            <p className="text-gray-200 text-lg md:text-xl max-w-xl">
              Celebrating Sweet Moments with Handcrafted Cakes.
            </p>
          </div>
        </div>

        {/* Text Section */}
        <div className="bg-teal-800 text-slate-200 text-center px-12 py-10 space-y-6 text-lg font-medium">
          <p>
            From decadent cakes and delicate pastries to buttery biscuits and
            savory treats - every item is handcrafted in Hyderabad with love,
            precision, and the finest ingredients.
          </p>
          <p>
            Discover our handcrafted cakes and pastries—where every creation is
            a blend of traditional expertise and modern creativity, built to
            delight your senses.
          </p>

          <div className="text-center mt-6">
            <Link href="/products">
              <button className="px-6 py-3 bg-amber-800 text-white font-semibold rounded-lg shadow-md hover:bg-pink-700 transition duration-300 cursor-pointer">
                View All Products
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Why US */}
      <div>
        {" "}
        <WhyUs />
      </div>

      <div>
        <CallToAction />
      </div>

      {/* Featured Categories */}
      <div>
        <FeaturedCategories />
      </div>
    </div>
  );
}
