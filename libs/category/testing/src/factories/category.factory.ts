import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffCategory } from '@daffodil/category';
import { randomSubset } from '@daffodil/core';
import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffProduct } from '@daffodil/product';

import { DaffCategoryBreadcrumbFactory } from './category-breadcrumb.factory';

export class MockCategory implements DaffCategory {
  id = faker.datatype.uuid();
  url = `/${faker.helpers.unique(faker.internet.domainWord)}.html`;
  canonicalUrl = faker.internet.url();
  name = faker.commerce.department();
  description = faker.commerce.productDescription();
  meta_title = faker.commerce.department();
  meta_description = faker.commerce.productDescription();
  breadcrumbs = this.breadcrumbFactory.createMany(faker.datatype.number({ min: 1, max: 5 }));
  children_count = faker.datatype.number({ min: 1, max: 10 });
  total_products = faker.datatype.number({ min: 0, max: 9999 });
  product_ids = [faker.datatype.number({ min: 1, max: 100 }).toString()];

  constructor(
    protected breadcrumbFactory: DaffCategoryBreadcrumbFactory,
  ) {}
}

/**
 * A factory for creating a {@link DaffCategory}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCategoryFactory extends DaffModelFactory<DaffCategory, typeof MockCategory>{
  constructor(
    breadcrumbFactory: DaffCategoryBreadcrumbFactory,
  ) {
    super(MockCategory, breadcrumbFactory);
  }

  createTree(depth: number, productIds: DaffProduct['id'][] = [], partial: Partial<DaffCategory> = {}): DaffCategory {
    if (depth > 0) {
      const childrenCount = faker.datatype.number({ min: 1, max: depth * 2 });

      return this.create({
        children: Array(childrenCount).fill(0).map(() =>
          this.createTree(
            depth - 1,
            randomSubset(productIds, faker.datatype.number({ min: Math.floor(productIds.length / 2), max: productIds.length })),
          ),
        ),
        children_count: childrenCount,
        product_ids: productIds,
        total_products: productIds.length,
        ...partial,
      });
    }

    return this.create(partial);
  }
}
