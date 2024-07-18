import { TestBed } from '@angular/core/testing';

import { DaffDocsPaletteColor } from '@daffodil/docs-utils';

import { DaffDocsPaletteColorFactory } from './palette-color.factory';

describe('@daffodil/documentation | DaffDocsPaletteColorFactory', () => {
  let factory: DaffDocsPaletteColorFactory;
  let result: DaffDocsPaletteColor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    factory = TestBed.inject(DaffDocsPaletteColorFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  it('should create a palette color', () => {
    result = factory.create();

    Object.keys(result).forEach((shade) => {
      expect(Number.isNaN(Number(shade))).toBeFalse();
      expect(result[shade].length).toEqual(7);
    });
  });
});
