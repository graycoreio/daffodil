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
var DaffInMemoryBackendProductService = /** @class */ (function () {
    function DaffInMemoryBackendProductService(productFactory, productImageFactory) {
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
     * @param url initial url
     * @param utils utility to parse url
     * @returns ParsedRequestUrl
     */
    /**
     * Automatically called as part of the InMemoryDbService to parse incoming urls to match the InMemory backend urls.
     *
     * @param {?} url initial url
     * @param {?} utils utility to parse url
     * @return {?} ParsedRequestUrl
     */
    DaffInMemoryBackendProductService.prototype.parseRequestUrl = /**
     * Automatically called as part of the InMemoryDbService to parse incoming urls to match the InMemory backend urls.
     *
     * @param {?} url initial url
     * @param {?} utils utility to parse url
     * @return {?} ParsedRequestUrl
     */
    function (url, utils) {
        return utils.parseRequestUrl(url);
    };
    /**
     * Creates a fake database of products for the product inmemory backend service.
     *
     * @returns A fake database of an array of products
     */
    /**
     * Creates a fake database of products for the product inmemory backend service.
     *
     * @return {?} A fake database of an array of products
     */
    DaffInMemoryBackendProductService.prototype.createDb = /**
     * Creates a fake database of products for the product inmemory backend service.
     *
     * @return {?} A fake database of an array of products
     */
    function () {
        return {
            products: this.products
        };
    };
    /**
     * Returns products based on the url given.
     *
     * @param reqInfo request object
     * @returns An http response object
     */
    /**
     * Returns products based on the url given.
     *
     * @param {?} reqInfo request object
     * @return {?} An http response object
     */
    DaffInMemoryBackendProductService.prototype.get = /**
     * Returns products based on the url given.
     *
     * @param {?} reqInfo request object
     * @return {?} An http response object
     */
    function (reqInfo) {
        var _this = this;
        if (reqInfo.id === 'best-sellers') {
            return reqInfo.utils.createResponse$((/**
             * @return {?}
             */
            function () {
                return {
                    body: _this.products.slice(0, 4),
                    status: STATUS.OK
                };
            }));
        }
        return undefined;
    };
    DaffInMemoryBackendProductService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffInMemoryBackendProductService.ctorParameters = function () { return [
        { type: DaffProductFactory },
        { type: DaffProductImageFactory }
    ]; };
    /** @nocollapse */ DaffInMemoryBackendProductService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryBackendProductService_Factory() { return new DaffInMemoryBackendProductService(i0.ɵɵinject(i1.DaffProductFactory), i0.ɵɵinject(i2.DaffProductImageFactory)); }, token: DaffInMemoryBackendProductService, providedIn: "root" });
    return DaffInMemoryBackendProductService;
}());
export { DaffInMemoryBackendProductService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL3Byb2R1Y3QvdGVzdGluZy8iLCJzb3VyY2VzIjpbImlubWVtb3J5LWJhY2tlbmQvcHJvZHVjdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFJTCxNQUFNLEVBQ1AsTUFBTSwyQkFBMkIsQ0FBQztBQUduQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQzs7Ozs7Ozs7Ozs7QUFTN0U7SUFNRSwyQ0FDVSxjQUFrQyxFQUNsQyxtQkFBNEM7UUFENUMsbUJBQWMsR0FBZCxjQUFjLENBQW9CO1FBQ2xDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBeUI7UUFDcEQsSUFBSSxDQUFDLFFBQVEsR0FBRztZQUNkLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1NBQ3pGLENBQUE7SUFDSCxDQUFDO0lBRUQ7Ozs7OztPQU1HOzs7Ozs7OztJQUNILDJEQUFlOzs7Ozs7O0lBQWYsVUFBZ0IsR0FBVyxFQUFFLEtBQTJCO1FBQ3RELE9BQU8sS0FBSyxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQ7Ozs7T0FJRzs7Ozs7O0lBQ0gsb0RBQVE7Ozs7O0lBQVI7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQ3hCLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7O09BS0c7Ozs7Ozs7SUFDSCwrQ0FBRzs7Ozs7O0lBQUgsVUFBSSxPQUFZO1FBQWhCLGlCQVdDO1FBVkMsSUFBRyxPQUFPLENBQUMsRUFBRSxLQUFLLGNBQWMsRUFBRTtZQUNoQyxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsZUFBZTs7O1lBQUM7Z0JBQ2pDLE9BQU87b0JBQ0wsSUFBSSxFQUFFLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7b0JBQzlCLE1BQU0sRUFBRSxNQUFNLENBQUMsRUFBRTtpQkFDbEIsQ0FBQztZQUNOLENBQUMsRUFBQyxDQUFDO1NBQ0o7UUFFRCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDOztnQkF2RkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFaUSxrQkFBa0I7Z0JBQ2xCLHVCQUF1Qjs7OzRDQVhoQztDQTRHQyxBQXhGRCxJQXdGQztTQXJGWSxpQ0FBaUM7OztJQUM1QyxxREFBd0I7Ozs7O0lBR3RCLDJEQUEwQzs7Ozs7SUFDMUMsZ0VBQW9EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBJbk1lbW9yeURiU2VydmljZSxcbiAgUmVxdWVzdEluZm9VdGlsaXRpZXMsXG4gIFBhcnNlZFJlcXVlc3RVcmwsXG4gIFNUQVRVU1xufSBmcm9tICdhbmd1bGFyLWluLW1lbW9yeS13ZWItYXBpJztcblxuaW1wb3J0IHsgRGFmZlByb2R1Y3QgfSBmcm9tICdAZGFmZm9kaWwvcHJvZHVjdCc7XG5pbXBvcnQgeyBEYWZmUHJvZHVjdEZhY3RvcnkgfSBmcm9tICcuLi9mYWN0b3JpZXMvcHJvZHVjdC5mYWN0b3J5JztcbmltcG9ydCB7IERhZmZQcm9kdWN0SW1hZ2VGYWN0b3J5IH0gZnJvbSAnLi4vZmFjdG9yaWVzL3Byb2R1Y3QtaW1hZ2UuZmFjdG9yeSc7XG5cbi8qKlxuICogQW4gaW4tbWVtb3J5IHNlcnZpY2UgdGhhdCBzdHVicyBvdXQgdGhlIGJhY2tlbmQgc2VydmljZXMgZm9yIGdldHRpbmcgcHJvZHVjdHMuXG4gKiBcbiAqIEBQYXJhbSBwcm9kdWN0RmFjdG9yeTogRGFmZlByb2R1Y3RGYWN0b3J5IGluc3RhbmNlXG4gKiBAUGFyYW0gcHJvZHVjdEltYWdlRmFjdG9yeTogRGFmZlByb2R1Y3RJbWFnZUZhY3RvcnkgaW5zdGFuY2VcbiAqIEBQYXJhbSBwcm9kdWN0czogQW4gYXJyYXkgb2YgUHJvZHVjdHNcbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZkluTWVtb3J5QmFja2VuZFByb2R1Y3RTZXJ2aWNlIGltcGxlbWVudHMgSW5NZW1vcnlEYlNlcnZpY2Uge1xuICBwcm9kdWN0czogRGFmZlByb2R1Y3RbXTtcbiAgXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcHJvZHVjdEZhY3Rvcnk6IERhZmZQcm9kdWN0RmFjdG9yeSxcbiAgICBwcml2YXRlIHByb2R1Y3RJbWFnZUZhY3Rvcnk6IERhZmZQcm9kdWN0SW1hZ2VGYWN0b3J5KSB7IFxuICAgIHRoaXMucHJvZHVjdHMgPSBbXG4gICAgICB0aGlzLnByb2R1Y3RGYWN0b3J5LmNyZWF0ZSh7aWQ6ICcxMDAxJywgaW1hZ2VzOiB0aGlzLnByb2R1Y3RJbWFnZUZhY3RvcnkuY3JlYXRlTWFueSg1KX0pLFxuICAgICAgdGhpcy5wcm9kdWN0RmFjdG9yeS5jcmVhdGUoe2lkOiAnMTAwMicsIGltYWdlczogdGhpcy5wcm9kdWN0SW1hZ2VGYWN0b3J5LmNyZWF0ZU1hbnkoNSl9KSxcbiAgICAgIHRoaXMucHJvZHVjdEZhY3RvcnkuY3JlYXRlKHtpZDogJzEwMDMnLCBpbWFnZXM6IHRoaXMucHJvZHVjdEltYWdlRmFjdG9yeS5jcmVhdGVNYW55KDUpfSksXG4gICAgICB0aGlzLnByb2R1Y3RGYWN0b3J5LmNyZWF0ZSh7aWQ6ICcxMDA0JywgaW1hZ2VzOiB0aGlzLnByb2R1Y3RJbWFnZUZhY3RvcnkuY3JlYXRlTWFueSg1KX0pLFxuICAgICAgdGhpcy5wcm9kdWN0RmFjdG9yeS5jcmVhdGUoe2lkOiAnMTAwNScsIGltYWdlczogdGhpcy5wcm9kdWN0SW1hZ2VGYWN0b3J5LmNyZWF0ZU1hbnkoNSl9KSxcbiAgICAgIHRoaXMucHJvZHVjdEZhY3RvcnkuY3JlYXRlKHtpZDogJzEwMDYnLCBpbWFnZXM6IHRoaXMucHJvZHVjdEltYWdlRmFjdG9yeS5jcmVhdGVNYW55KDUpfSksXG4gICAgICB0aGlzLnByb2R1Y3RGYWN0b3J5LmNyZWF0ZSh7aWQ6ICcxMDA3JywgaW1hZ2VzOiB0aGlzLnByb2R1Y3RJbWFnZUZhY3RvcnkuY3JlYXRlTWFueSg1KX0pLFxuICAgICAgdGhpcy5wcm9kdWN0RmFjdG9yeS5jcmVhdGUoe2lkOiAnMTAwOCcsIGltYWdlczogdGhpcy5wcm9kdWN0SW1hZ2VGYWN0b3J5LmNyZWF0ZU1hbnkoNSl9KSxcbiAgICAgIHRoaXMucHJvZHVjdEZhY3RvcnkuY3JlYXRlKHtpZDogJzEwMDknLCBpbWFnZXM6IHRoaXMucHJvZHVjdEltYWdlRmFjdG9yeS5jcmVhdGVNYW55KDUpfSksXG4gICAgICB0aGlzLnByb2R1Y3RGYWN0b3J5LmNyZWF0ZSh7aWQ6ICcxMDEwJywgaW1hZ2VzOiB0aGlzLnByb2R1Y3RJbWFnZUZhY3RvcnkuY3JlYXRlTWFueSg1KX0pLFxuICAgICAgdGhpcy5wcm9kdWN0RmFjdG9yeS5jcmVhdGUoe2lkOiAnMTAxMScsIGltYWdlczogdGhpcy5wcm9kdWN0SW1hZ2VGYWN0b3J5LmNyZWF0ZU1hbnkoNSl9KSxcbiAgICAgIHRoaXMucHJvZHVjdEZhY3RvcnkuY3JlYXRlKHtpZDogJzEwMTInLCBpbWFnZXM6IHRoaXMucHJvZHVjdEltYWdlRmFjdG9yeS5jcmVhdGVNYW55KDUpfSksXG4gICAgICB0aGlzLnByb2R1Y3RGYWN0b3J5LmNyZWF0ZSh7aWQ6ICcxMDEzJywgaW1hZ2VzOiB0aGlzLnByb2R1Y3RJbWFnZUZhY3RvcnkuY3JlYXRlTWFueSg1KX0pLFxuICAgICAgdGhpcy5wcm9kdWN0RmFjdG9yeS5jcmVhdGUoe2lkOiAnMTAxNCcsIGltYWdlczogdGhpcy5wcm9kdWN0SW1hZ2VGYWN0b3J5LmNyZWF0ZU1hbnkoNSl9KSxcbiAgICAgIHRoaXMucHJvZHVjdEZhY3RvcnkuY3JlYXRlKHtpZDogJzEwMTUnLCBpbWFnZXM6IHRoaXMucHJvZHVjdEltYWdlRmFjdG9yeS5jcmVhdGVNYW55KDUpfSksXG4gICAgICB0aGlzLnByb2R1Y3RGYWN0b3J5LmNyZWF0ZSh7aWQ6ICcxMDE2JywgaW1hZ2VzOiB0aGlzLnByb2R1Y3RJbWFnZUZhY3RvcnkuY3JlYXRlTWFueSg1KX0pLFxuICAgICAgdGhpcy5wcm9kdWN0RmFjdG9yeS5jcmVhdGUoe2lkOiAnMTAxNycsIGltYWdlczogdGhpcy5wcm9kdWN0SW1hZ2VGYWN0b3J5LmNyZWF0ZU1hbnkoNSl9KSxcbiAgICAgIHRoaXMucHJvZHVjdEZhY3RvcnkuY3JlYXRlKHtpZDogJzEwMTgnLCBpbWFnZXM6IHRoaXMucHJvZHVjdEltYWdlRmFjdG9yeS5jcmVhdGVNYW55KDUpfSksXG4gICAgICB0aGlzLnByb2R1Y3RGYWN0b3J5LmNyZWF0ZSh7aWQ6ICcxMDE5JywgaW1hZ2VzOiB0aGlzLnByb2R1Y3RJbWFnZUZhY3RvcnkuY3JlYXRlTWFueSg1KX0pLFxuICAgICAgdGhpcy5wcm9kdWN0RmFjdG9yeS5jcmVhdGUoe2lkOiAnMTAyMCcsIGltYWdlczogdGhpcy5wcm9kdWN0SW1hZ2VGYWN0b3J5LmNyZWF0ZU1hbnkoNSl9KSxcbiAgICAgIHRoaXMucHJvZHVjdEZhY3RvcnkuY3JlYXRlKHtpZDogJzEwMjEnLCBpbWFnZXM6IHRoaXMucHJvZHVjdEltYWdlRmFjdG9yeS5jcmVhdGVNYW55KDUpfSksXG4gICAgICB0aGlzLnByb2R1Y3RGYWN0b3J5LmNyZWF0ZSh7aWQ6ICcxMDIyJywgaW1hZ2VzOiB0aGlzLnByb2R1Y3RJbWFnZUZhY3RvcnkuY3JlYXRlTWFueSg1KX0pLFxuICAgICAgdGhpcy5wcm9kdWN0RmFjdG9yeS5jcmVhdGUoe2lkOiAnMTAyMycsIGltYWdlczogdGhpcy5wcm9kdWN0SW1hZ2VGYWN0b3J5LmNyZWF0ZU1hbnkoNSl9KSxcbiAgICAgIHRoaXMucHJvZHVjdEZhY3RvcnkuY3JlYXRlKHtpZDogJzEwMjQnLCBpbWFnZXM6IHRoaXMucHJvZHVjdEltYWdlRmFjdG9yeS5jcmVhdGVNYW55KDUpfSksXG4gICAgICB0aGlzLnByb2R1Y3RGYWN0b3J5LmNyZWF0ZSh7aWQ6ICcxMDI1JywgaW1hZ2VzOiB0aGlzLnByb2R1Y3RJbWFnZUZhY3RvcnkuY3JlYXRlTWFueSg1KX0pLFxuICAgICAgdGhpcy5wcm9kdWN0RmFjdG9yeS5jcmVhdGUoe2lkOiAnMTAyNicsIGltYWdlczogdGhpcy5wcm9kdWN0SW1hZ2VGYWN0b3J5LmNyZWF0ZU1hbnkoNSl9KSxcbiAgICAgIHRoaXMucHJvZHVjdEZhY3RvcnkuY3JlYXRlKHtpZDogJzEwMjcnLCBpbWFnZXM6IHRoaXMucHJvZHVjdEltYWdlRmFjdG9yeS5jcmVhdGVNYW55KDUpfSksXG4gICAgICB0aGlzLnByb2R1Y3RGYWN0b3J5LmNyZWF0ZSh7aWQ6ICcxMDI4JywgaW1hZ2VzOiB0aGlzLnByb2R1Y3RJbWFnZUZhY3RvcnkuY3JlYXRlTWFueSg1KX0pLFxuICAgICAgdGhpcy5wcm9kdWN0RmFjdG9yeS5jcmVhdGUoe2lkOiAnMTAyOScsIGltYWdlczogdGhpcy5wcm9kdWN0SW1hZ2VGYWN0b3J5LmNyZWF0ZU1hbnkoNSl9KSxcbiAgICAgIHRoaXMucHJvZHVjdEZhY3RvcnkuY3JlYXRlKHtpZDogJzEwMzAnLCBpbWFnZXM6IHRoaXMucHJvZHVjdEltYWdlRmFjdG9yeS5jcmVhdGVNYW55KDUpfSksXG4gICAgICB0aGlzLnByb2R1Y3RGYWN0b3J5LmNyZWF0ZSh7aWQ6ICcxMDMxJywgaW1hZ2VzOiB0aGlzLnByb2R1Y3RJbWFnZUZhY3RvcnkuY3JlYXRlTWFueSg1KX0pLFxuICAgICAgdGhpcy5wcm9kdWN0RmFjdG9yeS5jcmVhdGUoe2lkOiAnMTAzMicsIGltYWdlczogdGhpcy5wcm9kdWN0SW1hZ2VGYWN0b3J5LmNyZWF0ZU1hbnkoNSl9KSxcbiAgICAgIHRoaXMucHJvZHVjdEZhY3RvcnkuY3JlYXRlKHtpZDogJzEwMzMnLCBpbWFnZXM6IHRoaXMucHJvZHVjdEltYWdlRmFjdG9yeS5jcmVhdGVNYW55KDUpfSksXG4gICAgICB0aGlzLnByb2R1Y3RGYWN0b3J5LmNyZWF0ZSh7aWQ6ICcxMDM0JywgaW1hZ2VzOiB0aGlzLnByb2R1Y3RJbWFnZUZhY3RvcnkuY3JlYXRlTWFueSg1KX0pLFxuICAgICAgdGhpcy5wcm9kdWN0RmFjdG9yeS5jcmVhdGUoe2lkOiAnMTAzNScsIGltYWdlczogdGhpcy5wcm9kdWN0SW1hZ2VGYWN0b3J5LmNyZWF0ZU1hbnkoNSl9KVxuICAgIF1cbiAgfVxuXG4gIC8qKlxuICAgKiBBdXRvbWF0aWNhbGx5IGNhbGxlZCBhcyBwYXJ0IG9mIHRoZSBJbk1lbW9yeURiU2VydmljZSB0byBwYXJzZSBpbmNvbWluZyB1cmxzIHRvIG1hdGNoIHRoZSBJbk1lbW9yeSBiYWNrZW5kIHVybHMuXG4gICAqIFxuICAgKiBAcGFyYW0gdXJsIGluaXRpYWwgdXJsXG4gICAqIEBwYXJhbSB1dGlscyB1dGlsaXR5IHRvIHBhcnNlIHVybFxuICAgKiBAcmV0dXJucyBQYXJzZWRSZXF1ZXN0VXJsXG4gICAqL1xuICBwYXJzZVJlcXVlc3RVcmwodXJsOiBzdHJpbmcsIHV0aWxzOiBSZXF1ZXN0SW5mb1V0aWxpdGllcyk6IFBhcnNlZFJlcXVlc3RVcmwge1xuICAgIHJldHVybiB1dGlscy5wYXJzZVJlcXVlc3RVcmwodXJsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgZmFrZSBkYXRhYmFzZSBvZiBwcm9kdWN0cyBmb3IgdGhlIHByb2R1Y3QgaW5tZW1vcnkgYmFja2VuZCBzZXJ2aWNlLlxuICAgKiBcbiAgICogQHJldHVybnMgQSBmYWtlIGRhdGFiYXNlIG9mIGFuIGFycmF5IG9mIHByb2R1Y3RzXG4gICAqL1xuICBjcmVhdGVEYigpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICBwcm9kdWN0czogdGhpcy5wcm9kdWN0c1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBwcm9kdWN0cyBiYXNlZCBvbiB0aGUgdXJsIGdpdmVuLlxuICAgKiBcbiAgICogQHBhcmFtIHJlcUluZm8gcmVxdWVzdCBvYmplY3RcbiAgICogQHJldHVybnMgQW4gaHR0cCByZXNwb25zZSBvYmplY3RcbiAgICovXG4gIGdldChyZXFJbmZvOiBhbnkpIHtcbiAgICBpZihyZXFJbmZvLmlkID09PSAnYmVzdC1zZWxsZXJzJykge1xuICAgICAgcmV0dXJuIHJlcUluZm8udXRpbHMuY3JlYXRlUmVzcG9uc2UkKCgpID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYm9keTogdGhpcy5wcm9kdWN0cy5zbGljZSgwLDQpLFxuICAgICAgICAgICAgc3RhdHVzOiBTVEFUVVMuT0tcbiAgICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxufVxuIl19