import { Injectable } from '@angular/core';
import {
  InMemoryDbService,
  RequestInfoUtilities,
  ParsedRequestUrl,
  STATUS
} from 'angular-in-memory-web-api';

import { DaffCategory, DaffCategoryPageConfigurationState } from '@daffodil/category';
import { DaffInMemoryBackendProductService } from '@daffodil/product/testing';
import { randomSubset } from '@daffodil/core';
import { DaffProduct } from '@daffodil/product';

import { DaffCategoryFactory } from '../factories/category.factory';
import { DaffCategoryPageConfigurationStateFactory } from '../factories/category-page-configuration-state.factory';

@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryBackendCategoryService implements InMemoryDbService {
  category: DaffCategory;
  categoryPageConfigurationState: DaffCategoryPageConfigurationState;

  constructor(
    private categoryFactory: DaffCategoryFactory,
    private categoryPageConfigurationFactory: DaffCategoryPageConfigurationStateFactory,
    private productInMemoryBackendService: DaffInMemoryBackendProductService
  ) {}

  parseRequestUrl(url: string, utils: RequestInfoUtilities): ParsedRequestUrl {
    return utils.parseRequestUrl(url);
  }

  createDb(): any {
    return {};
  }

  get(reqInfo: any) {
		const allCategoryProductIds = this.generateProductIdSubset(this.productInMemoryBackendService.products);

    this.categoryPageConfigurationState = this.categoryPageConfigurationFactory.create({
			id: reqInfo.id,
			page_size: this.generatePageSize(reqInfo),
			current_page: this.getCurrentPageParam(reqInfo),
			total_pages: this.getTotalPages(allCategoryProductIds, this.generatePageSize(reqInfo))
		});

		this.category = this.categoryFactory.create({
			id: reqInfo.id,
			total_products: allCategoryProductIds.length,
			page_size: this.generatePageSize(reqInfo),
			productIds: this.trimProductIdsToSinglePage(allCategoryProductIds, this.getCurrentPageParam(reqInfo), this.generatePageSize(reqInfo))
		});

    return reqInfo.utils.createResponse$(() => {
      return {
        body: {
          category: this.category,
          categoryPageConfigurationState: this.categoryPageConfigurationState,
          products: this.productInMemoryBackendService.products
        },
        status: STATUS.OK
      };
    });
	}
	
	private getTotalPages(allIds: string[], pageSize: number) {
		return allIds.length % pageSize ? Math.floor(allIds.length / pageSize) + 1: allIds.length/pageSize;
	}

	private trimProductIdsToSinglePage(allIds: string[], currentPage: number, pageSize: number) {
		const tempIds = [...allIds];
		tempIds.splice(0, (currentPage-1) * pageSize);
		tempIds.splice(pageSize, tempIds.length-pageSize);

		return tempIds;
	}

	private generateProductIdSubset(products: DaffProduct[]): string[] {
		const subsetSize = Math.floor(Math.random() * Math.floor(products.length/2) + Math.floor(products.length/2));
		return randomSubset(products, subsetSize).map(product => product.id);
	}

	private generatePageSize(reqInfo) {
		if(reqInfo.req.params.map && reqInfo.req.params.map.get('page_size') && reqInfo.req.params.map.get('page_size')[0]) {
			return parseInt(reqInfo.req.params.map.get('page_size')[0], 10);
		}
		return 10;
	}

	private getCurrentPageParam(reqInfo) {
		if(reqInfo.req.params.map && reqInfo.req.params.map.get('current_page')) {
			return parseInt(reqInfo.req.params.map.get('current_page')[0], 10);
		}
		return 1;
	}
}
