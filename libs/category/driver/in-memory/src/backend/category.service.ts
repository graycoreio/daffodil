import { Injectable } from '@angular/core';
import {
  InMemoryDbService,
  RequestInfoUtilities,
  ParsedRequestUrl,
  STATUS,
} from 'angular-in-memory-web-api';

import {
  DaffCategory,
  DaffCategoryPageMetadata,
} from '@daffodil/category';
import {
  DaffCategoryFactory,
  DaffCategoryPageMetadataFactory,
} from '@daffodil/category/testing';
import { randomSubset } from '@daffodil/core';
import { daffUriTruncateLeadingSlash } from '@daffodil/core/routing';
import { DaffProduct } from '@daffodil/product';
import { DaffInMemoryBackendProductService } from '@daffodil/product/driver/in-memory';

/**
 * An in-memory service that mocks out the backend services for getting categories. See the angular in memory documentation for more details.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffInMemoryBackendCategoryService implements InMemoryDbService {
  protected _categories: DaffCategory[] = [];
  protected _categoryPageMetadata: DaffCategoryPageMetadata;

  /**
   * The collection of categories in the backend.
   */
  get categories(): DaffCategory[] {
    return this._categories;
  }

  /**
   * The metadata associated with the current page.
   */
  get categoryPageMetadata(): DaffCategoryPageMetadata {
    return this._categoryPageMetadata;
  }

  constructor(
    private categoryFactory: DaffCategoryFactory,
    private metadataFactory: DaffCategoryPageMetadataFactory,
    private productInMemoryBackendService: DaffInMemoryBackendProductService,
  ) {
    this._categories = [
      '2001',
      '2002',
      '2003',
      '2004',
      '2005',
      '2006',
      '2007',
      '2008',
      '2009',
      '2010',
    ].map(id => {
      const allCategoryProductIds = this.generateProductIdSubset(this.productInMemoryBackendService.products);

      return this.categoryFactory.create({ id, url: `/${id}`, product_ids: allCategoryProductIds, total_products: allCategoryProductIds.length });
    });
  }

  /**
   * @docs-private
   */
  parseRequestUrl(url: string, utils: RequestInfoUtilities): ParsedRequestUrl {
    return utils.parseRequestUrl(url);
  }

  /**
   * @docs-private
   */
  createDb(): any {
    return {
      categories: this.categories,
    };
  }

  /**
   * Get a category.
   *
   * @param reqInfo
   */
  get(reqInfo: any) {
    // this method is overloaded for both get by ID and URL so we check both
    const category = this.categories.filter(({ id, url }) => id === reqInfo.id || daffUriTruncateLeadingSlash(url) === reqInfo.id)[0];

    if (category) {
      this._categoryPageMetadata = this.metadataFactory.create({
        id: reqInfo.id,
        pageSize: this.generatePageSize(reqInfo),
        currentPage: this.getCurrentPageParam(reqInfo),
        totalPages: this.getTotalPages(category.product_ids, this.generatePageSize(reqInfo)),
        ids: this.trimProductIdsToSinglePage(category.product_ids, this.getCurrentPageParam(reqInfo), this.generatePageSize(reqInfo)),
        count: category.total_products,
      });

      return reqInfo.utils.createResponse$(() => ({
        body: {
          category,
          categoryPageMetadata: this._categoryPageMetadata,
          products: this.productInMemoryBackendService.products,
        },
        status: STATUS.OK,
      }));
    } else {
      this._categoryPageMetadata = null;
      return reqInfo.utils.createResponse$(() => ({
        body: {},
        status: STATUS.NOT_FOUND,
      }));
    }

  }

  protected getTotalPages(allIds: DaffProduct['id'][], pageSize: number) {
    return Math.ceil(allIds.length/pageSize);
  }

  protected trimProductIdsToSinglePage(allIds: any[], currentPage: number, pageSize: number) {
    const tempIds = [...allIds];
    tempIds.splice(0, (currentPage-1) * pageSize);
    tempIds.splice(pageSize, tempIds.length-pageSize);

    return tempIds;
  }

  protected generateProductIdSubset(products: DaffProduct[]): DaffProduct['id'][] {
    return randomSubset(products).map(product => product.id);
  }

  protected generatePageSize(reqInfo) {
    if(reqInfo.req.params.map && reqInfo.req.params.map.get('pageSize') && reqInfo.req.params.map.get('pageSize')[0]) {
      return parseInt(reqInfo.req.params.map.get('pageSize')[0], 10);
    }
    return 10;
  }

  protected getCurrentPageParam(reqInfo) {
    if(reqInfo.req.params.map && reqInfo.req.params.map.get('currentPage') && reqInfo.req.params.map.get('currentPage')[0]) {
      return parseInt(reqInfo.req.params.map.get('currentPage')[0], 10);
    }
    return 1;
  }
}
