import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Cake Shop')
    .items([
      S.documentTypeListItem('products').title('Products'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['products'].includes(item.getId()!),
      ),
    ])