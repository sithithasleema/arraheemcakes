import Image from "next/image";
import { DataProps } from "./ProductsServer";

interface ProductProps {
  product: DataProps[];
}
const ProductCard = ({ product }: ProductProps) => {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-12">
      {product.map((item) => (
        <article
          key={item._id}
          className="flex flex-col md:flex-row gap-6 rounded-xl shadow-lg p-6 bg-white border border-gray-300 hover:shadow-xl transition-shadow duration-300"
        >
          {/* Text Content */}
          <div className="flex-1 space-y-3">
            <h2 className="text-2xl font-bold text-teal-800">{item.name}</h2>
            <p className="text-gray-700">{item.description}</p>
            <p className="text-sm text-gray-500">
              <strong>Category:</strong> {item.category.title}
            </p>
            <p className="text-sm text-gray-500">
              <strong>Flavours:</strong> {item.flavours?.join(", ")}
            </p>
            <p className="text-sm text-gray-500">
              <strong>Customizable:</strong> {item.customizable ? "Yes" : "No"}
            </p>
          </div>

          {/* Image */}
          <div className="flex-shrink-0 w-full md:w-64 h-52 relative">
            <Image
              src={item.images?.[0]?.url || "/fallback.jpg"}
              alt={item.images?.[0]?.alt || item.name}
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </article>
      ))}
    </div>
  );
};

export default ProductCard;
