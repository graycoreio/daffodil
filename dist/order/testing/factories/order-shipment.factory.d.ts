import { DaffOrderShipment } from '@daffodil/order';
import { DaffModelFactory } from '@daffodil/core/testing';
export declare class MockOrderShipment implements DaffOrderShipment {
    tracking: any[];
    items: any[];
    carrier: any;
    carrier_title: any;
    code: any;
    method: any;
    method_description: any;
}
export declare class DaffOrderShipmentFactory extends DaffModelFactory<DaffOrderShipment> {
    constructor();
}
