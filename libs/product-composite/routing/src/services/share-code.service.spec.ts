import { TestBed } from '@angular/core/testing';
import { Dictionary } from '@ngrx/entity';
import {
  BehaviorSubject,
  Observable,
  withLatestFrom,
} from 'rxjs';

import {
  DaffProductStateTestingModule,
  MockDaffProductPageFacade,
} from '@daffodil/product/state/testing';
import {
  DaffCompositeProduct,
  DaffCompositeProductItemOption,
} from '@daffodil/product-composite';
import { provideDaffProductCompositeRoutingConfig } from '@daffodil/product-composite/routing';
import {
  DaffCompositeProductStateTestingModule,
  MockDaffCompositeProductFacade,
} from '@daffodil/product-composite/state/testing';
import { DaffCompositeProductFactory } from '@daffodil/product-composite/testing';

import { DaffProductCompositeRoutingShareCodeService } from './share-code.service';

describe('@daffodil/product-composite/routing | DaffProductCompositeRoutingShareCodeService', () => {
  let service: DaffProductCompositeRoutingShareCodeService;
  let productFacade: MockDaffProductPageFacade;
  let compositeFacade: MockDaffCompositeProductFacade;
  let productFactory: DaffCompositeProductFactory;

  let product: DaffCompositeProduct;
  let appliedOptions: Dictionary<DaffCompositeProductItemOption>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffProductStateTestingModule,
        DaffCompositeProductStateTestingModule,
      ],
      providers: [
        provideDaffProductCompositeRoutingConfig({
          compositeSelectionQueryParam: 'queryParam',
        }),
      ],
    });

    service = TestBed.inject(DaffProductCompositeRoutingShareCodeService);
    productFacade = TestBed.inject(MockDaffProductPageFacade);
    compositeFacade = TestBed.inject(MockDaffCompositeProductFacade);
    productFactory = TestBed.inject(DaffCompositeProductFactory);

    product = productFactory.create();
    productFacade.product$.next(product);
    appliedOptions = {
      [product.items[0].id]: product.items[0].options[1],
    };
    spyOn(compositeFacade, 'getAppliedOptions').withArgs(product.id).and.returnValue(new BehaviorSubject(appliedOptions));
  });

  describe('shareCode$', () => {
    let result: Observable<string>;

    beforeEach(() => {
      result = service.shareCode$;
    });

    it('should return the base64 and JSON stringified version of the applied options', (done) => {
      result.subscribe((res) => {
        const payload = JSON.parse(atob(res));
        expect(payload[product.items[0].id]).toEqual([product.items[0].options[1].id]);
        done();
      });
    });
  });

  describe('queryParam$', () => {
    let result: Observable<string>;

    beforeEach(() => {
      result = service.queryParam$;
    });

    it('should return the query param set to the share code', (done) => {
      result.pipe(
        withLatestFrom(service.shareCode$),
      ).subscribe(([res, shareCode]) => {
        expect(res).toEqual(`queryParam=${shareCode}`);
        done();
      });
    });
  });
});
