import { TestBed } from '@angular/core/testing';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';

import {
  DAFF_PRODUCT_COMPOSITE_ROUTING_CONFIG,
  DaffProductCompositePageEffects,
} from '@daffodil/product-composite/routing';

import { provideDaffProductCompositeRouting } from './provider';

describe('@daffodil/product-composite/routing | provideDaffProductCompositeRouting', () => {
  describe('when no config is passed', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          provideStore(),
          provideEffects(),
          provideDaffProductCompositeRouting(),
        ],
      });
    });

    it('should provide the product page effects', () => {
      expect(TestBed.inject(DaffProductCompositePageEffects)).toBeTruthy();
    });

    it('should provide the default config', () => {
      expect(TestBed.inject(DAFF_PRODUCT_COMPOSITE_ROUTING_CONFIG).compositeSelectionQueryParam).toEqual('composite_selection');
    });
  });

  describe('when a config is passed', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          provideStore(),
          provideEffects(),
          provideDaffProductCompositeRouting({ compositeSelectionQueryParam: 'custom' }),
        ],
      });
    });

    it('should provide the config', () => {
      expect(TestBed.inject(DAFF_PRODUCT_COMPOSITE_ROUTING_CONFIG).compositeSelectionQueryParam).toEqual('custom');
    });
  });
});
