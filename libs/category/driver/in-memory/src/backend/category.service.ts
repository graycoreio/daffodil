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
import { DaffProduct } from '@daffodil/product';
import { DaffInMemoryBackendProductService } from '@daffodil/product/driver/in-memory';

/**
 * An in-memory service that mocks out the backend services for getting categories. See the angular in memory documentation for more details.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffInMemoryBackendCategoryService implements InMemoryDbService {
  private _categories: DaffCategory[] = [];
  private _categoryPageMetadata: DaffCategoryPageMetadata;

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
      '1001',
      '1002',
      '1003',
      '1004',
      '1005',
      '1006',
      '1007',
      '1008',
      '1009',
      '1010',
    ].map(id => {
      const allCategoryProductIds = this.generateProductIdSubset(this.productInMemoryBackendService.products);

      return this.categoryFactory.create({ id, url: id, product_ids: allCategoryProductIds, total_products: allCategoryProductIds.length });
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
    const category = this.categories.filter(({ id }) => id === reqInfo.id)[0];

    if (category) {
      this._categoryPageMetadata = this.metadataFactory.create({
        id: reqInfo.id,
        page_size: this.generatePageSize(reqInfo),
        current_page: this.getCurrentPageParam(reqInfo),
        total_pages: this.getTotalPages(category.product_ids, this.generatePageSize(reqInfo)),
        product_ids: this.trimProductIdsToSinglePage(category.product_ids, this.getCurrentPageParam(reqInfo), this.generatePageSize(reqInfo)),
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

  private getTotalPages(allIds: DaffProduct['id'][], pageSize: number) {
    return Math.ceil(allIds.length/pageSize);
  }

  private trimProductIdsToSinglePage(allIds: any[], currentPage: number, pageSize: number) {
    const tempIds = [...allIds];
    tempIds.splice(0, (currentPage-1) * pageSize);
    tempIds.splice(pageSize, tempIds.length-pageSize);

    return tempIds;
  }

  private generateProductIdSubset(products: DaffProduct[]): DaffProduct['id'][] {
    return randomSubset(products).map(product => product.id);
  }

  private generatePageSize(reqInfo) {
    if(reqInfo.req.params.map && reqInfo.req.params.map.get('page_size') && reqInfo.req.params.map.get('page_size')[0]) {
      return parseInt(reqInfo.req.params.map.get('page_size')[0], 10);
    }
    return 10;
  }

  private getCurrentPageParam(reqInfo) {
    if(reqInfo.req.params.map && reqInfo.req.params.map.get('current_page') && reqInfo.req.params.map.get('current_page')[0]) {
      return parseInt(reqInfo.req.params.map.get('current_page')[0], 10);
    }
    return 1;
  }
}
