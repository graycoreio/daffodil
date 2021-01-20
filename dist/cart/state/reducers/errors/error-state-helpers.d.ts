import { DaffStateError } from '@daffodil/core/state';
import { DaffCartOperationType } from '../cart-operation-type.enum';
import { DaffCartErrors } from './cart-errors.type';
export declare const initializeErrorAdder: (errorSpace: DaffCartOperationType) => (errors: DaffCartErrors, error: DaffStateError) => {
    errors: {
        Cart: DaffStateError[];
        Item: DaffStateError[];
        "Billing Address": DaffStateError[];
        "Shipping Address": DaffStateError[];
        Payment: DaffStateError[];
        "Payment Methods": DaffStateError[];
        "Shipping Information": DaffStateError[];
        "Shipping Methods": DaffStateError[];
        Coupon: DaffStateError[];
    };
};
export declare const initializeErrorResetter: (errorSpace: DaffCartOperationType) => (errors: DaffCartErrors) => {
    errors: {
        Cart: DaffStateError[];
        Item: DaffStateError[];
        "Billing Address": DaffStateError[];
        "Shipping Address": DaffStateError[];
        Payment: DaffStateError[];
        "Payment Methods": DaffStateError[];
        "Shipping Information": DaffStateError[];
        "Shipping Methods": DaffStateError[];
        Coupon: DaffStateError[];
    };
};
