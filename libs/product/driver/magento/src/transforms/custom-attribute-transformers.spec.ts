import { TestBed } from '@angular/core/testing';

import { DaffProductCustomAttributeKind } from '@daffodil/product';

import { DaffMagentoCustomAttributeTransformer } from './custom-attribute-transformers';
import {
  MagentoAttribute,
  MagentoAttributeFrontendInputEnum,
} from '../custom-attributes/public_api';

describe('@daffodil/product/driver/magento | DaffMagentoCustomAttributeTransformer', () => {
  let service: DaffMagentoCustomAttributeTransformer;
  let stubMagentoAttribute: MagentoAttribute;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DaffMagentoCustomAttributeTransformer);

    stubMagentoAttribute = {
      code: 'brand',
      label: 'Brand',
      frontend_input: MagentoAttributeFrontendInputEnum.TEXT,
      options: [],
    };
  });

  describe('transformMagentoAttribute', () => {
    it('should set the id from the code', () => {
      expect(service.transformMagentoAttribute(stubMagentoAttribute).id).toEqual(stubMagentoAttribute.code);
    });

    it('should set the label', () => {
      expect(service.transformMagentoAttribute(stubMagentoAttribute).label).toEqual(stubMagentoAttribute.label);
    });

    describe('when the frontend_input is SELECT', () => {
      beforeEach(() => {
        stubMagentoAttribute = {
          ...stubMagentoAttribute,
          frontend_input: MagentoAttributeFrontendInputEnum.SELECT,
          options: [{ value: '1', label: 'Option 1' }],
        };
      });

      it('should set the kind to SELECT', () => {
        expect(service.transformMagentoAttribute(stubMagentoAttribute).kind).toEqual(DaffProductCustomAttributeKind.SELECT);
      });

      it('should transform the options', () => {
        const result = service.transformMagentoAttribute(stubMagentoAttribute);

        expect(result['options']).toEqual([{ id: '1', label: 'Option 1' }]);
      });
    });

    describe('when the frontend_input is MULTISELECT', () => {
      beforeEach(() => {
        stubMagentoAttribute = {
          ...stubMagentoAttribute,
          frontend_input: MagentoAttributeFrontendInputEnum.MULTISELECT,
          options: [{ value: '1', label: 'Option 1' }],
        };
      });

      it('should set the kind to SELECT', () => {
        expect(service.transformMagentoAttribute(stubMagentoAttribute).kind).toEqual(DaffProductCustomAttributeKind.SELECT);
      });

      it('should transform the options', () => {
        const result = service.transformMagentoAttribute(stubMagentoAttribute);

        expect(result['options']).toEqual([{ id: '1', label: 'Option 1' }]);
      });
    });

    describe('when the frontend_input is any other type', () => {
      beforeEach(() => {
        stubMagentoAttribute = {
          ...stubMagentoAttribute,
          frontend_input: MagentoAttributeFrontendInputEnum.TEXT,
        };
      });

      it('should set the kind to SCALAR', () => {
        expect(service.transformMagentoAttribute(stubMagentoAttribute).kind).toEqual(DaffProductCustomAttributeKind.SCALAR);
      });
    });
  });

  describe('transformManyMagentoAttributes', () => {
    it('should transform many attributes', () => {
      expect(service.transformManyMagentoAttributes([stubMagentoAttribute, stubMagentoAttribute]).length).toEqual(2);
    });
  });
});
