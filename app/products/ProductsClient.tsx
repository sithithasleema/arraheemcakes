// app/components/ProductsClient.tsx
"use client";

import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";

const ProductsServer = dynamic(() => import("./ProductsServer"));

const ProductsClient = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || undefined;

  return <ProductsServer category={category} />;
};

export default ProductsClient;
