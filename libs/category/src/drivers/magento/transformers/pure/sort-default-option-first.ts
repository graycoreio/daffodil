import { MagentoSortFields } from '../../models/sort-fields';

export function coerceDefaultSortOptionFirst(sort_fields: MagentoSortFields): MagentoSortFields {
  const index = sort_fields.options.findIndex(option => sort_fields.default === option.value);

  return {
    ...sort_fields,
    options: [
      sort_fields.options[index],
      ...sort_fields.options.slice(0, index),
      ...sort_fields.options.slice(index + 1),
    ],
  };
}
