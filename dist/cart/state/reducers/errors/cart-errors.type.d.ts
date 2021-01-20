import { DaffStateError } from '@daffodil/core/state';
import { DaffCartOperationType } from '../cart-operation-type.enum';
export declare type DaffCartErrors = {
    [K in DaffCartOperationType]: DaffStateError[];
};
