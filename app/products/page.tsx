// app/products/page.tsx

import ProductsServer from "./ProductsServer";

interface SearchParams {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function ProductsPage({ searchParams }: SearchParams) {
  const resolvedSearchParams = await searchParams;
  const category =
    typeof resolvedSearchParams.category === "string"
      ? resolvedSearchParams.category
      : undefined;

  return <ProductsServer category={category} />;
}
