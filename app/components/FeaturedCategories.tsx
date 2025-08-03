import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

interface Category {
  _id: string;
  title: string;
  slug: { current: string };
  image?: { asset: { url: string } };
  description?: string;
}

async function getCategories(): Promise<Category[]> {
  const query = `*[_type == "category"]{
    _id,
    title,
    slug,
   "image": {
    "asset": {
      "url": image.asset->url
    }
  },
    description
  }`;
  const categories = await client.fetch(query);
  return categories;
}

const FeaturedCategories = async () => {
  const categories = await getCategories();
  console.log(categories[0].image?.asset.url);

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center text-teal-800 mb-10">
        Explore Our Cake Collections
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
        {categories.map(({ _id, title, slug, image }) => (
          <Link
            key={_id}
            href={`/products?category=${slug.current}`}
            className="block border-slate-900 rounded-lg shadow hover:shadow-lg transition p-4 bg-white hover:bg-slate-100"
          >
            <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
              {image ? (
                <Image
                  src={image?.asset?.url || "/fallback.jpg"}
                  alt={title}
                  width={500}
                  height={300}
                  className="rounded-lg object-contain"
                />
              ) : (
                <div className="w-[300px] h-[300px] bg-gray-200 rounded-lg flex items-center justify-center text-sm text-gray-500">
                  No Image
                </div>
              )}
            </div>
            <h3 className="text-xl font-semibold text-teal-800 mb-2">
              {title}
            </h3>
            <button
              type="button"
              className="px-4 py-2 bg-teal-800 text-white rounded hover:bg-teal-600 transition cursor-pointer"
            >
              View
            </button>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCategories;
