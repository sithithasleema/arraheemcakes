import { client } from "@/sanity/lib/client";
import Image from "next/image";
import ProductCard from "./ProductCard";

// Base Sanity types
export interface SanitySlug {
  _type: "slug";
  current: string;
}

export interface SanityImage {
  _key: string;
  url: string;
  alt?: string;
}

interface Category {
  _id: string;
  title: string;
  slug: { current: string };
  imageUrl?: string;
  description?: string;
}

export interface DataProps {
  _id: string;
  name: string;
  slug: SanitySlug;
  description: string;
  category: Category;
  flavours: string[];
  customizable: boolean;
  images: SanityImage[];
}

async function getProducts() {
  const query = `*[_type == "products"]{
  _id,
  name,
  slug,
  description,
   "category": category->{
    _id,
    title,
    slug,
    "imageUrl": image.asset->url,
    description
  },
  flavours,
  customizable,
  "images": images[]{
    _key,
    "url": asset->url,
    "alt": alt
  }
}`;
  const data: DataProps[] = await client.fetch(query);
  return data;
}

interface ProductsServerProps {
  category?: string;
}

const ProductsServer = async ({ category }: ProductsServerProps) => {
  const data = await getProducts();

  // Optional: filter by category
  const filteredData = category
    ? data.filter((item) => item.category?.slug?.current === category)
    : data;

  const currentCategory = category
    ? data.find((item) => item.category?.slug?.current === category)?.category
    : null;

  const currentCategoryName = currentCategory?.title || "All Products";

  return (
    <>
      {" "}
      <div className="w-full">
        {/* Banner Section */}
        <div className="relative w-full h-[400px]">
          <Image
            src="/banner.jpg"
            alt="Product banner"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/40">
            <h1 className="text-gray-100 text-4xl md:text-5xl font-bold mb-2">
              PRODUCTS
            </h1>
            <p className="text-gray-200 text-lg md:text-xl max-w-xl">
              From Our Oven to Your Occasion
            </p>
          </div>
        </div>

        {/* Text Section */}
        <div className="bg-teal-800 text-slate-200 text-center px-12 py-10 space-y-6 text-lg font-semibold ">
          <p>
            Discover our handcrafted cakes, baked fresh daily using premium
            ingredients and time-honored recipes. Whether you’re marking a
            birthday, anniversary, or just treating yourself, each cake is a
            celebration of flavor and artistry. We believe a cake isn’t just
            dessert — it’s an experience, a centerpiece, and a way to create
            lasting memories.
          </p>
        </div>
      </div>
      {/* Product cards */}
      <div className="flex flex-col gap-4 mt-12">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Showing Products for {currentCategoryName}
        </h1>
        <ProductCard product={filteredData} />
      </div>
    </>
  );
};

export default ProductsServer;
