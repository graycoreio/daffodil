import {
  DaffDocsSassItem,
  DaffDocsSassType,
} from '@daffodil/docs-utils';

import { ColorPalette } from './color-palettes';

/**
 * Converts sass documentation items into color palettes.
 * Filters to items in the 'color-palettes' group with a parsed map value,
 * then maps them to the {@link ColorPalette} view model.
 */
export const sassItemsToPalettes = (items: Array<DaffDocsSassItem>): ColorPalette[] =>
  items
    ?.filter((item) => item.group.includes('color-palettes') && item.context.parsedValue.type === DaffDocsSassType.MAP && item.context.parsedValue.parsed)
    .map((item) => ({
      internal_name: item.context.name.toLowerCase(),
      friendly_name: item.context.name.replace('daff-', ''),
      shades: Object.entries(item.context.parsedValue.parsed)
        .map(([key, value]) => ({ step: Number(key), hex: String(value) }))
        .sort((a, b) => a.step - b.step),
    })) ?? [];
