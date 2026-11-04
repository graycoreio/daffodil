import { TestBed } from '@angular/core/testing';

import { DaffCheckoutInMemoryBackendOrderService } from '@daffodil/checkout/driver/in-memory';
import { DaffProductTestingModule } from '@daffodil/product/testing';

import { DaffCheckoutInMemoryBackendRootService } from './root.service';
import { DAFF_CHECKOUT_IN_MEMORY_CHECKOUT_ORDER_COLLECTION_NAME } from '../collection-names.const';

describe('DaffCheckoutInMemoryBackendRootService | Unit', () => {
  let service: DaffCheckoutInMemoryBackendRootService;

  let orderBackendService: DaffCheckoutInMemoryBackendOrderService;

  let reqInfoStub;
  let baseUrl;

  let orderPostSpy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffProductTestingModule,
      ],
      providers: [
        DaffCheckoutInMemoryBackendRootService,
      ],
    });
    service = TestBed.inject(DaffCheckoutInMemoryBackendRootService);

    orderBackendService = TestBed.inject(DaffCheckoutInMemoryBackendOrderService);

    baseUrl = 'api/checkout';
    reqInfoStub = {
      id: '',
      resourceUrl: baseUrl,
      collection: [],
      collectionName: '',
      method: '',
      req: {
        body: {},
      },
      utils: {
        createResponse$: func => func(),
        getJsonBody: req => req.body,
        findById: (ary, id) => ary.find(e => e.id === id),
      },
    };

    orderPostSpy = spyOn(orderBackendService, 'post');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('processing a post request', () => {
    beforeEach(() => {
      reqInfoStub.method = 'post';
    });

    describe(`when the collectionName is ${DAFF_CHECKOUT_IN_MEMORY_CHECKOUT_ORDER_COLLECTION_NAME}`, () => {
      let result;

      beforeEach(() => {
        reqInfoStub.collectionName = DAFF_CHECKOUT_IN_MEMORY_CHECKOUT_ORDER_COLLECTION_NAME;

        result = service.post(reqInfoStub);
      });

      it('should delegate the request to the order service', () => {
        expect(orderPostSpy).toHaveBeenCalledWith(reqInfoStub);
      });
    });
  });
});
