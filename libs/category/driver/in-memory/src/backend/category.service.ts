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
  category: DaffCategory;
  categoryPageMetadata: DaffCategoryPageMetadata;

  constructor(
    private categoryFactory: DaffCategoryFactory,
    private metadataFactory: DaffCategoryPageMetadataFactory,
    private productInMemoryBackendService: DaffInMemoryBackendProductService,
  ) {}

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
    return {};
  }

  /**
   * Get a category.
   *
   * @param reqInfo
   */
  get(reqInfo: any) {
    const allCategoryProductIds = this.generateProductIdSubset(this.productInMemoryBackendService.products);

    this.categoryPageMetadata = this.metadataFactory.create({
      id: reqInfo.id,
      page_size: this.generatePageSize(reqInfo),
      current_page: this.getCurrentPageParam(reqInfo),
      total_pages: this.getTotalPages(allCategoryProductIds, this.generatePageSize(reqInfo)),
      product_ids: this.trimProductIdsToSinglePage(allCategoryProductIds, this.getCurrentPageParam(reqInfo), this.generatePageSize(reqInfo)),
    });

    this.category = this.categoryFactory.create({
      id: reqInfo.id,
      total_products: allCategoryProductIds.length,
    });

    return reqInfo.utils.createResponse$(() => ({
      body: {
        category: this.category,
        categoryPageMetadata: this.categoryPageMetadata,
        products: this.productInMemoryBackendService.products,
      },
      status: STATUS.OK,
    }));
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
