import { TestBed } from '@angular/core/testing';

import { DaffProduct } from '@daffodil/product';
import { DaffInMemoryBackendProductService } from '@daffodil/product/driver/in-memory';
import { DaffDefaultProductFactory } from '@daffodil/product/testing';
import { DaffSearchTestingModule } from '@daffodil/search/testing';

import { DaffSearchProductInMemoryBackendService } from './search.service';

describe('@daffodil/search-product/driver/in-memory | DaffSearchProductInMemoryBackendService', () => {
  let service: DaffSearchProductInMemoryBackendService;
  let productBackendSpy: jasmine.SpyObj<DaffInMemoryBackendProductService>;

  let productFactory: DaffDefaultProductFactory;
  let mockProducts: DaffProduct[];

  beforeEach(() => {
    productBackendSpy = jasmine.createSpyObj('DaffInMemoryBackendProductService', [], ['products']);

    TestBed.configureTestingModule({
      imports: [
        DaffSearchTestingModule,
      ],
      providers: [
        DaffSearchProductInMemoryBackendService,
        {
          provide: DaffInMemoryBackendProductService,
          useValue: productBackendSpy,
        },
      ],
    });

    service = TestBed.inject(DaffSearchProductInMemoryBackendService);
    productFactory = TestBed.inject(DaffDefaultProductFactory);

    mockProducts = productFactory.createMany(3, {
      name: 'name',
    });
    (<jasmine.Spy>Object.getOwnPropertyDescriptor(productBackendSpy, 'products').get).and.returnValue(mockProducts);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('get | getting a list of product search results', () => {
    let reqInfoStub;
    let result;

    beforeEach(() => {
      const query = new Map();
      query.set('query', 'name');
      reqInfoStub = {
        utils: {
          createResponse$: (func) => func(),
        },
        query,
      };

      result = service.get(reqInfoStub);
    });

    it('should return an Array of search results that match the query', () => {
      mockProducts.forEach(product => {
        expect(result.body).toContain(jasmine.objectContaining({
          id: product.id,
        }));
      });
    });
  });
});
