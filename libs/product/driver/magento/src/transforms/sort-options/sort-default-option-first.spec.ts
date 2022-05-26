import { TestBed } from '@angular/core/testing';

import { MagentoProductSortFields } from '@daffodil/product/driver/magento';
import { MagentoProductSortFieldsFactory } from '@daffodil/product/driver/magento/testing';

import { coerceDefaultSortOptionFirst } from './sort-default-option-first';

describe('@daffodil/product/driver/magento | coerceDefaultSortOptionFirst', () => {
  let sortFieldsFactory: MagentoProductSortFieldsFactory;
  let sortFields: MagentoProductSortFields;
  let defaultOption: string;
  let result: MagentoProductSortFields;

  beforeEach(() => {
    sortFieldsFactory = TestBed.inject(MagentoProductSortFieldsFactory);

    defaultOption = 'defaultOption';
    sortFields = sortFieldsFactory.create({
      default: defaultOption,
      options: [
        {
          label: '1',
          value: '1',
        },
        {
          label: defaultOption,
          value: defaultOption,
        },
      ],
    });

    result = coerceDefaultSortOptionFirst(sortFields);
  });

  it('should move the default option to the front of the options list', () => {
    expect(result.options[0].value).toEqual(defaultOption);
  });
});
