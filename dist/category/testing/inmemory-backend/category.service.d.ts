import { InMemoryDbService, RequestInfoUtilities, ParsedRequestUrl } from 'angular-in-memory-web-api';
import { DaffCategory, DaffCategoryPageConfigurationState, DaffCategoryRequest } from '@daffodil/category';
import { DaffInMemoryBackendProductService } from '@daffodil/product/testing';
import { DaffCategoryFactory } from '../factories/category.factory';
import { DaffCategoryPageConfigurationStateFactory } from '../factories/category-page-configuration-state.factory';
export declare class DaffInMemoryBackendCategoryService implements InMemoryDbService {
    private categoryFactory;
    private categoryPageConfigurationFactory;
    private productInMemoryBackendService;
    category: DaffCategory;
    categoryPageConfigurationState: DaffCategoryPageConfigurationState<DaffCategoryRequest>;
    constructor(categoryFactory: DaffCategoryFactory, categoryPageConfigurationFactory: DaffCategoryPageConfigurationStateFactory, productInMemoryBackendService: DaffInMemoryBackendProductService);
    parseRequestUrl(url: string, utils: RequestInfoUtilities): ParsedRequestUrl;
    createDb(): any;
    get(reqInfo: any): any;
    private getTotalPages;
    private trimProductIdsToSinglePage;
    private generateProductIdSubset;
    private generatePageSize;
    private getCurrentPageParam;
}
