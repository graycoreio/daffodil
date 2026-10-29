import { TestBed } from '@angular/core/testing';

import { DaffProductCustomAttribute } from '@daffodil/product';
import { DaffProductCustomAttributeFactory } from '@daffodil/product/testing';

import { DaffTestingProductCustomAttributeService } from './custom-attribute.service';

describe('@daffodil/product/driver/testing | DaffTestingProductCustomAttributeService', () => {
  let service: DaffTestingProductCustomAttributeService;
  let customAttributeFactory: DaffProductCustomAttributeFactory;
  let stubCustomAttribute: DaffProductCustomAttribute;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    service = TestBed.inject(DaffTestingProductCustomAttributeService);
    customAttributeFactory = TestBed.inject(DaffProductCustomAttributeFactory);

    stubCustomAttribute = customAttributeFactory.create();
    spyOn(customAttributeFactory, 'create').and.returnValue(stubCustomAttribute);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('search', () => {
    it('should return a custom attribute for each requested ID', done => {
      service.search([stubCustomAttribute.id, 'another']).subscribe(result => {
        expect(result).toEqual([stubCustomAttribute, stubCustomAttribute]);
        done();
      });
    });

    it('should create the custom attributes with the requested IDs', done => {
      service.search([stubCustomAttribute.id]).subscribe(() => {
        expect(customAttributeFactory.create).toHaveBeenCalledWith({ id: stubCustomAttribute.id });
        done();
      });
    });
  });
});
