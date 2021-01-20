import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffModelFactory } from '@daffodil/core/testing';
import * as i0 from "@angular/core";
export class MockMagentoMoney {
    constructor() {
        this.__typename = 'Money';
        this.value = faker.random.number({ min: 1, max: 10000 });
        this.currency = faker.random.word();
    }
}
;
let MagentoMoneyFactory = class MagentoMoneyFactory extends DaffModelFactory {
    constructor() {
        super(MockMagentoMoney);
    }
};
MagentoMoneyFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MagentoMoneyFactory_Factory() { return new MagentoMoneyFactory(); }, token: MagentoMoneyFactory, providedIn: "root" });
MagentoMoneyFactory = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [])
], MagentoMoneyFactory);
export { MagentoMoneyFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZXkuZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9kcml2ZXIvbWFnZW50by90ZXN0aW5nLyIsInNvdXJjZXMiOlsiZmFjdG9yaWVzL21vbmV5LmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxLQUFLLEtBQUssTUFBTSxvQkFBb0IsQ0FBQztBQUU1QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7QUFHMUQsTUFBTSxPQUFPLGdCQUFnQjtJQUE3QjtRQUNDLGVBQVUsR0FBRyxPQUFPLENBQUM7UUFDcEIsVUFBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztRQUNsRCxhQUFRLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0NBQUE7QUFBQSxDQUFDO0FBS0YsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBb0IsU0FBUSxnQkFBOEI7SUFDckU7UUFDRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUMxQixDQUFDO0NBQ0YsQ0FBQTs7QUFKWSxtQkFBbUI7SUFIL0IsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQzs7R0FDVyxtQkFBbUIsQ0FJL0I7U0FKWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBmYWtlciBmcm9tICdmYWtlci9sb2NhbGUvZW5fVVMnO1xuXG5pbXBvcnQgeyBEYWZmTW9kZWxGYWN0b3J5IH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvdGVzdGluZyc7XG5pbXBvcnQgeyBNYWdlbnRvTW9uZXkgfSBmcm9tICdAZGFmZm9kaWwvZHJpdmVyL21hZ2VudG8nO1xuXG5leHBvcnQgY2xhc3MgTW9ja01hZ2VudG9Nb25leSBpbXBsZW1lbnRzIE1hZ2VudG9Nb25leSB7XG5cdF9fdHlwZW5hbWUgPSAnTW9uZXknO1xuICB2YWx1ZSA9IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiAxMDAwMH0pO1xuICBjdXJyZW5jeSA9IGZha2VyLnJhbmRvbS53b3JkKCk7XG59O1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBNYWdlbnRvTW9uZXlGYWN0b3J5IGV4dGVuZHMgRGFmZk1vZGVsRmFjdG9yeTxNYWdlbnRvTW9uZXk+IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoTW9ja01hZ2VudG9Nb25leSk7XG4gIH1cbn1cbiJdfQ==