import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import products from "./products";
import category from "./category";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, products, category],
};
