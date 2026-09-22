import { TestBed } from '@angular/core/testing';
import { InMemoryCache } from '@apollo/client';
import { addTypenameToDocument } from '@apollo/client/utilities';
import {
  ApolloTestingModule,
  ApolloTestingController,
  APOLLO_TESTING_CACHE,
} from 'apollo-angular/testing';

import { MAGENTO_POSSIBLE_TYPES } from '@daffodil/driver/magento';
import { DaffProductCustomAttributeKind } from '@daffodil/product';
import {
  magentoAttributesSearch,
  MAGENTO_PRODUCT_ATTRIBUTE_ENTITY_TYPE,
  MagentoAttribute,
  MagentoAttributeFrontendInputEnum,
} from '@daffodil/product/driver/magento';

import { DaffMagentoProductCustomAttributeService } from './custom-attribute.service';

describe('@daffodil/product/driver/magento | DaffMagentoProductCustomAttributeService', () => {
  let service: DaffMagentoProductCustomAttributeService;
  let controller: ApolloTestingController;
  let stubMagentoAttribute: MagentoAttribute;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule,
      ],
      providers: [
        DaffMagentoProductCustomAttributeService,
        {
          provide: APOLLO_TESTING_CACHE,
          useValue: new InMemoryCache({
            possibleTypes: MAGENTO_POSSIBLE_TYPES.possibleTypes,
          }),
        },
      ],
    });

    service = TestBed.inject(DaffMagentoProductCustomAttributeService);
    controller = TestBed.inject(ApolloTestingController);

    stubMagentoAttribute = {
      code: 'brand',
      label: 'Brand',
      frontend_input: MagentoAttributeFrontendInputEnum.TEXT,
      options: [],
    };
  });

  afterEach(() => {
    controller.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('search | searching the custom attributes by ID', () => {
    it('should return a list of DaffProductCustomAttributes', done => {
      service.search([stubMagentoAttribute.code]).subscribe(result => {
        expect(result).toEqual([{
          id: stubMagentoAttribute.code,
          kind: DaffProductCustomAttributeKind.SCALAR,
          label: stubMagentoAttribute.label,
        }]);
        done();
      });

      const op = controller.expectOne(addTypenameToDocument(magentoAttributesSearch()));

      op.flush({
        data: {
          customAttributeMetadataV2: {
            items: [stubMagentoAttribute],
            errors: [],
          },
        },
      });
    });

    it('should query the passed IDs as product attribute codes', done => {
      service.search([stubMagentoAttribute.code]).subscribe(() => {
        done();
      });

      const op = controller.expectOne(addTypenameToDocument(magentoAttributesSearch()));

      expect(op.operation.variables.attributes).toEqual([{
        attribute_code: stubMagentoAttribute.code,
        entity_type: MAGENTO_PRODUCT_ATTRIBUTE_ENTITY_TYPE,
      }]);

      op.flush({
        data: {
          customAttributeMetadataV2: {
            items: [stubMagentoAttribute],
            errors: [],
          },
        },
      });
    });
  });
});
