import { TestBed } from '@angular/core/testing';

import {
  DaffDocsSassItemFactory,
  DaffDocsSassParsedPaletteFactory,
  provideDaffDocsSassParsedValueFactories,
} from '@daffodil/docs/testing';
import { DaffDocsSassItem } from '@daffodil/docs-utils';

import { sassItemsToPalettes } from './sass-items-to-palettes';

describe('@daffodil/docs-components | sassItemsToPalettes', () => {
  let factory: DaffDocsSassItemFactory;
  let items: DaffDocsSassItem[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideDaffDocsSassParsedValueFactories<DaffDocsSassParsedPaletteFactory>(
          DaffDocsSassParsedPaletteFactory,
        ),
      ],
    });
    factory = TestBed.inject(DaffDocsSassItemFactory);
    items = factory.createMany(3);
    items[0].group.push('color-palettes');
    items[1].group.push('color-palettes');
  });

  it('should only include items in the color-palettes group', () => {
    const result = sassItemsToPalettes(items);
    expect(result.length).toEqual(2);
  });

  it('should set internal_name to the lowercased context name', () => {
    items[0].context.name = 'Daff-Primary';
    const result = sassItemsToPalettes(items);
    expect(result[0].internal_name).toEqual('daff-primary');
  });

  it('should set friendly_name by stripping the daff- prefix', () => {
    items[0].context.name = 'daff-primary';
    const result = sassItemsToPalettes(items);
    expect(result[0].friendly_name).toEqual('primary');
  });

  it('should map parsed values to shades sorted by step', () => {
    items[0].context.parsedValue.parsed = { 50: '#aaa', 10: '#bbb', 30: '#ccc' };
    const result = sassItemsToPalettes(items);
    expect(result[0].shades).toEqual([
      { step: 10, hex: '#bbb' },
      { step: 30, hex: '#ccc' },
      { step: 50, hex: '#aaa' },
    ]);
  });

  it('should return an empty array for an empty input', () => {
    expect(sassItemsToPalettes([])).toEqual([]);
  });
});
