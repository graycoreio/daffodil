import { TestBed } from '@angular/core/testing';

import { DaffProductCustomAttribute } from '@daffodil/product';
import { DaffProductCustomAttributeFactory } from '@daffodil/product/testing';

import { DaffTestingProductCustomAttributeService } from './custom-attribute.service';

describe('@daffodil/product/driver/testing | DaffTestingProductCustomAttributeService', () => {
  let service: DaffTestingProductCustomAttributeService;
  let customAttributeFactory: DaffProductCustomAttributeFactory;
  let stubCustomAttributes: DaffProductCustomAttribute[];

  beforeEach(() => {
    TestBed.configureTestingModule({});

    service = TestBed.inject(DaffTestingProductCustomAttributeService);
    customAttributeFactory = TestBed.inject(DaffProductCustomAttributeFactory);

    stubCustomAttributes = customAttributeFactory.createMany(5);
    spyOn(customAttributeFactory, 'createMany').and.returnValue(stubCustomAttributes);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('list', () => {
    it('should return a list of custom attributes', () => {
      service.list().subscribe(result => {
        expect(result).toEqual(stubCustomAttributes);
      });
    });
  });
});
