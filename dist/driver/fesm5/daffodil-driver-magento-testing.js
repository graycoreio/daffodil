import { __extends, __decorate, __metadata } from 'tslib';
import { ɵɵdefineInjectable, Injectable } from '@angular/core';
import { random } from 'faker/locale/en_US';
import { DaffModelFactory } from '@daffodil/core/testing';

var MockMagentoMoney = /** @class */ (function () {
    function MockMagentoMoney() {
        this.__typename = 'Money';
        this.value = random.number({ min: 1, max: 10000 });
        this.currency = random.word();
    }
    return MockMagentoMoney;
}());
;
var MagentoMoneyFactory = /** @class */ (function (_super) {
    __extends(MagentoMoneyFactory, _super);
    function MagentoMoneyFactory() {
        return _super.call(this, MockMagentoMoney) || this;
    }
    MagentoMoneyFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function MagentoMoneyFactory_Factory() { return new MagentoMoneyFactory(); }, token: MagentoMoneyFactory, providedIn: "root" });
    MagentoMoneyFactory = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], MagentoMoneyFactory);
    return MagentoMoneyFactory;
}(DaffModelFactory));

/**
 * Generated bundle index. Do not edit.
 */

export { MagentoMoneyFactory };
//# sourceMappingURL=daffodil-driver-magento-testing.js.map
