import { TestBed } from '@angular/core/testing';

import { MagentoSortFields } from '@daffodil/category/driver/magento';
import { DaffCategoryDriverMagentoSortFieldsFactory } from '@daffodil/category/driver/magento/testing';

import { coerceDefaultSortOptionFirst } from './sort-default-option-first';

describe('@daffodil/category/driver/magento | transformers | coerceDefaultSortOptionFirst', () => {
  let sortFieldsFactory: DaffCategoryDriverMagentoSortFieldsFactory;
  let sortFields: MagentoSortFields;
  let defaultOption: string;
  let result: MagentoSortFields;

  beforeEach(() => {
    sortFieldsFactory = TestBed.inject(DaffCategoryDriverMagentoSortFieldsFactory);

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
