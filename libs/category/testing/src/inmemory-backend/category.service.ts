import { Injectable } from '@angular/core';
import {
  InMemoryDbService,
  RequestInfoUtilities,
  ParsedRequestUrl,
  STATUS
} from 'angular-in-memory-web-api';

import { DaffCategory, DaffCategoryPageConfigurationState } from '@daffodil/category';
import { DaffInMemoryBackendProductService } from '@daffodil/product/testing';

import { DaffCategoryFactory } from '../factories/category.factory';
import { DaffCategoryPageConfigurationStateFactory } from '../factories/category-page-configuration-state.factory';
import { DaffProduct } from '@daffodil/product';

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
		const allCategoryProductIds = this.generateProductIdArray(this.productInMemoryBackendService.products);

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
	
	private getTotalPages(allIds: number[], pageSize: number) {
		return Math.floor(allIds.length / pageSize) + 1;
	}

	private trimProductIdsToSinglePage(allIds: number[], currentPage: number, pageSize: number) {
		const tempIds = [...allIds];
		tempIds.splice(0, (currentPage-1) * pageSize);
		tempIds.splice(pageSize, tempIds.length-pageSize);

		return tempIds;
	}

	private generateProductIdArray(products: DaffProduct[]) {
		const arraySize = Math.floor(Math.random() * Math.floor(products.length/2) + Math.floor(products.length/2));
		const productIdArray = [];
		for(let i=0; i<arraySize; i++) {
			const productIndex = Math.floor(Math.random() * products.length);
			productIdArray.push(
				products[productIndex].id
			);
			products.splice(productIndex, 1);
		}

		return productIdArray;
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
