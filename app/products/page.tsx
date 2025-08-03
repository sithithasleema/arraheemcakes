import ProductsServer from "./ProductsServer";

interface ProductsPageProps {
  searchParams?: { category?: string };
}

export default function ProductsPage({ searchParams }: ProductsPageProps) {
  const category = searchParams?.category;

  return <ProductsServer category={category} />;
}
