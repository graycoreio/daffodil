import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';
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
import { collect } from '@daffodil/core';
import { daffUriTruncateLeadingSlash } from '@daffodil/core/routing';
import { DaffInMemorySingleRouteableBackend } from '@daffodil/driver/in-memory';
import { DaffProduct } from '@daffodil/product';
import { DaffInMemoryBackendProductService } from '@daffodil/product/driver/in-memory';

import { DAFF_CATEGORY_IN_MEMORY_COLLECTION_NAME } from '../collection-name.const';

/**
 * An in-memory service that mocks out the backend services for getting categories. See the angular in memory documentation for more details.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffInMemoryBackendCategoryService implements InMemoryDbService, DaffInMemorySingleRouteableBackend {
  readonly collectionName = DAFF_CATEGORY_IN_MEMORY_COLLECTION_NAME;

  protected _root: DaffCategory;
  protected _categories: DaffCategory[] = [];
  protected _categoryPageMetadata: DaffCategoryPageMetadata;

  get rootCategory(): DaffCategory {
    return this._root;
  }

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
    this._root = this.categoryFactory.createTree(
      3,
      this.productInMemoryBackendService.products.map(({ id }) => id),
    );
    this._categories = collect(
      this._root,
      (category) => category?.children || [],
    );
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
