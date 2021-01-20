import { __decorate, __metadata } from 'tslib';
import { ɵɵdefineInjectable, Injectable } from '@angular/core';
import { random } from 'faker/locale/en_US';
import { DaffModelFactory } from '@daffodil/core/testing';

class MockMagentoMoney {
    constructor() {
        this.__typename = 'Money';
        this.value = random.number({ min: 1, max: 10000 });
        this.currency = random.word();
    }
}
;
let MagentoMoneyFactory = class MagentoMoneyFactory extends DaffModelFactory {
    constructor() {
        super(MockMagentoMoney);
    }
};
MagentoMoneyFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function MagentoMoneyFactory_Factory() { return new MagentoMoneyFactory(); }, token: MagentoMoneyFactory, providedIn: "root" });
MagentoMoneyFactory = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [])
], MagentoMoneyFactory);

/**
 * Generated bundle index. Do not edit.
 */

export { MagentoMoneyFactory };
//# sourceMappingURL=daffodil-driver-magento-testing.js.map
