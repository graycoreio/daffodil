import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffModelFactory } from '@daffodil/core/testing';
import * as i0 from "@angular/core";
var MockMagentoMoney = /** @class */ (function () {
    function MockMagentoMoney() {
        this.__typename = 'Money';
        this.value = faker.random.number({ min: 1, max: 10000 });
        this.currency = faker.random.word();
    }
    return MockMagentoMoney;
}());
export { MockMagentoMoney };
;
var MagentoMoneyFactory = /** @class */ (function (_super) {
    tslib_1.__extends(MagentoMoneyFactory, _super);
    function MagentoMoneyFactory() {
        return _super.call(this, MockMagentoMoney) || this;
    }
    MagentoMoneyFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MagentoMoneyFactory_Factory() { return new MagentoMoneyFactory(); }, token: MagentoMoneyFactory, providedIn: "root" });
    MagentoMoneyFactory = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], MagentoMoneyFactory);
    return MagentoMoneyFactory;
}(DaffModelFactory));
export { MagentoMoneyFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZXkuZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9kcml2ZXIvbWFnZW50by90ZXN0aW5nLyIsInNvdXJjZXMiOlsiZmFjdG9yaWVzL21vbmV5LmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxLQUFLLEtBQUssTUFBTSxvQkFBb0IsQ0FBQztBQUU1QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7QUFHMUQ7SUFBQTtRQUNDLGVBQVUsR0FBRyxPQUFPLENBQUM7UUFDcEIsVUFBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztRQUNsRCxhQUFRLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBQUQsdUJBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7QUFBQSxDQUFDO0FBS0Y7SUFBeUMsK0NBQThCO0lBQ3JFO2VBQ0Usa0JBQU0sZ0JBQWdCLENBQUM7SUFDekIsQ0FBQzs7SUFIVSxtQkFBbUI7UUFIL0IsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQzs7T0FDVyxtQkFBbUIsQ0FJL0I7OEJBbkJEO0NBbUJDLEFBSkQsQ0FBeUMsZ0JBQWdCLEdBSXhEO1NBSlksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgZmFrZXIgZnJvbSAnZmFrZXIvbG9jYWxlL2VuX1VTJztcblxuaW1wb3J0IHsgRGFmZk1vZGVsRmFjdG9yeSB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL3Rlc3RpbmcnO1xuaW1wb3J0IHsgTWFnZW50b01vbmV5IH0gZnJvbSAnQGRhZmZvZGlsL2RyaXZlci9tYWdlbnRvJztcblxuZXhwb3J0IGNsYXNzIE1vY2tNYWdlbnRvTW9uZXkgaW1wbGVtZW50cyBNYWdlbnRvTW9uZXkge1xuXHRfX3R5cGVuYW1lID0gJ01vbmV5JztcbiAgdmFsdWUgPSBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDEsIG1heDogMTAwMDB9KTtcbiAgY3VycmVuY3kgPSBmYWtlci5yYW5kb20ud29yZCgpO1xufTtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTWFnZW50b01vbmV5RmFjdG9yeSBleHRlbmRzIERhZmZNb2RlbEZhY3Rvcnk8TWFnZW50b01vbmV5PiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKE1vY2tNYWdlbnRvTW9uZXkpO1xuICB9XG59XG4iXX0=