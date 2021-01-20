import { DaffOrderShipmentTracking } from '@daffodil/order';
import { DaffModelFactory } from '@daffodil/core/testing';
export declare class MockOrderShipmentTracking implements DaffOrderShipmentTracking {
    tracking_number: any;
    tracking_url: any;
    carrier: any;
    carrier_logo: any;
    title: any;
}
export declare class DaffOrderShipmentTrackingFactory extends DaffModelFactory<DaffOrderShipmentTracking> {
    constructor();
}
