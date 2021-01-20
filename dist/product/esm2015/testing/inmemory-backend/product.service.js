/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { STATUS } from 'angular-in-memory-web-api';
import { DaffProductFactory } from '../factories/product.factory';
import { DaffProductImageFactory } from '../factories/product-image.factory';
import * as i0 from "@angular/core";
import * as i1 from "../factories/product.factory";
import * as i2 from "../factories/product-image.factory";
/**
 * An in-memory service that stubs out the backend services for getting products.
 *
 * \@Param productFactory: DaffProductFactory instance
 * \@Param productImageFactory: DaffProductImageFactory instance
 * \@Param products: An array of Products
 */
export class DaffInMemoryBackendProductService {
    /**
     * @param {?} productFactory
     * @param {?} productImageFactory
     */
    constructor(productFactory, productImageFactory) {
        this.productFactory = productFactory;
        this.productImageFactory = productImageFactory;
        this.products = [
            this.productFactory.create({ id: '1001', images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ id: '1002', images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ id: '1003', images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ id: '1004', images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ id: '1005', images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ id: '1006', images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ id: '1007', images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ id: '1008', images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ id: '1009', images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ id: '1010', images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ id: '1011', images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ id: '1012', images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ id: '1013', images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ id: '1014', images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ id: '1015', images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ id: '1016', images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ id: '1017', images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ id: '1018', images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ id: '1019', images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ id: '1020', images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ id: '1021', images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ id: '1022', images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ id: '1023', images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ id: '1024', images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ id: '1025', images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ id: '1026', images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ id: '1027', images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ id: '1028', images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ id: '1029', images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ id: '1030', images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ id: '1031', images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ id: '1032', images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ id: '1033', images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ id: '1034', images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ id: '1035', images: this.productImageFactory.createMany(5) })
        ];
    }
    /**
     * Automatically called as part of the InMemoryDbService to parse incoming urls to match the InMemory backend urls.
     *
     * @param {?} url initial url
     * @param {?} utils utility to parse url
     * @return {?} ParsedRequestUrl
     */
    parseRequestUrl(url, utils) {
        return utils.parseRequestUrl(url);
    }
    /**
     * Creates a fake database of products for the product inmemory backend service.
     *
     * @return {?} A fake database of an array of products
     */
    createDb() {
        return {
            products: this.products
        };
    }
    /**
     * Returns products based on the url given.
     *
     * @param {?} reqInfo request object
     * @return {?} An http response object
     */
    get(reqInfo) {
        if (reqInfo.id === 'best-sellers') {
            return reqInfo.utils.createResponse$((/**
             * @return {?}
             */
            () => {
                return {
                    body: this.products.slice(0, 4),
                    status: STATUS.OK
                };
            }));
        }
        return undefined;
    }
}
DaffInMemoryBackendProductService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffInMemoryBackendProductService.ctorParameters = () => [
    { type: DaffProductFactory },
    { type: DaffProductImageFactory }
];
/** @nocollapse */ DaffInMemoryBackendProductService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryBackendProductService_Factory() { return new DaffInMemoryBackendProductService(i0.ɵɵinject(i1.DaffProductFactory), i0.ɵɵinject(i2.DaffProductImageFactory)); }, token: DaffInMemoryBackendProductService, providedIn: "root" });
if (false) {
    /** @type {?} */
    DaffInMemoryBackendProductService.prototype.products;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryBackendProductService.prototype.productFactory;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryBackendProductService.prototype.productImageFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL3Byb2R1Y3QvdGVzdGluZy8iLCJzb3VyY2VzIjpbImlubWVtb3J5LWJhY2tlbmQvcHJvZHVjdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFJTCxNQUFNLEVBQ1AsTUFBTSwyQkFBMkIsQ0FBQztBQUduQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQzs7Ozs7Ozs7Ozs7QUFZN0UsTUFBTSxPQUFPLGlDQUFpQzs7Ozs7SUFHNUMsWUFDVSxjQUFrQyxFQUNsQyxtQkFBNEM7UUFENUMsbUJBQWMsR0FBZCxjQUFjLENBQW9CO1FBQ2xDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBeUI7UUFDcEQsSUFBSSxDQUFDLFFBQVEsR0FBRztZQUNkLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1NBQ3pGLENBQUE7SUFDSCxDQUFDOzs7Ozs7OztJQVNELGVBQWUsQ0FBQyxHQUFXLEVBQUUsS0FBMkI7UUFDdEQsT0FBTyxLQUFLLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7OztJQU9ELFFBQVE7UUFDTixPQUFPO1lBQ0wsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQ3hCLENBQUM7SUFDSixDQUFDOzs7Ozs7O0lBUUQsR0FBRyxDQUFDLE9BQVk7UUFDZCxJQUFHLE9BQU8sQ0FBQyxFQUFFLEtBQUssY0FBYyxFQUFFO1lBQ2hDLE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxlQUFlOzs7WUFBQyxHQUFHLEVBQUU7Z0JBQ3RDLE9BQU87b0JBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7b0JBQzlCLE1BQU0sRUFBRSxNQUFNLENBQUMsRUFBRTtpQkFDbEIsQ0FBQztZQUNOLENBQUMsRUFBQyxDQUFDO1NBQ0o7UUFFRCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDOzs7WUF2RkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBWlEsa0JBQWtCO1lBQ2xCLHVCQUF1Qjs7Ozs7SUFhOUIscURBQXdCOzs7OztJQUd0QiwyREFBMEM7Ozs7O0lBQzFDLGdFQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgSW5NZW1vcnlEYlNlcnZpY2UsXG4gIFJlcXVlc3RJbmZvVXRpbGl0aWVzLFxuICBQYXJzZWRSZXF1ZXN0VXJsLFxuICBTVEFUVVNcbn0gZnJvbSAnYW5ndWxhci1pbi1tZW1vcnktd2ViLWFwaSc7XG5cbmltcG9ydCB7IERhZmZQcm9kdWN0IH0gZnJvbSAnQGRhZmZvZGlsL3Byb2R1Y3QnO1xuaW1wb3J0IHsgRGFmZlByb2R1Y3RGYWN0b3J5IH0gZnJvbSAnLi4vZmFjdG9yaWVzL3Byb2R1Y3QuZmFjdG9yeSc7XG5pbXBvcnQgeyBEYWZmUHJvZHVjdEltYWdlRmFjdG9yeSB9IGZyb20gJy4uL2ZhY3Rvcmllcy9wcm9kdWN0LWltYWdlLmZhY3RvcnknO1xuXG4vKipcbiAqIEFuIGluLW1lbW9yeSBzZXJ2aWNlIHRoYXQgc3R1YnMgb3V0IHRoZSBiYWNrZW5kIHNlcnZpY2VzIGZvciBnZXR0aW5nIHByb2R1Y3RzLlxuICogXG4gKiBAUGFyYW0gcHJvZHVjdEZhY3Rvcnk6IERhZmZQcm9kdWN0RmFjdG9yeSBpbnN0YW5jZVxuICogQFBhcmFtIHByb2R1Y3RJbWFnZUZhY3Rvcnk6IERhZmZQcm9kdWN0SW1hZ2VGYWN0b3J5IGluc3RhbmNlXG4gKiBAUGFyYW0gcHJvZHVjdHM6IEFuIGFycmF5IG9mIFByb2R1Y3RzXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZJbk1lbW9yeUJhY2tlbmRQcm9kdWN0U2VydmljZSBpbXBsZW1lbnRzIEluTWVtb3J5RGJTZXJ2aWNlIHtcbiAgcHJvZHVjdHM6IERhZmZQcm9kdWN0W107XG4gIFxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHByb2R1Y3RGYWN0b3J5OiBEYWZmUHJvZHVjdEZhY3RvcnksXG4gICAgcHJpdmF0ZSBwcm9kdWN0SW1hZ2VGYWN0b3J5OiBEYWZmUHJvZHVjdEltYWdlRmFjdG9yeSkgeyBcbiAgICB0aGlzLnByb2R1Y3RzID0gW1xuICAgICAgdGhpcy5wcm9kdWN0RmFjdG9yeS5jcmVhdGUoe2lkOiAnMTAwMScsIGltYWdlczogdGhpcy5wcm9kdWN0SW1hZ2VGYWN0b3J5LmNyZWF0ZU1hbnkoNSl9KSxcbiAgICAgIHRoaXMucHJvZHVjdEZhY3RvcnkuY3JlYXRlKHtpZDogJzEwMDInLCBpbWFnZXM6IHRoaXMucHJvZHVjdEltYWdlRmFjdG9yeS5jcmVhdGVNYW55KDUpfSksXG4gICAgICB0aGlzLnByb2R1Y3RGYWN0b3J5LmNyZWF0ZSh7aWQ6ICcxMDAzJywgaW1hZ2VzOiB0aGlzLnByb2R1Y3RJbWFnZUZhY3RvcnkuY3JlYXRlTWFueSg1KX0pLFxuICAgICAgdGhpcy5wcm9kdWN0RmFjdG9yeS5jcmVhdGUoe2lkOiAnMTAwNCcsIGltYWdlczogdGhpcy5wcm9kdWN0SW1hZ2VGYWN0b3J5LmNyZWF0ZU1hbnkoNSl9KSxcbiAgICAgIHRoaXMucHJvZHVjdEZhY3RvcnkuY3JlYXRlKHtpZDogJzEwMDUnLCBpbWFnZXM6IHRoaXMucHJvZHVjdEltYWdlRmFjdG9yeS5jcmVhdGVNYW55KDUpfSksXG4gICAgICB0aGlzLnByb2R1Y3RGYWN0b3J5LmNyZWF0ZSh7aWQ6ICcxMDA2JywgaW1hZ2VzOiB0aGlzLnByb2R1Y3RJbWFnZUZhY3RvcnkuY3JlYXRlTWFueSg1KX0pLFxuICAgICAgdGhpcy5wcm9kdWN0RmFjdG9yeS5jcmVhdGUoe2lkOiAnMTAwNycsIGltYWdlczogdGhpcy5wcm9kdWN0SW1hZ2VGYWN0b3J5LmNyZWF0ZU1hbnkoNSl9KSxcbiAgICAgIHRoaXMucHJvZHVjdEZhY3RvcnkuY3JlYXRlKHtpZDogJzEwMDgnLCBpbWFnZXM6IHRoaXMucHJvZHVjdEltYWdlRmFjdG9yeS5jcmVhdGVNYW55KDUpfSksXG4gICAgICB0aGlzLnByb2R1Y3RGYWN0b3J5LmNyZWF0ZSh7aWQ6ICcxMDA5JywgaW1hZ2VzOiB0aGlzLnByb2R1Y3RJbWFnZUZhY3RvcnkuY3JlYXRlTWFueSg1KX0pLFxuICAgICAgdGhpcy5wcm9kdWN0RmFjdG9yeS5jcmVhdGUoe2lkOiAnMTAxMCcsIGltYWdlczogdGhpcy5wcm9kdWN0SW1hZ2VGYWN0b3J5LmNyZWF0ZU1hbnkoNSl9KSxcbiAgICAgIHRoaXMucHJvZHVjdEZhY3RvcnkuY3JlYXRlKHtpZDogJzEwMTEnLCBpbWFnZXM6IHRoaXMucHJvZHVjdEltYWdlRmFjdG9yeS5jcmVhdGVNYW55KDUpfSksXG4gICAgICB0aGlzLnByb2R1Y3RGYWN0b3J5LmNyZWF0ZSh7aWQ6ICcxMDEyJywgaW1hZ2VzOiB0aGlzLnByb2R1Y3RJbWFnZUZhY3RvcnkuY3JlYXRlTWFueSg1KX0pLFxuICAgICAgdGhpcy5wcm9kdWN0RmFjdG9yeS5jcmVhdGUoe2lkOiAnMTAxMycsIGltYWdlczogdGhpcy5wcm9kdWN0SW1hZ2VGYWN0b3J5LmNyZWF0ZU1hbnkoNSl9KSxcbiAgICAgIHRoaXMucHJvZHVjdEZhY3RvcnkuY3JlYXRlKHtpZDogJzEwMTQnLCBpbWFnZXM6IHRoaXMucHJvZHVjdEltYWdlRmFjdG9yeS5jcmVhdGVNYW55KDUpfSksXG4gICAgICB0aGlzLnByb2R1Y3RGYWN0b3J5LmNyZWF0ZSh7aWQ6ICcxMDE1JywgaW1hZ2VzOiB0aGlzLnByb2R1Y3RJbWFnZUZhY3RvcnkuY3JlYXRlTWFueSg1KX0pLFxuICAgICAgdGhpcy5wcm9kdWN0RmFjdG9yeS5jcmVhdGUoe2lkOiAnMTAxNicsIGltYWdlczogdGhpcy5wcm9kdWN0SW1hZ2VGYWN0b3J5LmNyZWF0ZU1hbnkoNSl9KSxcbiAgICAgIHRoaXMucHJvZHVjdEZhY3RvcnkuY3JlYXRlKHtpZDogJzEwMTcnLCBpbWFnZXM6IHRoaXMucHJvZHVjdEltYWdlRmFjdG9yeS5jcmVhdGVNYW55KDUpfSksXG4gICAgICB0aGlzLnByb2R1Y3RGYWN0b3J5LmNyZWF0ZSh7aWQ6ICcxMDE4JywgaW1hZ2VzOiB0aGlzLnByb2R1Y3RJbWFnZUZhY3RvcnkuY3JlYXRlTWFueSg1KX0pLFxuICAgICAgdGhpcy5wcm9kdWN0RmFjdG9yeS5jcmVhdGUoe2lkOiAnMTAxOScsIGltYWdlczogdGhpcy5wcm9kdWN0SW1hZ2VGYWN0b3J5LmNyZWF0ZU1hbnkoNSl9KSxcbiAgICAgIHRoaXMucHJvZHVjdEZhY3RvcnkuY3JlYXRlKHtpZDogJzEwMjAnLCBpbWFnZXM6IHRoaXMucHJvZHVjdEltYWdlRmFjdG9yeS5jcmVhdGVNYW55KDUpfSksXG4gICAgICB0aGlzLnByb2R1Y3RGYWN0b3J5LmNyZWF0ZSh7aWQ6ICcxMDIxJywgaW1hZ2VzOiB0aGlzLnByb2R1Y3RJbWFnZUZhY3RvcnkuY3JlYXRlTWFueSg1KX0pLFxuICAgICAgdGhpcy5wcm9kdWN0RmFjdG9yeS5jcmVhdGUoe2lkOiAnMTAyMicsIGltYWdlczogdGhpcy5wcm9kdWN0SW1hZ2VGYWN0b3J5LmNyZWF0ZU1hbnkoNSl9KSxcbiAgICAgIHRoaXMucHJvZHVjdEZhY3RvcnkuY3JlYXRlKHtpZDogJzEwMjMnLCBpbWFnZXM6IHRoaXMucHJvZHVjdEltYWdlRmFjdG9yeS5jcmVhdGVNYW55KDUpfSksXG4gICAgICB0aGlzLnByb2R1Y3RGYWN0b3J5LmNyZWF0ZSh7aWQ6ICcxMDI0JywgaW1hZ2VzOiB0aGlzLnByb2R1Y3RJbWFnZUZhY3RvcnkuY3JlYXRlTWFueSg1KX0pLFxuICAgICAgdGhpcy5wcm9kdWN0RmFjdG9yeS5jcmVhdGUoe2lkOiAnMTAyNScsIGltYWdlczogdGhpcy5wcm9kdWN0SW1hZ2VGYWN0b3J5LmNyZWF0ZU1hbnkoNSl9KSxcbiAgICAgIHRoaXMucHJvZHVjdEZhY3RvcnkuY3JlYXRlKHtpZDogJzEwMjYnLCBpbWFnZXM6IHRoaXMucHJvZHVjdEltYWdlRmFjdG9yeS5jcmVhdGVNYW55KDUpfSksXG4gICAgICB0aGlzLnByb2R1Y3RGYWN0b3J5LmNyZWF0ZSh7aWQ6ICcxMDI3JywgaW1hZ2VzOiB0aGlzLnByb2R1Y3RJbWFnZUZhY3RvcnkuY3JlYXRlTWFueSg1KX0pLFxuICAgICAgdGhpcy5wcm9kdWN0RmFjdG9yeS5jcmVhdGUoe2lkOiAnMTAyOCcsIGltYWdlczogdGhpcy5wcm9kdWN0SW1hZ2VGYWN0b3J5LmNyZWF0ZU1hbnkoNSl9KSxcbiAgICAgIHRoaXMucHJvZHVjdEZhY3RvcnkuY3JlYXRlKHtpZDogJzEwMjknLCBpbWFnZXM6IHRoaXMucHJvZHVjdEltYWdlRmFjdG9yeS5jcmVhdGVNYW55KDUpfSksXG4gICAgICB0aGlzLnByb2R1Y3RGYWN0b3J5LmNyZWF0ZSh7aWQ6ICcxMDMwJywgaW1hZ2VzOiB0aGlzLnByb2R1Y3RJbWFnZUZhY3RvcnkuY3JlYXRlTWFueSg1KX0pLFxuICAgICAgdGhpcy5wcm9kdWN0RmFjdG9yeS5jcmVhdGUoe2lkOiAnMTAzMScsIGltYWdlczogdGhpcy5wcm9kdWN0SW1hZ2VGYWN0b3J5LmNyZWF0ZU1hbnkoNSl9KSxcbiAgICAgIHRoaXMucHJvZHVjdEZhY3RvcnkuY3JlYXRlKHtpZDogJzEwMzInLCBpbWFnZXM6IHRoaXMucHJvZHVjdEltYWdlRmFjdG9yeS5jcmVhdGVNYW55KDUpfSksXG4gICAgICB0aGlzLnByb2R1Y3RGYWN0b3J5LmNyZWF0ZSh7aWQ6ICcxMDMzJywgaW1hZ2VzOiB0aGlzLnByb2R1Y3RJbWFnZUZhY3RvcnkuY3JlYXRlTWFueSg1KX0pLFxuICAgICAgdGhpcy5wcm9kdWN0RmFjdG9yeS5jcmVhdGUoe2lkOiAnMTAzNCcsIGltYWdlczogdGhpcy5wcm9kdWN0SW1hZ2VGYWN0b3J5LmNyZWF0ZU1hbnkoNSl9KSxcbiAgICAgIHRoaXMucHJvZHVjdEZhY3RvcnkuY3JlYXRlKHtpZDogJzEwMzUnLCBpbWFnZXM6IHRoaXMucHJvZHVjdEltYWdlRmFjdG9yeS5jcmVhdGVNYW55KDUpfSlcbiAgICBdXG4gIH1cblxuICAvKipcbiAgICogQXV0b21hdGljYWxseSBjYWxsZWQgYXMgcGFydCBvZiB0aGUgSW5NZW1vcnlEYlNlcnZpY2UgdG8gcGFyc2UgaW5jb21pbmcgdXJscyB0byBtYXRjaCB0aGUgSW5NZW1vcnkgYmFja2VuZCB1cmxzLlxuICAgKiBcbiAgICogQHBhcmFtIHVybCBpbml0aWFsIHVybFxuICAgKiBAcGFyYW0gdXRpbHMgdXRpbGl0eSB0byBwYXJzZSB1cmxcbiAgICogQHJldHVybnMgUGFyc2VkUmVxdWVzdFVybFxuICAgKi9cbiAgcGFyc2VSZXF1ZXN0VXJsKHVybDogc3RyaW5nLCB1dGlsczogUmVxdWVzdEluZm9VdGlsaXRpZXMpOiBQYXJzZWRSZXF1ZXN0VXJsIHtcbiAgICByZXR1cm4gdXRpbHMucGFyc2VSZXF1ZXN0VXJsKHVybCk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGZha2UgZGF0YWJhc2Ugb2YgcHJvZHVjdHMgZm9yIHRoZSBwcm9kdWN0IGlubWVtb3J5IGJhY2tlbmQgc2VydmljZS5cbiAgICogXG4gICAqIEByZXR1cm5zIEEgZmFrZSBkYXRhYmFzZSBvZiBhbiBhcnJheSBvZiBwcm9kdWN0c1xuICAgKi9cbiAgY3JlYXRlRGIoKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgcHJvZHVjdHM6IHRoaXMucHJvZHVjdHNcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgcHJvZHVjdHMgYmFzZWQgb24gdGhlIHVybCBnaXZlbi5cbiAgICogXG4gICAqIEBwYXJhbSByZXFJbmZvIHJlcXVlc3Qgb2JqZWN0XG4gICAqIEByZXR1cm5zIEFuIGh0dHAgcmVzcG9uc2Ugb2JqZWN0XG4gICAqL1xuICBnZXQocmVxSW5mbzogYW55KSB7XG4gICAgaWYocmVxSW5mby5pZCA9PT0gJ2Jlc3Qtc2VsbGVycycpIHtcbiAgICAgIHJldHVybiByZXFJbmZvLnV0aWxzLmNyZWF0ZVJlc3BvbnNlJCgoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGJvZHk6IHRoaXMucHJvZHVjdHMuc2xpY2UoMCw0KSxcbiAgICAgICAgICAgIHN0YXR1czogU1RBVFVTLk9LXG4gICAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cbiJdfQ==