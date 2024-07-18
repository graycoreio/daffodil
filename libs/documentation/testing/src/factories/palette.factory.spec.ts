import { TestBed } from '@angular/core/testing';

import { DaffDocsPaletteFactory } from './palette.factory';

describe('@daffodil/documentation | DaffDocsPaletteFactory', () => {
  let factory: DaffDocsPaletteFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    factory = TestBed.inject(DaffDocsPaletteFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });
});
